<script lang="ts">
  import type { Project, UiComponentRef } from "$lib/generated-graphql";
  // import { sanityClient } from "$lib/sanityClient";
  import { onMount } from "svelte";
  import { getData, projects } from "../stores/projects";

  export let componentData: UiComponentRef;
  let projects: Project[] = [];
  onMount(async () => {
    projects = await getData();
    // const query = `*[_type == 'project'][0...5]{_id, slug, title }| order(_createdAt asc)`;
    // await sanityClient.fetch(query).then((data) => (projects = data));
    console.log(projects);
  });
</script>

<section class="recent-projects">
  {#each projects as project (project._id)}
    <article>{project?._id}</article>
  {/each}
</section>
