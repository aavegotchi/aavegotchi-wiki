import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document'
const { resolveAnalyticsModeFromCountry } = require("../lib/analyticsMode")

function getHeaderValue(value: string | string[] | undefined): string {
    if (Array.isArray(value)) {
        return value[0] || ""
    }
    return value || ""
}

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        const countryCode = getHeaderValue(ctx.req?.headers?.["x-vercel-ip-country"])
        const analyticsMode = resolveAnalyticsModeFromCountry(countryCode)
        return { ...initialProps, analyticsMode }
    }

    render() {
        const analyticsMode = (this.props as any).analyticsMode === "ga" ? "ga" : "restricted"

        return (
            <Html lang="en" data-analytics-mode={analyticsMode}>
                <Head>
                    <meta name="analytics-mode" content={analyticsMode} />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `window.__AAVEGOTCHI_ANALYTICS_MODE=${JSON.stringify(analyticsMode)};`,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
