<script lang="ts">
  import { projects } from "../stores/projects";
  import type { Project } from "$lib/generated-graphql";
  import ProjectCard from "./ProjectCard.svelte";
</script>

<section class="recent-projects container">
  {#await $projects then { allProject }}
    {#each allProject as project (project._id)}
      <ProjectCard cardData={project} />
    {/each}
  {/await}
</section>
