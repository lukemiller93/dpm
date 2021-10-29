<script lang="ts">
  import ContactForm from "../ContactForm.svelte";
  import ProposalIntake from "../ProposalIntake.svelte";
  import RecentProjects from "../RecentProjects.svelte";
  import TestimonialList from "../TestimonialList.svelte";
  import Default from "./Default.svelte";

  export let blockData;

  const availableComponents = [
    { name: "default", component: Default },
    { name: "contactForm", component: ContactForm },
    { name: "proposalIntake", component: ProposalIntake },
    { name: "testimonialList", component: TestimonialList },
    { name: "recentProjects", component: RecentProjects },
  ];
  const selected =
    availableComponents.filter((v) => v.name === blockData.name).length > 0
      ? availableComponents.filter((v) => v.name === blockData.name)[0]
      : availableComponents[0];
</script>

<svelte:component this={selected.component} {blockData} />
