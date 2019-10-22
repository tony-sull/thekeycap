<script>
  import fecha from 'fecha'

  export let posts
  export let title
  export let url

  const formatPubdate = post =>
    fecha.format(new Date(post.metadata.pubdate), 'D MMMM, YYYY')
</script>

<style>
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
    grid-gap: 2rem;
  }

  @media screen and (min-width: theme(screens.xs)) {
    li.wide {
      grid-column: 1 / 3;
    }
  }
</style>

{#if title}
  <header class="mb-4 py-2 px-2 md:px-0 border-t-2 border-accent-light">
    <h2>{title}</h2>
  </header>
{/if}

<ul class="mb-4 list-inside">
  {#each posts as post, i}
    <!-- we're using the non-standard `rel=prefetch` attribute to
        tell Sapper to load the data for the page as soon as
        the user hovers over the link or taps it, instead of
        waiting for the 'click' event -->
    <li class:wide={posts.length % 2 === 1 && i === 0}>
      <article>
        <a
          rel="prefetch"
          href="{url}/{post.slug}"
          alt={post.metadata.title}
          aria-label={post.metadata.title}
        >
          <figure class="mb-3">
            <img
              alt={post.metadata.title}
              role="presentation"
              src={post.metadata.heroImage}
              srcset={post.metadata.heroImageSrcset}
            />
          </figure>
        </a>

        <div class="px-2 md:px-0">
          <h3 class="text-xl font-bold">
            <a
              rel="prefetch"
              href="{url}/{post.slug}"
              alt={post.metadata.title}
            >
              {post.metadata.title}
            </a>
          </h3>

          <p class="text-sm font-bold text-brand mt-2 mb-4">
            Published {formatPubdate(post)}
          </p>

          <p class="text-xs font-bold m-0 p-0">by {post.metadata.author}</p>
          {@html post.metadata.description}
        </div>
      </article>
    </li>
  {/each}
</ul>
