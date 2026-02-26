# Copilot Instructions for skills-create-applications-with-the-copilot-cli

## Repository Purpose

This is a GitHub Skills exercise repository focused on teaching developers how to use the GitHub Copilot CLI - a standalone terminal application that brings GitHub Copilot capabilities to the command line. The primary goal is to build a Node.js CLI calculator application using Copilot CLI assistance.

## Key Workflow

1. **Issue-Driven Development**: Start by creating feature request issues using the provided issue template (`.github/ISSUE_TEMPLATE/feature_request.md`)
2. **CLI-First Approach**: Use `copilot --enable-all-github-mcp-tools` to access GitHub features directly from terminal
3. **Step-by-Step Progression**: Follow the steps outlined in `.github/steps/` directory for guided progression

## Important Commands

### Installing Copilot CLI
```bash
npm install -g @github/copilot
copilot --version
```

### Starting Copilot CLI Session
```bash
copilot --enable-all-github-mcp-tools
```

### Useful Copilot CLI Slash Commands
- `/session` - View current session details
- `/context` - Show token usage overview
- `/usage` - View session statistics (requests, duration, code edits, token breakdown)
- `/login` - Authenticate with GitHub
- `/add-dir <directory>` - Add directory to allowed list
- `/delegate <prompt>` - Delegate tasks to Copilot coding agent

### Copilot CLI Keyboard Shortcuts
- `@` - Mention files to include in context
- `Shift+Tab` - Switch between plan mode and regular interactive mode
- `Ctrl+A` - Move to beginning of line
- `Ctrl+E` - Move to end of line
- `Ctrl+C` - Cancel operation / exit
- `Ctrl+D` - Shutdown

## GitHub Integration

This repository uses GitHub MCP (Model Context Protocol) tools accessible via Copilot CLI:
- Create and manage issues using `gh issue` commands
- Manage repositories and pull requests
- Interact with GitHub features directly from the terminal

### Permissions

When Copilot CLI requests permissions for `gh issue` and `git config`, approve them for the session to streamline workflow.

## Development Environment

- **Node.js**: Version 22+ required
- **npm**: Version 10+ required
- **GitHub Copilot**: Active subscription required (Pro, Pro+, Business, or Enterprise)
- **GitHub Authentication**: Use `gh auth login` for authentication

## Issue Template Guidelines

When creating issues, use `.github/ISSUE_TEMPLATE/feature_request.md` which requires:
- **Feature Description**: Clear, concise description of the feature
- **Use Case**: The problem this feature would solve
- **Proposed Solution**: Envisioned implementation approach
- **Additional Context**: Examples, screenshots, or supplementary information

## Project Structure

- `.github/steps/` - Step-by-step exercise instructions
- `.github/ISSUE_TEMPLATE/` - Issue templates for feature requests
- `.github/instructions/` - Additional instruction files
- Root directory - Application code (including calculator.js for calculator implementation)

## Next Steps for New Sessions

1. Review the current issue in `.github/steps/` for context
2. Run `copilot --enable-all-github-mcp-tools` to start development
3. Use `/context` to understand current state
4. Follow step-by-step guidance in the exercise
5. Create issues and manage development through Copilot CLI

## Notes for AI Assistants

- This is a **learning exercise repository**, not a production application
- Focus on demonstrating Copilot CLI workflows and best practices
- Respect the step-by-step progression outlined in `.github/steps/`
- Emphasize terminal-first workflows over GUI-based approaches
- Highlight GitHub MCP tool capabilities when available
