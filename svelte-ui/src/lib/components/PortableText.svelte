<script lang="ts">
  import BlockContent from "@portabletext/svelte";
  import CallToAction from "./CallToAction.svelte";
  export let content;

  const blockSerializers = {
    types: {
      linkCreator: CallToAction
    },
  };
</script>

<BlockContent blocks={content} serializers={blockSerializers} />
