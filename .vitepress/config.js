export default {
  title: "AnalytiXIN Documentation",
  description: "User documentation for the AnalytiXIN Clinical Genomic Portal",
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
            { text: "What is AnalytiXIN?", link: "/guide/what-is-biobank" },
            { text: "Getting Started", link: "/guide/getting-started" },
            { text: "Indiana Biobank vs. AnalytiXIN", link: "/guide/biobank-vs-axin" },            
          ],
        },
        {
          text: "Platform Features",
          items: [
            { text: "Data Browser", link: "/guide/data-browser" },
            { text: "Cohort Builder", link: "/guide/cohort-builder" },
            { text: "Variant Xplorer", link: "/guide/variant-explorer" },
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
      { icon: "github", link: "https://github.com/your-org/biobank" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025 AnalytiXIN Team",
    },
    search: {
      provider: "local",
    },
  },
};
