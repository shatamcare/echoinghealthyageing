#!/usr/bin/env node
/*
 Extract plain text from all DOCX blog posts under src/blog/ using mammoth.
 Outputs a JSON array with { slug, file, text } to stdout.
*/
const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');

async function main() {
  const blogDir = path.resolve(__dirname, '..', 'src', 'blog');
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.docx'));
  const results = [];
  for (const file of files) {
    const filePath = path.join(blogDir, file);
    const buffer = fs.readFileSync(filePath);
    try {
      const { value } = await mammoth.extractRawText({ buffer });
      const slug = file.replace(/\.docx$/i, '').replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$|--+/g, '-').toLowerCase();
      // Normalize whitespace
      const text = value.replace(/\r\n|\r/g, '\n').split('\n').map(s => s.trim()).filter(Boolean).join('\n');
      results.push({ slug, file, text });
    } catch (e) {
      results.push({ slug: file, file, error: String(e) });
    }
  }
  process.stdout.write(JSON.stringify(results, null, 2));
}

main().catch(err => { console.error(err); process.exit(1); });
