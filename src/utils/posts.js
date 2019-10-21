import fs from 'fs'
import path from 'path'
import { extractFrontmatter } from './markdown'
import blogRenderer from './blogRenderer'
import heroRenderer from './heroRenderer'

const CONTENT_DIR = 'content/blog'
const FILE_REGEX = /^(\d+-\d+-\d+)-(.+)\.md$/

const isMarkdown = file => path.extname(file) === '.md'
const isValidFile = file => FILE_REGEX.exec(file)
const parseFilename = file => {
  const match = FILE_REGEX.exec(file)
  const [_, pubdate, slug] = match
  return { pubdate, slug }
}

function getPosts(options = {}) {
  const { count = 10 } = options

  return fs
    .readdirSync(CONTENT_DIR)
    .filter(isMarkdown)
    .filter(isValidFile)
    .map(file => {
      const { pubdate, slug } = parseFilename(file)

      const markdown = fs.readFileSync(`${CONTENT_DIR}/${file}`, 'utf-8')
      const frontmatter = extractFrontmatter(markdown)
      const { metadata } = frontmatter
      const content = frontmatter.content.replace(
        new RegExp(/\{\{slug\}\}/g),
        `${metadata.type}/${slug}`,
      )

      const date = new Date(`${pubdate} EDT`)
      metadata.pubdate = pubdate
      metadata.dateString = date.toDateString()

      if (metadata.description) {
        metadata.descriptiont = blogRenderer.render(metadata.description)
      }

      if (metadata.heroCredit) {
        metadata.heroCredit = heroRenderer.render(metadata.heroCredit)
      }

      const html = blogRenderer
        .render(
          content.replace(/^\t+/gm, match => match.split('\t').join('  ')),
        )
        .replace(new RegExp('<td><img', 'g'), '<td rowspan="5"><img')

      return {
        html,
        metadata,
        slug,
      }
    })
    .sort((a, b) => (a.metadata.pubdate < b.metadata.pubdate ? 1 : -1))
    .slice(0, count)
}

export const getAllPosts = options => getPosts(options)
export const getPostsByType = (type, opts) => getPosts(opts).filter(p => p.metadata.type === type)
