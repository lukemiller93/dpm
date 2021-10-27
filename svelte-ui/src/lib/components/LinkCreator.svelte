<script lang="ts">
import type { LinkCreator } from "$lib/generated-graphql";
import type { BlockProps } from "@portabletext/svelte";
import CallToAction from "./CallToAction.svelte";
  export let portableText: BlockProps<LinkCreator>

  console.log(portableText)

  let linkData = portableText?.block

//   onMount(async () => {
//   const query=  gql`query GET_PAGE_SLUG(id: String!) {
// 	Page(id:$id) {
//     _id
//     slug{
//       current
//     }
//   }
// }`
//   const res = await client.request(query, {id: portableText?.block?.sitePageRoute?._ref})
//   console.log(res)
//   // linkData = {...linkData, sitePageRoute: {
//   //   ...
//   // }}
//   })
</script>

{#if portableText.block?.kind === 'button'}
  <CallToAction props={portableText?.block}/>
{/if}