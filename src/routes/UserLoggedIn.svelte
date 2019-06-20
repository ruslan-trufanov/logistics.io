<script>
  import { Router, Route } from "svelte-routing";

  import AnalysisPanel from "../AnalysisPanel/AnalysisPanel.svelte";
</script>

<Router>
  <Route path="/">
    <AnalysisPanel />
  </Route>

  <Route path="*">
    <AnalysisPanel />
  </Route>
</Router>
