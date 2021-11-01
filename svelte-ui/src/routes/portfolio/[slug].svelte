<script context="module" lang="ts">
  export const ssr = false;
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ page, fetch }) {
    // As with the server route, we have access to params.slug here
    console.log(page.params.slug);
    const res = await fetch(`../api/projects/${page.params.slug}`);
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
  import type { Project } from "$lib/generated-graphql";

  export let pageData: Project;
</script>

<h1>this is the portfolio page for</h1>
<pre>{JSON.stringify(pageData, null, 2)}</pre>
