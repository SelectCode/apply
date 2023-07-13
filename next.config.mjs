import nextra from 'nextra'

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',
    latex: true,
    flexsearch: {
        codeblocks: false
    },
    defaultShowCopyCode: true
})

export default withNextra({
    reactStrictMode: true,
    eslint: {
        // Eslint behaves weirdly in this monorepo.
        ignoreDuringBuilds: true
    },
    webpack(config) {
        const allowedSvgRegex = /components\/icons\/.+\.svg$/

        const fileLoaderRule = config.module.rules.find(rule =>
            rule.test?.test('.svg')
        )
        fileLoaderRule.exclude = allowedSvgRegex

        config.module.rules.push({
            test: allowedSvgRegex,
            use: ['@svgr/webpack']
        })
        return config
    }
})
