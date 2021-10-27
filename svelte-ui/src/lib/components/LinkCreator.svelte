<script lang="ts">
  import { sanityClient } from "$lib/sanityClient";

  import { onMount } from "svelte";
  import CallToAction from "./CallToAction.svelte";

  export let portableText;

  let linkData = portableText?.block;
  let linkObj;
  onMount(async () => {
    const params = { id: linkData.sitePageRoute._ref };

    const query = "*[_id == $id ]{title, slug,_id}";
    const res = await sanityClient.fetch(query, params).then((data) => {
      const oldObj = linkData;
      oldObj.sitePageRoute = data[0];
      linkObj = { ...oldObj };
      return oldObj;
    });
    console.log(res);
  });
</script>

{#if linkData?.kind === "button"}
  <CallToAction props={linkObj} />
{/if}
