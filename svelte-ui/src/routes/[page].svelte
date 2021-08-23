<script context="module" lang="ts">
  export async function load({ page, fetch }) {
    // As with the server route, we have access to params.slug here
    const res = await fetch(`api/pages/${page.params.page}`);
    const pageData = await res.json();
    if (res.ok) {
      return {
        props: {
          pageData,
        },
      };
    }

    return {
      status: res.status,
      error: new Error(`Could not load api/pages/${page.params.page}`),
    };
  }
</script>

<script lang="ts">
  export let pageData;
</script>

<svelte:head>
  <!-- <title>{pageData.title}</title> -->
</svelte:head>
<h1>new page</h1>
<pre>{JSON.stringify(pageData, null, 2)}</pre>
