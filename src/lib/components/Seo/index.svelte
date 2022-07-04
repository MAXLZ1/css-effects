<script lang="ts">
  const brand = 'CSS Effects'
  
  export let title = brand
  export let description = 'Some CSS effects'
</script>

<svelte:head>
  <title>{title} - {brand}</title>
  <meta name="description" content={description} />
  
  <meta property="og:type" content="website" />
  <meta property="og:title" content={`${title} - ${brand}`} />
  <meta property="og:site_name" content={brand} />
  <meta property="og:description" content={description} />
</svelte:head>
