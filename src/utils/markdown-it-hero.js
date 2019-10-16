// Process @[hero]

const regex = /(?:@hero\[(.*?)\]\((.*?)\))/

function heroEmbed() {
  return function heroReturn(state) {
    const theState = state

    const match = state.src.match(regex)

    if (!match) {
      return false
    }

    const [_, alt, urlCaption] = match
    const [url, caption] = urlCaption.split(' ')

    const token = theState.push('hero', '')
    token.url = url
    token.alt = alt
    token.caption = caption
    token.level = theState.level

    theState.pos += theState.src.length

    return true
  }
}

function tokenizeHero() {
  return function tokenizeReturn(tokens, idx) {
    const token = tokens[idx]

    return `<figure class="hero">
        <img src=${token.url} alt=${token.caption} />
        <figcaption>
          ${token.credit}
        </figcaption>
      </figure>`
  }
}

export default function heroPlugin(md, options) {
  const theOptions = options
  const theMd = md

  theMd.renderer.rules.hero = tokenizeHero(theMd, theOptions)
  theMd.inline.ruler.before('emphasis', 'hero', heroEmbed(theMd, theOptions))
}
