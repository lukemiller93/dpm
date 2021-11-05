<script lang="ts">
  import type { BodySection } from "$lib/generated-graphql";
  import PortableText from "../PortableText.svelte";

  export let blockData: BodySection;
  const onlyOneEl = blockData?.contentRaw?.length === 1;
</script>

<section class="body-section container" class:onlyOneEl>
  <PortableText content={blockData.contentRaw} />
</section>

<style>
  .body-section {
    display: grid;
  }
  .body-section:not(.onlyOneEl, :first-of-type) {
    margin: 20vh auto;
  }

  .body-section:first-of-type {
    padding-top: var(--padding-lg);
  }
</style>
