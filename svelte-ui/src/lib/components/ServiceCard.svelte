<script lang="ts">
import type { Service } from "$lib/generated-graphql";
import PortableText from "./PortableText.svelte";


  export let service: Service
  console.log(encodeURI(service.title))
</script>

<!-- <a href={`/proposal-request?service=${encodeURI(service.title)}`}> -->
  <article class="service-card">
    <header>
      <h4>{service?.title}</h4>
    </header>
    <section class="content">
      <PortableText content={service?.descriptionRaw} />
    </section>
  </article>
<!-- </a> -->

<style>

  .service-card {
    border-radius: var(--border-radius-sm);
    background-color: #fff;
    box-shadow: var(--bs);
    justify-self: stretch;
  }

  .content, h4 {
    padding: calc(var(--padding-sm) / 1.5);
  }

  h4 {
    margin: 0;
  }

  header {
    border-bottom: 1px solid gray;
  }

  .service-card:hover header {
    background-color: gainsboro;
  }

  .service-card:hover {
    box-shadow: 0 6px 12px rgba(0,0,0,0.12);
    transform: scale3d(1.01);
  }
</style>