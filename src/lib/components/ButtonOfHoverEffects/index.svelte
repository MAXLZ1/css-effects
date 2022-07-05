<script lang="ts">
  export let text = 'BUTTON'
  export let color = '#1e9bff'

  $: style = `--color: ${color}`
</script>

<style lang="less">
  @block-height: 8px;
  @block-width: 14px;
  @block-hover-width: 20px;
  @margin: 24px;
  @border-width: 2px;

  .block {
    transition: .5s ease-in-out;
    content: '';
    position: absolute;
    height: @block-height;
    width: @block-width;
    border: 2px solid var(--color);
    box-sizing: border-box;
    background-color: #2C2E33;
  }

  .button {
    background-color: #2C2E33;
    color: rgba(204, 204, 204, 1);
    border: @border-width solid #49494E;
    padding: 12px 24px;
    font-size: 20px;
    letter-spacing: 0.2em;
    cursor: pointer;
    transition: .5s ease-in-out;
    position: relative;

    &:hover {
      color: var(--color);
      transform: scale(1.1);
      letter-spacing: 0.35em;
      border-color: var(--color);
      box-shadow: 0 0 30px var(--color);

      &::before {
        width: @block-hover-width;
        left: @margin + 84px;
      }

      &::after {
        width: @block-hover-width;
        right: @margin + 84px;
      }
    }

    &::before {
      .block();
      top: -(@block-height + @border-width) ./ 2;
      left: @margin;
    }

    &::after {
      .block();
      bottom: -(@block-height + @border-width) ./ 2;
      right: @margin;
    }
  }
</style>

<button class="button" {style}>{text}</button>
