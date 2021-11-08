<script lang="ts">
  import { getContext } from "svelte";
  export let type = "text";
  export let label;
  export let name;
  export let message = null;

  const { onBlur, errors } = getContext("form");
</script>

<div class="form-group">
  <label for={name}>{label}</label>
  {#if type !== "textarea"}
    <input {name} {type} on:blur={onBlur} />
  {:else}
    <textarea {name} on:blur={onBlur} rows="6" style="resize:none" />
  {/if}
  <div class="errors">
    {#if $errors[name] != undefined}
      {#each Object.keys($errors[name]) as err (err)}
        {#if $errors[name][err]?.message}
          <small>{$errors[name][err]?.message}</small>
        {/if}
      {/each}
    {/if}
  </div>
</div>

<style>
  .form-group {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
  }

  input,
  textarea {
    font-size: calc(var(--font-size-default) / 1.125);
    font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    padding: 4px;
    border: none;
    border-radius: var(--border-radius-sm);
    background-color: #fff;
    box-shadow: var(--bs);
  }

  label {
    align-self: start;
    font-weight: 600;
  }
  .errors {
    color: tomato;
    display: flex;
    flex-direction: column;
  }
  small {
    font-size: 0.75rem;
  }
</style>
