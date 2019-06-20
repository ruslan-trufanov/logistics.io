<script>
  import { onDestroy } from "svelte";
  import { fly, fade } from "svelte/transition";
  
  export let isVisible = true;
  export let message = "This is an error message!";
  export let notifyClass = "success";

  const handleCloseSnackbar = () => isVisible = false;

  const timeout = setTimeout(handleCloseSnackbar, 3000);

  onDestroy(() => clearTimeout(timeout))
</script>

<style>
  .snackbard {
    position: absolute;
    bottom: 15px;
    right: 25px;
    min-height: 40px;
    max-width: 750px;
    padding: 6px 24px;
    min-width: 300px;
    color: #fff;
    border-radius: 4px;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
      0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
    display: flex;
    align-items: center;
  }
  .warning {
    background-color: #ffa000;
  }
  .error {
    background-color: #d32f2f;
  }
  .success {
    background-color: #43a047;
  }
  .cross {
    position: absolute;
    right: 20px;
    top: 12px;
    cursor: pointer;
    opacity: 0.3;
    display: flex;
    height: 30px;
    width: 30px;
    justify-content: center;
    align-items: center;
  }

  .message {
    margin-right: 50px;
  }
  .cross:hover {
    opacity: 1;
  }
  .cross:before,
  .cross:after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 25px;
    width: 2px;
    background-color: #fff;
  }
  .cross:before {
    transform: rotate(45deg);
  }
  .cross:after {
    transform: rotate(-45deg);
  }
</style>

<div in:fly={{ x: 200 }} class:snackbard={true} class={notifyClass}>
  <span class="message">{message}</span>
  <span on:click={handleCloseSnackbar} class="cross" />
</div>
