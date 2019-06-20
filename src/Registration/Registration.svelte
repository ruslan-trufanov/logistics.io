<script>
  import { fly } from "svelte/transition";
  import { get } from "svelte/store";
  import { Link, navigate } from "svelte-routing";
  import transliterate from "transliterate";

  import { userUnLoggedInCredential, registrate } from "../stores/userStore";

  import LoadingBar from "../components/LoadingBar.svelte";
  import TextField from "../components/TextField.svelte";
  import Snackbar from "../components/Snackbar.svelte";
  import RegistrationIcon from "./RegistrationIcon.svelte";

  import isNumber from "../helpers/isNumber";

  let { userName, mobilePhone, company } = get(userUnLoggedInCredential);

  let isSnackBarShowed = false;
  let loading = false;
  let notifyMessage = "";
  let notifyClass = "";

  const onSubmit = () => {
    if (!isNumber(mobilePhone)) {
      notifyMessage = "Please, please enter a valid phone number";
      isSnackBarShowed = true;
      notifyClass = "warning";
    } else {
      loading = true;
      try {
        setTimeout(
          // emulated delay server
          () =>
            registrate({ userName, mobilePhone, company }).then(() => {
              navigate("/confirmation", {
                state: { isFromRegistration: true }
              });
            }),
          1000
        );
      } catch (error) {
        notifyMessage = "Something went wrong";
        notifyClass = "error";
        isSnackBarShowed = true;

        console.error(error);
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
    color: #777676;
    display: flex;
    justify-content: space-between;
    width: 75%;
    margin: 0 auto;
  }
</style>

<div class="container" transition:fly={{ x: 200 }}>
  <div class="threshold-panel">
    <LoadingBar {loading}>
      <RegistrationIcon />
    </LoadingBar>
    <div class="form-wrapper">
      <div class="form-title">Sign Up</div>
      <form on:submit|preventDefault={onSubmit} class="form-data">
        <TextField
          required
          disabled={loading}
          bind:value={userName}
          placeholder="userName" />
        <TextField
          required
          disabled={loading}
          bind:value={company}
          placeholder="company" />
        <TextField
          required
          disabled={loading}
          bind:value={mobilePhone}
          placeholder="mobile phone"
          type="mobilePhone" />
        <TextField value="Sign Up" type="submit" disabled={loading} />
      </form>
      <div class="action-links">
        <span class:hidden={loading}>
          <Link to="/">Sign in</Link>
        </span>
        <span class:hidden={loading}>
          <Link to="/problems">Have a problem?</Link>
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
