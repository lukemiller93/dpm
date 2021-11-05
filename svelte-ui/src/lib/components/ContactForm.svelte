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
      validators: [Validators.required],
    },
    phone: {
      validators: [Validators.required],
    },
    message: {
      validators: [Validators.required, Validators.minLength(10)],
    },
  };

  function onSubmit(e) {
    if (e?.detail?.valid) {
      console.log(e.detail.data);
      setTimeout(() => formEl.reset(), 1000);
    } else {
      console.log("Invalid form");
    }
  }
</script>

<section class="container">
  <!-- <pre>{JSON.stringify(blockData, null, 2)}</pre>

  </pre> -->
  <Form {form} on:submit={onSubmit} bind:this={formEl}>
    <div slot="form">
      <Input label="Name" name="name" />
      <Input label="Email" name="email" type="email" />
      <Input label="Phone" name="phone" type="tel" />
    </div>
  </Form>
</section>
