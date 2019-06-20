<script>
  import { fly } from "svelte/transition";
  import LogOutIcon from './LogOutIcon.svelte';
</script>

<style>
  .container {
    padding-left: 10px;
    padding-right: 10px
  }
</style>

<header class="paper" in:fly={{ y: -100 }}>
  <div class="container">
    <div class="logout">
      <LogOutIcon />
    </div>
    <div class="content"></div>
  </div>
</header>
