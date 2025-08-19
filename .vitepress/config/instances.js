// Shared instance configuration for both build-time and runtime use
export const INSTANCE_CONFIG = {
    // Set this to 'analytixin' or 'biobank' to switch instances
    CURRENT_INSTANCE: typeof process !== 'undefined' && process.env ? (process.env.DOCS_INSTANCE || 'analytixin') : 'analytixin',

    analytixin: {
        PLATFORM_NAME: 'AnalytiXIN',
        PLATFORM_FULL_NAME: 'AnalytiXIN Clinical Genomic Portal',
        ORGANIZATION: 'AnalytiXIN',
        SUPPORT_EMAIL: 'axin@iu.edu',
        WEBSITE_URL: 'https://axin.sca.iu.edu/',
        GITHUB_URL: 'https://github.com/your-org/analytixin',
        COPYRIGHT_YEAR: '2025'
    },

    biobank: {
        PLATFORM_NAME: 'Indiana Biobank',
        PLATFORM_FULL_NAME: 'Indiana Biobank Research Portal',
        ORGANIZATION: 'Indiana Biobank',
        SUPPORT_EMAIL: 'inbiobnk@iu.edu',
        WEBSITE_URL: 'https://biobank.sca.iu.edu/',
        GITHUB_URL: 'https://github.com/your-org/biobank',
        COPYRIGHT_YEAR: '2025'
    }
};

export const getCurrentConfig = () => INSTANCE_CONFIG[INSTANCE_CONFIG.CURRENT_INSTANCE];
