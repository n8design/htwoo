// @vitest-environment jsdom
// (tests/unit/setup.ts needs a DOM)
import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

const src = path.resolve(__dirname, '../../../src');

const jsonFiles = (dir: string): string[] =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return jsonFiles(full);
    return entry.name.endsWith('.json') ? [full] : [];
  });

const relative = (file: string) => path.relative(src, file);
const patternJson = jsonFiles(path.join(src, '_patterns'));
const dataJson = jsonFiles(path.join(src, '_data'));

// `_name.json` is Pattern Lab folder data, not pattern data. `-card-footer.json` is a known misnamed
// file: renaming it would add default data to every card-footer include, so it is left for review.
const knownWithoutTemplate = new Set(['_patterns/molecules/cards-elements/-card-footer.json']);
const templateData = patternJson
  .map(relative)
  .filter(file => !path.basename(file).startsWith('_') && !knownWithoutTemplate.has(file));

// Invalid data is dropped silently by the tools that read it, so the pattern renders without its data
describe('pattern and global data', () => {
  it.each([...patternJson, ...dataJson].map(relative))('%s is valid JSON', file => {
    expect(() => JSON.parse(fs.readFileSync(path.join(src, file), 'utf8'))).not.toThrow();
  });

  // A data file belongs to the template of the same name (a ~variant belongs to its base template)
  it.each(templateData)('%s has a template', file => {
    const base = file.replace(/\.json$/, '').replace(/~[^/]*$/, '');
    expect(fs.existsSync(path.join(src, `${base}.hbs`))).toBe(true);
  });
});
