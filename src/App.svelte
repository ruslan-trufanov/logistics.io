<script>
  import { Router, Route } from "svelte-routing";
  import Login from "./Login/Login.svelte";
</script>

<style>
  @font-face {
    font-family: "Open-Sans-Regular";
    src: url("/fonts/OpenSans-Regular.ttf");
  }
  :global(body) {
    padding: 0;
    overflow: hidden;
    /* font-family: "Open-Sans-Regular"; */
  }
</style>

<Router>
  <Route path="/">
    <Login />
  </Route>
</Router>
