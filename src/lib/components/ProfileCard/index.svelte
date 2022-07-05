<script lang="ts">
  export let title
  export let subTitle
  export let image
  export let buttonText = 'hire me'
  
  let show = false
  
  $: showClass = show ? ' show' : ''
  
  function handleClick() {
    show = !show
  }
</script>

<style lang="less">
  @color: #398CC0;
  
  .profile-card {
    position: relative;
    color: #FFFFFF;
    width: 200px;
    height: 300px;
    border-radius: 16px;
    background: @color;
    padding: 12px 44px 16px 44px;
    filter: drop-shadow(-20px 20px 40px #398CC055);
    transition: .5s ease-in-out;
    
    &.show {
      height: 38px;

      .toggle .fa-solid {
        transform: rotate(180deg);
      }
    }
    
    .card-content {
      position: absolute;
      inset: 12px 0 0 0;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;

      .card-title {
        letter-spacing: 1px;
        font-weight: bold;
        font-size: 18px;
        text-transform: uppercase;
      }

      .card-subtitle {
        margin-bottom: 16px;
        font-size: 13px;
        text-transform: initial;
      }

      .card-image-box {
        width: 190px;
        height: 190px;
        border: 4px solid #FFFFFF;
        box-shadow: -4px 4px 14px rgba(0, 0, 0, 0.3);

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .card-button {
        font-size: 13px;
        margin-top: 14px;
        padding: 10px 14px;
        color: #393939;
        letter-spacing: 1px;
        border-radius: 20px;
        border: none;
        cursor: pointer;
        box-shadow: -4px 4px 7px 0 rgba(0, 0, 0, 0.3);
        text-transform: uppercase;
      }
    }
    
    .toggle {
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 60px;
      bottom: -60px;
      background: @color;
      border-radius: 0 0 50% 50%;
      cursor: pointer;
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left:-35px;
        width: 35px;
        height: 35px;
        border-top-right-radius: 35px;
        box-shadow: 10px -10px 0 8px @color;
        z-index: -1;
        background: transparent;
        pointer-events: none;
      }
      
      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: -35px;
        width: 35px;
        height: 35px;
        border-top-left-radius: 35px;
        box-shadow: -10px -10px 0 8px @color;
        z-index: -1;
        background: transparent;
        pointer-events: none;
      }
      
      .fa-solid {
        transition: .5s ease-in-out;
        transform: rotate(0);

      }
    }
  }
</style>

<div class={'profile-card' + showClass}>
  <div class="card-content">
    <span class="card-title">{title}</span>
    <span class="card-subtitle">{subTitle}</span>
    <div class="card-image-box">
      <img class="card-image" src={image} alt="" />
    </div>
    <button class="card-button">{buttonText}</button>
  </div>
  <div class="toggle" on:click={handleClick}>
    <i class="fa-solid fa-angle-down"></i>
  </div>
</div>

