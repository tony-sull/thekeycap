<script context="module">
  export function preload() {
    return this.fetch('reviews.json')
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
          }`
        )}]
      }
    <\/script>
  `
</script>

<svelte:head>
  {@html jsonLD}
</svelte:head>

<SEO
  title="Best Mechanical Keyboards and Accessories: Reviews by Keycap"
  description="We've researched and tested the best mechanical keyboards and
  accessories for your specific needs."
  url="reviews"
  article
/>

<ArticleList {posts} title="Recent Reviews" url="reviews" />
