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
</script>

<SEO
  bitle="Mechanical Keyboard Information: FAQs by Keycap"
  description="We've pulled together answers to frequently asked questions when
  considering your next mechanical keyboard."
  url="learn"
  article
/>

<ArticleList {posts} title="Recent Posts" article url="learn" />
