<script context="module">
  export function preload() {
    return this.fetch('learn.json')
      .then(r => r.json())
      .then(posts => ({ posts }))
  }
</script>

<script>
  /* eslint-disable import/first */
  import ArticleList from '../../components/ArticleList.svelte'
  import SEO from '../../components/SEO.svelte'

  export let posts

  /* eslint-disable no-useless-escape */
  const jsonLD = `
    <script type="application/ld+json">
      {
        "@context": "https://schema.org/",
        "@type": "ItemList",
        "numberOfItems": ${posts.length},
        "itemListElement": [${posts.map(
      (post, i) => `{
            "@type": "ListItem",
            "position": ${i + 1},
            "url": "https://thekeycap.com/learn/${post.slug}"
          }`,
    )}]
      }
    <\/script>
  `
</script>

<svelte:head>
  {@html jsonLD}
</svelte:head>

<SEO
  bitle="Mechanical Keyboard Information: FAQs by Keycap"
  description="We've pulled together answers to frequently asked questions when
  considering your next mechanical keyboard."
  url="learn"
  article
/>

<ArticleList {posts} title="Recent Posts" article url="learn" />
