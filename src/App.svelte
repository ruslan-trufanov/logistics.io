<script>
  import { isUserLoggedIn } from "./stores/userStore.js";
  import UserUnLoggedIn from "./routes/UserUnLoggedIn.svelte";
  import UserLoggedIn from "./routes/UserLoggedIn.svelte";

  import Header from "./Header/Header.svelte";
  import Sidebar from "./Sidebar/Sidebar.svelte";
</script>

<style>
  @font-face {
    font-family: "Open-Sans-Regular";
    src: url("/fonts/OpenSans-Regular.ttf");
  }
  :global(body) {
    padding: 0;
    overflow: hidden;
    background-image: url("/images/login-background.png");
    background-repeat: no-repeat;
    background-size: cover;
    font-family: 'Open Sans'
  }

  :global(a, a:visited) {
    color: #777676;
  }

  :global(.hidden) {
    opacity: 0;
  }

  :global(.paper) {
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    background-color: #fff;
    padding: 24px 16px;
    border-radius: 5px;
    margin: 5px;
  }

  .container {
    max-width: 1680px;
    margin: 0 auto;
    height: 100%;

    width: 100%;
    display: flex;
    align-items: stretch;
    align-content: stretch;
    justify-content: flex-start;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .content {
    flex: 1 1 auto;
    display: flex;
    align-items: stretch;
    align-content: stretch;
    justify-content: flex-start;
    flex-direction: column;
  }
  :global(.heading) {
    color: #9e90b2;
    font-size: 21px;
    margin-bottom: 10px;
  }
</style>

{#if $isUserLoggedIn}
  <div class="container">
    <Sidebar />
    <div class="content">
      <Header />
      <UserLoggedIn />
    </div>
  </div>
{:else}
  <UserUnLoggedIn />
{/if}
