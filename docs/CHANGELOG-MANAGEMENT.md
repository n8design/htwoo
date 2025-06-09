# Changelog Management

This document describes the changelog generation process for the hTWOo workspace, specifically designed to work with Nx and filter commits by project paths.

## Overview

The changelog system is designed to:
- ✅ Generate changelogs only for commits affecting specific project directories
- ✅ Use conventional commit format for consistent categorization
- ✅ Integrate with Nx task system for reliable execution
- ✅ Support both manual and automated generation
- ✅ Sync changelogs across documentation and package distribution

## Architecture

```
htwoo/ (workspace root)
├── htwoo-core/
│   ├── scripts/
│   │   ├── generate-changelog.js     # Main changelog generator
│   │   └── post-changelog.js         # Post-processing tasks
│   ├── changelog.config.js           # Conventional changelog config
│   └── CHANGELOG.md                  # Generated changelog
├── scripts/
│   └── workspace-changelog.js        # Workspace-level coordinator
└── .github/workflows/
    └── changelog.yml                 # Automated CI/CD workflow
```

## Usage

### Manual Generation

Generate changelog for htwoo-core:
```bash
# Using Nx (recommended)
nx run htwoo-core:changelog

# Preview without writing
nx run htwoo-core:changelog:preview

# Direct script execution
cd htwoo-core && node scripts/generate-changelog.js
```

Generate for all projects:
```bash
node scripts/workspace-changelog.js
```

### Release Management

Create a new release:
```bash
# Dry run to preview
nx run htwoo-core:release:dry-run

# Create actual release
nx run htwoo-core:release
```

### Automated Generation

The GitHub workflow can be triggered:
1. **Manually**: Use GitHub Actions "Changelog Generation" workflow
2. **Automatically**: On pushes to main that affect project directories

## Configuration

### Commit Filtering

The system only includes commits that:
- Touch files in the `htwoo-core/` directory
- Follow conventional commit format: `type(scope): description`

Supported commit types:
- `feat`: New features
- `fix`: Bug fixes  
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `chore`: Maintenance (hidden from changelog)
- `docs`: Documentation (hidden from changelog)

### Path-Based Filtering

The changelog generator uses git's path filtering:
```bash
git log -- htwoo-core/
```

This ensures only relevant commits are included.

## Advanced Features

### Multi-Project Support

The workspace coordinator can handle multiple projects:
```bash
# Generate for specific projects
node scripts/workspace-changelog.js htwoo-core htwoo-react

# Generate for all projects
node scripts/workspace-changelog.js
```

### Validation and Health Checks

Check workspace health:
```bash
node scripts/workspace-changelog.js --check
```

### Documentation Syncing

Changelogs are automatically synced to:
- `docs/change-log/htwoo-core.md` (documentation site)
- `packages/htwoo-core/CHANGELOG.md` (npm distribution)

## Best Practices

### Commit Message Format

Use conventional commits for automatic categorization:
```bash
feat(button): add new primary button variant
fix(dialog): resolve keyboard navigation issue  
refactor(styles): optimize CSS structure
```

### Release Workflow

1. **Development**: Make changes with conventional commits
2. **Preview**: Run `nx run htwoo-core:changelog:preview`
3. **Generate**: Run `nx run htwoo-core:changelog`
4. **Review**: Check generated CHANGELOG.md
5. **Release**: Run `nx run htwoo-core:release`

### CI/CD Integration

The GitHub workflow supports:
- Manual triggering with project selection
- Automatic generation on relevant pushes
- Dry run mode for testing
- Pull request creation for review

## Troubleshooting

### Common Issues

**No commits found:**
```bash
# Check if commits affect the project directory
git log --oneline -- htwoo-core/
```

**Invalid changelog format:**
```bash
# Validate changelog manually
node -e "console.log(require('./htwoo-core/scripts/post-changelog.js'))"
```

**Missing dependencies:**
```bash
cd htwoo-core
npm install --save-dev conventional-changelog-cli
```

### Debug Mode

Enable verbose logging:
```bash
DEBUG=conventional-changelog* nx run htwoo-core:changelog
```

## Future Enhancements

- [ ] Integration with semantic-release
- [ ] Automated version bumping
- [ ] Multi-language changelog support
- [ ] Integration with GitHub releases
- [ ] Slack/Teams notifications

## Contributing

When contributing to the changelog system:
1. Test changes with `--dry-run` first
2. Validate against existing changelogs
3. Update documentation for new features
4. Consider backward compatibility

---

For questions or issues, please refer to the main project documentation or create an issue in the repository.
