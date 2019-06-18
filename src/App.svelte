<script>
  import { onDestroy } from "svelte";
  import { get } from 'svelte/store';

  import { isUserLoggedIn } from "./stores/userStore.js";
  import UserUnLoggedIn from "./routes/UserUnLoggedIn.svelte";

  let userLoggedIn;

  const unsubscribe = isUserLoggedIn.subscribe(value => {
    userLoggedIn = value;
  });

  onDestroy(unsubscribe);
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
  }

  :global(a, a:visited) {
    color: #777676;
  }
</style>

{#if !userLoggedIn}
  <UserUnLoggedIn />
{/if}

{#if userLoggedIn}
  <div>2DO implement logged in router</div>
{/if}
