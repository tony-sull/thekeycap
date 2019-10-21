<script>
  export let title = 'Mechanical Keyboard Reviews and Buying Advice | Keycap'
  export let description = 'Keycap is a list of the best mechanical keyboards, accessories, and upgrades for your needs. Reviews are based on research and hands-on testing by career programmers, gamers, and tech aficionados.'
  export let image = '/social-share-630x420.png'
  export let url = ''
  export let article = false

  const URL_ROOT = 'https://thekeycap.com/'

  let fullUrl
  $: fullUrl = `${URL_ROOT}${url}`
</script>

<svelte:head>
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:site" content="@thekeycap" />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content={image} />
  <meta property="og:type" content={article ? 'article' : 'website'} />
  <meta
    property="og:site_name"
    content="Keycap: Everything Mechanical Keyboards"
  />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />
  <meta property="og:url" content={fullUrl} />
  <meta property="fb:app_id" content="abc123" />
  <title>{title}</title>
  <meta property="description" content={description} />
  <link rel="canonical" href={fullUrl} />
</svelte:head>
