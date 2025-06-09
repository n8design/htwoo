#!/bin/bash

# Enhanced Nx Release Orchestration Script
# This script provides advanced release workflows that leverage Nx's task orchestration

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Functions
log_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

log_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

log_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

log_error() {
    echo -e "${RED}❌ $1${NC}"
}

show_help() {
    cat << EOF
Enhanced Nx Release Orchestration for htwoo workspace

USAGE:
    ./scripts/nx-release.sh [COMMAND] [OPTIONS]

COMMANDS:
    status          Show current release status and workspace health
    check           Run comprehensive pre-release checks
    plan            Plan release showing affected projects and dependencies
    release         Execute full release pipeline with Nx orchestration
    release-patch   Release patch version (2.7.3 → 2.7.4)
    release-minor   Release minor version (2.7.3 → 2.8.0)
    release-major   Release major version (2.7.3 → 3.0.0)
    release-core    Release only htwoo-core package
    release-react   Release only htwoo-react package
    release-both    Release both packages (coordinated)
    dry-run         Simulate release without making changes
    rollback        Rollback last release (emergency use only)

OPTIONS:
    --package=PACKAGE   Target specific package (core|react|both)
    --skip-tests        Skip test execution (not recommended)
    --skip-build        Skip build step (use with caution)
    --parallel          Enable parallel execution where possible
    --verbose           Enable verbose output
    --help, -h          Show this help message

EXAMPLES:
    ./scripts/nx-release.sh status
    ./scripts/nx-release.sh check --verbose
    ./scripts/nx-release.sh release-patch --package=react
    ./scripts/nx-release.sh release-both --parallel
    ./scripts/nx-release.sh dry-run --package=core

WORKFLOW:
    1. status     → Check workspace health
    2. check      → Validate pre-release requirements
    3. plan       → Review what will be affected
    4. release    → Execute the release pipeline

PACKAGE TARGETING:
    Default: htwoo-core (for backward compatibility)
    --package=core    → Release htwoo-core only
    --package=react   → Release htwoo-react only  
    --package=both    → Release both packages (coordinated)

EOF
}

check_prerequisites() {
    log_info "Checking prerequisites..."
    
    # Check if we're in a git repository
    if ! git rev-parse --git-dir > /dev/null 2>&1; then
        log_error "Not in a git repository"
        exit 1
    fi
    
    # Check if working directory is clean
    if [[ -n $(git status --porcelain) ]]; then
        log_warning "Working directory has uncommitted changes"
        git status --short
        read -p "Continue anyway? (y/N): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            exit 1
        fi
    fi
    
    # Check if on main/master branch
    current_branch=$(git branch --show-current)
    if [[ "$current_branch" != "main" && "$current_branch" != "master" ]]; then
        log_warning "Not on main/master branch (current: $current_branch)"
        read -p "Continue anyway? (y/N): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            exit 1
        fi
    fi
    
    # Check Nx installation
    if ! command -v nx &> /dev/null; then
        log_error "Nx CLI not found. Install with: npm install -g nx"
        exit 1
    fi
    
    log_success "Prerequisites check passed"
}

show_status() {
    log_info "=== Workspace Status ==="
    
    # Current versions
    echo "📦 Current Versions:"
    echo "   htwoo-core:"
    npm run version:check 2>/dev/null || echo "     Version check failed"
    echo "   htwoo-react:"
    npm run version:react:check 2>/dev/null || echo "     Version check failed"
    echo
    
    # Git status
    echo "🔧 Git Status:"
    echo "   Branch: $(git branch --show-current)"
    echo "   Latest commit: $(git log -1 --pretty=format:'%h - %s (%cr)' 2>/dev/null)"
    echo "   Uncommitted changes: $(git status --porcelain | wc -l | xargs)"
    echo
    
    # Project status
    echo "🏗️  Project Status:"
    echo "   htwoo-core build: $(stat -f %Sm -t %Y-%m-%d\ %H:%M packages/htwoo-core/dist 2>/dev/null || echo 'Never')"
    echo "   htwoo-react build: $(stat -f %Sm -t %Y-%m-%d\ %H:%M htwoo-react/lib 2>/dev/null || echo 'Never')"
    echo "   Core package: $(test -f packages/htwoo-core/package.json && echo 'Valid' || echo 'Invalid')"
    echo "   React package: $(test -f htwoo-react/package.json && echo 'Valid' || echo 'Invalid')"
    echo
    
    # Dependencies
    echo "🔗 Nx Project Graph:"
    nx show projects --with-target=build | head -5
    echo
}

