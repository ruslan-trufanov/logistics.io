<script>
  import { onMount } from "svelte";
  import { navigate, Link } from "svelte-routing";
  import { fly, fade } from "svelte/transition";
  import { get } from "svelte/store";

  import { userUnLoggedInCredential, login } from "../stores/userStore";

  import TextField from "../components/TextField.svelte";
  import Snackbar from "../components/Snackbar.svelte";
  import LoadingBar from "../components/LoadingBar.svelte";

  import UserIcon from "./UserIcon.svelte";
  import isNumber from "../helpers/isNumber";

  let { userName, mobilePhone } = get(userUnLoggedInCredential);
  let isSnackBarShowed = false;
  let notifyMessage = "";
  let notifyClass = "";
  let loading = false;

  const redirectPage = () => {
    if (window.location.pathname !== "/") {
      setTimeout(navigate, 100, "/", { replace: true });
    }
  };

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
            login({ userName, mobilePhone }).then(() => {
              loading = false;
              navigate("/confirmation", { state: { isFromLogin: true } });
            }),
          1000
        );
      } catch (error) {
        notifyMessage = "Something went wrong";
        notifyClass = "error";
        isSnackBarShowed = true;
        loading = false;

        console.error(error);
      }
    }
  };

  onMount(redirectPage);
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
    height: 450px;
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
      <UserIcon />
    </LoadingBar>
    <div class="form-wrapper">
      <div class="form-title">Sign In</div>
      <form on:submit|preventDefault={onSubmit} class="form-data">
        <TextField
          required
          bind:value={userName}
          placeholder="userName"
          disabled={loading} />
        <TextField
          required
          bind:value={mobilePhone}
          placeholder="mobile phone"
          type="mobilePhone"
          disabled={loading} />
        <TextField value="Sign In" type="submit" disabled={loading} />
      </form>
      <div class="action-links" out:fade>
        <span class:hidden={loading}>
          <Link to="/registration">Sign Up</Link>
        </span>
        <span class:hidden={loading}>
          <Link to="/problems">Have a problem ?</Link>
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
