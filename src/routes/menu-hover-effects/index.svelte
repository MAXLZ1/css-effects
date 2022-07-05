<script lang="ts">
  import Seo from '../../lib/components/Seo/index.svelte';
  import GithubLink from '../../lib/components/GithubLink/index.svelte';

  const menus = [
    {
      title: 'HOME',
    },
    {
      title: 'ABOUT',
    },
    {
      title: 'SERVICES',
    },
    {
      title: 'TEAM',
    },
    {
      title: 'CONTACT',
    },
  ]
</script>

<style lang="less">
  @import "../../styles/utils";
  
  .container {
    .full-screen();
    .flex-center();
    background-color: #262626;
    
    .menu {
      list-style: none;
      
      li {
        cursor: pointer;

        &:hover {
          
          .title {
            color: rgba(255, 255, 255, 0.3);
            transform: translateY(-20px);
            transition-delay: 0s;
            
            &::before {
              opacity: 1;
              letter-spacing: 2px;
            }
          }
        }
        
        .title {
          position: relative;
          display: block;
          transition: .5s ease-in-out;
          transition-delay: 0.5s;
          font-size: 4em;
          font-weight: bolder;
          color: #FFFFFF;
          text-decoration: none;
          
          &::before {
            content: attr(data-title);
            pointer-events: none;
            position: absolute;
            bottom: -10px;
            transition: .5s ease-in-out;
            transition-delay: 0.25s;
            color: #7FF8E1;
            text-shadow: 0 0 10px #7FF8E1,
            0 0 30px #7FF8E1,
            0 0 80px #7FF8E1;
            font-size: 16px;
            font-weight: normal;
            opacity: 0;
            letter-spacing: 80px;
          }
        }
      }
    }
  }
</style>

<Seo title="menu hover effect" description="Menu hover effect." keywords="hover, menu hover" />

<GithubLink />

<div class="container">
  <ul class="menu">
    {#each menus as {title},i (i)}
      <li>
        <a class="title" data-title={title}>{title}</a>
      </li>
    {/each}
  </ul>
</div>
