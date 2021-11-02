<script lang="ts">
  import type { BodySection } from "$lib/generated-graphql";
  import PortableText from "../PortableText.svelte";

  export let blockData: BodySection;
  console.log(blockData.contentRaw);
  const onlyOneEl = blockData?.contentRaw?.length === 1;
</script>

<section class="body-section container" class:onlyOneEl>
  <PortableText content={blockData.contentRaw} />
</section>

<style>
  .body-section {
    display: grid;
  }
  .body-section:not(.onlyOneEl) {
    margin: 20vh auto;
  }
</style>
