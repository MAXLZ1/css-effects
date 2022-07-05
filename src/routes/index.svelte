<script lang="ts">
  import Seo from '../lib/components/Seo/index.svelte'
  import SvgFilter from '../lib/components/SvgFilter/index.svelte'
  import * as AnimationLink from '../utils/animationLink'
  import { onMount } from 'svelte'
  import CSSBackgroundEffects from '../lib/components/CSSBackgroundEffects/index.svelte';
  import GithubLink from '../lib/components/GithubLink/index.svelte';

  let navDom
  const menus = [
    {
      text: 'Animated Magic Menu Indictor',
      href: '/animated-magic-menu-indictor',
    },
    {
      text: 'Animation Label Input',
      href: '/input-animation',
    },
    {
      text: 'Animated Card',
      href: '/animated-card',
    },
    {
      text: '3D Menu',
      href: '/3d-menu',
    },
    {
      text: 'Button Hover Effects',
      href: '/button-hover-effects',
    },
    {
      text: 'CSS Animated Background',
      href: '/css-animated-background',
    },
    {
      text: 'Menu Hover Effects',
      href: '/menu-hover-effects',
    },
    {
      text: 'Magic Menu Indicator',
      href: '/magic-menu-indicator',
    },
    {
      text: 'Image Fragments',
      href: '/image-fragments/demo1',
    },
    {
      text: 'Custom Shape Button',
      href: '/custom-shape-button',
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
    
    .title {
      font-size: 60px;
      text-align: center;
    }
    
    .menu {
      .abb-flex(column, flex-start, flex-start);
      max-width: fit-content;
      
      .menu-link {
        .ellipsis();
        max-width: 100%;
        color: #FFFFFF;
        text-decoration: none;
        font-size: 50px;
        font-weight: bold;
        margin-bottom: 20px;
        position: relative;

        &::before {
          content: '';
          position: absolute;
          bottom: 2px;
          height: 2px;
          width: 100%;
          background: linear-gradient(45deg, #6CC6CB, #9FA5D5 80%);
          opacity: 0;
        }
        
        &:hover {
          background: linear-gradient(45deg, #6CC6CB, #9FA5D5 80%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          
          &::before {
            opacity: 1;
          }
        }
      }
    }
  }
</style>

<Seo />

<GithubLink />

<SvgFilter />

<CSSBackgroundEffects />

<div class="container">
  <h1 class="title">Some CSS Effects</h1>
  <nav class="menu" bind:this={navDom}>
    {#each menus as {text, href},i (i)}
      <a class="menu-link" href={href} title={text} target="_self">{text}</a>
    {/each}
  </nav>
</div>

