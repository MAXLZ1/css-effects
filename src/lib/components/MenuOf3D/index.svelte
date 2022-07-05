<script lang="ts">
  import MenuItemOf3D from './MenuItemOf3D.svelte'

  export let menus = []
  
</script>

<style lang="less">
  
  .navigation-container {
    display: flex;
    flex-direction: column-reverse;
    position: relative;;

    .shadow-helper {
      transform: skewY(-15deg) skewX(45deg);
      transform-origin: bottom;
      position: absolute;
      height: 50px;
      width: 180px;
      bottom: 0;
      box-shadow: -120px 120px 25px rgba(0, 0, 0, .25)
    }
    
    :global(.nav-item:first-child .nav-item-top) {
      box-shadow: -150px 160px 20px rgba(0, 0, 0, .25);
    }
  }
</style>

<div class="navigation-container">
  {#if menus.length > 1}
    <div class="shadow-helper"></div>
  {/if}
  {#each menus.reverse() as menu,i (i)}
    <MenuItemOf3D item={menu} />
  {/each}
</div>
