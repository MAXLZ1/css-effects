<script lang="ts">
  import ProfileCard from '../../lib/components/ProfileCard/index.svelte'
  import Seo from '../../lib/components/Seo/index.svelte';
</script>

<style lang="less">
  @import "../../styles/utils";
  .container {
    .full-screen();
    .flex-center();
  }
</style>

<Seo title="animated card" description="A animated card." />

<div class="container">
  <ProfileCard
    title="someone famous"
    subTitle="Creative Designer"
    image="/images/person.jpg"
  />
</div>
