<script>
  import { fly } from "svelte/transition";
</script>

<style>
  .container {
    padding-left: 10px;
    padding-right: 10px;
  }
</style>

<header class="paper" in:fly={{ y: -100 }}>
  <div class="container">
    <div class="content" />
  </div>
</header>
