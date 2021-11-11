<script lang="ts">
  import type { IllustrationOrServiceOrSingleColumnOrUiComponentRef } from "$lib/generated-graphql";
  import { generateImage } from "$lib/utils/generateImage";
  import Image from "../Image.svelte";
  import PortableText from "../PortableText.svelte";
  import ServiceCard from "../ServiceCard.svelte";
  import UiComponents from "./UIComponents.svelte";
  export let blockData;

  const {
    columns,
  }: { columns: IllustrationOrServiceOrSingleColumnOrUiComponentRef[] } =
    blockData;

  const serviceGrid = columns.some((v) => v._type === "service");
</script>

<section class:serviceGrid class="container grid-container">
  {#each columns as column, index (index)}
    <div
      class={`single-column ${
        column._type === "illustration"
          ? "is-illustration"
          : column._type === "service"
          ? "service-card-col"
          : ""
      }`}
    >
      {#if "image" in column && column._type === "illustration"}
        <Image {...generateImage(column?.image)} alt={column?.image?.alt} />
      {:else if column._type === "singleColumn" && "contentRaw" in column}
        <PortableText content={column.contentRaw} />
      {:else if "name" in column && column._type === "uiComponentRef"}
        <UiComponents blockData={column.name} />
      {:else if column._type === "service" && "descriptionRaw" in column}
        <ServiceCard service={column} />
      {/if}
    </div>
  {/each}
</section>

<style>
  .grid-container {
    display: grid;
    gap: var(--grid-gap-lg);
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    margin-bottom: var(--grid-gap-xl);
    margin-top: 0;
    padding: 1vw;
  }

  .grid-container:not(:first-of-type) {
    margin: var(--grid-gap-xl) auto;
  }
  .grid-container.serviceGrid {
    padding: 1vw;
    margin-top: 0;
    margin-top: var(--grid-gap-md);
    margin-bottom: var(--grid-gap-xl);
    grid-template-columns: var(--cards-grid);
    gap: var(--grid-gap-sm);
  }

  @media screen and (min-width: 576px) {
    .grid-container.serviceGrid {
      padding: 0;
    }
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
