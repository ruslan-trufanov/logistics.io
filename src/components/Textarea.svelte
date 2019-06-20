<script>
  export let message = "my message";
  export let placeholder = "my placeholder";
  export let disabled = false;
</script>

<style>
  .textarea {
    border-radius: 7px;
    border: none;
    padding: 20px;
    text-transform: capitalize;
    width: 100%;
    margin-bottom: 25px;
    height: 135px;
    resize: none;
  }
  .textarea:focus {
    border: none;
    outline: none;
  }
</style>

<textarea class="textarea" {disabled} {placeholder} bind:value={message} />
