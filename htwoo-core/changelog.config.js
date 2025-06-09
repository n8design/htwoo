module.exports = {
  tagPrefix: 'htwoo-core-v',
  header: '# hTWOo Core - Changelog\n\nChanges in hTWOo core as they happen\n',
  types: [
    { type: 'feat', section: 'Features' },
    { type: 'fix', section: 'Bug Fixes' },
    { type: 'refactor', section: 'Refactoring' },
    { type: 'perf', section: 'Performance Improvements' },
    { type: 'chore', hidden: true },
    { type: 'docs', hidden: true },
    { type: 'style', hidden: true },
    { type: 'test', hidden: true }
  ],
  commitUrlFormat: 'https://github.com/n8design/htwoo/commit/{{hash}}',
  compareUrlFormat: 'https://github.com/n8design/htwoo/compare/{{previousTag}}...{{currentTag}}',
  // Enhanced configuration for path-based filtering
  conventionalCommits: {
    parserOpts: {
      // Only consider commits that affect htwoo-core
      noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
      revertPattern: /^(?:Revert|revert:)\s"?([\s\S]+?)"?\s*This reverts commit (\w*)\./i,
      revertCorrespondence: ['header', 'hash']
    },
    writerOpts: {
      commitsSort: ['scope', 'subject'],
      noteGroupsSort: 'title',
      notesSort: 'text',
      generateOn: function(commit) {
        return commit.version;
      }
    }
  },
  // Path filtering configuration
  gitRawCommitsOpts: {
    // Only include commits that touch htwoo-core directory
    path: '.',
    merges: null
  },
  // Release configuration
  packageFiles: ['package.json'],
  bumpFiles: ['package.json', '../packages/htwoo-core/package.json'],
  // Custom script hooks for Nx integration
  scripts: {
    prerelease: 'nx run htwoo-core:build && nx run htwoo-core:test',
    postchangelog: 'node scripts/post-changelog.js'
  }
};