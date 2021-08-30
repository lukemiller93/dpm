<script context="module" lang="ts">
  import { client } from "$lib/components/SanityClient";
  export async function load({ page, fetch, session, context }) {
    const query =
      "*[_type == 'page' && slug.current == '/']{_id, slug, title, body}";

    const res = await client.fetch(query);

    return {
      props: {
        data: res,
      },
    };
  }
</script>

<script lang="ts">
  import BlockContent from "@movingbrands/svelte-portable-text";
  import type { Slug } from "src/global";
  export let data: { slug: Slug; title: string; body: any }[] = [];
</script>

<svelte:head>
  <title>{data[0]?.title}</title>
</svelte:head>
{#each data as item}
  {#if item?.body}
    <BlockContent blocks={item.body} />
  {/if}
{/each}
