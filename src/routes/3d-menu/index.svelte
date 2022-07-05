<script lang="ts">
  import MenuOf3D from '@components/MenuOf3D/index.svelte'
  import Seo from '../../lib/components/Seo/index.svelte';
  import GithubLink from '../../lib/components/GithubLink/index.svelte';

  const menus = [
    {
      text: 'FACEBOOK',
      icon: 'fa-brands fa-facebook',
      color: '#ef3939'
    },
    {
      text: 'WHATSAPP',
      icon: 'fa-brands fa-whatsapp',
      color: '#a7ee51'
    },
    {
      text: 'TWITTER',
      icon: 'fa-brands fa-twitter',
      color: '#4ce1dc'
    },
    {
      text: 'INSTAGRAM',
      icon: 'fa-brands fa-instagram',
      color: '#d145e1'
    },
    {
      text: 'YOUTUBE',
      icon: 'fa-brands fa-youtube',
      color: '#6128cb'
    },
  ]
</script>

<style lang="less">
  @import "../../styles/utils";

  .container {
    .flex-center();
    .full-screen();
    background: #4F505B;
  }
</style>

<Seo title="3d menu" description="3d menu by CSS." />

<GithubLink />

<div class="container">
  <MenuOf3D {menus} />
</div>