run_nx_checks() {
    local target_package=${1:-"core"}
    
    log_info "Running comprehensive Nx-powered checks for package: $target_package..."
    
    # Show what would be affected
    echo "📊 Affected Projects Analysis:"
    nx show projects --affected --with-target=build || log_warning "No affected projects detected"
    echo
    
    # Run parallel validation based on package
    log_info "Running validation across targeted projects..."
    if [[ "$SKIP_TESTS" != "true" ]]; then
        case $target_package in
            "core")
                nx run htwoo-core-styleguide:test htwoo-core-styleguide:validate --parallel=2 || {
                    log_error "Core validation failed"
                    exit 1
                }
                ;;
            "react")
                nx run htwoo-react:test htwoo-react:validate --parallel=2 || {
                    log_error "React validation failed"
                    exit 1
                }
                ;;
            "both")
                nx run-many -t test validate --parallel=3 || {
                    log_error "Validation failed"
                    exit 1
                }
                ;;
        esac
    fi
    
    # Check version synchronization based on package
    log_info "Checking version synchronization..."
    case $target_package in
        "core")
            npm run version:check || {
                log_error "Core version synchronization check failed"
                exit 1
            }
            ;;
        "react")
            npm run version:react:check || {
                log_error "React version synchronization check failed"
                exit 1
            }
            ;;
        "both")
            npm run version:check && npm run version:react:check || {
                log_error "Version synchronization check failed"
                exit 1
            }
            ;;
    esac
    
    log_success "All checks passed"
}

plan_release() {
    local target_package=${1:-"core"}
    
    log_info "=== Release Planning for: $target_package ==="
    
    # Show current state
    echo "📋 Current State:"
    case $target_package in
        "core")
            npm run version:check
            ;;
        "react")
            npm run version:react:check
            ;;
        "both")
            echo "  Core package:"
            npm run version:check
            echo "  React package:"
            npm run version:react:check
            ;;
    esac
    echo
    
    # Show what will be built
    echo "🏗️  Build Plan:"
    case $target_package in
        "core")
            echo "  Target: htwoo-core-styleguide"
            ;;
        "react")
            echo "  Target: htwoo-react"
            ;;
        "both")
            echo "  Targets: htwoo-core-styleguide, htwoo-react"
            ;;
    esac
    nx show projects --with-target=build
    echo
    
    # Show dependency graph
    echo "🔗 Project Dependencies:"
    nx graph --file=temp-graph.html --open=false > /dev/null 2>&1 || true
    echo "   Dependency graph saved to temp-graph.html"
    echo
    
    # Show changelog preview
    echo "📝 Changelog Preview:"
    case $target_package in
        "core")
            npm run changelog:preview 2>/dev/null || echo "   Core changelog preview not available"
            ;;
        "react")
            npm run changelog:react:preview 2>/dev/null || echo "   React changelog preview not available"
            ;;
        "both")
            echo "  Core:"
            npm run changelog:preview 2>/dev/null || echo "   Core changelog preview not available"
            echo "  React:"
            npm run changelog:react:preview 2>/dev/null || echo "   React changelog preview not available"
            ;;
    esac
    echo
    
    log_info "Review the plan above before proceeding with release"
}

execute_release() {
    local release_type=${1:-"patch"}
    local target_package=${2:-"core"}
    
    log_info "=== Executing $release_type Release for: $target_package ==="
    
    case $target_package in
        "core")
            execute_core_release "$release_type"
            ;;
        "react")
            execute_react_release "$release_type"
            ;;
        "both")
            execute_coordinated_release "$release_type"
            ;;
        *)
            log_error "Unknown package target: $target_package"
            exit 1
            ;;
    esac
    
    log_success "Release completed successfully!"
    log_info "Next steps:"
    echo "  1. Verify published packages"
    echo "  2. Update documentation if needed"
    echo "  3. Announce release to stakeholders"
}

