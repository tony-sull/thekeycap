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

  export let posts
</script>

<ArticleList
  {posts}
  title="Recent Posts"
  seoTitle="Mechanical Keyboard Information: FAQs by Keycap"
  seoDescription="We've pulled together answers to frequently asked questions
  when considering your next mechanical keyboard."
  url="learn"
  article
/>
