<script>
  import { fly } from "svelte/transition";
</script>

<style>
  .sideBar {
    max-width: 25%;
    flex-basis: 25%; 
  }
</style>

<div class="paper sideBar" in:fly={{ x: -100 }}>sideBar</div>
