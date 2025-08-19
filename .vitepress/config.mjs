import { globalVarsPlugin } from './plugins/globalVars.js'
import { getCurrentConfig } from './config/instances.js'
import { withMermaid } from "vitepress-plugin-mermaid";

const currentConfig = getCurrentConfig();

export default withMermaid({
  title: `${currentConfig.PLATFORM_NAME} Documentation`,
  description: `User documentation for the ${currentConfig.PLATFORM_FULL_NAME}`,

  // Define global variables that can be used in markdown files
  define: {
    __PLATFORM_NAME__: JSON.stringify(currentConfig.PLATFORM_NAME),
    __PLATFORM_FULL_NAME__: JSON.stringify(currentConfig.PLATFORM_FULL_NAME),
    __ORGANIZATION__: JSON.stringify(currentConfig.ORGANIZATION),
    __SUPPORT_EMAIL__: JSON.stringify(currentConfig.SUPPORT_EMAIL),
    __WEBSITE_URL__: JSON.stringify(currentConfig.WEBSITE_URL),
    __GITHUB_URL__: JSON.stringify(currentConfig.GITHUB_URL),
    __COPYRIGHT_YEAR__: JSON.stringify(currentConfig.COPYRIGHT_YEAR)
  },

  // Configure markdown plugins
  markdown: {
    config: (md) => {
      md.use(globalVarsPlugin, {
        variables: currentConfig
      })
    }
  },

  // Register global components
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => false
      }
    }
  },

  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "API", link: "/api/" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Introduction",
          items: [
            { text: `What is ${currentConfig.PLATFORM_NAME}?`, link: "/guide/what-is-biobank" },
            { text: "Getting Started", link: "/guide/getting-started" },
            { text: "Indiana Biobank vs. AnalytiXIN", link: "/guide/biobank-vs-axin" },
          ],
        },
        {
          text: "Platform Features",
          items: [
            { text: "Cohort Builder", link: "/guide/cohort-builder" },
            { text: "Variant Xplorer", link: "/guide/variant-explorer" },
            { text: "Data Browser", link: "/guide/data-browser" },
            { text: "Secure Enclave Access", link: "/guide/secure-enclave-access" },
          ],
        },
      ],
      "/api/": [
        {
          text: "API Reference",
          items: [
            { text: "Overview", link: "/api/overview" },
            { text: "Authentication", link: "/api/authentication" },
            { text: "Endpoints", link: "/api/endpoints" },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: currentConfig.GITHUB_URL },
    ],
    footer: {
      message: "",
      copyright: `Copyright © ${currentConfig.COPYRIGHT_YEAR} ${currentConfig.ORGANIZATION}`,
    },
    search: {
      provider: "local",
    },
  },
});
