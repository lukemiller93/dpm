<script lang="ts">
  import { setContext } from "svelte";
  // form logic
  import { Validators } from "./Validators";
  import type { ValidatorFn, ValidatorResult } from "./Validators";
  import { createEventDispatcher } from "svelte";
  import { writable } from "svelte/store";
  export let title = "Contact Us";
  export let buttonText = "Submit";

  // let errors: { [inputName: string]: ValidatorResult } = {};

  export let form: {
    [inputName: string]: {
      validators: ValidatorFn[];
    };
  } = {};

  let formEl;

  const dispatch = createEventDispatcher();
  let errors = writable({});

  function onBlur(e) {
    validateField(e.target.name, e.target.value);
  }

  function isFormValid(): boolean {
    return !Object.values($errors).some((field) =>
      Object.values(field).some(
        (errorObject: ValidatorResult) => errorObject.error
      )
    );
  }

  function validateField(field, value) {
    form[field]?.validators &&
      form[field].validators.forEach((fn) => {
        const error = fn(value);
        errors.update((e) => {
          e[field] = { ...e[field], ...error };
          return e;
        });
      });
  }

  function validateForm(data: { [inputName: string]: any }): void {
    Object.keys(data).forEach((field) => validateField(field, data[field]));
  }

  function onSubmit(e) {
    const formData = new FormData(e.target);

    const data: any = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }

    validateForm(data);

    return dispatch("submit", { valid: isFormValid(), data });
  }

  export function reset() {
    formEl.reset();
  }

  setContext("form", { errors, onBlur });
</script>

<form on:submit|preventDefault={onSubmit} bind:this={formEl}>
  <h2>{title}</h2>
  <slot name="form" />
  <!-- <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" value="" on:blur={onBlur} />
    {#if errors?.name?.required?.error}
      <small class="error-msg">Name is required</small>
    {/if}
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" name="email" id="email" value="" on:blur={onBlur} />
    {#if errors?.email?.required?.error}
      <small class="error-msg">Email is required</small>
    {/if}
  </div> -->
  <!-- <pre>{JSON.stringify($errors, null, 2)}</pre> -->
  <div class="submit">
    <button type="submit">{buttonText}</button>
    <button type="reset">Reset</button>
  </div>
</form>
