<script lang="ts">
  import { onMount } from 'svelte'
  import Seo from '../../lib/components/Seo/index.svelte';
  import GithubLink from '../../lib/components/GithubLink/index.svelte';

  const menus = [
    {
      title: 'Home',
    },
    {
      title: 'About Us',
    },
    {
      title: 'Our Services',
    },
    {
      title: 'Portfolio',
    },
    {
      title: 'Team',
    },
    {
      title: 'Contact',
    },
  ]
  
  let selectedIndex = 0
  let menu
  let leftArrow
  let rightArrow
  let top
  let left
  let right
  
  $: leftArrowStyle = `top: ${top}px; left: ${left}px;`
  $: rightArrowStyle = `top: ${top}px; right: ${right}px;`

  onMount(() => {
    computedArrowPosition()
  })
  
  function computedArrowPosition() {
    const dom = menu.querySelector(`.menu-item:nth-of-type(${selectedIndex + 1}) a`)
    const rect1 = menu.getBoundingClientRect()
    const rect2 = dom.getBoundingClientRect()
    const rect3 = leftArrow.getBoundingClientRect()
    const rect4 = rightArrow.getBoundingClientRect()
    top = rect2.top - rect1.top + rect2.height / 2 - rect3.height / 2

    left = rect2.left - rect1.left - rect4.width - 6
    right = rect1.right -rect2.right - rect3.width - 6
  }
  
  function changeSelectedIndex(index) {
    selectedIndex = index
    computedArrowPosition()
  }
</script>

<style lang="less">
  @import "../../styles/utils";
  
  .container {
    .full-screen();
    .flex-center();
    background-color: #3B3B3A;
    
    .menu {
      position: relative;
      
      .arrow {
        position: absolute;
        color: #498CC9;
        font-size: 44px;
        transition: .3s ease-in-out;
        
        &.arrow-left {
          right: 0;
        }
        
        &.arrow-right {
          left: 0;
        }
      }
      
      .menu-item {
        text-align: center;
        font-size: 40px;
        color: #FFFFFF;
        
        a {
          cursor: pointer;
        }
      }
    }
  }
</style>

<Seo title="magi -menu indicator" description="Magic menu indicator." />

<GithubLink />

<div class="container">
  <div class="menu" bind:this={menu}>
    <i class="arrow arrow-right fa-solid fa-angle-right" bind:this={leftArrow} style={leftArrowStyle}></i>
    <i class="arrow arrow-left fa-solid fa-angle-left" bind:this={rightArrow} style={rightArrowStyle}></i>
    {#each menus as {title},i (i)}
      <div class="menu-item">
        <a on:mouseenter={() => changeSelectedIndex(i)}>{title}</a>
      </div>
    {/each}
  </div>
</div>
