// Prints every link in a PDF, one per line: the web address, or "#name" for a jump inside the PDF.
// build.sh compares these, as well as the text, before it keeps a published PDF, because two PDFs
// with the same text can still link to different places.
//
// Usage, from a folder whose node_modules has pdf-lib: node pdf-links.mjs <file.pdf>
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(`${process.cwd()}/package.json`);
const { PDFDocument, PDFDict, PDFName, PDFString, PDFHexString } = require('pdf-lib');

const doc = await PDFDocument.load(readFileSync(process.argv[2]));
for (const page of doc.getPages()) {
  const annots = page.node.Annots();
  if (!annots) continue;
  for (let k = 0; k < annots.size(); k++) {
    const annot = doc.context.lookup(annots.get(k));
    if (!(annot instanceof PDFDict)) continue;
    const action = annot.lookupMaybe(PDFName.of('A'), PDFDict);
    const uri = action && action.lookupMaybe(PDFName.of('URI'), PDFString, PDFHexString);
    if (uri) console.log(uri.decodeText());
    const dest = annot.get(PDFName.of('Dest'));
    if (dest instanceof PDFName) console.log(`#${dest.decodeText()}`);
  }
}
