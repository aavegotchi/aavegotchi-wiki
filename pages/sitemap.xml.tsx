const Sitemap = () => null
Sitemap.getInitialProps = async ({ res }) => {
    if (!res) return {}

    res.setHeader('content-type', 'application/xml')

    const date = new Date()
    const serverTime = date.toISOString()
    const endpoint = "https://blog.coderdan.dev"

    var content = ""

    var homepage =
        `<url>
                <loc>${endpoint}</loc>
                <lastmod>${serverTime}</lastmod>
                <changefreq>daily</changefreq>
                <priority>0.8</priority>
                </url>`

    content = content + homepage



    res.end(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${content}</urlset>`)
    return {}
}

export default Sitemap