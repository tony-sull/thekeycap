import getPosts from './_posts'

let lookup

export function get(req, res) {
  if (!lookup || process.env.NODE_ENV !== 'production') {
    lookup = new Map()
    getPosts().forEach(post => {
      lookup.set(post.slug, JSON.stringify(post))
    })
  }

  const post = lookup.get(req.params.slug)

  if (post) {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    })

    res.end(post)
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json',
    })

    res.end(
      JSON.stringify({
        message: 'Not found',
      }),
    )
  }
}
