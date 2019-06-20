<script>
  import { Link, navigate } from "svelte-routing";
  import { fly } from "svelte/transition";

  import ConfirmationIcon from "./ConfirmationIcon.svelte";

  import Snackbar from "../components/Snackbar.svelte";
  import LoadingBar from "../components/LoadingBar.svelte";
  import TextField from "../components/TextField.svelte";

  import { confirmation } from "../stores/userStore";

  import isNumber from "../helpers/isNumber";

  let code = "";

  let isSnackBarShowed = false;
  let notifyMessage = "";
  let notifyClass = "";

  const { isFromLogin, isFromRegistration } = window.history.state;

  const onSubmit = () => {
    if (!isNumber(code)) {
      notifyMessage = "Please, please enter a valid code number";
      isSnackBarShowed = true;
      notifyClass = "warning";
    } else {
      try {
        confirmation({ code }).then(() => {
          navigate("/");
        });
      } catch (error) {
        notifyMessage = "Something went wrong";
        notifyClass = "error";
        isSnackBarShowed = true;
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
    <LoadingBar>
      <ConfirmationIcon />
    </LoadingBar>
    <div class="form-wrapper">
      <div class="form-title">Confirmation</div>
      <form on:submit|preventDefault={onSubmit} class="form-data">
        <TextField required bind:value={code} placeholder="code" />
        <TextField value="Enter to platform" type="submit" />
      </form>
      <div class="action-link">
        {#if isFromLogin}
          <Link to="/">Back to Login</Link>
        {/if}
        {#if isFromRegistration}
          <Link to="/registration">Back to Registration</Link>
        {/if}
      </div>
    </div>
  </div>
  {#if isSnackBarShowed}
    <Snackbar
      {notifyClass}
      bind:isVisible={isSnackBarShowed}
      message={notifyMessage} />
  {/if}
</div>
