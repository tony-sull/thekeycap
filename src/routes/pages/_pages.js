import fecha from 'fecha'
import fs from 'fs'
import path from 'path'
import { extractFrontmatter } from '../../utils/markdown'
import blogRenderer from '../../utils/blogRenderer'

const CONTENT_DIR = 'content/pages'
const FILE_REGEX = /^(\d+-\d+-\d+)-(.+)\.md$/

const isMarkdown = file => path.extname(file) === '.md'
const isValidFile = file => FILE_REGEX.exec(file)
const parseFilename = file => {
  const match = FILE_REGEX.exec(file)
  const [_, pubdate, slug] = match
  return { pubdate, slug }
}

function getPages() {
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
        /\{\{slug\}\}/g,
        `${slug}`,
      )

      const date = new Date(`${pubdate} EDT`)
      metadata.pubdate = pubdate
      metadata.dateString = fecha.format(date, 'MMMM d, YYYY')

      const html = blogRenderer
        .render(
          content.replace(/^\t+/gm, match => match.split('\t').join('  ')),
        )

      return {
        html,
        metadata,
        slug,
      }
    })
    .sort((a, b) => (a.metadata.pubdate < b.metadata.pubdate ? 1 : -1))
}

export default getPages
