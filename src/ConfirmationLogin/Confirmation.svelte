<script>
  import { Link, navigate } from "svelte-routing";
  import { fly } from "svelte/transition";

  import ConfirmationIcon from "./ConfirmationIcon.svelte";
  import TextField from "../components/TextField.svelte";
  import Snackbar from "../components/Snackbar.svelte";

  import { confirmationLogin } from "../stores/userStore";

  import isNumber from "../helpers/isNumber";

  let code = "";

  let isErrorShowed = false;
  let errorMessage = "";
  let notifyClass = "";

  const onSubmit = () => {
    if (!isNumber(code)) {
      errorMessage = "Please, please enter a valid code number";
      isErrorShowed = true;
      notifyClass = "warning";
    } else {
      try {
        confirmationLogin({ code }).then(() => {
          navigate("/");
        });
      } catch (error) {
        errorMessage = "Something went wrong";
        notifyClass = "error";
        isErrorShowed = true;
      }
    }
  };
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
    width: 400px;
    height: 350px;
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
  .action-link {
    display: flex;
    width: 75%;
    margin: 0 auto;
  }
</style>

<div class="container" transition:fly={{ x: 200 }}>
  <div class="threshold-panel">
    <div class="user-icon">
      <ConfirmationIcon />
    </div>
    <div class="form-wrapper">
      <div class="form-title">Confirmation</div>
      <form on:submit|preventDefault={onSubmit} class="form-data">
        <TextField required bind:value={code} placeholder="code" />
        <TextField value="Enter to platform" type="submit" />
      </form>
      <div class="action-link">
        <Link to="/">Back to Login</Link>
      </div>
    </div>
  </div>
  {#if isErrorShowed}
    <Snackbar
      {notifyClass}
      bind:isVisible={isErrorShowed}
      message={errorMessage} />
  {/if}
</div>
