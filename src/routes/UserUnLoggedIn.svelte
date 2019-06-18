<script>
  import { Router, Route} from "svelte-routing";

  import Login from "../Login/Login.svelte";
  import ConfirmationLogin from "../ConfirmationLogin/Confirmation.svelte";
  import Registration from "../Registration/Registration.svelte";
  import HaveAProblem from "../HaveAProblem/HaveAProblem.svelte";
</script>

<Router>
  <Route path="/">
    <Login />
  </Route>
  <Route path="/confirmation">
    <ConfirmationLogin />
  </Route>
  <Route path="/registration">
    <Registration />
  </Route>
  <Route path="/problems">
    <HaveAProblem />
  </Route>
</Router>
