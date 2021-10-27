<script lang="ts">
  import BlockContent from "@portabletext/svelte";
  import LinkCreator from "./LinkCreator.svelte";
  export let content;

  const blockSerializers = {
    types: {
      linkCreator: LinkCreator
    },
  };
</script>

<BlockContent blocks={content} serializers={blockSerializers} />
