import fs from 'node:fs';

const html = fs.readFileSync('C:/Users/ide-probook-i5/.gemini/antigravity/brain/f7d1d927-af48-4e91-ad31-9e3e56a252fa/.system_generated/steps/16/content.md', 'utf8');
const css = fs.readFileSync('C:/Users/ide-probook-i5/.gemini/antigravity/brain/f7d1d927-af48-4e91-ad31-9e3e56a252fa/.system_generated/steps/152/content.md', 'utf8');

const combined = html + '\n' + css;
const urls = combined.match(/https?:\/\/[^\s"'()><]+\.(png|jpg|jpeg|webp|svg)/gi) || [];
const unique = [...new Set(urls)];

console.log(unique);
