<script lang="ts">
  import CSSBackgroundEffects from '../../lib/components/CSSBackgroundEffects/index.svelte'
  import Seo from '../../lib/components/Seo/index.svelte';
</script>

<style lang="less">
  @import "../../styles/utils";
  
  .container {
    .full-screen();
    background-color: #0c192c;
    overflow: hidden;
  }
</style>

<Seo title="css animated background" description="CSS animated background." />

<div class="container">
  <CSSBackgroundEffects />
</div>