execute_core_release() {
    local release_type=$1
    
    # Pre-release tasks
    log_info "Step 1/5: Pre-release validation (htwoo-core)"
    nx run htwoo-core-styleguide:pre-release || {
        log_error "Pre-release validation failed"
        exit 1
    }
    
    # Build phase
    if [[ "$SKIP_BUILD" != "true" ]]; then
        log_info "Step 2/5: Building htwoo-core"
        nx run htwoo-core-styleguide:build
    else
        log_warning "Skipping build phase"
    fi
    
    # Test phase
    if [[ "$SKIP_TESTS" != "true" ]]; then
        log_info "Step 3/5: Running tests (htwoo-core)"
        nx run htwoo-core-styleguide:test
    else
        log_warning "Skipping test phase"
    fi
    
    # Release execution
    log_info "Step 4/5: Executing core release"
    case $release_type in
        "patch")
            nx run htwoo-core-styleguide:htwoo-release:patch
            ;;
        "minor")
            nx run htwoo-core-styleguide:htwoo-release:minor
            ;;
        "major")
            nx run htwoo-core-styleguide:htwoo-release:major
            ;;
        "auto"|"")
            nx run htwoo-core-styleguide:htwoo-release
            ;;
        *)
            log_error "Unknown release type: $release_type"
            exit 1
            ;;
    esac
    
    # Post-release tasks
    log_info "Step 5/5: Post-release tasks (htwoo-core)"
    nx run htwoo-core-styleguide:post-release
}

execute_react_release() {
    local release_type=$1
    
    # Pre-release tasks
    log_info "Step 1/5: Pre-release validation (htwoo-react)"
    nx run htwoo-react:pre-release || {
        log_error "Pre-release validation failed"
        exit 1
    }
    
    # Build phase
    if [[ "$SKIP_BUILD" != "true" ]]; then
        log_info "Step 2/5: Building htwoo-react"
        nx run htwoo-react:build
    else
        log_warning "Skipping build phase"
    fi
    
    # Test phase
    if [[ "$SKIP_TESTS" != "true" ]]; then
        log_info "Step 3/5: Running tests (htwoo-react)"
        nx run htwoo-react:test
    else
        log_warning "Skipping test phase"
    fi
    
    # Release execution
    log_info "Step 4/5: Executing react release"
    case $release_type in
        "patch")
            nx run htwoo-react:htwoo-release:patch
            ;;
        "minor")
            nx run htwoo-react:htwoo-release:minor
            ;;
        "major")
            nx run htwoo-react:htwoo-release:major
            ;;
        "auto"|"")
            nx run htwoo-react:htwoo-release
            ;;
        *)
            log_error "Unknown release type: $release_type"
            exit 1
            ;;
    esac
    
    # Post-release tasks
    log_info "Step 5/5: Post-release tasks (htwoo-react)"
    nx run htwoo-react:post-release
}

execute_coordinated_release() {
    local release_type=$1
    
    log_info "=== Coordinated Release Strategy ==="
    log_info "Releasing both packages with synchronized versions..."
    
    # Pre-release tasks for both
    log_info "Step 1/6: Pre-release validation (both packages)"
    nx run htwoo-core-styleguide:pre-release && nx run htwoo-react:pre-release || {
        log_error "Pre-release validation failed"
        exit 1
    }
    
    # Build phase (respecting dependencies)
    if [[ "$SKIP_BUILD" != "true" ]]; then
        log_info "Step 2/6: Building packages (core first, then react)"
        nx run htwoo-core-styleguide:build
        nx run htwoo-react:build
    else
        log_warning "Skipping build phase"
    fi
    
    # Test phase
    if [[ "$SKIP_TESTS" != "true" ]]; then
        log_info "Step 3/6: Running tests (parallel where possible)"
        if [[ "$PARALLEL" == "true" ]]; then
            nx run htwoo-core-styleguide:test & nx run htwoo-react:test &
            wait
        else
            nx run htwoo-core-styleguide:test
            nx run htwoo-react:test
        fi
    else
        log_warning "Skipping test phase"
    fi
    
    # Core release first
    log_info "Step 4/6: Executing core release"
    case $release_type in
        "patch")
            nx run htwoo-core-styleguide:htwoo-release:patch
            ;;
        "minor")
            nx run htwoo-core-styleguide:htwoo-release:minor
            ;;
        "major")
            nx run htwoo-core-styleguide:htwoo-release:major
            ;;
        "auto"|"")
            nx run htwoo-core-styleguide:htwoo-release
            ;;
    esac
    
    # React release second
    log_info "Step 5/6: Executing react release"
    case $release_type in
        "patch")
            nx run htwoo-react:htwoo-release:patch
            ;;
        "minor")
            nx run htwoo-react:htwoo-release:minor
            ;;
        "major")
            nx run htwoo-react:htwoo-release:major
            ;;
        "auto"|"")
            nx run htwoo-react:htwoo-release
            ;;
    esac
    
    # Post-release tasks for both
    log_info "Step 6/6: Post-release tasks (both packages)"
    nx run htwoo-core-styleguide:post-release
    nx run htwoo-react:post-release
}

