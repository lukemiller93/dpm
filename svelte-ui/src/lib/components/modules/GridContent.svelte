<script lang="ts">
  import type { GridContent } from "$lib/generated-graphql";
  export let blockData: GridContent;
</script>

<section>
  <pre>{JSON.stringify(blockData, null, 2)}</pre>
</section>
