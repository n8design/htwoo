// @vitest-environment jsdom
// (tests/unit/setup.ts needs a DOM)
import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

const root = path.resolve(__dirname, '../../..');
const themesDir = path.join(root, 'themes');

/** Theme names offered by the Pattern Lab theme switcher. */
const supportedThemes = (): string[] => {
  const source = fs.readFileSync(path.join(root, 'src/plugins/plugin-design/js/plugin-design.js'), 'utf8');
  const list = source.match(/const supportedThemes = \[([\s\S]*?)\]/);
  if (!list) throw new Error('supportedThemes not found in plugin-design.js');
  return [...list[1].matchAll(/"([^"]+)"/g)].map(match => match[1]);
};

describe('Themes', () => {
  it('reads the theme list from plugin-design.js', () => {
    expect(supportedThemes().length).toBeGreaterThan(0);
  });

  // Pattern Dump only registers <name>.theme.scss, so every theme needs the .theme files
  it.each(supportedThemes())('%s has <name>.theme.scss and <name>.theme.json', name => {
    expect(fs.existsSync(path.join(themesDir, `${name}.theme.scss`))).toBe(true);
    expect(fs.existsSync(path.join(themesDir, `${name}.theme.json`))).toBe(true);
  });

  // teams.dark.scss/.json are deprecated copies (removed in 3.0) and must not drift
  it.each(['scss', 'json'])('deprecated teams.dark.%s equals its .theme copy', ext => {
    const deprecated = fs.readFileSync(path.join(themesDir, `teams.dark.${ext}`));
    const current = fs.readFileSync(path.join(themesDir, `teams.dark.theme.${ext}`));
    expect(deprecated.equals(current)).toBe(true);
  });
});
