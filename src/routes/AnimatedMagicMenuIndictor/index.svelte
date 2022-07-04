<script lang="ts">
  import { onMount, tick } from 'svelte'
  const navigations = [
    {
      title: 'Home',
      iconClass: 'fa-house',
      color: '#E45265'
    },
    {
      title: 'Profile',
      iconClass: 'fa-user',
      color: '#444FC5'
    },
    {
      title: 'Message',
      iconClass: 'fa-message',
      color: '#5CC87F'
    },
    {
      title: 'Help',
      iconClass: 'fa-circle-question',
      color: '#57C2F4'
    },
    {
      title: 'Settings',
      iconClass: 'fa-gear',
      color: '#F4B23F'
    },
  ]

  let navContainer
  let container
  let hoverId = 0
  let blockStyle = ''

  onMount(() => {
    updateBlock()
  })

  $: navigation = navigations[hoverId]

  async function changeHoverId(id) {
    hoverId = id
    await tick()
    updateBlock()
  }

  function updateBlock() {
    const parentRect = navContainer.getBoundingClientRect()
    const childRect = navContainer.children[hoverId].getBoundingClientRect()
    const x = childRect.x - parentRect.x
    const y= childRect.y - parentRect.y
    blockStyle = `top: ${y}px; left: ${x}px;background-color: ${navigation.color};`
    container.style.backgroundColor = navigation.color
  }

</script>

<style lang="less">
  @import "../../styles/utils";
  
  .container {
    .full-screen();
    transition: background-color .4s ease-in-out;
    background-color: #FFFFFF;

    .navigation-container {
      .abb-flex(row, space-between, center);
      width: 270px;
      position: fixed;
      bottom: 20px;
      left: 0;
      right: 0px;
      margin: auto;
      background-color: #FFFFFF;
      border-radius: 100px;
      padding: 8px 14px;

      .block {
        position: absolute;
        height: 46px;
        width: 46px;
        border-radius: 50%;
        z-index: -1;
        transition: all .4s ease-in-out;
      }

      .navigation-item {
        .flex-center();
        height: 46px;
        width: 46px;
        border-radius: 50%;
        cursor: pointer;
        background-color: transparent;

        &.active {
          .navigation-icon {
            color: #FFFFFF;
          }
        }

        &:hover {

          .navigation-title {
            opacity: 1;
            visibility: visible;
            transform: translateY(-60px);
          }
        }

        .navigation-icon {
          transition: color .4s ease-in-out;
          color: #3B3B3A;
          font-size: 22px;
        }

        .navigation-title {
          font-size: 13px;
          position: absolute;
          padding: 4px 8px;
          background-color: #FFFFFF;
          border-radius: 3px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          transition: all .5s ease-in-out;
          transform: translateY(-66px);
          opacity: 0;
          visibility: hidden;

          &.leave {
            animation: fade .5s ease-in-out reverse;
          }

          &::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            right: 0;
            margin: auto;
            height: 10px;
            width: 10px;
            background-color: #FFFFFF;
            transform: rotate(45deg);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            border-radius: 2px;
            z-index: -1;
          }
        }
      }
    }
  }
</style>

<div class="container" bind:this={container}>
  <div class="navigation-container" bind:this={navContainer}>
    {#each navigations as {iconClass, title}, i (i)}
      <div class={'navigation-item ' + (hoverId === i ? 'active' : '')} on:mouseenter={() => changeHoverId(i)}>
        <i class={'navigation-icon fa-solid ' + iconClass}></i>
        <div class="navigation-title">
          {title}
        </div>
      </div>
    {/each}
    <div class="block" style={blockStyle}></div>
  </div>
</div>
