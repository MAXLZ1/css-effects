<script lang="ts">
  export let color = '#FFFFFF'
  
  $: style = `color: ${color};`
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

<a class="github-link" {style} target="_blank">
  <i class="fa-brands fa-github"></i>
</a>
