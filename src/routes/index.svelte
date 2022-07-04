<script lang="ts">
  import Seo from '../lib/components/Seo/index.svelte'
  import SvgFilter from '../lib/components/SvgFilter/index.svelte'
  import * as AnimationLink from '../utils/animationLink'
  import { onMount } from 'svelte'

  let navDom
  const menus = [
    {
      text: 'Animated Magic Menu Indictor',
      href: '',
    },
    {
      text: 'Animated Magic Menu Indictor',
      href: '',
    },
    {
      text: 'Animated Magic Menu Indictor',
      href: '',
    },
    {
      text: 'Animated Magic Menu Indictor',
      href: '',
    },
    {
      text: 'Animated Magic Menu Indictor',
      href: '',
    },
    {
      text: 'Animated Magic Menu Indictor',
      href: '',
    },
    {
      text: 'Animated Magic Menu Indictor',
      href: '',
    },
  ]
  
  onMount(() => {
    navDom.querySelectorAll('.menu-link').forEach(a => {
      new AnimationLink[`AnimationLink${Math.ceil(Math.random() * 4)}`](a)
    })
  })
  
</script>

<style lang="less">
  @import "../styles/utils";
  
  .container {
    padding: 40px;
    box-sizing: border-box;
    background-color: #191818;
    color: #FFFFFF;
    min-height: 100vh;
    width: 100%;
    
    .menu {
      .abb-flex(column, flex-start, flex-start);
      max-width: fit-content;
      
      .menu-link {
        color: #FFFFFF;
        width: 100%;
        text-decoration: none;
        font-size: 60px;
        font-weight: bold;
        margin-bottom: 20px;
        
        &:hover {
          
          .menu-text {
            background: -webkit-linear-gradient(45deg, #6CC6CB, #9FA5D5 80%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .menu-line {
            opacity: 1;
            background: -webkit-linear-gradient(45deg, #6CC6CB, #9FA5D5 80%);
          }
        }
        
        .menu-text {
          .ellipsis();
          display: block;
        }
        
        .menu-line {
          display: block;
          height: 4px;
          width: 100%;
          background-color: currentColor;
          opacity: 0;
        }
      }
    }
  }
</style>

<Seo />

<SvgFilter />

<div class="container">
  <nav class="menu" bind:this={navDom}>
    {#each menus as {text, href},i (i)}
      <a class="menu-link" href={href} title={text}>
        <span class="menu-text">{text}</span>
        <span class="menu-line"></span>
      </a>
    {/each}
  </nav>
</div>

