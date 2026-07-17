(function() {
'use strict';

var CATEGORY_LABELS = {
  login: 'Login',
  system: 'System',
  network: 'Network',
  control: 'Control Commands',
  region: 'Region',
  gpio: 'GPIO',
  'app-led': 'App LED',
  logs: 'Logs',
  'date-time': 'Date & Time',
  certificate: 'Certificates',
  firmware: 'Firmware',
  userapp: 'User Apps',
  impinjgen2x: 'Impinj Gen2X',
  ble: 'Bluetooth LE'
};

var displayNameConfig = {
  commandSchemas: {},
  overrides: {},
  aliases: {}
};

function loadDisplayNameConfig(commandSchemas, tagConfig) {
  var display = {};
  (commandSchemas.tags || []).forEach(function (tag) {
    if (tag.name && tag['x-displayName']) display[tag.name] = tag['x-displayName'];
  });
  displayNameConfig.commandSchemas = display;
  displayNameConfig.overrides = tagConfig.display_name_overrides || {};
  displayNameConfig.aliases = tagConfig.display_name_aliases || {};
}

function fallbackOperationSummary(opName) {
  return String(opName || '')
    .replace(/-/g, '_')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, function (c) { return c.toUpperCase(); });
}

function resolveOperationSummary(opName, fallback) {
  if (displayNameConfig.overrides[opName]) return displayNameConfig.overrides[opName];
  var tagName = displayNameConfig.aliases[opName] || opName;
  if (displayNameConfig.commandSchemas[tagName]) return displayNameConfig.commandSchemas[tagName];
  var lower = tagName.toLowerCase();
  var keys = Object.keys(displayNameConfig.commandSchemas);
  for (var i = 0; i < keys.length; i++) {
    if (keys[i].toLowerCase() === lower) return displayNameConfig.commandSchemas[keys[i]];
  }
  return fallback || fallbackOperationSummary(opName);
}

function applyOperationSummaries(spec) {
  var paths = spec.paths || {};
  Object.keys(paths).forEach(function (path) {
    Object.keys(paths[path]).forEach(function (method) {
      var op = paths[path][method];
      if (!op || typeof op !== 'object') return;
      var opName = String(path || '').replace(/^\//, '');
      op.summary = resolveOperationSummary(opName, op.summary);
    });
  });
}

function formatCategoryLabel(tag) {
  if (!tag) return '';
  if (CATEGORY_LABELS[tag]) return CATEGORY_LABELS[tag];
  return tag.split('-').map(function (w) {
    return w.charAt(0).toUpperCase() + w.slice(1);
  }).join(' ');
}

function formatExampleLabel(key) {
  if (!key) return 'Example';
  if (/^example\s*\d+$/i.test(key)) return 'Example ' + (key.match(/\d+/) || [''])[0];
  if (/^Example\s*\d+$/i.test(key)) return key;
  return key.replace(/_/g, ' ').replace(/\b\w/g, function (c) { return c.toUpperCase(); });
}

function md(text, options) {
   if (!text) return '';
   options = options || {};
   var codeBlocks = [];
   var tokenPrefix = '@@CODE_BLOCK_';
   var normalized = text.replace(/\r\n?/g, '\n').replace(/```([a-zA-Z0-9_-]+)?\n([\s\S]*?)```/g, function (_, lang, code) {
     var language = (lang || '').toLowerCase();
     var cls = language ? ' class="language-' + language + '"' : '';
     var token = tokenPrefix + codeBlocks.length + '@@';
     codeBlocks.push('<pre' + cls + '><code' + cls + '>' + escHtml(code.trim()) + '</code></pre>');
     return token;
   });
   return normalized.split(/\n{2,}/).map(function (block) {
     var trimmed = block.trim();
     if (!trimmed) return '';
     if (trimmed.indexOf(tokenPrefix) === 0) return codeBlocks[parseInt(trimmed.slice(tokenPrefix.length), 10)] || trimmed;
     return renderMarkdownBlock(trimmed, options);
   }).join('');
}
 
function escHtml(s) {
   return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
 
function normalizeMarkdownHref(href) {
   if (!href) return href;
   var trimmed = href.trim();
   if (/^(https?:|mailto:|tel:)/i.test(trimmed)) return trimmed;
   if (trimmed.charAt(0) === '#') return trimmed;
 
   // Convert local markdown references (for example alert_short.md) to in-page operation anchors.
   var mdMatch = trimmed.match(/(^|\/)([^\/]+)\.md$/i);
   if (mdMatch && mdMatch[2]) {
     return '#op-' + slugify(mdMatch[2]);
   }
 
   return trimmed;
}
 
function formatInline(text) {
   if (!text) return '';
   return text
     .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
     .replace(/`([^`]+)`/g, '<code>$1</code>')
     .replace(/\[([^\]]+)\]\(([^)]+)\)/g, function(_, text, href) {
       var normalizedHref = normalizeMarkdownHref(href);
       var isExternal = !/^#/.test(normalizedHref);
       var attrs = isExternal ? ' target="_blank" rel="noopener"' : '';
       var linkClass = 'md-link ' + (isExternal ? 'md-link-external' : 'md-link-internal');
       return '<a class="' + linkClass + '" href="' + escHtml(normalizedHref) + '"' + attrs + '>' + escHtml(text) + '</a>';
     });
}
 
function stripMarkdown(text) {
   if (!text) return '';
   return text
     .replace(/\*\*(.+?)\*\*/g, '$1')
     .replace(/`([^`]+)`/g, '$1')
     .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
     .replace(/^#{1,6}\s+/gm, '')
     .replace(/^>\s?/gm, '')
     .replace(/^[-*]\s+/gm, '• ')
     .replace(/^\d+\.\s+/gm, '')
     .trim();
}
 
function renderMarkdownBlock(block, options) {
   var lines = block.split('\n');
   if (isMarkdownTable(lines)) return renderMarkdownTable(lines);
   if (lines.every(function (line) { return /^>\s?/.test(line); })) {
     var quote = lines.map(function (line) { return line.replace(/^>\s?/, ''); }).join('<br>');
     return '<blockquote><p>' + formatInline(quote) + '</p></blockquote>';
   }
   var headingMatch = block.match(/^(#{1,6})\s+(.+)$/);
   if (headingMatch && lines.length === 1) return renderHeading(headingMatch[1].length, headingMatch[2], options);
   var parts = [];
   var index = 0;
   while (index < lines.length) {
     var currentLine = lines[index].trim();
     if (!currentLine) {
       index++;
       continue;
     }
     if (/^\d+\.\s+/.test(currentLine)) {
       var orderedItems = [];
       while (index < lines.length && /^\d+\.\s+/.test(lines[index].trim())) {
         orderedItems.push(lines[index].trim().replace(/^\d+\.\s+/, ''));
         index++;
       }
       parts.push('<ol class="md-ol">' + orderedItems.map(function (item) {
         return '<li>' + formatInline(item) + '</li>';
       }).join('') + '</ol>');
       continue;
     }
     if (/^[-*]\s+/.test(currentLine)) {
       var unorderedItems = [];
       while (index < lines.length && /^[-*]\s+/.test(lines[index].trim())) {
         unorderedItems.push(lines[index].trim().replace(/^[-*]\s+/, ''));
         index++;
       }
       parts.push('<ul class="md-ul">' + unorderedItems.map(function (item) {
         return '<li>' + formatInline(item) + '</li>';
       }).join('') + '</ul>');
       continue;
     }
     var paragraphLines = [currentLine];
     index++;
     while (index < lines.length) {
       var nextLine = lines[index].trim();
       if (!nextLine || /^[-*]\s+/.test(nextLine) || /^\d+\.\s+/.test(nextLine)) break;
       paragraphLines.push(nextLine);
       index++;
     }
     parts.push('<p>' + formatInline(paragraphLines.join('<br>')) + '</p>');
   }
   return parts.join('');
}
 
function renderHeading(level, text, options) {
   var headingMap = options.headingMap || {};
   var targetLevel = headingMap[level] || level;
   targetLevel = Math.max(1, Math.min(6, targetLevel));
   var idAttr = '';
   if (options.idPrefix) idAttr = ' id="' + options.idPrefix + '-' + slugify(text) + '"';
   var displayText = text.replace(/^\d+\.\s+/, '');
   return '<h' + targetLevel + ' class="md-h' + level + '"' + idAttr + '>' + formatInline(displayText) + '</h' + targetLevel + '>';
}
 
function isMarkdownTable(lines) {
   return lines.length >= 2 && /^\|.+\|$/.test(lines[0].trim()) && /^\|(?:\s*:?-{3,}:?\s*\|)+$/.test(lines[1].trim());
}
 
function splitMarkdownTableRow(line) {
   var row = line.trim().replace(/^\|/, '').replace(/\|$/, '');
   var cells = [];
   var current = '';
   var inCode = false;
   var escaped = false;
   for (var i = 0; i < row.length; i++) {
     var ch = row[i];
     if (escaped) {
       current += ch;
       escaped = false;
       continue;
     }
     if (ch === '\\') {
       escaped = true;
       continue;
     }
     if (ch === '`') {
       inCode = !inCode;
       current += ch;
       continue;
     }
     if (ch === '|' && !inCode) {
       cells.push(current.trim());
       current = '';
       continue;
     }
     current += ch;
   }
   cells.push(current.trim());
   return cells;
}
 
function renderMarkdownTable(lines) {
   var headers = splitMarkdownTableRow(lines[0]);
   var bodyRows = lines.slice(2).filter(function (line) { return !!line.trim(); }).map(splitMarkdownTableRow);
   var thead = '<thead><tr>' + headers.map(function (cell) { return '<th>' + formatInline(cell) + '</th>'; }).join('') + '</tr></thead>';
   var tbody = '<tbody>' + bodyRows.map(function (row) {
     return '<tr>' + headers.map(function (_, index) { return '<td>' + formatInline(row[index] || '') + '</td>'; }).join('') + '</tr>';
   }).join('') + '</tbody>';
   return '<div class="table-wrap"><table class="md-table">' + thead + tbody + '</table></div>';
}
 
var schemaNodeUid = 0;
var schemaTableUid = 0;
 
function getSchemaType(schema) {
   if (!schema) return 'object';
   if (schema.enum) return 'enum';
   if (schema.type) return schema.type;
   if (schema.properties) return 'object';
   if (schema.items) return 'array';
   if (schema.oneOf) return 'oneOf';
   if (schema.anyOf) return 'anyOf';
   if (schema.allOf) return 'allOf';
   return 'object';
}
 
function getSchemaDescription(schema) {
   if (!schema) return '';
   var fallbackDescription = '';
   if (!schema.description) {
     if (schema.type === 'array' && schema.items) {
       if (typeof schema.items.description === 'string' && schema.items.description.trim()) {
         fallbackDescription = 'Array items: ' + schema.items.description.trim();
       } else if (schema.items.title) {
         fallbackDescription = 'Array of ' + String(schema.items.title);
       } else if (schema.items.type) {
         fallbackDescription = 'Array of ' + String(schema.items.type);
       }
     } else if (schema.type === 'object' && schema.title) {
       fallbackDescription = String(schema.title);
     }
   }
   var parts = [];
   if (schema.description) parts.push(schema.description);
   else if (fallbackDescription) parts.push(fallbackDescription);
   if (schema.format) parts.push('Format: ' + schema.format);
   if (schema.pattern) parts.push('Pattern: ' + schema.pattern);
   if (schema.minLength !== undefined) parts.push('Min length: ' + schema.minLength);
   if (schema.maxLength !== undefined) parts.push('Max length: ' + schema.maxLength);
   if (schema.minimum !== undefined) parts.push('Min: ' + schema.minimum);
   if (schema.maximum !== undefined) parts.push('Max: ' + schema.maximum);
   if (schema.default !== undefined) parts.push('Default: ' + JSON.stringify(schema.default));
   if (schema.nullable) parts.push('Nullable');
   return parts.join(' | ');
}
 
function getSchemaDescriptionHtml(schema) {
   if (!schema) return '';
   var descriptionText = '';
   if (typeof schema.description === 'string' && schema.description.trim()) {
     descriptionText = schema.description;
   } else if (schema.type === 'array' && schema.items) {
     if (typeof schema.items.description === 'string' && schema.items.description.trim()) {
       descriptionText = 'Array items: ' + schema.items.description.trim();
     } else if (schema.items.title) {
       descriptionText = 'Array of ' + String(schema.items.title);
     } else if (schema.items.type) {
       descriptionText = 'Array of ' + String(schema.items.type);
     }
   } else if (schema.type === 'object' && schema.title) {
     descriptionText = String(schema.title);
   }
   var parts = [];
   if (descriptionText) {
     parts.push('<div class="schema-description">' + md(descriptionText, { headingMap: { 1: 6, 2: 6, 3: 6, 4: 6, 5: 6, 6: 6 } }) + '</div>');
   }
   var meta = [];
   if (schema.format) meta.push('<span class="schema-meta-item">Format: <strong>' + escHtml(String(schema.format)) + '</strong></span>');
   if (schema.pattern) meta.push('<span class="schema-meta-item">Pattern: <code>' + escHtml(String(schema.pattern)) + '</code></span>');
   if (schema.minLength !== undefined) meta.push('<span class="schema-meta-item">Min length: <strong>' + schema.minLength + '</strong></span>');
   if (schema.maxLength !== undefined) meta.push('<span class="schema-meta-item">Max length: <strong>' + schema.maxLength + '</strong></span>');
   if (schema.minimum !== undefined) meta.push('<span class="schema-meta-item">Min: <strong>' + schema.minimum + '</strong></span>');
   if (schema.maximum !== undefined) meta.push('<span class="schema-meta-item">Max: <strong>' + schema.maximum + '</strong></span>');
   if (schema.default !== undefined) meta.push('<span class="schema-meta-item">Default: <code>' + escHtml(JSON.stringify(schema.default)) + '</code></span>');
   if (schema.nullable) meta.push('<span class="schema-meta-item">Nullable</span>');
   if (meta.length) parts.push('<div class="schema-meta">' + meta.join('') + '</div>');
   return parts.join('');
}
 
function getSchemaEnumLine(schema) {
  if (!schema || !schema.enum) return '';
  return '<div class="schema-allowed"><span class="schema-allowed-label">Allowed:</span><br><span class="schema-allowed-values">' + schema.enum.map(function (value) {
    return '<span class="schema-enum-chip">' + escHtml(String(value)) + '</span>';
  }).join(' ') + '</span></div>';
}
 
function flattenSchema(name, schema, depth, isRequired, result) {
   if (!schema) return;
   result = result || [];
   var type = getSchemaType(schema);
   var desc = getSchemaDescription(schema);
   var enumVals = schema.enum ? 'Allowed: ' + schema.enum.join(' | ') : '';
   var indent = '  '.repeat(depth);
   var req = isRequired ? '*' : '';
   result.push([indent + name + req, type, desc + (enumVals ? (desc ? ' | ' : '') + enumVals : '')]);
   if (schema.properties) {
     var required = schema.required || [];
     Object.keys(schema.properties).forEach(function (key) {
       flattenSchema(key, schema.properties[key], depth + 1, required.indexOf(key) !== -1, result);
     });
   }
   if (schema.items) {
     if (schema.items.properties) {
       var itemRequired = schema.items.required || [];
       Object.keys(schema.items.properties).forEach(function (key) {
         flattenSchema(key, schema.items.properties[key], depth + 1, itemRequired.indexOf(key) !== -1, result);
       });
     } else {
       flattenSchema('item', schema.items, depth + 1, false, result);
     }
   }
   ['allOf', 'anyOf', 'oneOf'].forEach(function (kw) {
     if (!Array.isArray(schema[kw])) return;
     schema[kw].forEach(function (child, i) { flattenSchema(kw + ' ' + (i + 1), child, depth + 1, false, result); });
   });
   return result;
}
 
function buildSchemaNodeRows(name, schema, depth, parentUid, isRequired) {
   if (!schema) return '';
   var rows = '';
   var type = getSchemaType(schema);
   var description = getSchemaDescriptionHtml(schema);
   var enumLine = getSchemaEnumLine(schema);
   var descriptionWithEnum = description + (enumLine ? enumLine : '');
   var hasChildren = !!(
     (schema.properties && Object.keys(schema.properties).length) ||
     schema.items ||
     (schema.oneOf && schema.oneOf.length) ||
     (schema.anyOf && schema.anyOf.length) ||
     (schema.allOf && schema.allOf.length)
   );
   var nodeId = hasChildren ? 'schema-node-' + (++schemaNodeUid) : '';
   var indentClass = 'schema-indent-' + Math.min(depth, 5);
   var reqBadge = isRequired ? '<span class="schema-req">*</span>' : '';
   var rowAttrs = parentUid ? ' data-parent="' + parentUid + '" style="display:none;"' : '';
   var toggleHtml = hasChildren
     ? '<button type="button" class="schema-toggle-inline" data-target="' + nodeId + '" aria-label="Toggle nested fields">−</button>'
     : '<span class="schema-toggle-spacer"></span>';
   rows += '<tr class="schema-row"' + rowAttrs + '>' +
     '<td class="' + indentClass + '">' + toggleHtml + '<span class="schema-field">' + escHtml(name) + '</span>' + reqBadge + '</td>' +
     '<td><span class="schema-type" data-type="' + escHtml(type) + '">' + escHtml(type) + '</span></td>' +
     '<td>' + descriptionWithEnum + '</td>' +
     '</tr>';
   if (schema.properties) {
     var required = schema.required || [];
     Object.keys(schema.properties).forEach(function (key) {
       rows += buildSchemaNodeRows(key, schema.properties[key], depth + 1, nodeId, required.indexOf(key) !== -1);
     });
   }
   if (schema.items) {
     if (schema.items.properties) {
       var itemRequired = schema.items.required || [];
       Object.keys(schema.items.properties).forEach(function (key) {
         rows += buildSchemaNodeRows(key, schema.items.properties[key], depth + 1, nodeId, itemRequired.indexOf(key) !== -1);
       });
     } else {
       rows += buildSchemaNodeRows('item', schema.items, depth + 1, nodeId, false);
     }
   }
   ['allOf', 'anyOf', 'oneOf'].forEach(function (keyword) {
     if (!Array.isArray(schema[keyword])) return;
     schema[keyword].forEach(function (childSchema, index) {
       rows += buildSchemaNodeRows(keyword + ' ' + (index + 1), childSchema, depth + 1, nodeId, false);
     });
   });
   return rows;
}
 
function schemaTable(schema) {
   if (!schema) return '';
   var tableId = 'schema-table-' + (++schemaTableUid);
   var rows = '';
   if (schema.properties && Object.keys(schema.properties).length) {
     var required = schema.required || [];
     Object.keys(schema.properties).forEach(function (key) {
       rows += buildSchemaNodeRows(key, schema.properties[key], 0, null, required.indexOf(key) !== -1);
     });
   } else {
     rows = buildSchemaNodeRows('payload', schema, 0, null, false);
   }
   return '<div class="schema-toolbar">' +
     '<button type="button" class="schema-toolbar-btn" data-schema-table="' + tableId + '" data-schema-action="expand">Expand all</button>' +
     '<button type="button" class="schema-toolbar-btn" data-schema-table="' + tableId + '" data-schema-action="collapse">Collapse all</button>' +
     '</div>' +
     '<table class="schema-table" data-schema-table-id="' + tableId + '"><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody>' + rows + '</tbody></table>';
}
 
function errorTable(codes) {
   if (!codes || !codes.length) return '';
   var rows = codes.map(function (e) {
    return '<tr><td>' + e.code + '</td><td>' + escHtml(e.description || '') + '</td><td>' + escHtml(e.cause || '') + '</td><td>' + escHtml(e.recommended_action || '') + '</td></tr>';
   }).join('');
   return '<div class="payload-heading">Error Codes</div>' +
    '<table class="error-table"><thead><tr><th>Code</th><th>Description</th><th>Cause</th><th>Action</th></tr></thead><tbody>' + rows + '</tbody></table>';
}
 
/* ── Auto-generate example from schema properties ── */
function generateExampleFromSchema(schema) {
   if (!schema) return {};
   if (schema.oneOf || schema.anyOf || schema.allOf) {
     var variants = schema.oneOf || schema.anyOf || schema.allOf || [];
     var selected = variants.find(function (item) {
       return item && item.type === 'object' && item.properties;
     }) || variants.find(function (item) {
       return item && item.type === 'object';
     }) || variants[0];
     return generateExampleFromSchema(selected);
   }
   var result = {};
   if (schema.properties) {
     Object.keys(schema.properties).forEach(function (key) {
       var prop = schema.properties[key];
       if (prop.example !== undefined) {
         result[key] = prop.example;
       } else if (prop.enum && prop.enum.length) {
         result[key] = prop.enum[0];
       } else if (prop.const !== undefined) {
         result[key] = prop.const;
       } else if (prop.default !== undefined) {
         result[key] = prop.default;
       } else if (prop.oneOf || prop.anyOf || prop.allOf) {
         result[key] = generateExampleFromSchema(prop);
       } else {
         switch (prop.type) {
           case 'string':  result[key] = prop.format === 'date-time' ? '2026-01-01T00:00:00Z' : 'string'; break;
           case 'integer': result[key] = prop.minimum !== undefined ? prop.minimum : 0; break;
           case 'number':  result[key] = prop.minimum !== undefined ? prop.minimum : 0.0; break;
           case 'boolean': result[key] = false; break;
           case 'array':   result[key] = []; break;
           case 'object':  result[key] = prop.properties ? generateExampleFromSchema(prop) : {}; break;
           default:        result[key] = null;
         }
       }
     });
   }
   return result;
}
 
/* ── PDF Generator ── */
function generatePDF(op, path) {
   var jsPDF = window.jspdf.jsPDF;
   var doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
   var navy = [0, 61, 107];
   var white = [255, 255, 255];
   var lightGray = [245, 246, 248];
   var borderGray = [213, 217, 224];
   var textDark = [26, 26, 26];
   var pageW = 210;
   var pageH = 297;
   var margin = 16;
   var contentW = pageW - margin * 2;
   var y = 0;
 
   /* draws only the banner graphics — safe to call inside didDrawPage without resetting y */
   function drawHeaderBanner() {
     doc.setFillColor(navy[0], navy[1], navy[2]);
     doc.rect(0, 0, pageW, 18, 'F');
     doc.setFont('helvetica', 'bold');
     doc.setFontSize(9);
     doc.setTextColor(white[0], white[1], white[2]);
     doc.text('Zebra Fixed Reader MQTT API Reference', margin, 11);
     doc.setFont('helvetica', 'normal');
     doc.setFontSize(8);
     doc.text(op.summary || path, pageW - margin, 11, { align: 'right' });
   }
 
   function drawHeader() {
     drawHeaderBanner();
     y = 24;
   }
 
   function drawFooter() {
     doc.setFillColor(navy[0], navy[1], navy[2]);
     doc.rect(0, pageH - 12, pageW, 12, 'F');
     doc.setFont('helvetica', 'normal');
     doc.setFontSize(7);
     doc.setTextColor(white[0], white[1], white[2]);
     doc.text('Zebra Fixed Reader MQTT API Reference  |  Zebra Technologies', margin, pageH - 5);
     /* use jsPDF's built-in page number — never drift */
     doc.text('Page ' + doc.internal.getCurrentPageInfo().pageNumber, pageW - margin, pageH - 5, { align: 'right' });
   }
 
   function checkPageBreak(needed) {
     if (y + needed > pageH - 18) { drawFooter(); doc.addPage(); drawHeader(); }
   }
 
   function sectionHeading(title) {
     checkPageBreak(12);
     doc.setFont('helvetica', 'bold');
     doc.setFontSize(9);
     doc.setTextColor(navy[0], navy[1], navy[2]);
     doc.text(title, margin, y + 5.5);
     doc.setDrawColor(borderGray[0], borderGray[1], borderGray[2]);
     doc.setLineWidth(0.4);
     doc.line(margin, y + 7.5, pageW - margin, y + 7.5);
     y += 10;
   }
 
   function subHeading(title) {
     checkPageBreak(10);
     doc.setFont('helvetica', 'bold');
     doc.setFontSize(9);
     doc.setTextColor(navy[0], navy[1], navy[2]);
     doc.text(title, margin, y + 5);
     y += 8;
   }
 
   function bodyText(text) {
     if (!text) return;
     var clean = stripMarkdown(text);
     doc.setFont('helvetica', 'normal');
     doc.setFontSize(8.5);
     doc.setTextColor(textDark[0], textDark[1], textDark[2]);
     var lines = doc.splitTextToSize(clean, contentW);
     lines.forEach(function (line) { checkPageBreak(6); doc.text(line, margin, y); y += 5.5; });
     y += 2;
   }
 
   function jsonBlock(jsonObj) {
     if (!jsonObj) return;
     var jsonStr = JSON.stringify(jsonObj, null, 2);
     var lines = jsonStr.split('\n');
     var lineH = 4.5;
     var topPad = 5;
     var bottomPad = 4;
     var i = 0;
     while (i < lines.length) {
       /* how many lines fit in remaining page space (above footer) */
       var spaceLeft = (pageH - 12) - y - topPad - bottomPad;
       if (spaceLeft < lineH) {
         /* not enough room for even one line — break page */
         drawFooter(); doc.addPage(); drawHeader();
         spaceLeft = (pageH - 12) - y - topPad - bottomPad;
       }
       var count = Math.min(Math.max(1, Math.floor(spaceLeft / lineH)), lines.length - i);
       var blockH = count * lineH + topPad + bottomPad;
       doc.setFillColor(30, 41, 59);
       doc.roundedRect(margin, y, contentW, blockH, 2, 2, 'F');
       doc.setFont('courier', 'normal');
       doc.setFontSize(7);
       doc.setTextColor(249, 250, 251);
       for (var j = 0; j < count; j++) {
         doc.text(lines[i + j], margin + 3, y + topPad + j * lineH);
       }
       y += blockH + 4;
       i += count;
       if (i < lines.length) { drawFooter(); doc.addPage(); drawHeader(); }
     }
   }
 
   function schemaTablePdf(schema, title) {
     if (!schema) return;
     subHeading(title + ' Schema');
     var rows = [];
     if (schema.properties && Object.keys(schema.properties).length) {
       var required = schema.required || [];
       Object.keys(schema.properties).forEach(function (key) {
         flattenSchema(key, schema.properties[key], 0, required.indexOf(key) !== -1, rows);
       });
     } else {
       flattenSchema('payload', schema, 0, false, rows);
     }
     doc.autoTable({
       startY: y,
       head: [['Field', 'Type', 'Description']],
       body: rows,
       margin: { top: 24, left: margin, right: margin },
       styles: { fontSize: 7.5, cellPadding: 2.5, textColor: textDark, lineColor: borderGray, lineWidth: 0.3 },
       headStyles: { fillColor: navy, textColor: white, fontStyle: 'bold', fontSize: 8 },
       alternateRowStyles: { fillColor: lightGray },
       columnStyles: { 0: { cellWidth: 45, font: 'courier', fontStyle: 'bold' }, 1: { cellWidth: 25 }, 2: { cellWidth: 'auto' } },
       didDrawPage: function () { drawHeaderBanner(); drawFooter(); }
     });
     y = doc.lastAutoTable.finalY + 6;
   }
 
   function errorTablePdf(codes) {
     if (!codes || !codes.length) return;
     sectionHeading('Error Codes');
     var rows = codes.map(function (e) {
      return [String(e.code), e.description || '', e.cause || '', e.recommended_action || ''];
     });
     doc.autoTable({
       startY: y,
       head: [['Code', 'Description', 'Cause', 'Action']],
       body: rows,
       margin: { top: 24, left: margin, right: margin },
       styles: { fontSize: 7, cellPadding: 2, textColor: textDark, lineColor: borderGray, lineWidth: 0.3 },
       headStyles: { fillColor: navy, textColor: white, fontStyle: 'bold', fontSize: 7.5 },
       alternateRowStyles: { fillColor: lightGray },
       columnStyles: { 0: { cellWidth: 14 }, 1: { cellWidth: 46 }, 2: { cellWidth: 42 }, 3: { cellWidth: 'auto' } },
       didDrawPage: function () { drawHeaderBanner(); drawFooter(); }
     });
     y = doc.lastAutoTable.finalY + 6;
   }
 
   drawHeader();
   doc.setFont('helvetica', 'bold');
   doc.setFontSize(16);
   doc.setTextColor(navy[0], navy[1], navy[2]);
   doc.text(op.summary || path, margin, y);
   y += 10;
   doc.setDrawColor(borderGray[0], borderGray[1], borderGray[2]);
   doc.setLineWidth(0.5);
   doc.line(margin, y, pageW - margin, y);
   y += 6;
 
   if (op.description) {
     var descBlocks = op.description.replace(/\r\n?/g, '\n').split(/\n{2,}/);
     descBlocks.forEach(function (block) {
       var trimmed = block.trim();
       if (!trimmed) return;
       var hMatch = trimmed.match(/^(#{1,6})\s+(.+)$/);
       if (hMatch) {
         checkPageBreak(10);
         doc.setFont('helvetica', 'bold');
         doc.setFontSize(9);
         doc.setTextColor(navy[0], navy[1], navy[2]);
         doc.text(hMatch[2], margin, y);
         y += 7;
         return;
       }
       if (/^>\s?/.test(trimmed)) {
         checkPageBreak(8);
         doc.setFillColor(255, 251, 235);
         var noteText = trimmed.replace(/^>\s?\*?\*?Note:\*?\*?\s?/i, 'Note: ').replace(/^>\s?/gm, '');
         var noteLines = doc.splitTextToSize(stripMarkdown(noteText), contentW - 8);
         var noteH = noteLines.length * 5 + 6;
         doc.roundedRect(margin, y, contentW, noteH, 2, 2, 'F');
         doc.setDrawColor(245, 158, 11);
         doc.setLineWidth(1);
         doc.line(margin, y, margin, y + noteH);
         doc.setLineWidth(0.2);
         doc.setFont('helvetica', 'italic');
         doc.setFontSize(8);
         doc.setTextColor(107, 114, 128);
         noteLines.forEach(function (line, idx) { doc.text(line, margin + 5, y + 4 + idx * 5); });
         y += noteH + 4;
         return;
       }
       var lines = trimmed.split('\n');
       if (isMarkdownTable(lines)) {
         var headers = splitMarkdownTableRow(lines[0]);
         var bodyRows = lines.slice(2).filter(function (l) { return !!l.trim(); }).map(splitMarkdownTableRow);
         doc.autoTable({
           startY: y,
           head: [headers],
           body: bodyRows.map(function (row) { return headers.map(function (_, i) { return stripMarkdown(row[i] || ''); }); }),
           margin: { top: 24, left: margin, right: margin },
           styles: { fontSize: 7.5, cellPadding: 2.5, textColor: textDark, lineColor: borderGray, lineWidth: 0.3 },
           headStyles: { fillColor: navy, textColor: white, fontStyle: 'bold' },
           alternateRowStyles: { fillColor: lightGray },
           didDrawPage: function () { drawHeaderBanner(); drawFooter(); }
         });
         y = doc.lastAutoTable.finalY + 6;
         return;
       }
       if (/^[-*]\s+/.test(trimmed) || /^\d+\.\s+/.test(trimmed)) {
         lines.forEach(function (line) {
           var text = line.replace(/^[-*]\s+/, '• ').replace(/^\d+\.\s+/, '• ');
           checkPageBreak(6);
           doc.setFont('helvetica', 'normal');
           doc.setFontSize(8.5);
           doc.setTextColor(textDark[0], textDark[1], textDark[2]);
           var wrapped = doc.splitTextToSize(stripMarkdown(text), contentW - 4);
           wrapped.forEach(function (wl) { doc.text(wl, margin + 2, y); y += 5.5; });
         });
         y += 2;
         return;
       }
       bodyText(trimmed);
     });
   }
 
   if (op.requestBody && op.requestBody.content) {
     var ct = op.requestBody.content['application/json'];
     if (ct) {
       sectionHeading('MQTT Command Payload');
       var exObj = ct.examples || {};
       var exKeys = Object.keys(exObj);
       if (exKeys.length) {
         /* render every named example */
         exKeys.forEach(function (key) {
           if (exObj[key] && exObj[key].value !== undefined) {
             subHeading(exKeys.length > 1 ? 'Example: ' + key : 'Example');
             jsonBlock(exObj[key].value);
           }
         });
       } else if (ct.schema) {
         subHeading('Example');
         jsonBlock(generateExampleFromSchema(ct.schema));
       }
       if (ct.schema) schemaTablePdf(ct.schema, 'Command');
     }
   }
 
   if (op.responses) {
     var resKey = Object.keys(op.responses)[0];
     var res = op.responses[resKey];
     if (res && res.content && res.content['application/json']) {
       var rct = res.content['application/json'];
       sectionHeading('MQTT Response Payload');
       var resExObj = rct.examples || {};
       var resExKeys = Object.keys(resExObj);
       if (resExKeys.length) {
         /* render every named example */
         resExKeys.forEach(function (key) {
           if (resExObj[key] && resExObj[key].value !== undefined) {
             subHeading(resExKeys.length > 1 ? 'Example: ' + key : 'Example');
             jsonBlock(resExObj[key].value);
           }
         });
       } else if (rct.schema) {
         subHeading('Example');
         jsonBlock(generateExampleFromSchema(rct.schema));
       }
       if (rct.schema) schemaTablePdf(rct.schema, 'Response');
     }
   }
 
   if (op['x-error-codes'] && op['x-error-codes'].length) errorTablePdf(op['x-error-codes']);
   drawFooter();
   var filename = (op.summary || path).toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/(^_|_$)/g, '') + '.pdf';
   doc.save(filename);
}
 
function addCopyButtons() {
   document.querySelectorAll('pre:not([data-copy])').forEach(function (pre) {
     pre.setAttribute('data-copy', '1');
     var btn = document.createElement('button');
     btn.className = 'copy-btn';
     btn.textContent = 'Copy';
     btn.addEventListener('click', function () {
       var text = pre.textContent.replace('Copy', '').replace('Copied!', '').trim();
       navigator.clipboard.writeText(text);
       btn.textContent = 'Copied!';
       setTimeout(function () { btn.textContent = 'Copy'; }, 1500);
     });
     pre.appendChild(btn);
   });
}
 
function jsonToken(text, cls) {
  var span = document.createElement('span');
  span.className = cls;
  span.textContent = text;
  return span;
}

function jsonValuePreview(value) {
  if (value === null) return 'null';
  if (Array.isArray(value)) return '[ ... ]';
  if (typeof value === 'object') return '{ ... }';
  return JSON.stringify(value);
}

function jsonCollapsedPreview(value, isLast) {
  var text;
  if (Array.isArray(value)) {
    text = '[ ' + value.length + ' item' + (value.length === 1 ? '' : 's') + ' ]';
  } else {
    var keys = Object.keys(value || {});
    if (!keys.length) {
      text = '{ }';
    } else {
      var firstKey = keys[0];
      var firstVal = jsonValuePreview(value[firstKey]);
      text = '{ ' + JSON.stringify(firstKey) + ': ' + firstVal + (keys.length > 1 ? ', ...' : '') + ' }';
    }
  }
  if (!isLast) text += ',';
  return text;
}

function createJsonLine(options) {
  var line = document.createElement('div');
  line.className = 'jl';
  line.style.display = 'flex';
  if (options.nodeId) line.setAttribute('data-node-id', options.nodeId);
  line.setAttribute('data-parent-node', options.parentNodeId !== undefined && options.parentNodeId !== null ? options.parentNodeId : '');

  var indent = document.createElement('span');
  indent.className = 'ji';
  indent.style.width = (options.depth * 16) + 'px';
  line.appendChild(indent);

  if (options.toggleNodeId) {
    var toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'jt';
    toggle.textContent = '−';
    toggle.setAttribute('aria-label', 'Toggle JSON node');
    toggle.setAttribute('data-node-id', options.toggleNodeId);
    line.appendChild(toggle);
  } else {
    var spacer = document.createElement('span');
    spacer.className = 'jt-spacer';
    line.appendChild(spacer);
  }

  if (options.key !== undefined && options.key !== null) {
    line.appendChild(jsonToken(JSON.stringify(String(options.key)), 'jk'));
    line.appendChild(jsonToken(': ', 'jp'));
  }

  if (options.openToken) {
    line.appendChild(jsonToken(options.openToken, 'jp jopen-token'));
  }

  if (options.valueToken) {
    line.appendChild(jsonToken(options.valueToken.text, options.valueToken.cls));
  }

  if (options.trailingComma) {
    line.appendChild(jsonToken(',', 'jp'));
  }

  if (options.previewText) {
    var preview = document.createElement('span');
    preview.className = 'jpreview';
    preview.textContent = ' ' + options.previewText;
    preview.style.display = 'none';
    line.appendChild(preview);
  }

  return line;
}

function buildJsonInteractive(value) {
  var viewer = document.createElement('div');
  viewer.className = 'json-interactive';
  var nodeSeq = 0;

  function renderNode(nodeValue, depth, key, isLast, parentNodeId) {
    var isArray = Array.isArray(nodeValue);
    var isObject = nodeValue !== null && typeof nodeValue === 'object' && !isArray;
    if (!isArray && !isObject) {
      var token;
      if (nodeValue === null) token = { text: 'null', cls: 'jnull' };
      else if (typeof nodeValue === 'string') token = { text: JSON.stringify(nodeValue), cls: 'jstr' };
      else if (typeof nodeValue === 'number') token = { text: String(nodeValue), cls: 'jnum' };
      else if (typeof nodeValue === 'boolean') token = { text: nodeValue ? 'true' : 'false', cls: 'jbool' };
      else token = { text: JSON.stringify(nodeValue), cls: 'jstr' };
      viewer.appendChild(createJsonLine({
        depth: depth,
        key: key,
        valueToken: token,
        trailingComma: !isLast,
        parentNodeId: parentNodeId
      }));
      return;
    }

    var nodeId = 'jn-' + (++nodeSeq);
    var openChar = isArray ? '[' : '{';
    var closeChar = isArray ? ']' : '}';
    viewer.appendChild(createJsonLine({
      depth: depth,
      key: key,
      openToken: openChar,
      previewText: jsonCollapsedPreview(nodeValue, isLast),
      toggleNodeId: nodeId,
      nodeId: nodeId,
      parentNodeId: parentNodeId
    }));

    var entries;
    if (isArray) {
      entries = nodeValue.map(function (item, index) {
        return { key: null, value: item, isLast: index === nodeValue.length - 1 };
      });
    } else {
      var keys = Object.keys(nodeValue);
      entries = keys.map(function (entryKey, index) {
        return { key: entryKey, value: nodeValue[entryKey], isLast: index === keys.length - 1 };
      });
    }

    entries.forEach(function (entry) {
      renderNode(entry.value, depth + 1, entry.key, entry.isLast, nodeId);
    });

    viewer.appendChild(createJsonLine({
      depth: depth,
      valueToken: { text: closeChar, cls: 'jp' },
      trailingComma: !isLast,
      parentNodeId: nodeId
    }));
  }

  renderNode(value, 0, null, true, null);
  return viewer;
}

function getChildLines(root, nodeId) {
  return Array.prototype.slice.call(root.querySelectorAll('.jl[data-parent-node="' + nodeId + '"]'));
}

function getDescendantLines(root, nodeId) {
  var results = [];
  var queue = getChildLines(root, nodeId).slice();
  while (queue.length) {
    var line = queue.shift();
    results.push(line);
    var childNodeId = line.getAttribute('data-node-id');
    if (childNodeId) {
      getChildLines(root, childNodeId).forEach(function (child) { queue.push(child); });
    }
  }
  return results;
}

function expandNode(root, nodeId) {
  var opener = root.querySelector('.jl[data-node-id="' + nodeId + '"]');
  if (!opener) return;
  var button = opener.querySelector('.jt[data-node-id="' + nodeId + '"]');
  var preview = opener.querySelector('.jpreview');
  var openToken = opener.querySelector('.jopen-token');
  if (button) button.textContent = '−';
  if (preview) preview.style.display = 'none';
  if (openToken) openToken.style.display = '';
  getChildLines(root, nodeId).forEach(function (line) {
    line.style.display = 'flex';
  });
}

function collapseNode(root, nodeId) {
  var opener = root.querySelector('.jl[data-node-id="' + nodeId + '"]');
  if (!opener) return;
  var button = opener.querySelector('.jt[data-node-id="' + nodeId + '"]');
  var preview = opener.querySelector('.jpreview');
  var openToken = opener.querySelector('.jopen-token');
  if (button) button.textContent = '+';
  if (preview) preview.style.display = 'inline';
  if (openToken) openToken.style.display = 'none';
  getDescendantLines(root, nodeId).forEach(function (line) {
    line.style.display = 'none';
    var nestedNodeId = line.getAttribute('data-node-id');
    if (nestedNodeId) {
      var nestedBtn = line.querySelector('.jt[data-node-id="' + nestedNodeId + '"]');
      var nestedPreview = line.querySelector('.jpreview');
      var nestedOpenToken = line.querySelector('.jopen-token');
      if (nestedBtn) nestedBtn.textContent = '+';
      if (nestedPreview) nestedPreview.style.display = 'inline';
      if (nestedOpenToken) nestedOpenToken.style.display = 'none';
    }
  });
}

function expandAllJson(viewer) {
  if (!viewer) return;
  viewer.querySelectorAll('.jl').forEach(function (line) {
    line.style.display = 'flex';
  });
  viewer.querySelectorAll('.jt').forEach(function (btn) {
    btn.textContent = '−';
  });
  viewer.querySelectorAll('.jpreview').forEach(function (preview) {
    preview.style.display = 'none';
  });
  viewer.querySelectorAll('.jopen-token').forEach(function (token) {
    token.style.display = '';
  });
}

function collapseTopLevelJson(viewer) {
  if (!viewer) return;
  expandAllJson(viewer);
  viewer.querySelectorAll('.jl[data-node-id][data-parent-node=""]').forEach(function (line) {
    var nodeId = line.getAttribute('data-node-id');
    if (nodeId) collapseNode(viewer, nodeId);
  });
}

function expandFirstLevelJson(viewer) {
  if (!viewer) return;
  collapseTopLevelJson(viewer);
  viewer.querySelectorAll('.jl[data-parent-node=""]').forEach(function (line) {
    var nodeId = line.getAttribute('data-node-id');
    if (nodeId) expandNode(viewer, nodeId);
  });
}

function wireJsonInteractive(viewer) {
  if (!viewer) return;
  viewer.addEventListener('click', function (event) {
    var btn = event.target.closest('.jt');
    if (!btn) return;
    var nodeId = btn.getAttribute('data-node-id');
    if (!nodeId) return;
    if (btn.textContent === '−') collapseNode(viewer, nodeId);
    else expandNode(viewer, nodeId);
  });
}

function buildJsonViewerWrap(rawText) {
  var parsed = JSON.parse(rawText);
  var wrapper = document.createElement('div');
  wrapper.className = 'json-viewer-wrap';

  var toolbar = document.createElement('div');
  toolbar.className = 'jv-toolbar';

  var left = document.createElement('div');
  left.className = 'jv-toolbar-left';

  var expandBtn = document.createElement('button');
  expandBtn.type = 'button';
  expandBtn.className = 'jv-toolbar-btn';
  expandBtn.textContent = 'Expand all';

  var collapseBtn = document.createElement('button');
  collapseBtn.type = 'button';
  collapseBtn.className = 'jv-toolbar-btn';
  collapseBtn.textContent = 'Collapse all';

  left.appendChild(expandBtn);
  left.appendChild(collapseBtn);

  var label = document.createElement('div');
  label.className = 'jv-lang-label';
  label.textContent = 'JSON';

  var copyBtn = document.createElement('button');
  copyBtn.type = 'button';
  copyBtn.className = 'jv-toolbar-btn jv-copy-btn';
  copyBtn.textContent = 'Copy';

  var interactive = buildJsonInteractive(parsed);
  wireJsonInteractive(interactive);

  // Resolve the live node at click time: selecting a different example replaces
  // the interactive node (see setJsonViewerData), so a captured `interactive`
  // reference goes stale and the buttons would act on a detached node.
  expandBtn.addEventListener('click', function () {
    expandAllJson(wrapper.querySelector('.json-interactive'));
  });
  collapseBtn.addEventListener('click', function () {
    collapseTopLevelJson(wrapper.querySelector('.json-interactive'));
  });
  copyBtn.addEventListener('click', function () {
    navigator.clipboard.writeText(getJsonViewerRaw(wrapper));
    copyBtn.textContent = 'Copied!';
    setTimeout(function () { copyBtn.textContent = 'Copy'; }, 1500);
  });

  toolbar.appendChild(left);
  toolbar.appendChild(label);
  toolbar.appendChild(copyBtn);
  wrapper.appendChild(toolbar);
  wrapper.appendChild(interactive);
  wrapper.setAttribute('data-json-raw', rawText);

  expandFirstLevelJson(interactive);
  return wrapper;
}

function getJsonViewerRaw(container) {
  return container.getAttribute('data-json-raw') || '';
}

function setJsonViewerData(container, value) {
  if (!container) return;
  var raw = JSON.stringify(value, null, 2);
  var interactive = container.querySelector('.json-interactive');
  if (!interactive) return;
  var newInteractive;
  try {
    newInteractive = buildJsonInteractive(JSON.parse(raw));
  } catch (e) {
    return;
  }
  wireJsonInteractive(newInteractive);
  interactive.parentNode.replaceChild(newInteractive, interactive);
  container.setAttribute('data-json-raw', raw);
  expandFirstLevelJson(newInteractive);
}

function addCollapseToggles(root) {
  var scope = root || document;
  scope.querySelectorAll('pre:not([data-json-processed])').forEach(function (pre) {
    var code = pre.querySelector('code.language-json');
    if (!code) return;
    pre.setAttribute('data-json-processed', '1');
    var rawText = code.textContent.trim();
    try {
      var wrapper = buildJsonViewerWrap(rawText);
      pre.parentNode.replaceChild(wrapper, pre);
    } catch (e) {
      if (window.Prism) Prism.highlightElement(code);
    }
  });
}

function highlightJsonBlocks(root) {
  if (!window.Prism) return;
  var scope = root || document;
  scope.querySelectorAll('pre code.language-json').forEach(function (code) {
    Prism.highlightElement(code);
  });
}

function wireSchemaToggles() {
   document.querySelectorAll('.schema-toggle-inline').forEach(function (btn) {
     if (btn.getAttribute('data-wired')) return;
     btn.setAttribute('data-wired', '1');
     var targetId = btn.getAttribute('data-target');
     var table = btn.closest('.schema-table');
     var children = table ? table.querySelectorAll('[data-parent="' + targetId + '"]') : [];
     children.forEach(function (row) { row.style.display = ''; });
     btn.textContent = '−';
     btn.addEventListener('click', function () {
       var isExpanded = btn.textContent === '−';
       if (isExpanded) { collapseChildren(targetId, table); btn.textContent = '+'; }
       else { children.forEach(function (row) { row.style.display = ''; }); btn.textContent = '−'; }
     });
   });
}
 
function collapseChildren(parentId, root) {
   var scope = root || document;
   var children = scope.querySelectorAll('[data-parent="' + parentId + '"]');
   children.forEach(function (row) {
     row.style.display = 'none';
     var nestedToggle = row.querySelector('.schema-toggle-inline');
     if (nestedToggle) { nestedToggle.textContent = '+'; collapseChildren(nestedToggle.getAttribute('data-target'), scope); }
   });
}
 
function wireSchemaToolbars() {
   document.querySelectorAll('.schema-toolbar-btn').forEach(function (btn) {
     if (btn.getAttribute('data-wired')) return;
     btn.setAttribute('data-wired', '1');
     btn.addEventListener('click', function () {
       var tableId = btn.getAttribute('data-schema-table');
       var table = document.querySelector('[data-schema-table-id="' + tableId + '"]');
       if (!table) return;
       if (btn.getAttribute('data-schema-action') === 'expand') {
         table.querySelectorAll('.schema-row').forEach(function (row) { row.style.display = ''; });
         table.querySelectorAll('.schema-toggle-inline').forEach(function (toggle) { toggle.textContent = '−'; });
         return;
       }
       table.querySelectorAll('.schema-row[data-parent]').forEach(function (row) { row.style.display = 'none'; });
       table.querySelectorAll('.schema-toggle-inline').forEach(function (toggle) { toggle.textContent = '+'; });
     });
   });
}
 
/* ── Topbar search ── */
function wireTopbarSearch(spec) {
   var input = document.getElementById('topbar-search');
   var clearBtn = document.getElementById('topbar-search-clear');
   var dropdown = document.getElementById('topbar-search-dropdown');
   if (!input) return;
 
   var index = [];
   var paths = spec.paths || {};
   Object.keys(paths).forEach(function (path) {
     Object.keys(paths[path]).forEach(function (method) {
       var op = paths[path][method];
       var id = opIdFromPath(path);
       var tag = (op.tags || [''])[0];
       var summary = op.summary || path;
       var description = op.description || '';
       var text = [
         summary,
         path,
         description,
         tag,
         JSON.stringify(op.requestBody || ''),
         JSON.stringify(op.responses || ''),
         JSON.stringify(op['x-error-codes'] || '')
       ].join(' ').toLowerCase();
       index.push({
         id: id,
         summary: summary,
         summaryLower: summary.toLowerCase(),
         tag: tag,
         tagLower: tag.toLowerCase(),
         path: path,
         pathLower: path.toLowerCase(),
         description: description,
         descriptionLower: description.toLowerCase(),
         text: text,
         isTag: false
       });
     });
   });
 
   (spec.tags || []).forEach(function (t) {
     index.push({
       id: slugify(t.name),
       summary: t.name,
       summaryLower: t.name.toLowerCase(),
       tag: t.name,
       tagLower: t.name.toLowerCase(),
       path: '',
       pathLower: '',
       description: t.description || '',
       descriptionLower: (t.description || '').toLowerCase(),
       text: (t.name + ' ' + (t.description || '')).toLowerCase(),
       isTag: true
     });
   });
 
   function escapeRegExp(text) {
     return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
   }
 
   function normalizeQuery(q) {
     return (q || '').toLowerCase().trim();
   }
 
   function highlightText(text, q) {
     if (!text) return '';
     var safe = escHtml(text);
     if (!q) return safe;
     var terms = normalizeQuery(q).split(/\s+/).filter(Boolean).map(escapeRegExp);
     if (!terms.length) return safe;
     var pattern = new RegExp('(' + terms.join('|') + ')', 'ig');
     return safe.replace(pattern, '<mark>$1</mark>');
   }
 
   function buildSnippet(text, q) {
     if (!text) return '';
     var clean = stripMarkdown(text).replace(/\s+/g, ' ').trim();
     if (!clean) return '';
     var query = normalizeQuery(q);
     if (!query) {
       return clean.length > 88 ? clean.slice(0, 87) + '…' : clean;
     }
     var lower = clean.toLowerCase();
     var indexOfQuery = lower.indexOf(query);
     if (indexOfQuery === -1) {
       return clean.length > 88 ? clean.slice(0, 87) + '…' : clean;
     }
     var start = Math.max(0, indexOfQuery - 36);
     var end = Math.min(clean.length, indexOfQuery + query.length + 48);
     var prefix = start > 0 ? '…' : '';
     var suffix = end < clean.length ? '…' : '';
     return prefix + clean.slice(start, end) + suffix;
   }
 
   function scoreItem(item, q) {
     if (!q) return -1;
     var query = normalizeQuery(q);
     var score = 0;
     if (item.summaryLower === query) score += 1000;
     else if (item.summaryLower.indexOf(query) === 0) score += 900;
     else if (item.summaryLower.indexOf(query) !== -1) score += 700;
 
     if (item.tagLower === query) score += 500;
     else if (item.tagLower.indexOf(query) === 0) score += 420;
     else if (item.tagLower.indexOf(query) !== -1) score += 260;
 
     if (item.pathLower.indexOf(query) !== -1) score += 320;
     if (item.descriptionLower.indexOf(query) !== -1) score += 180;
     if (item.text.indexOf(query) !== -1) score += 100;
 
     score += item.isTag ? 10 : 30;
     return score;
   }
 
   function getMatches(q) {
     return index.map(function (item) {
       return { item: item, score: scoreItem(item, q) };
     }).filter(function (entry) {
       return entry.score > 0;
     }).sort(function (a, b) {
       if (b.score !== a.score) return b.score - a.score;
       return a.item.summary.localeCompare(b.item.summary);
     }).slice(0, 8).map(function (entry) {
       return entry.item;
     });
   }
 
   var currentMatches = [];
   var activeIndex = -1;
 
   function clearHighlights() {
     document.querySelectorAll('.search-highlight').forEach(function (el) { el.classList.remove('search-highlight'); });
   }
 
   function highlightMatches(q) {
     clearHighlights();
     if (!q) return;
     document.querySelectorAll('.operation').forEach(function (opEl) {
       var text = (opEl.textContent || '').toLowerCase();
       if (text.indexOf(q) !== -1) opEl.classList.add('search-highlight');
     });
   }
 
   function setActiveResult(indexValue) {
     var items = dropdown.querySelectorAll('.topbar-search-item');
     if (!items.length) return;
     activeIndex = Math.max(0, Math.min(indexValue, items.length - 1));
     items.forEach(function (item, idx) {
       var isActive = idx === activeIndex;
       item.classList.toggle('active', isActive);
       item.setAttribute('aria-selected', isActive ? 'true' : 'false');
       if (isActive) {
         item.scrollIntoView({ block: 'nearest' });
       }
     });
   }
 
   function showDropdown(q) {
     dropdown.innerHTML = '';
     activeIndex = -1;
     if (!q) { dropdown.style.display = 'none'; currentMatches = []; return; }
     var matches = getMatches(q);
     currentMatches = matches;
     if (!matches.length) {
       dropdown.innerHTML = '<div class="topbar-search-empty">No results for "' + escHtml(q) + '"</div>';
       dropdown.style.display = 'block';
       return;
     }
     matches.forEach(function (item) {
       var row = document.createElement('button');
       row.type = 'button';
       row.className = 'topbar-search-item';
       row.setAttribute('role', 'option');
       var badge = document.createElement('span');
       badge.className = item.isTag ? 'topbar-search-badge tag' : 'topbar-search-badge op';
       badge.textContent = item.isTag ? 'CAT' : 'CMD';
       var body = document.createElement('span');
       body.className = 'topbar-search-body';
       var label = document.createElement('span');
       label.className = 'topbar-search-label';
       label.innerHTML = highlightText(item.summary, q);
       var snippet = document.createElement('span');
       snippet.className = 'topbar-search-snippet';
      snippet.innerHTML = highlightText(buildSnippet(item.description || item.path || item.tag, q), q);
       body.appendChild(label);
       body.appendChild(snippet);
       var tagLabel = document.createElement('span');
       tagLabel.className = 'topbar-search-tag';
       tagLabel.textContent = item.isTag ? 'Tag' : item.tag;
       row.appendChild(badge);
       row.appendChild(body);
       row.appendChild(tagLabel);
       row.addEventListener('mouseenter', function () {
         var buttons = dropdown.querySelectorAll('.topbar-search-item');
         buttons.forEach(function (entry, idx) {
           entry.classList.toggle('active', entry === row);
           entry.setAttribute('aria-selected', entry === row ? 'true' : 'false');
           if (entry === row) activeIndex = idx;
         });
       });
       row.addEventListener('click', function () {
         openResult(item);
       });
       dropdown.appendChild(row);
     });
     var footer = document.createElement('div');
     footer.className = 'topbar-search-footer';
     footer.textContent = matches.length + ' result' + (matches.length === 1 ? '' : 's') + ' · ↑↓ navigate · Enter open · Esc close';
     dropdown.appendChild(footer);
     dropdown.style.display = 'block';
     setActiveResult(0);
   }
 
   function openResult(item) {
     var targetId = item.isTag ? 'tag-' + item.id : 'op-' + item.id;
     var target = document.getElementById(targetId);
     if (target) {
       var topbarH = document.getElementById('topbar') ? document.getElementById('topbar').offsetHeight : 52;
       var top = target.getBoundingClientRect().top + window.pageYOffset - topbarH - 12;
       window.scrollTo({ top: top, behavior: 'smooth' });
       target.classList.add('search-highlight');
       setTimeout(function () { target.classList.remove('search-highlight'); }, 2200);
     }
     dropdown.style.display = 'none';
     input.value = item.summary;
     clearBtn.style.display = 'inline-block';
   }
 
   input.addEventListener('input', function () {
     var q = normalizeQuery(input.value);
     clearBtn.style.display = q ? 'inline-block' : 'none';
     showDropdown(q);
     highlightMatches(q);
   });
 
   input.addEventListener('keydown', function (e) {
     if (dropdown.style.display === 'none') return;
     if (e.key === 'ArrowDown') {
       e.preventDefault();
       setActiveResult(activeIndex + 1);
     } else if (e.key === 'ArrowUp') {
       e.preventDefault();
       setActiveResult(activeIndex - 1);
     } else if (e.key === 'Enter') {
       if (currentMatches.length) {
         e.preventDefault();
         openResult(currentMatches[Math.max(0, activeIndex)] || currentMatches[0]);
       }
     } else if (e.key === 'Escape') {
       dropdown.style.display = 'none';
     }
   });
 
   clearBtn.addEventListener('click', function () {
     input.value = '';
     clearBtn.style.display = 'none';
     dropdown.style.display = 'none';
     clearHighlights();
   });
 
   document.addEventListener('click', function (e) {
     if (!e.target.closest('#topbar-search-wrap')) dropdown.style.display = 'none';
   });
}
 
/* ── Render operation ── */
function renderOperation(path, method, op) {
   var summary = op.summary || path;
   var id = opIdFromPath(path);
   var desc = op.description || '';
 
   var reqExampleJson = '';
   var reqHtml = '';
   if (op.requestBody && op.requestBody.content) {
     var ct = op.requestBody.content['application/json'];
     if (ct) {
       var exObj = ct.examples || {};
       var reqExKeys = Object.keys(exObj);
       if (reqExKeys.length && exObj[reqExKeys[0]].value) {
         reqExampleJson = JSON.stringify(exObj[reqExKeys[0]].value, null, 2);
       } else if (ct.schema) {
         /* ── Auto-generate example from schema ── */
         var autoExample = generateExampleFromSchema(ct.schema);
         if (autoExample && Object.keys(autoExample).length) {
           reqExampleJson = JSON.stringify(autoExample, null, 2);
         }
       }
       var schemaHtml = ct.schema ? schemaTable(ct.schema) : '';
       reqHtml = '<div class="payload-section">';
       reqHtml += '<div class="payload-heading">MQTT Command Payload</div>';
       reqHtml += '<div class="tab-bar">';
       if (reqExampleJson) reqHtml += '<button class="tab-btn active" data-tab="req-ex-' + id + '">Example</button>';
       if (schemaHtml) reqHtml += '<button class="tab-btn' + (reqExampleJson ? '' : ' active') + '" data-tab="req-sc-' + id + '">Schema</button>';
       reqHtml += '</div>';
       if (reqExampleJson) {
         reqHtml += '<div class="tab-panel active" id="req-ex-' + id + '">';
         if (reqExKeys.length) {
           var firstReqExample = exObj[reqExKeys[0]] || {};
           var firstReqDesc = typeof firstReqExample.description === 'string' ? firstReqExample.description : '';
           reqHtml += '<div class="example-description"' + (firstReqDesc ? '' : ' style="display:none;"') + '>' + (firstReqDesc ? md(firstReqDesc) : '') + '</div>';
         }
         if (reqExKeys.length > 1) {
           var reqExVals = {};
           reqExKeys.forEach(function (key) {
             reqExVals[key] = {
               value: exObj[key].value,
               description: typeof exObj[key].description === 'string' ? exObj[key].description : ''
             };
           });
           reqHtml += '<select class="example-select" data-panel="req-ex-' + id + '" data-examples="' + encodeURIComponent(JSON.stringify(reqExVals)) + '">';
           reqExKeys.forEach(function (key) { reqHtml += '<option value="' + escHtml(key) + '">' + escHtml(formatExampleLabel(key)) + '</option>'; });
           reqHtml += '</select>';
         }
         reqHtml += '<pre class="language-json"><code class="language-json">' + escHtml(reqExampleJson) + '</code></pre></div>';
       }
       if (schemaHtml) reqHtml += '<div class="tab-panel' + (reqExampleJson ? '' : ' active') + '" id="req-sc-' + id + '">' + schemaHtml + '</div>';
       reqHtml += '</div>';
     }
   }
 
   var resHtml = '';
   if (op.responses) {
     var resKey = Object.keys(op.responses)[0];
     var res = op.responses[resKey];
     if (res && res.content && res.content['application/json']) {
       var rct = res.content['application/json'];
       var resExObj = rct.examples || {};
       var resExKeys = Object.keys(resExObj);
       var resSchemaHtml = rct.schema ? schemaTable(rct.schema) : '';
 
       /* ── Auto-generate response example if missing ── */
       var resExampleJson = '';
       if (resExKeys.length && resExObj[resExKeys[0]].value) {
         resExampleJson = JSON.stringify(resExObj[resExKeys[0]].value, null, 2);
       } else if (rct.schema) {
         var autoResExample = generateExampleFromSchema(rct.schema);
         if (autoResExample && Object.keys(autoResExample).length) {
           resExampleJson = JSON.stringify(autoResExample, null, 2);
         }
       }
 
       resHtml = '<div class="payload-section">';
       resHtml += '<div class="payload-heading">MQTT Response Payload</div>';
       if (resExampleJson || resSchemaHtml) {
         resHtml += '<div class="tab-bar">';
         if (resExampleJson) resHtml += '<button class="tab-btn active" data-tab="res-ex-' + id + '">Example</button>';
         if (resSchemaHtml) resHtml += '<button class="tab-btn' + (resExampleJson ? '' : ' active') + '" data-tab="res-sc-' + id + '">Schema</button>';
         resHtml += '</div>';
         if (resExampleJson) {
           resHtml += '<div class="tab-panel active" id="res-ex-' + id + '">';
           if (resExKeys.length) {
             var firstResExample = resExObj[resExKeys[0]] || {};
             var firstResDesc = typeof firstResExample.description === 'string' ? firstResExample.description : '';
             resHtml += '<div class="example-description"' + (firstResDesc ? '' : ' style="display:none;"') + '>' + (firstResDesc ? md(firstResDesc) : '') + '</div>';
           }
           if (resExKeys.length > 1) {
             var resExVals = {};
             resExKeys.forEach(function(k){
               resExVals[k] = {
                 value: resExObj[k].value,
                 description: typeof resExObj[k].description === 'string' ? resExObj[k].description : ''
               };
             });
             resHtml += '<select class="example-select" data-panel="res-ex-' + id + '" data-examples="' + encodeURIComponent(JSON.stringify(resExVals)) + '">';
             resExKeys.forEach(function(k) { resHtml += '<option value="' + escHtml(k) + '">' + escHtml(formatExampleLabel(k)) + '</option>'; });
             resHtml += '</select>';
           }
           resHtml += '<pre class="language-json"><code class="language-json">' + escHtml(resExampleJson) + '</code></pre>';
           resHtml += '</div>';
         }
         if (resSchemaHtml) resHtml += '<div class="tab-panel' + (resExampleJson ? '' : ' active') + '" id="res-sc-' + id + '">' + resSchemaHtml + '</div>';
       }
       resHtml += '</div>';
     }
   }
 
   return '<div class="operation" id="op-' + id + '" data-op="' + encodeURIComponent(JSON.stringify(op)) + '" data-path="' + escHtml(path) + '">' +
     '<div class="op-title-bar">' +
       '<div class="op-title-wrap">' +
         '<h3 class="op-title">' + escHtml(summary) + '</h3>' +
       '</div>' +
       '<button class="pdf-btn" data-op-id="' + id + '">⬇ Download PDF</button>' +
     '</div>' +
    '<div class="op-description md-content">' + md(desc, { idPrefix: id, headingMap: { 1: 3, 2: 3, 3: 4, 4: 5, 5: 5, 6: 5 } }) + '</div>' +
     reqHtml + resHtml +
     (op['x-error-codes'] ? errorTable(op['x-error-codes']) : '') +
     '</div><hr class="op-divider">';
}
 
function slugify(text) {
   return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function opIdFromPath(path) {
   return slugify(String(path || '').replace(/^\//, ''));
}

function finalizeTagOperations(tagMap, spec) {
   var opOrder = spec['x-operationOrder'] || {};
   Object.keys(tagMap).forEach(function (tagName) {
     var seen = {};
     var ops = tagMap[tagName].operations.filter(function (entry) {
       var key = entry.path + '\0' + entry.method;
       if (seen[key]) return false;
       seen[key] = true;
       return true;
     });
     var order = opOrder[tagName];
     if (order && order.length) {
       var rank = {};
       order.forEach(function (name, idx) {
         rank['/' + name] = idx;
       });
       ops.sort(function (a, b) {
         var ra = rank[a.path] !== undefined ? rank[a.path] : 9999;
         var rb = rank[b.path] !== undefined ? rank[b.path] : 9999;
         if (ra !== rb) return ra - rb;
         return a.path.localeCompare(b.path);
       });
     }
     tagMap[tagName].operations = ops;
   });
}

function groupedTagOperations(tagName, operations, spec) {
   var subgroupConfig = (spec['x-operationSubgroups'] || {})[tagName];
   if (!subgroupConfig || !subgroupConfig.length) {
      return [{ name: '', operations: operations }];
   }
   var byName = {};
   operations.forEach(function (entry) {
      byName[opIdFromPath(entry.path)] = entry;
   });
   var used = {};
   var groups = [];
   subgroupConfig.forEach(function (group) {
      var entries = [];
      (group.operations || []).forEach(function (opName) {
         var entry = byName[opName];
         if (!entry) return;
         entries.push(entry);
         used[opName] = true;
      });
      if (entries.length) groups.push({ name: group.name || '', operations: entries });
   });
   var remaining = operations.filter(function (entry) {
      return !used[opIdFromPath(entry.path)];
   });
   if (remaining.length) groups.push({ name: 'Other', operations: remaining });
   return groups;
}
 
/* ── Main render ── */
function render(spec) {
   var content = document.getElementById('content');
   var nav = document.getElementById('nav-content');
   var searchInput = document.getElementById('sidebar-search');
   var html = '';
   var navHtml = '';
 
   /* No h1 page title — topbar handles it */
   if (spec.info && spec.info.description) {
     html += '<div class="info-description md-content">' + md(spec.info.description, { idPrefix: 'info' }) + '</div>';
   }
 
   var tagMap = {};
   (spec.tags || []).forEach(function (t) {
     tagMap[t.name] = { description: t.description || '', operations: [] };
   });
 
   var paths = spec.paths || {};
   Object.keys(paths).forEach(function (path) {
     Object.keys(paths[path]).forEach(function (method) {
       var op = paths[path][method];
       var opTags = op.tags || ['default'];
       opTags.forEach(function (tagName) {
         if (!tagMap[tagName]) tagMap[tagName] = { description: '', operations: [] };
         tagMap[tagName].operations.push({ path: path, method: method, op: op });
       });
     });
   });

   finalizeTagOperations(tagMap, spec);
 
   var groups = spec['x-tagGroups'] || [{ name: 'API', tags: Object.keys(tagMap) }];
   groups.forEach(function (group) {
     navHtml += '<div class="nav-group" data-group="' + escHtml(group.name) + '">' +
       '<span class="nav-group-label">' + escHtml(group.name) + '</span>' +
       '<span class="nav-group-indicator">−</span>' +
       '</div>' +
       '<div class="nav-group-children" data-group-children="' + escHtml(group.name) + '">';
     group.tags.forEach(function (tagName) {
       var tag = tagMap[tagName];
       if (!tag) return;
      var tagId = slugify(tagName);
      var tagLabel = formatCategoryLabel(tagName);
      navHtml += '<a class="nav-tag" href="#tag-' + tagId + '">' + escHtml(tagLabel) + '</a>';
      groupedTagOperations(tagName, tag.operations, spec).forEach(function (subgroup) {
        if (subgroup.name) {
          navHtml += '<div class="nav-subgroup">' + escHtml(subgroup.name) + '</div>';
        }
        subgroup.operations.forEach(function (entry) {
          var opId = opIdFromPath(entry.path);
          navHtml += '<a class="nav-op" href="#op-' + opId + '">' + escHtml(entry.op.summary) + '</a>';
        });
      });
       html += '<div class="tag-section" id="tag-' + tagId + '">';
       html += '<h2 class="tag-heading">' + escHtml(tagLabel) + '</h2>';
       if (tag.description) {
         html += '<div class="tag-description md-content">' + md(tag.description) + '</div>';
       }
       groupedTagOperations(tagName, tag.operations, spec).forEach(function (subgroup) {
         if (subgroup.name) {
           html += '<h3 class="tag-subgroup-heading">' + escHtml(subgroup.name) + '</h3>';
         }
         subgroup.operations.forEach(function (entry) {
           html += renderOperation(entry.path, entry.method, entry.op);
         });
       });
       html += '</div><hr class="tag-divider">';
     });
     navHtml += '</div>'; // close nav-group-children
   });
 
   content.innerHTML = html;
   content.classList.remove('is-loading');
   nav.innerHTML = navHtml;
 
   function wireNavGroups() {
     document.querySelectorAll('.nav-group').forEach(function(group) {
       if (group.getAttribute('data-nav-wired')) return;
       group.setAttribute('data-nav-wired', '1');
       var groupName = group.getAttribute('data-group');
       var children = document.querySelector('.nav-group-children[data-group-children="' + groupName + '"]');
       var indicator = group.querySelector('.nav-group-indicator');
       if (!children || !indicator) return;
       var stored = sessionStorage.getItem('nav-group-' + groupName);
       var hasActive = children.querySelector('.nav-op.active, .nav-tag.active');
       var isCollapsed = (stored === 'collapsed') || (!stored && !hasActive);
       if (isCollapsed) {
         children.classList.add('collapsed');
         indicator.textContent = '+';
       } else {
         children.classList.remove('collapsed');
         indicator.textContent = '−';
       }
       group.addEventListener('click', function() {
         var collapsed = children.classList.toggle('collapsed');
         indicator.textContent = collapsed ? '+' : '−';
         sessionStorage.setItem('nav-group-' + groupName, collapsed ? 'collapsed' : 'expanded');
       });
     });
   }
 
   wireNavGroups();
   wireTopbarSearch(spec);
 
   document.querySelectorAll('.pdf-btn').forEach(function (btn) {
     btn.addEventListener('click', function () {
       var opDiv = btn.closest('.operation');
       var opData = JSON.parse(decodeURIComponent(opDiv.getAttribute('data-op')));
       var path = opDiv.getAttribute('data-path');
       btn.textContent = '⏳ Generating...';
       btn.disabled = true;
       setTimeout(function () {
         try { generatePDF(opData, path); } catch(e) { console.error('PDF error:', e); }
         btn.textContent = '⬇ Download PDF';
         btn.disabled = false;
       }, 100);
     });
   });
 
   if (searchInput && !searchInput.getAttribute('data-wired')) {
     searchInput.setAttribute('data-wired', '1');
     searchInput.addEventListener('input', function () {
      var q = (searchInput.value || '').toLowerCase().trim();
      var tagLinks = Array.prototype.slice.call(nav.querySelectorAll('.nav-tag'));
      var opLinks = Array.prototype.slice.call(nav.querySelectorAll('.nav-op'));
      var subgroupLabels = Array.prototype.slice.call(nav.querySelectorAll('.nav-subgroup'));
      if (!q) {
        tagLinks.forEach(function (tag) { tag.style.display = ''; });
        opLinks.forEach(function (op) { op.style.display = ''; });
        subgroupLabels.forEach(function (label) { label.style.display = ''; });
        /* Restore sessionStorage states when filter cleared */
         document.querySelectorAll('.nav-group').forEach(function(group) {
           var groupName = group.getAttribute('data-group');
           var children = document.querySelector('.nav-group-children[data-group-children="' + groupName + '"]');
           var indicator = group.querySelector('.nav-group-indicator');
           if (!children || !indicator) return;
           var stored = sessionStorage.getItem('nav-group-' + groupName);
           if (stored === 'collapsed') {
             children.classList.add('collapsed');
             indicator.textContent = '+';
           } else {
             children.classList.remove('collapsed');
             indicator.textContent = '−';
           }
         });
         return;
       }
       var opMatchByTag = {};
       opLinks.forEach(function (op) {
         var text = (op.textContent || '').toLowerCase();
         var match = text.indexOf(q) !== -1;
         op.style.display = match ? '' : 'none';
         if (match) {
           var prev = op.previousElementSibling;
           while (prev && !prev.classList.contains('nav-tag')) prev = prev.previousElementSibling;
           if (prev) opMatchByTag[prev.getAttribute('href')] = true;
         }
       });
      tagLinks.forEach(function (tag) {
        var tagText = (tag.textContent || '').toLowerCase();
        var tagMatch = tagText.indexOf(q) !== -1;
        var hasMatchingOp = !!opMatchByTag[tag.getAttribute('href')];
        tag.style.display = (tagMatch || hasMatchingOp) ? '' : 'none';
      });
      subgroupLabels.forEach(function (label) {
        var next = label.nextElementSibling;
        var hasVisibleOp = false;
        while (next && !next.classList.contains('nav-subgroup') && !next.classList.contains('nav-tag') && !next.classList.contains('nav-group')) {
          if (next.classList.contains('nav-op') && next.style.display !== 'none') {
            hasVisibleOp = true;
            break;
          }
          next = next.nextElementSibling;
        }
        label.style.display = hasVisibleOp ? '' : 'none';
      });
      /* Auto-expand groups that have matching results */
       document.querySelectorAll('.nav-group-children').forEach(function(children) {
         var hasVisible = Array.prototype.slice.call(children.querySelectorAll('.nav-op, .nav-tag'))
           .some(function(el) { return el.style.display !== 'none'; });
         if (hasVisible) {
           children.classList.remove('collapsed');
           var groupName = children.getAttribute('data-group-children');
           var indicator = document.querySelector('.nav-group[data-group="' + groupName + '"] .nav-group-indicator');
           if (indicator) indicator.textContent = '−';
         }
       });
     });
   }
 
   document.querySelectorAll('.tab-btn').forEach(function (btn) {
     btn.addEventListener('click', function () {
       var tabId = btn.getAttribute('data-tab');
       var bar = btn.parentElement;
       bar.querySelectorAll('.tab-btn').forEach(function (b) { b.classList.remove('active'); });
       btn.classList.add('active');
       var section = bar.closest('.payload-section');
       if (section) section.querySelectorAll('.tab-panel').forEach(function (p) { p.classList.remove('active'); });
       var target = document.getElementById(tabId);
       if (target) target.classList.add('active');
     });
   });
 
  addCollapseToggles(document.getElementById('content'));
  highlightJsonBlocks(document.getElementById('content'));
  addCopyButtons();
  wireSchemaToggles();
  wireSchemaToolbars();
 
   document.querySelectorAll('.example-select').forEach(function(sel) {
     sel.addEventListener('change', function() {
       var panelId = sel.getAttribute('data-panel');
       var panel = document.getElementById(panelId);
       if (!panel) return;
       var viewerWrap = panel.querySelector('.json-viewer-wrap');
       var pre = panel.querySelector('pre code');
       var descEl = panel.querySelector('.example-description');
       var examplesJson = sel.getAttribute('data-examples');
       if (!examplesJson) return;
       try {
         var examples = JSON.parse(decodeURIComponent(examplesJson));
         var selectedExample = examples[sel.value];
         var val;
         var desc = '';
         if (selectedExample && typeof selectedExample === 'object' && Object.prototype.hasOwnProperty.call(selectedExample, 'value')) {
           val = selectedExample.value;
           desc = typeof selectedExample.description === 'string' ? selectedExample.description : '';
         } else {
           val = selectedExample;
         }
         if (descEl) {
           if (desc) {
             descEl.innerHTML = md(desc);
             descEl.style.display = '';
           } else {
             descEl.innerHTML = '';
             descEl.style.display = 'none';
           }
         }
         if (val !== undefined) {
           if (viewerWrap) {
             setJsonViewerData(viewerWrap, val);
             return;
           }
           if (pre) {
             pre.textContent = JSON.stringify(val, null, 2);
             if (window.Prism) Prism.highlightElement(pre);
           }
         }
       } catch(e) {}
     });
   });
 
   /* ── Offset anchor scroll for fixed topbar ──────────────── */
   var TOPBAR_H = document.getElementById('topbar') ? document.getElementById('topbar').offsetHeight : 52;
   document.addEventListener('click', function (e) {
     var anchor = e.target.closest('a[href^="#"]');
     if (!anchor) return;
     var id = anchor.getAttribute('href').slice(1);
     var target = document.getElementById(id);
     if (!target) return;
     e.preventDefault();
     /* If clicked link is inside a collapsed group, expand it */
     var groupChildren = anchor.parentElement;
     while (groupChildren && !groupChildren.classList.contains('nav-group-children')) groupChildren = groupChildren.parentElement;
     if (groupChildren && groupChildren.classList.contains('collapsed')) {
       var gName = groupChildren.getAttribute('data-group-children');
       var gEl = nav.querySelector('.nav-group[data-group="' + gName + '"]');
       if (gEl) {
         groupChildren.classList.remove('collapsed');
         var ind = gEl.querySelector('.nav-group-indicator');
         if (ind) ind.textContent = '−';
         sessionStorage.setItem('nav-group-' + gName, 'expanded');
       }
     }
     var top = target.getBoundingClientRect().top + window.pageYOffset - TOPBAR_H - 8;
     window.scrollTo({ top: top, behavior: 'smooth' });
     history.pushState(null, '', '#' + id);
     updateActiveNavState();
   });
 
   var navTagLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-tag'));
   var navOpLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-op'));
   var tagSections = Array.prototype.slice.call(document.querySelectorAll('.tag-section'));
   var operationSections = Array.prototype.slice.call(document.querySelectorAll('.operation'));
   var lastActiveNavLink = null;
 
   function revealActiveNavLink(activeLink) {
     if (!activeLink || activeLink === lastActiveNavLink) return;
     lastActiveNavLink = activeLink;
     activeLink.scrollIntoView({ block: 'nearest' });
   }
 
   function updateActiveNavState() {
     var threshold = TOPBAR_H + 12;
     var bestOp = null;
     var bestDistance = Infinity;
     operationSections.forEach(function(op) {
       var rect = op.getBoundingClientRect();
       var isVisible = rect.bottom > threshold && rect.top < window.innerHeight;
       if (!isVisible) return;
       var distance = Math.abs(rect.top - threshold);
       if (distance < bestDistance) {
         bestDistance = distance;
         bestOp = op;
       }
     });
     if (!bestOp) {
       var firstBelow = Infinity;
       operationSections.forEach(function(op) {
         var rect = op.getBoundingClientRect();
         if (rect.top > threshold && rect.top < firstBelow) {
           firstBelow = rect.top;
           bestOp = op;
         }
       });
     }
     if (!bestOp) {
       var nearestAbove = -Infinity;
       operationSections.forEach(function(op) {
         var rect = op.getBoundingClientRect();
         if (rect.top <= threshold && rect.top > nearestAbove) {
           nearestAbove = rect.top;
           bestOp = op;
         }
       });
     }
     var activeOpId = bestOp ? bestOp.id : null;
     /* Get parent tag from the active operation */
     var activeTagId = null;
     if (bestOp) {
       var tagSection = bestOp.closest ? bestOp.closest('.tag-section') : null;
       if (!tagSection) {
         var el = bestOp.parentElement;
         while (el && !el.classList.contains('tag-section')) el = el.parentElement;
         tagSection = el;
       }
       if (tagSection) activeTagId = tagSection.id;
     }
     /* Fallback: nearest tag section when no op active */
     if (!activeTagId) {
       var bestTag = null;
       var bestTagTop = -Infinity;
       tagSections.forEach(function(tag) {
         var rect = tag.getBoundingClientRect();
         if (rect.top <= threshold && rect.top > bestTagTop) {
           bestTagTop = rect.top;
           bestTag = tag;
         }
       });
       if (bestTag) activeTagId = bestTag.id;
     }
     navOpLinks.forEach(function(link) {
       link.classList.toggle('active', !!activeOpId && link.getAttribute('href') === '#' + activeOpId);
     });
     navTagLinks.forEach(function(link) {
       link.classList.toggle('active', !!activeTagId && link.getAttribute('href') === '#' + activeTagId);
     });
     /* Active group highlighting */
     document.querySelectorAll('.nav-group').forEach(function(g) { g.classList.remove('active-group'); });
     var activeOp = nav.querySelector('.nav-op.active');
     if (activeOp) {
       var activeChildren = activeOp.closest ? activeOp.closest('.nav-group-children') : null;
       if (!activeChildren) {
         var el2 = activeOp.parentElement;
         while (el2 && !el2.classList.contains('nav-group-children')) el2 = el2.parentElement;
         activeChildren = el2;
       }
       if (activeChildren) {
         var activeGroupName = activeChildren.getAttribute('data-group-children');
         var activeGroupEl = nav.querySelector('.nav-group[data-group="' + activeGroupName + '"]');
         if (activeGroupEl) activeGroupEl.classList.add('active-group');
         if (activeChildren.classList.contains('collapsed')) {
           activeChildren.classList.remove('collapsed');
           if (activeGroupEl) {
             var activeIndicator = activeGroupEl.querySelector('.nav-group-indicator');
             if (activeIndicator) activeIndicator.textContent = '−';
           }
           if (activeGroupName) sessionStorage.setItem('nav-group-' + activeGroupName, 'expanded');
         }
         /* Breadcrumb update */
         var breadcrumb = document.getElementById('sidebar-breadcrumb');
         if (breadcrumb) {
           var parentTag = activeOp.previousElementSibling;
           while (parentTag && !parentTag.classList.contains('nav-tag')) {
             parentTag = parentTag.previousElementSibling;
           }
           var groupLabel = activeGroupEl ? activeGroupEl.querySelector('.nav-group-label') : null;
           breadcrumb.textContent = (groupLabel ? groupLabel.textContent : '') + ' \u203a ' + (parentTag ? parentTag.textContent.trim() : '');
         }
       }
     }
     var activeNavLink = nav.querySelector('.nav-op.active') || nav.querySelector('.nav-tag.active');
     revealActiveNavLink(activeNavLink);
   }
 
   window.addEventListener('scroll', updateActiveNavState);
   window.addEventListener('hashchange', updateActiveNavState);
   updateActiveNavState();
 
   /* ── FIX 11 — Wire mobile sidebar ── */
   (function wireMobileSidebar() {
     var toggle = document.getElementById('sidebar-toggle');
     var overlay = document.getElementById('sidebar-overlay');
     var sidebar = document.getElementById('sidebar');
     if (!toggle || !overlay || !sidebar) return;
     function openSidebar() {
       sidebar.classList.add('open');
       overlay.classList.add('visible');
       document.body.style.overflow = 'hidden';
     }
     function closeSidebar() {
       sidebar.classList.remove('open');
       overlay.classList.remove('visible');
       document.body.style.overflow = '';
     }
     toggle.addEventListener('click', openSidebar);
     overlay.addEventListener('click', closeSidebar);
     document.querySelectorAll('.nav-tag, .nav-op').forEach(function (link) {
       link.addEventListener('click', function () {
         if (window.innerWidth <= 768) closeSidebar();
       });
     });
   })();

}

function wireBackToTop() {
  var btn = document.getElementById('back-to-top');
  if (!btn || btn.getAttribute('data-wired')) return;
  btn.setAttribute('data-wired', '1');
  window.addEventListener('scroll', function () {
    btn.classList.toggle('visible', window.scrollY > 420);
  }, { passive: true });
  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function wireSearchShortcut() {
  if (document.body.getAttribute('data-search-shortcut')) return;
  document.body.setAttribute('data-search-shortcut', '1');
  document.addEventListener('keydown', function (e) {
    if (e.key !== '/' || e.ctrlKey || e.metaKey || e.altKey) return;
    var tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : '';
    if (tag === 'input' || tag === 'textarea' || tag === 'select' || (e.target && e.target.isContentEditable)) return;
    e.preventDefault();
    var search = document.getElementById('topbar-search');
    if (search) search.focus();
  });
}

wireBackToTop();
wireSearchShortcut();

function fetchJson(url) {
  return fetch(url + (url.indexOf('?') === -1 ? '?' : '&') + 'v=' + Date.now())
    .then(function (r) {
      if (!r.ok) throw new Error('Failed to load ' + url + ': ' + r.status);
      return r.json();
    });
}

Promise.all([
  fetchJson('openapi_md.json'),
  fetchJson('Command%20Schemas.json'),
  fetchJson('tag_config.json')
])
  .then(function (results) {
    loadDisplayNameConfig(results[1], results[2]);
    applyOperationSummaries(results[0]);
    render(results[0]);
  })
  .catch(function (err) {
    document.getElementById('content').innerHTML = '<p class="error-msg">Error loading spec: ' + escHtml(err.message) + '</p>';
  });
 
var BASE_FONT_PX = 15;
var STEP = 0.05, MIN = 0.5, MAX = 2.0, KEY = 'mqtt-font-scale';
var saved = parseFloat(localStorage.getItem(KEY));
var scale = (saved >= MIN && saved <= MAX) ? saved : 1;
var display = document.getElementById('font-scale-value');
function applyScale() {
   scale = Math.round(scale * 100) / 100;
   document.documentElement.style.fontSize = (BASE_FONT_PX * scale) + 'px';
   display.textContent = Math.round(scale * 100) + '%';
   localStorage.setItem(KEY, scale);
}
applyScale();
document.getElementById('font-scale-up').addEventListener('click', function () { if (scale < MAX) { scale += STEP; applyScale(); } });
document.getElementById('font-scale-down').addEventListener('click', function () { if (scale > MIN) { scale -= STEP; applyScale(); } });
document.getElementById('font-scale-reset').addEventListener('click', function () { scale = 1; applyScale(); });
})();
