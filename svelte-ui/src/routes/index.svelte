<script context="module" lang="ts">
  import { client } from "$lib/components/SanityClient";
  export async function load({ page, fetch, session, context }) {
    const query = "*[_type == 'page']{_id, slug, title, body}";

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
  type Slug = {
    _type: string;
    current: string;
  };

  export let data: { slug: Slug; title: string; body: any }[] = [];
</script>

<h1>Home page</h1>
{#each data as item}
  <code>{item?.title}</code>
  {#if item?.body}
    <BlockContent blocks={item.body} />
  {/if}
{/each}
