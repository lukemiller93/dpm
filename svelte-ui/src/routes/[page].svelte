<script context="module" lang="ts">
  export async function load({ page, fetch }) {
    console.log(page);
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
  import BlockContent from "@movingbrands/svelte-portable-text";
  import type { SanityPage } from "src/global";

  export let pageData: SanityPage;
</script>

<svelte:head>
  <title>{pageData.title}</title>
</svelte:head>
<h1>{pageData.title}</h1>
<BlockContent blocks={pageData.body} />
<pre>{JSON.stringify(pageData, null, 2)}</pre>
