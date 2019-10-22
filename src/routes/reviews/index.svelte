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
</script>

<SEO
  title="Best Mechanical Keyboards and Accessories: Reviews by Keycap"
  description="We've researched and tested the best mechanical keyboards and
  accessories for your specific needs."
  url="reviews"
  article
/>

<ArticleList {posts} title="Recent Reviews" url="reviews" />
