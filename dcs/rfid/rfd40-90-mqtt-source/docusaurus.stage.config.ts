// Stage build only: the MQTT API section of the handheld reader docs, published at
// https://zebra-stage.github.io/dcs/rfid/rfd40-90-mqtt/ in zebra-stage/zebra-stage.github.io.
// Wraps the site config and keeps only what that section needs.
import type {Config} from '@docusaurus/types';
import createConfig from './docusaurus.config';
import remarkUnlinkOutOfScope from './stage/remark-unlink.mjs';

const STAGE_URL = 'https://zebra-stage.github.io';
const STAGE_BASE = '/dcs/rfid/rfd40-90-mqtt/';
const MQTT = '/api-reference/mqtt';

const inScope = (to?: string) => typeof to === 'string' && (to === MQTT || to.startsWith(`${MQTT}/`));

export default async function createStageConfig(): Promise<Config> {
  const config: any = await createConfig();
  config.url = STAGE_URL;
  config.baseUrl = STAGE_BASE;

  // Only the MQTT docs instance: no search, no REST reference, no Scalar endpoint pages.
  config.plugins = config.plugins.filter((plugin: any) => {
    if (plugin === '@docsearch/docusaurus-adapter') return false;
    if (Array.isArray(plugin) && (plugin[1]?.id === 'fxr' || plugin[1]?.specPath)) return false;
    return true;
  });
  const mqtt = config.plugins.find((plugin: any) => Array.isArray(plugin) && plugin[1]?.id === 'api-mqtt');
  if (!mqtt) throw new Error('stage config: the api-mqtt docs instance is missing');
  mqtt[1].remarkPlugins = [
    ...mqtt[1].remarkPlugins.map((rp: any) =>
      Array.isArray(rp) && rp[1]?.linkPath ? [rp[0], {...rp[1], linkPath: `${STAGE_BASE}d2`}] : rp,
    ),
    remarkUnlinkOutOfScope,
  ];

  // No Guides/Resources docs instance, and of the custom pages only the 404 page.
  const preset = config.presets[0][1];
  preset.docs = false;
  preset.pages = {
    exclude: [
      '**/_*.{js,jsx,ts,tsx,md,mdx}',
      '**/_*/**',
      '**/*.test.{js,jsx,ts,tsx}',
      '**/__tests__/**',
      'index.tsx',
      'report-broken-link.tsx',
    ],
  };

  // Navbar: the brand and the MQTT API link. Footer: only links that stay inside the section.
  const theme = config.themeConfig;
  delete theme.docsearch;
  theme.navbar.logo = {...theme.navbar.logo, href: `${MQTT}/`};
  theme.navbar.items = [{to: `${MQTT}/`, label: 'MQTT API', position: 'left', activeBasePath: MQTT.slice(1)}];
  theme.footer.links = theme.footer.links
    .map((column: any) => ({...column, items: column.items.filter((item: any) => item.href || inScope(item.to))}))
    .filter((column: any) => column.items.length > 0);

  return config;
}
