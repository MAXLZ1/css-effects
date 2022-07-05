<script lang="ts">
  import { onMount } from 'svelte'
  import { throttle } from 'lodash-es'
  import { getRealImageSizeAndOffset } from '@utils/imageFragmentsHelper'
  import { Animation } from './types'

  export let image = '/images/bg-image1.jpg'
  export let rows = 10
  export let columns = 10
  export let animation: Animation = Animation.closeTo
  
  let container
  let blockWidth
  let blockHeight
  let blockStyles = []
  let imageTag
  // 实际image偏移量
  let offsetX = 0
  let offsetY = 0
  // 实际image大小
  let realImageWidth = 0
  let realImageHeight = 0

  $: total = rows * columns
  $: containerStyle = `grid-template-columns: repeat(${columns}, auto);grid-template-rows: repeat(${rows}, auto);${animation === Animation.closeTo ? 'perspective: 200px;' : ''}`
  $: blockStyle = `background-image: url(${image});`
  $: animationClass = animation
  
  onMount(() => {
    computeBlock()
    imageTag = new Image()
    imageTag.src = image
    imageTag.onload = function () {
      computeCoverSize()
      computeBlockStyle()
    }
  })
  
  function restart() {
    computeBlock()
    computeCoverSize()
    computeBlockStyle()
  }
  
  async function computeBlock() {
    const { height, width } = container.getBoundingClientRect()
    blockWidth = width / columns
    blockHeight = height / rows
  }
  
  function computeBlockStyle() {
    blockStyles = []
    for (let index = 1; index <= total; index++) {
      let rowIndex = Math.ceil(index / columns) - 1
      let num = index % columns
      let columnIndex = num === 0 ? columns - 1 : num - 1
      const x = blockWidth * columnIndex
      const y = blockHeight * rowIndex
      let style = `background-size:${realImageWidth}px ${realImageHeight}px;` +
        `background-position: -${x + offsetX}px -${y + offsetY}px;visibility: visible;`
      switch (animation) {
        case Animation.copyX:
        case Animation.flip:
          style += `animation-delay: ${(index - 1) * 0.5}s;`
          break
        case Animation.rise:
        case Animation.closeTo:
          style += `animation-delay: ${(Math.random() * 8).toFixed(3)}s;`
          break
        default:
          break
      }
      blockStyles.push(style)
    }
  }
  
  function computeCoverSize() {
    const {
      width,
      height,
      offsetX: x,
      offsetY: y,
    } = getRealImageSizeAndOffset(container, imageTag)
    
    offsetX = x
    offsetY = y
    realImageWidth = width
    realImageHeight = height
  }
  
</script>

<style lang="less">
    .image-container {
      display: grid;
      height: 90vh;
      width: 90vw;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      
      .closeTo {
        animation: closeTo;
        animation-duration: 3s;
        animation-fill-mode: backwards;
        animation-timing-function: ease-in-out;
      }
      
      .flip {
        animation: flip;
        animation-duration: 1s;
        animation-fill-mode: backwards;
        animation-timing-function: linear;
        backface-visibility: hidden;
      }
      
      .copyX {
        animation: copyX;
        animation-duration: 0.3s;
        animation-timing-function: ease-out;
        animation-fill-mode: backwards;
        visibility: hidden;
      }
      
      .rise {
        animation: rise;
        animation-duration: 0.5s;
        animation-timing-function: ease-out;
        animation-fill-mode: backwards;
        visibility: hidden;
      }
    }
    
    @keyframes closeTo {
      0% {
        transform: translate3d(0, 0, 300px);
      }
      100% {
        transform: translate3d(0, 0, 0);
      }
    }
    
    @keyframes flip {
      0% {
        transform: rotateY(-180deg);
        transform-origin: left;
      }
      100% {
        transform: rotateY(0);
      }
    }
    
    @keyframes copyX {
      0% {
        transform: translateX(-100%);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes rise {
      0% {
        transform: translateY(500%);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
</style>

<svelte:window on:resize={throttle(restart)} />

<div class="image-container" bind:this={container} style={containerStyle}>
  {#each {length: total} as _,i (i)}
    <div class={'block ' + animationClass} style={blockStyle + blockStyles[i]}></div>
  {/each}
</div>
