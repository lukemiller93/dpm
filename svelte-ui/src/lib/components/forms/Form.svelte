<script lang="ts">
  import { setContext } from "svelte";
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
    errors.set({});
  }
  let isDisabled = true;

  setContext("form", { errors, onBlur });
</script>

<form
  on:submit|preventDefault={onSubmit}
  on:reset|preventDefault={reset}
  bind:this={formEl}
>
  <h2>{title}</h2>
  <slot name="form" />
  <div class="buttons">
    <button type="submit">{buttonText}</button>
    <button type="reset">Reset</button>
  </div>
</form>

<style>
  form {
    box-sizing: border-box;
    width: 100%;
    padding: 4px;
    max-width: 600px;
    margin: 0 auto;
    display: grid;
    border-radius: var(--border-radius-sm);
  }
  form:focus-within {
    box-shadow: var(--bs);
    background: black;
    color: white;
  }

  h2 {
    text-align: center;
  }

  .buttons {
    padding: var(--spacing-sm) 0;
    display: flex;
    justify-content: end;
  }

  button {
    border-radius: var(--border-radius-sm);
    border: none;
    box-shadow: var(--button-shadow);
    margin-right: 1rem;
    cursor: pointer;
    padding: 0.5rem calc(var(--spacing-sm) / 2);
    font-family: var(--font-stack-body);
  }

  [type="submit"] {
    background-color: black;
    color: white;
  }

  @media screen and (min-width: 576px) {
    form {
      padding: var(--spacing-sm);
    }
  }
</style>
