<script lang="ts">
  import AnimationLabelInput from '../../lib/components/AnimationLabelInput/index.svelte'
  import Seo from '../../lib/components/Seo/index.svelte';
  import GithubLink from '../../lib/components/GithubLink/index.svelte';

  let firstName = ''
  let secondName = ''

  $: fullName = firstName + ' ' + secondName
</script>

<style lang="less">
  @import "../../styles/utils";
  @bgColor: #243042;
  .container {
    .full-screen();
    .flex-center(column);
    background-color: @bgColor;

    .text {
      font-size: 26px;
      color: #FFFFFF;
      margin-top: 40px;
    }
  }
</style>

<Seo title="animation of label for input" description="Animation of label for input." keywords="input, input label" />

<GithubLink />

<div class="container">
  <AnimationLabelInput label="FIRST NAME" labelFill={false} bind:value={firstName} />
  
  <AnimationLabelInput style="margin-top: 40px;" label="SECOND NAME" labelFill bind:value={secondName} />
  
  <div class="text">
    FullName：{fullName}
  </div>
</div>
