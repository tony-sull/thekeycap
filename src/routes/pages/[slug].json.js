import getPages from './_pages'

let lookup

export function get(req, res) {
  if (!lookup || process.env.NODE_ENV !== 'production') {
    lookup = new Map()
    getPages().forEach(page => {
      lookup.set(page.slug, JSON.stringify(page))
    })
  }

  const page = lookup.get(req.params.slug)

  if (page) {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    })

    res.end(page)
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
