<script lang="ts">
  import BlockContent from "@portabletext/svelte";
  import ExternalLink from "./ExternalLink.svelte";
  import LinkCreator from "./LinkCreator.svelte";
  export let content;

  const blockSerializers = {
    types: {
      linkCreator: LinkCreator,
    },
    marks: {
      link: ExternalLink,
    },
  };
</script>

<BlockContent blocks={content} serializers={blockSerializers} />
