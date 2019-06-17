<script>
  import UserIcon from "./UserIcon.svelte";
  import TextField from "../components/TextField.svelte";
  import Snackbar from "../components/Snackbar.svelte";

  let username = "";
  let password = "";

  let isErrorShowed = false;

  const handleSubmit = () => {
    isErrorShowed = true;
  };
</script>

<style>
  .container {
    background-image: url("/images/login-background.png");
    display: flex;
    flex: 1;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    justify-content: center;
    align-items: center;
  }
  .teshhold-panel {
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
  .forgot-password {
    color: #777676;
    text-align: right;
    width: 75%;
    margin: 0 auto;
  }
  .forgot-password-text {
    cursor: pointer;
  }
  .forgot-password-text:hover {
    text-decoration: underline;
  }
</style>

<div class="container">
  <div class="teshhold-panel">
    <div class="user-icon">
      <UserIcon />
    </div>
    <div class="form-wrapper">
      <div class="form-title">Sign In</div>
      <form on:submit|preventDefault={handleSubmit} class="form-data">
        <TextField bind:value={username} placeholder="username" />
        <TextField
          bind:value={password}
          placeholder="password"
          type="password" />
        <TextField value="Login" placeholder="password" type="submit" />
      </form>
      <div class="forgot-password">
        <span class="forgot-password-text">Forgot Password ?</span>
      </div>
    </div>
  </div>
  {#if isErrorShowed}
    <Snackbar bind:isVisible={isErrorShowed} />
  {/if}
</div>
