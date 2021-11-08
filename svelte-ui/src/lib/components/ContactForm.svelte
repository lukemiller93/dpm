<script lang="ts">
  import { getContext } from "svelte";

  import Form from "./forms/Form.svelte";
  import Input from "./forms/Input.svelte";
  import { Validators } from "./forms/Validators";
  // const { errors } = getContext("form");
  export let blockData;

  let formEl;
  let form = {
    name: {
      validators: [Validators.required, Validators.minLength(4)],
    },
    email: {
      validators: [Validators.required, Validators.isEmail],
    },
    phone: {
      validators: [Validators.required, Validators.minLength(10)],
    },
    message: {
      validators: [Validators.required, Validators.minLength(10)],
    },
  };

  function onSubmit(e) {
    if (e?.detail?.valid) {
      console.log(e.detail);
      setTimeout(() => formEl.reset(), 1000);
    } else {
      console.log("Invalid form");
      console.log(e?.detail);
    }
  }
</script>

<section class="container">
  <Form
    buttonText="Send Message"
    {form}
    on:submit={onSubmit}
    bind:this={formEl}
  >
    <div class="form-inputs" slot="form">
      <Input label="Name" name="name" />
      <Input label="Email" name="email" type="email" />
      <Input label="Phone" name="phone" type="tel" />
      <Input label="Message" name="message" type="textarea" />
    </div>
  </Form>
</section>

<style>
  .form-inputs {
    display: grid;
    gap: 2rem;
  }
</style>
