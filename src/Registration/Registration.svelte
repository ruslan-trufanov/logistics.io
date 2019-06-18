<script>
  import { fly } from "svelte/transition";
  import { Link } from "svelte-routing";
  import transliterate from "transliterate";

  import TextField from "../components/TextField.svelte";
  import Snackbar from "../components/Snackbar.svelte";
  import RegistrationIcon from "./RegistrationIcon.svelte";

  let username = "",
    telephone = "",
    name = "",
    company = "";
  let isErrorShowed = false;

  $: username = transliterate(name)
    .split(" ")
    .join("_");

  const onSubmit = () => {};
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
    height: 600px;
    background-color: #ffffff47;
    box-shadow: 0 0 2px rgba(145, 145, 145, 0.2);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
  }

  .registration-icon {
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
    color: #777676;
    display: flex;
    justify-content: space-between;
    width: 75%;
    margin: 0 auto;
  }
</style>

<div class="container" transition:fly={{ x: 200 }}>
  <div class="threshold-panel">
    <div class="registration-icon">
      <RegistrationIcon />
    </div>
    <div class="form-wrapper">
      <div class="form-title">Sign Up</div>
      <form on:submit|preventDefault={onSubmit} class="form-data">
        <TextField required bind:value={name} placeholder="name | surname" />
        <TextField required bind:value={username} placeholder="username" />
        <TextField bind:value={company} placeholder="company" />
        <TextField
          required
          bind:value={telephone}
          placeholder="mobile phone"
          type="telephone" />
        <TextField value="Sign Up" type="submit" />
      </form>
      <div class="action-links">
        <Link to="/">Sign in</Link>
        <Link to="/problems">Have a problem?</Link>
      </div>
    </div>
  </div>
  {#if isErrorShowed}
    <Snackbar bind:isVisible={isErrorShowed} />
  {/if}
</div>
