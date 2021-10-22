<script lang="ts">
  import type { Hero } from "$lib/generated-graphql";
  import BlockContent from "@movingbrands/svelte-portable-text";

  export let blockData: Hero;
</script>

<section class="hero">
  <h1><BlockContent blocks={blockData?.headingRaw} /></h1>

  <pre>{JSON.stringify(blockData, null, 2)}</pre>
</section>