# Parse command line arguments
COMMAND=""
TARGET_PACKAGE="core"  # Default to core for backward compatibility
SKIP_TESTS="false"
SKIP_BUILD="false"
PARALLEL="false"
VERBOSE="false"

while [[ $# -gt 0 ]]; do
    case $1 in
        status|check|plan|release|release-patch|release-minor|release-major|release-core|release-react|release-both|dry-run|rollback)
            COMMAND="$1"
            shift
            ;;
        --package=*)
            TARGET_PACKAGE="${1#*=}"
            shift
            ;;
        --package)
            TARGET_PACKAGE="$2"
            shift 2
            ;;
        --skip-tests)
            SKIP_TESTS="true"
            shift
            ;;
        --skip-build)
            SKIP_BUILD="true"
            shift
            ;;
        --parallel)
            PARALLEL="true"
            shift
            ;;
        --verbose)
            VERBOSE="true"
            set -x
            shift
            ;;
        --help|-h)
            show_help
            exit 0
            ;;
        *)
            log_error "Unknown option: $1"
            show_help
            exit 1
            ;;
    esac
done

# Validate package target
case $TARGET_PACKAGE in
    "core"|"react"|"both")
        ;;
    *)
        log_error "Invalid package target: $TARGET_PACKAGE. Use: core, react, or both"
        exit 1
        ;;
esac

# Main execution
case $COMMAND in
    "status")
        show_status
        ;;
    "check")
        check_prerequisites
        run_nx_checks "$TARGET_PACKAGE"
        ;;
    "plan")
        check_prerequisites
        plan_release "$TARGET_PACKAGE"
        ;;
    "release")
        check_prerequisites
        run_nx_checks "$TARGET_PACKAGE"
        execute_release "auto" "$TARGET_PACKAGE"
        ;;
    "release-patch")
        check_prerequisites
        run_nx_checks "$TARGET_PACKAGE"
        execute_release "patch" "$TARGET_PACKAGE"
        ;;
    "release-minor")
        check_prerequisites
        run_nx_checks "$TARGET_PACKAGE"
        execute_release "minor" "$TARGET_PACKAGE"
        ;;
    "release-major")
        check_prerequisites
        run_nx_checks "$TARGET_PACKAGE"
        execute_release "major" "$TARGET_PACKAGE"
        ;;
    "release-core")
        check_prerequisites
        run_nx_checks "core"
        execute_release "auto" "core"
        ;;
    "release-react")
        check_prerequisites
        run_nx_checks "react"
        execute_release "auto" "react"
        ;;
    "release-both")
        check_prerequisites
        run_nx_checks "both"
        execute_release "auto" "both"
        ;;
    "dry-run")
        check_prerequisites
        log_info "=== DRY RUN MODE (Package: $TARGET_PACKAGE) ==="
        plan_release "$TARGET_PACKAGE"
        log_info "This was a dry run. No changes were made."
        ;;
    "rollback")
        log_warning "Rollback functionality requires manual intervention"
        log_info "To rollback:"
        case $TARGET_PACKAGE in
            "core")
                echo "  htwoo-core rollback:"
                echo "    1. Revert git tag: git tag -d \$(git describe --tags --abbrev=0 | grep core)"
                echo "    2. Reset to previous commit: git reset --hard HEAD~1"
                echo "    3. Force push: git push --force-with-lease"
                echo "    4. Unpublish: npm unpublish @n8d/htwoo-core@<version>"
                ;;
            "react")
                echo "  htwoo-react rollback:"
                echo "    1. Revert git tag: git tag -d \$(git describe --tags --abbrev=0 | grep react)"
                echo "    2. Reset to previous commit: git reset --hard HEAD~1"
                echo "    3. Force push: git push --force-with-lease"
                echo "    4. Unpublish: npm unpublish @n8d/htwoo-react@<version>"
                ;;
            "both")
                echo "  Both packages rollback:"
                echo "    1. Revert git tags: git tag -d \$(git describe --tags --abbrev=0)"
                echo "    2. Reset to previous commit: git reset --hard HEAD~2"
                echo "    3. Force push: git push --force-with-lease"
                echo "    4. Unpublish both packages from npm"
                ;;
        esac
        ;;
    "")
        log_error "No command specified"
        show_help
        exit 1
        ;;
    *)
        log_error "Unknown command: $COMMAND"
        show_help
        exit 1
        ;;
esac
