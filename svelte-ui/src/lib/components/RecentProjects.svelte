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
    padding: 0 1vw;
    display: grid;
    margin-top: var(--spacing-lg);
    margin-bottom: var(--grid-gap-xl);
    gap: var(--grid-gap-sm);
    grid-template-columns: var(--cards-grid);
    place-items: center;
  }

  @media screen and (min-width: 576px) {
    .recent-projects {
      padding-left: 0;
      padding-right: 0;
    }
  }
</style>
