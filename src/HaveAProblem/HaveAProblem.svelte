<script>
  import ProblemIcon from "./PromblemIcon.svelte";
  import TextField from "../components/TextField.svelte";
  import Textarea from "../components/Textarea.svelte";
  import Snackbar from "../components/Snackbar.svelte";
  import { Link } from "svelte-routing";
  import { fly } from "svelte/transition";

  import LoadingBar from "../components/LoadingBar.svelte";
  import isNumber from "../helpers/isNumber";

  import { sendRequestProblem, registrate } from "../stores/userStore";

  let mobilePhone = "";
  let textareaMessage = "";
  let loading = false;

  let isSnackBarShowed = false;
  let notifyMessage = "";
  let notifyClass = "";

  const onSubmit = (event) => {
    
    if (!isNumber(mobilePhone)) {
      notifyMessage = "Please, please enter a valid code number";
      isSnackBarShowed = true;
      notifyClass = "warning";
    } else {
      try {
        loading = true;
        setTimeout(
          // emulated delay server
          () =>
            sendRequestProblem({ mobilePhone, textareaMessage }).then(() => {
              notifyMessage =
                "Your request has been registered. We will contact you soon";
              isSnackBarShowed = true;
              notifyClass = "success";
              loading = false;              
              
              event.target.reset();
            }),
          1000
        );
      } catch (error) {
        notifyMessage = "Something went wrong";
        notifyClass = "error";
        isSnackBarShowed = true;
        loading = false;
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
    <LoadingBar {loading}>
      <ProblemIcon />
    </LoadingBar>
    <div class="form-wrapper">
      <div class="form-title">Have a problem?</div>
      <form on:submit|preventDefault={onSubmit} class="form-data">
        <TextField
          required
          disabled={loading}
          bind:value={mobilePhone}
          placeholder="mobile phone"
          type="mobilePhone" />
        <Textarea
          disabled={loading}
          bind:message={textareaMessage}
          placeholder="Enter your problem..." />
        <TextField value="Send a problem" disabled={loading} type="submit" />
      </form>
      <div class="action-links">
        <span class:hidden={loading}>
          <Link to="/registration">Sign Up</Link>
        </span>
        <span class:hidden={loading}>
          <Link to="/">Sign In</Link>
        </span>
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
