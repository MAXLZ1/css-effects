<script lang="ts">

</script>

<style lang="less">
  @grid-rows: 32;
  @grid-columns: 32;
  
  .grid-menu {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template: repeat(32, auto) / repeat(32, auto);
  }
</style>

<div class="grid-menu"></div>
