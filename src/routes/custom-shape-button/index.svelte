<script>
  import Seo from '../../lib/components/Seo/index.svelte';
  import GithubLink from '../../lib/components/GithubLink/index.svelte';
</script>

<style lang="less">
  @import "../../styles/utils";
  
  .container {
    .full-screen();
    .flex-center();
    background-color: #D6E176;
    
    .button {
      padding: 30px 80px;
      background-color: #FFFFFF;
      border: none;
      font-size: 24px;
      letter-spacing: 0.2em;
      cursor: pointer;
      clip-path: polygon(0 0, 10% 50%, 0 100%, 90% 100%, 100% 50%, 90% 0);
      transition: .5s ease-in-out;
      
      &:hover {
        color: #f1f1f1;
        background-color: #B2BC3E;
        clip-path: polygon(10% 0, 0 50%, 10% 100%, 100% 100%, 90% 50%, 100% 0);
      }
    }
  }
</style>

<Seo title="custom shape button" description="A custom shape button with hover animation." keywords="clip-path, button" />

<GithubLink />

<div class="container">
  <button class="button">BUTTON</button>
</div>
