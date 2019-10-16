import { getAllPosts } from '../utils/posts'

const months = ',Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'.split(',')

const formatPubdate = str => {
  const [y, m, d] = str.split('-')
  return `${d} ${months[+m]} ${y} 12:00 +0000`
}

const postItem = post => `
    <item>
      <title>${post.metadata.title}</title>
      <link>${post.metadata.type}/${post.slug}</link>
      <description>${post.metadata.description}</description>
      <pubDate>${formatPubdate(post.metadata.pubdate)}</pubDate>
    </item>
  `

const rss = `
<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>Keycap</title>
  <link>https://thekeycap.com</link>
  <description>All things mechanical keyboards</description>
  <image>
    <url>https://thekeycap.com/favicon32x32.png</url>
    <title>Keycap</title>
    <link>https://thekeycap.com</link>
  </image>
  ${getAllPosts()
    .map(postItem)
    .join('')}
</channel>
</rss>
`
  .replace(/>[^\S]+/gm, '>')
  .replace(/[^\S]+</gm, '<')
  .trim()

export function get(req, res) {
  res.writeHead(200, {
    'Cache-Control': `max-age=${30 * 60 * 1e3}`,
    'Content-Type': 'application/rss+xml',
  })

  res.end(rss)
}
