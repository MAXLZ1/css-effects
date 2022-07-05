<script lang="ts">
  export let item
  
  $: text = item?.text || ''
  $: icon = item?.icon || ''
  $: color = item?.color || ''
  $: iconClass = '' + icon
  $: style = `--color: ${color || '#34bad9'}`
  $: href = item?.href || 'javascript:void(0);'
  $: target = item?.target || '_self'
</script>

<style lang="less">
  @nav-length: 180px;
  @nav-width: 50px;
  @nav-height: 64px;
  
  .nav-item {
    transition: transform .5s ease-in-out;
    cursor: pointer;
    position: relative;
    transform: skewY(-15deg);
    color: #9F9FA0;
    text-decoration: none;

    &:hover {
      transform: skewY(-15deg) translateX(-100px);
      color: #FFFFFF;
      
      .nav-face {
        background-color: var(--color);
      }
    }
    
    .nav-face {
      transition: all .5s ease-in-out;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 10px;
      box-sizing: border-box;
      background-color: #3e3f46;

      &.nav-item-front {
        width: @nav-length;
        height: @nav-height;
      }

      &.nav-item-left {
        transform: skewY(45deg);
        transform-origin: right;
        left: -@nav-width;
        top: 0;
        position: absolute;
        height: @nav-height;
        width: @nav-width;
        filter: brightness(0.7);
        justify-content: center;
        font-size: 24px;
      }

      &.nav-item-top {
        transform: skewX(45deg);
        transform-origin: bottom;
        position: absolute;
        top: -@nav-width;
        height: @nav-width;
        width: @nav-length;
        filter: brightness(0.9);
      }
      
    }

  }
</style>

<a class="nav-item" {style} {href} {target}>
  <div class="nav-face nav-item-front">{text}</div>
  <div class="nav-face nav-item-left">
    <i class={iconClass}></i>
  </div>
  <div class="nav-face nav-item-top"></div>
</a>

