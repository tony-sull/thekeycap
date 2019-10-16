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

  export let posts
</script>

<ArticleList
  {posts}
  title="Recent Reviews"
  seoTitle="Best Mechanical Keyboards and Accessories: Reviews by Keycap"
  seoDescription="We've researched and tested the best mechanical keyboards and
  accessories for your specific needs."
  url="reviews"
/>
