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

<style>
  .recent-projects {
    padding: var(--padding-lg) 0;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(
      auto-fill,
      minmax(clamp(300px, 400px, 450px), 1fr)
    );
    place-items: center;
  }
</style>
