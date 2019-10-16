import MarkdownIt from 'markdown-it'
import MarkdownItAttrs from 'markdown-it-attrs'
// import heroPlugin from './markdown-it-hero'

const getAttrs = token => token.attrs || []

const mapAttrs = token =>
  getAttrs(token).reduce(
    (acc, [attr, val]) => ({
      ...acc,
      [attr]: val,
    }),
    {}
  )

const tokenWithClasses = (...classes) => (tokens, idx) => {
  const token = tokens[idx]
  const attrs = mapAttrs(token)

  attrs.class = attrs.class || ''
  attrs.class = `${attrs.class} ${classes.join(' ')}`

  const allAttrs = Object.keys(attrs)
    .map(attr => `${attr}="${attrs[attr]}"`)
    .join(' ')

  return `<${token.tag} ${allAttrs}>`
}

const headingOpen = tokenWithClasses('font-medium')
const linkOpen = tokenWithClasses('underline')
const listItemOpen = tokenWithClasses('mb-2')
const unorderedListOpen = tokenWithClasses('list-inside', 'list-disc')

const md = new MarkdownIt()

md.renderer.rules.heading_open = headingOpen
md.renderer.rules.link_open = linkOpen
md.renderer.rules.list_item_open = listItemOpen
md.renderer.rules.unordered_list_open = unorderedListOpen

md.use(MarkdownItAttrs)
// md.use(heroPlugin)

export default md
