<script lang="ts">
  import type { GridContent } from "$lib/generated-graphql";
  import { urlFor } from "$lib/utils/urlFor";
  import PortableText from "../PortableText.svelte";
  import UiComponents from "./UIComponents.svelte";
  export let blockData: GridContent;

  const { columns } = blockData;
</script>

<section>
  {#each columns as column, index (index)}
    <div class="single-column">
      {#if column._type === "illustration"}
        <img src={urlFor(column?.image).width(500).url()} alt="" />
      {:else if column._type === "singleColumn"}
        <PortableText content={column.contentRaw} />
      {:else}
        <UiComponents blockData={column.name} />
      {/if}
    </div>
  {/each}
  <!-- <pre>{JSON.stringify(blockData, null, 2)}</pre> -->
</section>
