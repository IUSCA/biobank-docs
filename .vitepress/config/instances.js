// Shared instance configuration for both build-time and runtime use
export const INSTANCE_CONFIG = {
    // Set DOCS_INSTANCE to 'provena' (the default) or 'biobank' to switch instances
    CURRENT_INSTANCE: typeof process !== 'undefined' && process.env ? (process.env.DOCS_INSTANCE || 'provena') : 'provena',

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
        PHENOTYPE_REFERENCE_TITLE: 'Phenotype Data Reference',
        TRE_PORTAL_ACCESS_NOTE: ''
    },

    // Provena carries the AnalytiXIN datasets, so it shares their phenotype reference.
    provena: {
        PLATFORM_NAME: 'Provena Consortium',
        PLATFORM_FULL_NAME: 'Provena Consortium Research Portal',
        ORGANIZATION: 'Provena Consortium',
        SUPPORT_EMAIL: 'support@provenaconsortium.org',
        WEBSITE_URL: 'https://research.provenaconsortium.org/',
        API_URL: 'https://research.provenaconsortium.org/api',
        GITHUB_URL: 'https://github.com/iusca/biobank-docs',
        COPYRIGHT_YEAR: new Date().getFullYear().toString(),
        VIDEO_EMBED_HTML: '',
        COHORT_BUILDER_VIDEO_EMBED_HTML: '',
        PHENOTYPE_REFERENCE_PATH: '/guide/phenotype-data-reference-axin.md',
        PHENOTYPE_REFERENCE_LINK: '/guide/phenotype-data-reference-axin',
        PHENOTYPE_REFERENCE_TITLE: 'Phenotype Data Reference',
        TRE_PORTAL_ACCESS_NOTE: [
            '::: warning Not yet reachable from TRE workspaces',
            'TRE workspaces cannot reach the Provena Consortium Research Portal API yet, so `biobank-client` and the file downloads described in the API Client guide do not work from them.',
            'Contact support@provenaconsortium.org to have the data for an approved cohort staged into your workspace.',
            ':::'
        ].join('\n')
    }
};

export const getCurrentConfig = () => {
    const config = INSTANCE_CONFIG[INSTANCE_CONFIG.CURRENT_INSTANCE];
    if (!config || typeof config !== 'object') {
        throw new Error(`Unknown DOCS_INSTANCE '${INSTANCE_CONFIG.CURRENT_INSTANCE}'`);
    }
    return config;
};
