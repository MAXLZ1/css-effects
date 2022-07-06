<script lang="ts">
  export let color = '#FFFFFF'
  
  $: style = `color: ${color};`
  
  const href = 'https://github.com/MAXLZ1/css-effects'
</script>

<style lang="less">
  .github-link {
    position: fixed;
    right: 20px;
    top: 20px;
    font-size: 32px;
    z-index: 999;
    cursor: pointer;
  }
</style>

<a class="github-link" {style} {href} target="_blank">
  <i class="fa-brands fa-github"></i>
</a>
