<script lang="ts">
  import ButtonOfHoverEffects from '../../lib/components/ButtonOfHoverEffects/index.svelte'
  import Seo from '../../lib/components/Seo/index.svelte';
  import GithubLink from '../../lib/components/GithubLink/index.svelte';
</script>

<style lang="less">
  @import "../../styles/utils";

  .container {
    .full-screen();
    .flex-center(column);
    background-color: #27282c;
    row-gap: 60px;
  }
</style>

<Seo title="button hover effects" description="A button with hover effect." />

<GithubLink />

<div class="container">
  <ButtonOfHoverEffects />
  <ButtonOfHoverEffects color="#de37ea"/>
  <ButtonOfHoverEffects color="#88ea37"/>
</div>
