<script context="module" lang="ts">
  export async function load({ page, fetch }) {
    // As with the server route, we have access to params.slug here
    const res = await fetch(`api/pages/${page.params.page}`);
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
  import { page } from "$app/stores";
  import AllModules from "$lib/components/AllModules.svelte";
  import PortfolioList from "$lib/components/PortfolioList.svelte";
  import type { Page } from "$lib/generated-graphql";
  export let pageData: Page[] = [];
</script>

<svelte:head>
  <title>{pageData[0]?.title}</title>
</svelte:head>
{#each pageData as page (page._id)}
  {#each page?.content as block}
    <AllModules data={block} blockType={block?.__typename} />
  {/each}
{/each}
{#if $page.path === "/portfolio"}
  <PortfolioList />
{/if}
