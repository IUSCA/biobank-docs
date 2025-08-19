# Global Variables Documentation

This VitePress documentation supports global variables that allow you to maintain a single set of documentation for both Indiana Biobank and AnalytiXIN instances.

## Available Variables

The following global variables are available throughout the documentation:

- `PLATFORM_NAME` - Short platform name (e.g., "AnalytiXIN" or "Indiana Biobank")
- `PLATFORM_FULL_NAME` - Full platform name (e.g., "AnalytiXIN Clinical Genomic Portal")
- `ORGANIZATION` - Organization name (e.g., "AnalytiXIN Team")
- `SUPPORT_EMAIL` - Support email address
- `WEBSITE_URL` - Main website URL
- `GITHUB_URL` - GitHub repository URL
- `COPYRIGHT_YEAR` - Copyright year

## Usage Methods

### Method 1: Using Double Curly Braces (Recommended)

Use the `{{VARIABLE_NAME}}` syntax in your markdown files:

```markdown
# Welcome to {{PLATFORM_NAME}}

For support, contact {{SUPPORT_EMAIL}}.

Visit our website: [{{WEBSITE_URL}}]({{WEBSITE_URL}})
```

### Method 2: Using the GlobalVars Component (Alternative)

Use the `<GlobalVars>` component in your markdown files:

```markdown
# Welcome to <GlobalVars name="PLATFORM_NAME" />

For support, contact <GlobalVars name="SUPPORT_EMAIL" />.

Visit our website: [<GlobalVars name="WEBSITE_URL" />](<GlobalVars name="WEBSITE_URL" />)
```

### Method 3: Using Define Variables in Vue Components

If you're creating custom Vue components, you can access the variables directly:

```javascript
// In a Vue component
const platformName = __PLATFORM_NAME__
const supportEmail = __SUPPORT_EMAIL__
```

## Switching Between Instances

### Method 1: Environment Variable (Recommended for Build Systems)

Set the `DOCS_INSTANCE` environment variable when building:

```bash
# Build for AnalytiXIN (default)
npm run docs:build

# Build for Indiana Biobank
DOCS_INSTANCE=biobank npm run docs:build

# Development server for Indiana Biobank
DOCS_INSTANCE=biobank npm run docs:dev
```

### Method 2: Direct Configuration Edit

Edit `.vitepress/config.js` and change the `CURRENT_INSTANCE` value:

```javascript
const INSTANCE_CONFIG = {
  // Change this line:
  CURRENT_INSTANCE: 'biobank', // or 'analytixin'
  // ...
}
```

## Adding New Variables

To add new global variables:

1. Add the variable to both instance configurations in `.vitepress/config.js`:

```javascript
analytixin: {
  PLATFORM_NAME: 'AnalytiXIN',
  NEW_VARIABLE: 'new value for AnalytiXIN',
  // ...
},
biobank: {
  PLATFORM_NAME: 'Indiana Biobank',
  NEW_VARIABLE: 'new value for Indiana Biobank',
  // ...
}
```

2. Add it to the `define` section:

```javascript
define: {
  __NEW_VARIABLE__: JSON.stringify(currentConfig.NEW_VARIABLE),
  // ...
}
```

3. Add it to the GlobalVars component (`.vitepress/components/GlobalVars.vue`):

```javascript
const globalVars = {
  NEW_VARIABLE: __NEW_VARIABLE__,
  // ...
}
```

## Best Practices

1. **Use descriptive variable names** that clearly indicate their purpose
2. **Keep instance-specific content minimal** - focus on names, URLs, and contact information
3. **Test both instances** before deploying to ensure all variables render correctly
4. **Use the GlobalVars component** instead of hardcoding values in markdown
5. **Document any new variables** you add to this file

## Example: Converting Existing Content

Before:
```markdown
# Welcome to AnalytiXIN

Contact us at support@analytixin.org for help.
```

After (using double curly braces - recommended):
```markdown
# Welcome to {{PLATFORM_NAME}}

Contact us at {{SUPPORT_EMAIL}} for help.
```

Or (using GlobalVars component):
```markdown
# Welcome to <GlobalVars name="PLATFORM_NAME" />

Contact us at <GlobalVars name="SUPPORT_EMAIL" /> for help.
```

## Implementation Details

This solution provides two approaches:

1. **Markdown Plugin Approach**: Uses a custom markdown-it plugin that processes `{{VARIABLE_NAME}}` syntax during markdown compilation. This is simpler and more reliable.

2. **Vue Component Approach**: Uses a Vue component that can be embedded in markdown. This provides more flexibility but may have compatibility issues in some cases.

Both approaches use the same configuration in `.vitepress/config.js` and can be switched between instances using environment variables or direct configuration changes.

This approach ensures your documentation stays synchronized across both platforms while maintaining platform-specific branding and contact information.
