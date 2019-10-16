import getPosts from './_posts'

let json

export function get(req, res) {
  if (!json || process.env.NODE_ENV !== 'production') {
    const posts = getPosts()
      .filter(post => !post.metadata.draft)
      .map(post => ({
        slug: post.slug,
        metadata: post.metadata,
      }))

    json = JSON.stringify(posts)
  }

  res.writeHead(200, {
    'Content-Type': 'application/json',
  })

  res.end(json)
}
