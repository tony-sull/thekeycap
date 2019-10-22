<script>
  /* eslint-disable import/first */
  import fecha from 'fecha'
  import SEO from './SEO.svelte'
  import ShareButtons from './ShareButtons.svelte'

  export let post
  export let url

  let pubdate = ''
  $: if (post && post.metadata.pubdate) {
    pubdate = fecha.format(new Date(post.metadata.pubdate), 'D MMMM, YYYY')
  }

  /* eslint-disable no-useless-escape */
  const jsonLD = `
    <script type="application/ld+json">
      {
        "@context": "https://schema.org/",
        "@type": "article",
        "inLanguage": "en_US",
        "url": "https://thekeycap.com/${url}/${post.slug}",
        "mainEntryOfPage": https://thekeycap.com/${url}/${post.slug}",
        "thumbnailUrl": "https://thekeycap.com/${post.metadata.heroImage}",
        "name": "${post.metadata.title}",
        "headline": "${post.metadata.description}",
        "datePublished": "${pubdate}",
        "dateModified": "${pubdate}",
        "author": [{
          "@type": "Person",
          "name": "Tony Sullivan"
        }],
        "publisher": {
          "@type": "Organization",
          "name": "Keycap",
          "alternateName": "Keycap",
          "url": "https://thekeycap.com/",
          "logo": "https://thekeycap.com/social-share-630x420.png",
          "sameAs": [
            "https://facebook.com/thekeycap",
            "https://twitter.com/thekeycap"
          ]
        }
      }
    <\/script>
  `

  let content
</script>

<style>
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
  */

  header ol li {
    text-transform: capitalize;
  }

  header ol li:not(:last-of-type)::after {
    content: '\203A';
    @apply px-2;
  }

  .content :global(h1),
  .content :global(h2) {
    @apply mt-16 mb-6 pt-4 border-t-2 border-accent-light;
  }

  .content :global(h3),
  .content :global(h4),
  .content :global(h5),
  .content :global(h6) {
    @apply mt-8 mb-4;
  }

  .content :global(table) {
    @apply relative max-w-xl mx-auto my-10 bg-white px-6 py-3 border-4 border-accent-dark rounded-lg block;
  }

  .content :global(table th:first-of-type) {
    top: -0.5rem;
    left: -0.5rem;
    @apply absolute inline text-lg text-white bg-shades-dark px-4 py-2;
  }

  .content :global(table tr:nth-child(2) a) {
    @apply font-bold text-base text-brand;
  }

  .content :global(table tr:nth-child(5) a) {
    @apply no-underline text-base font-semibold text-center text-white bg-brand rounded block py-2;
  }

  .content :global(table tr:first-child td:first-child) {
    @apply pr-4;
  }

  .content :global(table tr:nth-child(3) td:last-of-type) {
    @apply text-base font-semibold;
  }

  .content :global(table tr:nth-child(4) td:last-of-type) {
    @apply text-xs font-light py-4;
  }

  @media screen and (min-width: theme(screens.xs)) {
    .content :global(table th:first-of-type) {
      top: -1rem;
      left: -1rem;
      @apply text-xl;
    }

    .content :global(table tr:nth-child(2) a) {
      @apply text-lg;
    }

    .content :global(table tr:nth-child(5) a) {
      @apply text-lg font-semibold;
    }

    .content :global(table tr:first-child td:first-child) {
      @apply pr-6;
    }

    .content :global(table tr:nth-child(3) td:last-of-type) {
      @apply text-lg;
    }

    .content :global(table tr:nth-child(4) td:last-of-type) {
      @apply text-sm py-6;
    }
  }
</style>

<svelte:head>
  {@html jsonLD}
</svelte:head>

<SEO
  title={post.metadata.title}
  description={post.metadata.description}
  image={post.metadata.heroImage}
  url="${url}/{post.slug}"
  article
/>

<article class="max-w-4xl">
  <header>
    {#if post.metadata.heroImage}
      <figure class="hero">
        <img src={post.metadata.heroImage} alt={post.metadata.heroCaption} />
        <figcaption>
          {@html post.metadata.heroCredit}
        </figcaption>
      </figure>
    {/if}

    <div
      class="max-w-xl sm:mx-auto mx-6 pb-4 xs:pb-6 border-b border-accent-light"
    >
      <ol class="flex flex-row text-shades-dark">
        <li>
          <a href=".">Keycap</a>
        </li>
        <li>
          <a href={url}>{url}</a>
        </li>
      </ol>

      <h1 class="font-bold mt-3">{post.metadata.title}</h1>

      <h6 class="font-bold text-brand mt-2">{pubdate}</h6>
    </div>
  </header>

  <div class="content max-w-xl sm:mx-auto mx-6 mt-4 mb-12" bind:this={content}>
    <aside class="text-xs xs:text-sm flex flex-row justify-between">
      <div>
        <p>Your guide</p>
        <ul>
          <li>
            <img
              src="tony-sullivan-50x50.jpg"
              alt="Tony Sullivan"
              class="hidden"
            />
            <p class="font-extrabold">Tony Sullivan</p>
          </li>
        </ul>
      </div>

      <ShareButtons
        url={`https://thekeycap.com/${url}/${post.slug}`}
        title={post.metadata.title}
      />
    </aside>

    <section class="my-6 xs:my-8 text-lg xs:text-xl font-medium">
      {@html post.metadata.description}
    </section>

    {@html post.html}
  </div>
</article>
