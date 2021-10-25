<script lang="ts">
  import BlockContent from "@portabletext/svelte";
  export let content;

  const blockSerializers = {
    // types: {
    //   block: (node) => {
    //     if (node.style === "h1") {
    //       return <h1>{node}</h1>;
    //     }
    //   },
    // },
  };
</script>

<BlockContent blocks={content} serializers={blockSerializers} />
