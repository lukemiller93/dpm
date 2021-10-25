<script lang="ts">
  import Default from "./modules/Default.svelte";
  import GridContent from "./modules/GridContent.svelte";
  import Hero from "./modules/Hero.svelte";

  const modules = [
    { name: "default", component: Default },
    { name: "Hero", component: Hero },
    { name: "GridContent", component: GridContent },
  ];
  export let blockType;
  export let data = "There is no component for this module";

  const selected =
    modules.filter((v) => v.name === blockType).length > 0
      ? modules.filter((v) => v.name === blockType)[0]
      : modules[0];
</script>

<svelte:component this={selected.component} blockData={data} />
