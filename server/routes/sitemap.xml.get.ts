export default defineEventHandler((event) => {
  const siteUrl = 'https://katoemma.website'
  const urls = ['']
    .map((path) => `${siteUrl}/${path}`.replace(/\/$/, ''))

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
      .map(
        (u) => `<url>
    <loc>${u}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
      )
      .join('\n  ')}
</urlset>`

  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  return body
})

