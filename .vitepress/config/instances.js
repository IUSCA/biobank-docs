// Shared instance configuration for both build-time and runtime use
export const INSTANCE_CONFIG = {
    // Set this to 'analytixin' or 'biobank' to switch instances
    CURRENT_INSTANCE: typeof process !== 'undefined' && process.env ? (process.env.DOCS_INSTANCE || 'analytixin') : 'analytixin',

    analytixin: {
        PLATFORM_NAME: 'AnalytiXIN',
        PLATFORM_FULL_NAME: 'AnalytiXIN Clinical Genomic Portal',
        ORGANIZATION: 'AnalytiXIN',
        SUPPORT_EMAIL: 'support@analytixindiana.com',
        // WEBSITE_URL: 'https://axin.sca.iu.edu/',
        WEBSITE_URL: 'https://researcher.analytixindiana.com/',
        API_URL: 'https://api.axin.sca.iu.edu',
        GITHUB_URL: 'https://github.com/iusca/biobank-docs',
        COPYRIGHT_YEAR: new Date().getFullYear().toString(),
        VIDEO_EMBED_HTML: '<iframe width="560" height="315" src="https://www.youtube.com/embed/FVxP1J_ZYiI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        COHORT_BUILDER_VIDEO_EMBED_HTML: '<iframe width="560" height="315" src="https://www.youtube.com/embed/y3iiFEawM8Y?si=_fR42h6UDEvdwBT-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        PHENOTYPE_REFERENCE_PATH: '/guide/phenotype-data-reference-axin.md',
        PHENOTYPE_REFERENCE_LINK: '/guide/phenotype-data-reference-axin',
        PHENOTYPE_REFERENCE_TITLE: 'Phenotype Data Reference'
    },

    biobank: {
        PLATFORM_NAME: 'Indiana Biobank',
        PLATFORM_FULL_NAME: 'Indiana Biobank Research Portal',
        ORGANIZATION: 'Indiana Biobank',
        SUPPORT_EMAIL: 'inbiobnk@iu.edu',
        WEBSITE_URL: 'https://biobank.sca.iu.edu/',
        API_URL: 'https://api.biobank.sca.iu.edu',
        GITHUB_URL: 'https://github.com/iusca/biobank-docs',
        COPYRIGHT_YEAR: new Date().getFullYear().toString(),
        VIDEO_EMBED_HTML: '',
        COHORT_BUILDER_VIDEO_EMBED_HTML: '',
        PHENOTYPE_REFERENCE_PATH: '/guide/phenotype-data-reference-biobank.md',
        PHENOTYPE_REFERENCE_LINK: '/guide/phenotype-data-reference-biobank',
        PHENOTYPE_REFERENCE_TITLE: 'Phenotype Data Reference'
    }
};

export const getCurrentConfig = () => INSTANCE_CONFIG[INSTANCE_CONFIG.CURRENT_INSTANCE];
