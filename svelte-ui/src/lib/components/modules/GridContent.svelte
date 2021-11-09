<script lang="ts">
  import type {
  IllustrationOrServiceOrSingleColumnOrUiComponentRef
  } from "$lib/generated-graphql";
  import { generateImage } from "$lib/utils/generateImage";
  import Image from "../Image.svelte";
  import PortableText from "../PortableText.svelte";
  import ServiceCard from "../ServiceCard.svelte";
  import UiComponents from "./UIComponents.svelte";
  export let blockData;

  const { columns }: { columns: IllustrationOrServiceOrSingleColumnOrUiComponentRef[] } =
    blockData;

    const serviceGrid = columns.some(v => v._type === 'service')

    console.log(serviceGrid)
</script>

<section class:serviceGrid class="container grid-container">
  {#each columns as column, index (index)}
    <div
      class={`single-column ${
        column._type === "illustration" ? "is-illustration" : column._type === 'service' ? "service-card-col": ""
      }`}
    >
      {#if "image" in column && column._type === "illustration"}
        <Image {...generateImage(column?.image)} alt={column?.image?.alt} />
      {:else if column._type === "singleColumn" && "contentRaw" in column}
        <PortableText content={column.contentRaw} />
      {:else if "name" in column && column._type === "uiComponentRef"}
        <UiComponents blockData={column.name} />
        {:else if column._type === 'service' && "descriptionRaw" in column}
        <ServiceCard service={column} />
      {/if}
    </div>
  {/each}
</section>

<style>
  .grid-container {
    display: grid;
    gap: 5vw;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    margin-bottom: 20vh;
    margin-top: 0;
  }



  .grid-container:not(:first-of-type) {
    margin: 20vh auto;
  }
  .grid-container.serviceGrid {
    margin-top: 10vh ;
    grid-template-columns: repeat(auto-fit, minmax(max-content, 1fr) );
  }

  .single-column:not(.is-illustration, .service-card-col) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .service-card-col {
    display: grid;
    align-items: stretch;
    align-self: stretch;
  }
  .single-column :global(h2),
  .single-column :global(h3),
  .single-column :global(h4),
  .single-column :global(h5),
  .single-column :global(h6) {
    margin-top: 0;
  }
  .is-illustration {
    align-self: center;
  }
</style>
