<script context="module">
  export function preload() {
    return this.fetch('/recent.json')
      .then(r => r.json())
      .then(({ learn, reviews }) => [
        {
          posts: reviews,
          url: 'reviews',
        },
        {
          title: 'Recent Articles',
          posts: learn,
          url: 'learn',
        },
      ])
      .then(categories => ({ categories }))
  }
</script>

<script>
  /* eslint-disable import/first */
  import SEO from '../components/SEO.svelte'
  import ArticleList from '../components/ArticleList.svelte'

  export let categories

  const websiteLD = `
    <script type="application/ld+json">
      {
        "@context": "http://www.schema.org",
        "@type": "WebSite",
        "name": "Keycap",
        "alternateName": "The Keycap",
        "url": "https://thekeycap.com"
      }
    <\/script>
  `

  const organizationLD = `
    <script type="application/ld+json">
      {
        "@context": "http://www.schema.org",
        "@type": "Organization",
        "name": "Keycap",
        "url": "https://thekeycap.com",
        "sameAs": [
          "https://twitter.com/thekeycap",
          "https://facebook.com/thekeycap"
        ],
        "logo": "https://thekeycap.com/social-share-630x420.png"
      }
    <\/script>
  `
</script>

<style>
  section:not(:first-of-type) {
    @apply mt-10;
  }
</style>

<svelte:head>
  {@html websiteLD}
  {@html organizationLD}
</svelte:head>

<SEO />

<!--<figure class="hero">
  <img
    alt="Keyboard with Red Lights"
    src="keyboard-with-red-lights@3x.jpg"
    srcset="keyboard-with-red-lights@1x.jpg 368w, keyboard-with-red-lights@2x.jpg 736w, keyboard-with-red-lights@3x.jpg 1104w"
  />
  <figcaption>
      <p class="text-center text-xs mt-2 mb-6">
          Photo by <a href="https://unsplash.com/@otenteko" alt="Anas Alshanti">Anas Alshanti</a>
      </p>
  </figcaption>
</figure>-->

{#each categories as category}
  <section>
    <ArticleList
      title={category.title}
      posts={category.posts}
      url={category.url}
    />
  </section>
{/each}
