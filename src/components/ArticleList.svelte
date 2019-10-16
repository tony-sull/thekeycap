<script>
  import SEO from './SEO.svelte'

  export let posts
  export let title
  export let url
  export let seoTitle
  export let seoDescription

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
            "url": "https://thekeycap.com/${url}/${post.slug}"
          }`
        )}]
      }
    <\/script>
  `
</script>

<svelte:head>
  {@html jsonLD}
</svelte:head>

<SEO title={seoTitle} description={seoDescription} {url} article />

<h1>{title}</h1>

<ul class="mb-4 list-inside list-disc">
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <a rel="prefetch" href="{url}/{post.slug}" class="underline">
        {post.metadata.title}
      </a>
    </li>
  {/each}
</ul>
