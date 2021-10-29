<script lang="ts">
  import type { Project } from "$lib/generated-graphql";

  import { urlFor } from "$lib/utils/urlFor";

  export let cardData: Project;

  const { title, mainImage, _id, slug } = cardData;
</script>

<article class="project-card">
  {#if mainImage}
    <img src={urlFor(mainImage).width(600).url()} alt={mainImage.alt} />
  {/if}
  <h4>{title}</h4>
  <a href={`/portfolio/${slug.current}`} sveltekit:prefetch>Case Study</a>
</article>
