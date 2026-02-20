import React from "react";
import Head from "next/head";

interface NextReusableHeadProps {
    title: string
    description: string
    siteName: string
    url: string
    faviconPath: string

    //Twitter
    creator?: string
    image?: string
    structuredData?: Record<string, any> | Record<string, any>[]
}

const NextReusableHead = (props: NextReusableHeadProps) => {

    const { title, description, siteName, url, image, faviconPath, creator, structuredData } = props
    const schemas = Array.isArray(structuredData)
        ? structuredData
        : structuredData
            ? [structuredData]
            : []

    return (
        <Head>

            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:type" content="website" />
            <meta name="og:title" property="og:title" content={title} />

            {description && <meta name="og:description" property="og:description" content={description} />}

            <meta property="og:site_name" content={siteName} />
            <meta property="og:url" content={url} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            {description && <meta name="twitter:description" content={description} />}
            <meta name="twitter:site" content={siteName} />

            {creator && <meta name="twitter:creator" content={creator} />}
            <link rel="icon" type="image/png" href={faviconPath} />
            <link rel="apple-touch-icon" href={faviconPath} />
            {image && <meta property="og:image" content={image} />}
            {image && <meta name="twitter:image" content={image} />}

            <link rel="canonical" href={url} />
            {schemas.map((schema, index) => (
                <script
                    key={`schema-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </Head>
    );
}
export default NextReusableHead;
