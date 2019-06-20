<script>
  import { Router, Route } from "svelte-routing";
  import { onDestroy } from "svelte";

  import { userUnLoggedInCredential } from "../stores/userStore";

  import Login from "../Login/Login.svelte";
  import Confirmation from "../Confirmation/Confirmation.svelte";
  import Registration from "../Registration/Registration.svelte";
  import HaveAProblem from "../HaveAProblem/HaveAProblem.svelte";

  export let userLoggedIn = false;

  let userName, mobilePhone;
  $: isConfirmationPageResolved = !!userName && !!mobilePhone;

  const unsubscribe = userUnLoggedInCredential.subscribe(value => {
    userName = value.userName;
    mobilePhone = value.mobilePhone;
  });

  onDestroy(unsubscribe);
</script>

<Router>
  <Route path="/">
    <Login />
  </Route>
  {#if isConfirmationPageResolved}
    <Route path="/confirmation">
      <Confirmation />
    </Route>
  {/if}
  <Route path="/registration">
    <Registration />
  </Route>
  <Route path="/problems">
    <HaveAProblem />
  </Route>

  <Route path="*">
    <Login />
  </Route>
</Router>
