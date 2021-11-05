<script lang="ts">
  import type {
    GridContent,
    IllustrationOrSingleColumnOrUiComponentRef,
    SingleColumn,
  } from "$lib/generated-graphql";
  import { generateImage } from "$lib/utils/generateImage";
  import { urlFor } from "$lib/utils/urlFor";
  import AllModules from "../AllModules.svelte";
  import Image from "../Image.svelte";
  import PortableText from "../PortableText.svelte";
  import UiComponents from "./UIComponents.svelte";
  export let blockData;

  const { columns }: { columns: IllustrationOrSingleColumnOrUiComponentRef[] } =
    blockData;
</script>

<section class="container grid-container">
  {#each columns as column, index (index)}
    <div
      class={`single-column ${
        column._type === "illustration" ? "is-illustration" : ""
      }`}
    >
      {#if "image" in column && column._type === "illustration"}
        <Image {...generateImage(column?.image)} alt={column?.image?.alt} />
      {:else if column._type === "singleColumn" && "contentRaw" in column}
        <PortableText content={column.contentRaw} />
      {:else if "name" in column && column._type === "uiComponentRef"}
        <UiComponents blockData={column.name} />
      {/if}
    </div>
  {/each}
</section>

<style>
  .grid-container {
    display: grid;
    gap: 10vw;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    margin-bottom: 20vh;
    margin-top: 0;
  }

  .grid-container:not(:first-of-type) {
    margin: 20vh auto;
  }

  .single-column:not(.is-illustration) {
    place-self: start;
    display: grid;
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
