export function extractFrontmatter(markdown) {
  const match = /---\r?\n([\s\S]+?)\r?\n---/.exec(markdown)
  const frontMatter = match[1]
  const content = markdown.slice(match[0].length)

  const metadata = {}
  frontMatter.split('\n').forEach(pair => {
    const colonIndex = pair.indexOf(':')
    metadata[pair.slice(0, colonIndex).trim()] = pair
      .slice(colonIndex + 1)
      .trim()
  })

  return { metadata, content }
}

export function linkRenderer(href, title, text) {
  let targetAttr = ''
  let titleAttr = ''

  if (href.startsWith('http')) {
    targetAttr = ' target="_blank"'
  }

  if (title !== null) {
    titleAttr = ` title="${title}"`
  }

  return `<a class="underline" href="${href}"${targetAttr}${titleAttr}>${text}</a>`
}
