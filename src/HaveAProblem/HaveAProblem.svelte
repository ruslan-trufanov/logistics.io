<script>
  import ProblemIcon from "./PromblemIcon.svelte";
  import TextField from "../components/TextField.svelte";
  import Textarea from "../components/Textarea.svelte";
  import Snackbar from "../components/Snackbar.svelte";
  import { Link } from "svelte-routing";
  import { fly } from "svelte/transition";

  let telephone = "";
  let textareaMessage = "";

  let isErrorShowed = false;

  const handleSubmit = () => {};
</script>

<style>
  .container {
    display: flex;
    flex: 1;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  .threshold-panel {
    width: 650px;
    height: 550px;
    background-color: #ffffff47;
    box-shadow: 0 0 2px rgba(145, 145, 145, 0.2);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
  }
  .user-icon {
    border-radius: 50%;
    background-color: #45a5bfa6;
    width: 75px;
    height: 75px;
    position: absolute;
    top: -37.5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form-wrapper {
    flex-direction: column;
  }
  .form-title {
    text-align: center;
    margin-bottom: 25px;
    color: #868787;
    font-size: 30px;
  }
  .form-data {
    text-align: center;
    width: 75%;
    margin: 0 auto;
  }
  .action-links {
    display: flex;
    justify-content: space-between;
    width: 75%;
    margin: 0 auto;
  }
</style>

<div class="container" transition:fly={{ x: 200 }}>
  <div class="threshold-panel">
    <div class="user-icon">
      <ProblemIcon />
    </div>
    <div class="form-wrapper">
      <div class="form-title">Have a problem?</div>
      <form on:submit|preventDefault={handleSubmit} class="form-data">
        <TextField required bind:value={telephone} placeholder="mobile phone"type="telephone" />
        <Textarea bind:message={textareaMessage} placeholder="Enter your problem..."/>
        <TextField value="Send a problem" type="submit" />
      </form>
      <div class="action-links">
        <Link to="/registration">Sign Up</Link>
        <Link to="/">Sign In?</Link>
      </div>
    </div>
  </div>
  {#if isErrorShowed}
    <Snackbar bind:isVisible={isErrorShowed} />
  {/if}
</div>
