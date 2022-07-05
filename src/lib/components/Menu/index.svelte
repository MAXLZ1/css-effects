<script lang="ts">
  import type { Menu } from './types'
  import { Position } from './types'
  import { page } from '$app/stores'

  export let menus: Menu = []
  export let position: Position = Position.lt
  
  $: style = position === Position.lt ?
    'left: 0;top: 0;' :
    position === Position.rb ?
      'right: 0; bottom: 0;' :
      position === Position.rt ?
        'right: 0; top: 0;' :
        position === Position.lb ?
          'left: 0; bottom: 0;' :
          ''

  function active(href: string): boolean {
    return href === $page.url.pathname
  }
</script>

<style lang="less">
  @import "../../../styles/utils";
  
  .menu {
    .abb-flex();
    position: fixed;
    list-style: none;
    padding: 0 10px;
    margin: 10px 0;
    gap: 0 20px;
    
    li {
      
      a {
        color: #FFFFFF;
        text-decoration: none;
        
        &.active {
          cursor: default;
          color: rgba(255, 255, 255, .4);
        }
      }
    }
  }
</style>

<ul class="menu" {style}>
  {#each menus as {text, href, target}, i (i)}
    <li>
      <a
        class={active(href) ? 'active' : ''}
        href={active(href) ? 'javascript:void(0);' : href}
        target={target || '_self'}
      >{text}</a>
    </li>
  {/each}
</ul>
