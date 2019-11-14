<script context="module">
  // eslint-disable-next-line consistent-return
  export async function preload({ params }) {
      // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`pages/${params.slug}.json`)
    const data = await res.json()

    if (res.status === 200) {
      return { page: data }
    }
    this.error(res.status, data.message)
  }
</script>

<script>
    import SEO from '../components/SEO.svelte'

    export let page
</script>

<style>
  article :global(p) {
    @apply mb-4;
  }

  article :global(h1),
  article :global(h3) {
    @apply font-bold;
  }

  article :global(h3) {
    @apply text-2xl;
  }

  article :global(ul) {
    @apply list-disc mb-4;
  }

  article :global(a) {
    @apply underline;
  }
</style>

<SEO title={page.metadata.meta_title}/>

<h1>{ page.metadata.title }</h1>

<p class='mb-8'>
  <em>Last updated: { page.metadata.dateString }</em>
</p>

<article>
  {@html page.html }
</article>