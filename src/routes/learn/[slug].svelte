<script context="module">
  // eslint-disable-next-line consistent-return
  export async function preload({ params }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`learn/${params.slug}.json`)
    const data = await res.json()

    if (res.status === 200) {
      return { post: data }
    }
    this.error(res.status, data.message)
  }
</script>

<script>
  /* eslint-disable import/first */
  import Article from '../../components/Article.svelte'

  export let post
</script>

<Article {post} url="learn" />
