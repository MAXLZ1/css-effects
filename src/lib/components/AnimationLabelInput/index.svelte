<script lang="ts">
  import { filterProps } from '../../../utils/componentHelpers'

  export let label = 'default text'
  export let labelFill = true
  export let value
  
  $: labelClass = 'label' + (labelFill ? ' fill' : '')
  $: props = filterProps(['label', 'labelFill'], $$props)
</script>

<style lang="less">
  @defaultColor: #5F697A;
  @activeColor: #65DECD;
  @bgColor: #243042;

  .transition() {
    transition: all .3s ease-in-out;
  }

  .input-container {
    width: 300px;
    height: 58px;
    position: relative;
    
    .input {
      .transition();
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding: 12px;
      border: 2px solid @defaultColor;
      border-radius: 8px;
      background-color: transparent;
      font-size: 24px;
      color: #FFFFFF;
      
      &:focus-visible {
        outline: none;
      }
      
      &:focus, &:valid {
        border-color: @activeColor;
        
        & ~ .label {
          transform: translateY(-11px);
          font-size: 14px;
          line-height: 22px;
          padding: 0 5px;
          letter-spacing: 2px;

          &.fill {
            background-color: @activeColor;
            color: @bgColor;
          }

          &:not(.fill) {
            background-color: @bgColor;
            border-radius: 0;
            color: @activeColor;
            border-left: 2px solid @activeColor;
            border-right: 2px solid @activeColor;
          }
        }
      }
      
    }
  
    .label {
      .transition();
      pointer-events: none;
      position: absolute;
      left: 12px;
      transform: translateY(0);
      line-height: 54px;
      color: @defaultColor;
      font-size: 22px;
      border-radius: 4px;
    }
  }
</style>

<div {...props} class="input-container">
  <input class="input" type="text" bind:value required/>
  <label class={labelClass}>{label}</label>
</div>
