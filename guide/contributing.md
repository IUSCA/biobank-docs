# Contributing to Documentation

## Introduction

Thank you for your interest in contributing to the documentation! This guide will help you understand how to contribute edits, improvements, and new content to this repository.

The documentation is built using [VitePress](https://vitepress.dev/) and hosted on GitHub at [https://github.com/iusca/biobank-docs](https://github.com/iusca/biobank-docs).

## Getting Started

### Prerequisites

Before contributing, ensure you have:

- A GitHub account
- Basic knowledge of Markdown formatting
- Git installed on your local machine (for local development)
- Node.js and npm (for local testing)

### Repository Structure

The documentation follows this structure:

```
biobank-docs/
├── guide/              # User guides and tutorials
├── api/                # API documentation
├── public/             # Static assets (images, etc.)
├── .vitepress/         # VitePress configuration
├── index.md            # Homepage
└── package.json        # Dependencies
```

## Contributing Methods

### Method 1: Quick Edits via GitHub Web Interface

For small edits like typos, clarifications, or minor content updates:

1. **Navigate to the file**: Go to [https://github.com/iusca/biobank-docs](https://github.com/iusca/biobank-docs) and find the file you want to edit
2. **Click the edit button**: Click the pencil icon (✏️) in the top-right corner of the file view
3. **Make your changes**: Edit the content using GitHub's web editor
4. **Preview your changes**: Use the "Preview" tab to see how your changes will look
5. **Commit your changes**: 
   - Add a descriptive commit message
   - Choose "Create a new branch for this commit and start a pull request"
   - Click "Propose changes"
6. **Create pull request**: Fill out the pull request template and submit

### Method 2: Fork and Clone (Recommended for Larger Changes)

For substantial edits, new pages, or multiple file changes:

#### Step 1: Fork the Repository

1. Go to [https://github.com/iUSCA/biobank-docs](https://github.com/iusca/biobank-docs)
2. Click the "Fork" button in the top-right corner
3. This creates a copy of the repository in your GitHub account

#### Step 2: Clone Your Fork

```bash
git clone https://github.com/YOUR-USERNAME/biobank-docs.git
cd biobank-docs
```

#### Step 3: Set Up Local Development

Note: If you simply want to edit the markdown files without previewing the results, you can skip this step

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The documentation will be available at `http://localhost:5173`

#### Step 4: Create a Feature Branch

```bash
git checkout -b feature/your-contribution-name
```

#### Step 5: Make Your Changes

- Edit existing files or create new ones
- Follow the existing formatting and style conventions
- Test your changes locally using `npm run dev`

#### Step 6: Commit and Push

```bash
git add .
git commit -m "Descriptive commit message about your changes"
git push origin feature/your-contribution-name
```

#### Step 7: Create a Pull Request

1. Go to your fork on GitHub
2. Click "Compare & pull request"
3. Fill out the pull request template
4. Submit the pull request

## Content Guidelines

### Writing Style

- **Clear and concise**: Use simple, direct language
- **User-focused**: Write from the user's perspective
- **Consistent terminology**: Use the same terms throughout the documentation
- **Active voice**: Prefer active voice over passive voice

### Markdown Formatting

The documentation uses standard Markdown with some VitePress-specific features:

#### Headers
```markdown
# Main Title (H1)
## Section Title (H2)
### Subsection Title (H3)
```

#### Code Blocks
```markdown
```bash
npm install
```
```

#### Images
```markdown
![Alt text](../public/images/filename.png)
```

#### Links
```markdown
[Link text](./other-page.md)
[External link](https://example.com)
```

#### Global Variables
The documentation uses global variables for platform-specific terms:
```markdown
{{PLATFORM_FULL_NAME}}
{{PLATFORM_NAME}}
{{WEBSITE_URL}}
{{SUPPORT_EMAIL}}
```

### File Organization

- **Guide pages**: Place user-facing documentation in the `guide/` directory
- **API documentation**: Place technical API docs in the `api/` directory
- **Images**: Store images in `public/images/` with descriptive filenames
- **Screenshots**: Organize screenshots in `public/images/screenshots/`

### Adding New Pages

When creating new pages:

1. **Create the file**: Add your `.md` file in the appropriate directory
2. **Update navigation**: Add the page to the relevant index file (e.g., `guide/index.md`)
3. **Use consistent formatting**: Follow the existing page structure
4. **Add appropriate metadata**: Include relevant frontmatter if needed

## Review Process

### What to Expect

1. **Automated checks**: Your pull request will trigger automated checks
2. **Maintainer review**: A project maintainer will review your contribution
3. **Feedback**: You may receive feedback or requests for changes
4. **Approval and merge**: Once approved, your changes will be merged

### Review Criteria

Contributions are evaluated based on:

- **Accuracy**: Information must be correct and up-to-date
- **Clarity**: Content should be easy to understand
- **Completeness**: Documentation should be thorough
- **Consistency**: Style and formatting should match existing content
- **Relevance**: Content should be valuable to users

## Types of Contributions

### Welcome Contributions

- **Bug fixes**: Correcting errors in documentation
- **Clarifications**: Making existing content clearer
- **New content**: Adding missing documentation
- **Examples**: Providing practical examples
- **Screenshots**: Adding or updating visual aids
- **Translations**: Translating content 


## Getting Help

### Resources

- **VitePress Documentation**: [https://vitepress.dev/](https://vitepress.dev/)
- **Markdown Guide**: [https://www.markdownguide.org/](https://www.markdownguide.org/)
- **GitHub Documentation**: [https://docs.github.com/](https://docs.github.com/)

### Support

If you need help with your contribution:

- **Create an issue**: Open an issue on GitHub to ask questions
- **Contact maintainers**: Reach out to project maintainers
- **Email support**: Contact {{SUPPORT_EMAIL}} for assistance

## Code of Conduct

By contributing to this project, you agree to:

- Be respectful and inclusive in all interactions
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other contributors

## License

By contributing to this repository, you agree that your contributions will be licensed under the same license as the project.

## Thank You

Your contributions help make the {{PLATFORM_FULL_NAME}} documentation better for everyone. Thank you for taking the time to contribute!
