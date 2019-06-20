<script>
  import isNumber from "../helpers/isNumber";

  export let type = "text";
  export let placeholder = "placeholder";
  export let value = "";
  export let required = false;
  export let disabled = false;

  let input;

  const onInput = e => (value = e.target.value);
</script>

<style>
  .input {
    border-radius: 7px;
    border: none;
    padding: 20px;
    text-transform: capitalize;
    width: 100%;
    margin-bottom: 25px;
  }
  .input:focus {
    border: none;
    outline: none;
  }
  .submit {
    cursor: pointer;
    background-color: #45a5bf;
    color: #fff;
    font-size: 20px;

    background-position: center;
    transition: background 0.4s;
  }
  .submit:hover {
    background-color: #186c83;
  }

  .submit:disabled {
    background-color: rgb(214, 214, 214);
  }
</style>

<input
  class:submit={type === 'submit'}
  class="input"
  {value}
  {disabled}
  placeholder={required ? `${placeholder}*` : placeholder}
  {type}
  bind:this={input}
  on:input={onInput}
  on:focus
  on:blur
  {required} />
