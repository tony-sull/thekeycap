import MarkdownIt from 'markdown-it'

const linkOpen = (tokens, idx) => {
  const token = tokens[idx]

  const attrs = token.attrs.map(([tag, value]) => `${tag}="${value}"`).join(' ')

  return `<a class="underline" ${attrs}>`
}

const paragraphOpen = () => '<p class="text-center text-xs mt-2 mb-6">'

const md = new MarkdownIt()

md.renderer.rules.link_open = linkOpen
md.renderer.rules.paragraph_open = paragraphOpen

export default md
