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
  <input {name} {type} on:blur={onBlur} />
  <div class="errors">
    {#if $errors[name] != undefined}
      {#each Object.keys($errors[name]) as err}
        <small>{$errors[name][err]?.message}</small>
      {/each}
    {/if}
  </div>
</div>

<style>
  .errors {
    color: tomato;
  }
  small {
    font-size: 0.75rem;
  }
</style>
