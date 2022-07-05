<script lang="ts">
  import { onMount } from 'svelte'
  
  let num = 0
  
  function handleResize() {
    num = Math.floor(document.body.clientWidth / 44)
  }
  
  onMount(() => {
    handleResize()
  })
</script>

<style lang="less">
  @color1: #4fc3dc;
  @color2: #f120e7;
  
  .bubbles {
    display: flex;
    position: fixed;
    inset: 0;

    .bubble {
      margin: 0 10px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: @color1;
      box-shadow: 0 0 0 10px #4fc3dc44,
      0 0 50px @color1,
      0 0 100px @color1;
      animation: move calc(180s / var(--i)) linear infinite;

      &:nth-of-type(even) {
        background-color: @color2;
        box-shadow: 0 0 0 10px #f120e744,
        0 0 50px @color2,
        0 0 100px @color2;
      }
    }
  }

  @keyframes move {
    0% {
      transform: translateY(100vh) scale(0);
    }
    100% {
      transform: translateY(-10vh) scale(1);
    }
  }
</style>

<svelte:window on:resize={handleResize} />

<div class="bubbles">
  {#each { length: num } as _,i}
    <span class="bubble" style={`--i: ${10 + parseInt(Math.random() * 15)}`}></span>
  {/each}
</div>
