// @vitest-environment jsdom
// (tests/unit/setup.ts needs a DOM)
import { describe, it, expect } from 'vitest';
import { createRequire } from 'module';
import path from 'path';

const require = createRequire(import.meta.url);
const Handlebars = require('handlebars');
const registerTestHelpers = require(path.resolve(__dirname, '../../../helpers/hbs/test.js'));

describe('getId / getLastNumericId', () => {
  const hbs = Handlebars.create();
  registerTestHelpers(hbs);

  // A prefix with its own dash ("file-upload") must still yield the trailing number, not NaN
  it.each(['file-upload', 'select', 'a-b-c'])('returns the number getId appended to "%s"', prefix => {
    const out = hbs.compile(`{{getId "${prefix}"}}|{{getLastNumericId}}`)({});
    const [id, numeric] = out.split('|');
    expect(numeric).toMatch(/^\d+$/);
    expect(id).toBe(`${prefix}-${numeric}`);
  });
});
