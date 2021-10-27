<script lang="ts">
import BodySection from "./modules/BodySection.svelte";
import Default from "./modules/Default.svelte";
import GridContent from "./modules/GridContent.svelte";
import Hero from "./modules/Hero.svelte";
import UiComponents from "./modules/UIComponents.svelte";

  const modules = [
    { name: "default", component: Default },
    { name: "Hero", component: Hero },
    { name: "GridContent", component: GridContent },
    {name: "UiComponentRef", component: UiComponents},
    {name: "BodySection", component: BodySection}
  ];
  export let blockType;
  export let data = "There is no component for this module";

  const selected =
    modules.filter((v) => v.name === blockType).length > 0
      ? modules.filter((v) => v.name === blockType)[0]
      : modules[0];
</script>



<svelte:component this={selected.component} blockData={data} />
