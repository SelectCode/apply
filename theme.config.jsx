import {useRouter} from 'next/router'

export default {
    logo: <span>🚀 SelectCode Application</span>,
    banner: {
        key: 'jobs',
        text: (
            <a href="https://www.selectcode.de/stellenanzeigen" target="_blank">
                🎉 New Job Offers available. Read more →
            </a>
        )
    },
    project: {
        link: 'https://github.com/SelectCode/apply'
    },
    useNextSeoProps() {
        const {asPath} = useRouter()
        if (asPath !== '/') {
            return {
                titleTemplate: '%s – SelectCode'
            }
        }
    },
    editLink: {
        text: 'Edit this page on GitHub →'
    },
    sidebar: {
        titleComponent({title, type}) {
            if (type === 'separator') {
                return <span className="cursor-default">{title}</span>
            }
            return <>{title}</>
        },
        defaultMenuCollapseLevel: 1,
        toggleButton: true
    },
    feedback: {
        content: 'Question? Give us feedback →',
        labels: 'feedback'
    },
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta property="og:title" content="SelectCode Application"/>
            <meta property="og:description" content="Application challenges for SelectCode working student jobs"/>
        </>
    ),
    darkMode: true,
    primaryHue: 150,
    faviconGlyph: "🚀",
    footer: {
        text: (
            <span>
        {new Date().getFullYear()} ©{' '}
                <a href="https://www.selectcode.de" target="_blank">
          SelectCode GmbH
        </a>
        .
      </span>
        )
    },
    docsRepositoryBase: 'https://github.com/SelectCode/apply/tree/master',
}

