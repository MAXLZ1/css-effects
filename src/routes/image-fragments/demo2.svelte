<script lang="ts">
  import ImageFragments from '../../lib/components/ImageFragments/index.svelte'
  import Menu from '../../lib/components/Menu/index.svelte';
  import Seo from '../../lib/components/Seo/index.svelte';

  const menus = [
    {
      text: 'demo1',
      href: '/image-fragments/demo1'
    },
    {
      text: 'demo2',
      href: '/image-fragments/demo2'
    },
    {
      text: 'demo3',
      href: '/image-fragments/demo3'
    },
  ]
</script>

<style lang="less">
  @import "../../styles/utils";

  .container {
    .full-screen();
    .flex-center();
    background-color: #3B3B3A;
    overflow: hidden;
  }
</style>

<Seo title="image fragment animation" description="Image fragment animation." />

<Menu {menus} />

<div class="container">
  <ImageFragments columns="15" rows="1" animation="flip" />
</div>
