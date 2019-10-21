<script>
  import Header from '../components/Header.svelte'
  import Footer from '../components/Footer.svelte'

  export let segment
</script>

<style>
  :global(h1, h2, h3, h4, h5, h6) {
    @apply font-medium leading-tight;
  }

  :global(h1) {
    @apply text-2xl;
  }

  :global(h2) {
    @apply text-xl;
  }

  :global(h3) {
    @apply text-lg;
  }

  :global(h4) {
    @apply text-base;
  }

  :global(h5) {
    @apply text-sm;
  }

  :global(h6) {
    @apply text-xs;
  }

  :global(p + p) {
    @apply pt-4;
  }

  @media screen and (min-width: theme(screens.sm)) {
    :global(h1) {
      @apply text-3xl;
    }

    :global(h2) {
      @apply text-2xl;
    }

    :global(h3) {
      @apply text-xl;
    }

    :global(h4) {
      @apply text-lg;
    }

    :global(h5) {
      @apply text-base;
    }

    :global(h6) {
      @apply text-sm;
    }
  }
</style>

<Header />

<main
  id="content"
  class="relative max-w-3xl mx-auto min-h-screen pb-8 xs:pb-12 md:pb-16"
>
  <div class="text-center text-brand text-xs p-6 mx-auto">
    Keycap is reader-supported. When you buy through links on our site, we may
    earn affiliate commission.
    <a
      alt="Learn more about our Affiliate Disclaimer"
      href="/affiliate-disclaimer"
      class="font-bold underline"
      aria-label="Learn more about our Affiliate Disclaimer"
    >
      Learn more
    </a>
  </div>

  <slot />
</main>

<Footer />
