<script>
  export let url
  export let title
  export let srDescription
</script>

<style>
  a {
    @apply p-2 rounded-full block;
  }

  a img {
    @apply h-5;
  }
</style>

<div class="flex">
  <p class="hidden">{srDescription}</p>
  <div class="mx-1">
    <a
      href="https://twitter.com/intent/tweet?text={encodeURI(title)}&url={url}&via=thekeycap"
      target="_blank"
      rel="noopener noreferrer"
      class="bg-twitter"
    >
      <img src="twitter.svg" alt="Share to Twitter" />
    </a>
  </div>
  <div class="mx-1">
    <a
      href="https://facebook.com/sharer/sharer.php?u={url}"
      target="_blank"
      rel="noopener noreferrer"
      class="bg-facebook"
    >
      <img src="facebook.svg" alt="Share to Facebook" />
    </a>
  </div>
  <div class="mx-1">
    <a
      href="mailto:?subject=Keycap: {title}&body=Keycap: {title}%0D%0A%0D%0A{url}"
      target="_blank"
      rel="noopener noreferrer"
      class="bg-email"
    >
      <img src="email.svg" alt="Share to Email" />
    </a>
  </div>
</div>
