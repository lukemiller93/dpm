<script lang="ts">
import type { BodySection } from "$lib/generated-graphql";
import PortableText from "../PortableText.svelte";


  export let blockData: BodySection
</script>

<section class="body-section container">
  <PortableText content={blockData.contentRaw} />
</section>


