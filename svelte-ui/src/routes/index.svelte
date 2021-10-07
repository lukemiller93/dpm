<script context="module" lang="ts">

  export async function load({ page, fetch }) {
    // As with the server route, we have access to params.slug here
    const res = await fetch(`api/pages.json`);
    const { pageData } = await res.json();

    if (res.ok) {
      return {
        props: {
          pageData,
        },
      };
    }
  }
</script>

<script lang="ts">
  import BlockContent from "@movingbrands/svelte-portable-text";
  import type { SanityPage } from "src/global";
  export let pageData: SanityPage[] = [];
  console.log(pageData)
  $: blockContent = pageData[0]?.content[0]?.contentRaw
</script>

<svelte:head>
  <title>{pageData[0]?.title} - Dauntless Pursuit Media</title>
</svelte:head>
{#each pageData as item}
  <h1>{item?.title}</h1>
    <BlockContent blocks={blockContent} />

{/each}
