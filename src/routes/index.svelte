<script>
  import SEO from '../components/SEO.svelte'
</script>

<style>
  h1,
  figure,
  p {
    @apply mx-auto text-center;
  }

  img {
    max-width: 400px;
  }
</style>

<svelte:head>
  <script type="application/ld+json">
    {
    }
  </script>
  <script type="application/ld+json">
    {
    }
  </script>
</svelte:head>

<SEO />

<h1 class="mb-8 font-bold text-4xl xs:text-6xl uppercase">Great success!</h1>

<figure class="mb-4">
  <img
    alt="Borat"
    src="great-success.png"
    class="inline-block w-full mb-4 align-baseline"
  />
  <figcaption>HIGH FIVE!</figcaption>
</figure>

<p class="my-4">
  <strong class="font-bold">
    Try editing this file (src/routes/index.svelte) to test live reloading.
  </strong>
</p>
