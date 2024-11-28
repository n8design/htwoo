module.exports = {
  tagPrefix: 'htwoo-core-v',
  header: '# hTWOo Core - Changelog\n\nChanges in hTWOo core as they happen\n',
  types: [
    { type: 'feat', section: 'Features' },
    { type: 'fix', section: 'Bug Fixes' },
    { type: 'refactor', section: 'Refactoring' },
    { type: 'chore', hidden: true },
    { type: 'docs', hidden: true },
    { type: 'style', hidden: true },
    { type: 'perf', hidden: true },
    { type: 'test', hidden: true }
  ],
  commitUrlFormat: 'https://github.com/n8design/htwoo/commit/{{hash}}',
  compareUrlFormat: 'https://github.com/n8design/htwoo/compare/{{previousTag}}...{{currentTag}}'
};