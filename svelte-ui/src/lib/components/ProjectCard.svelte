<script lang="ts">
  import type { Project } from "$lib/generated-graphql";
  import { normalizePath } from "$lib/utils/normalizePath";

  import { urlFor } from "$lib/utils/urlFor";

  export let cardData: Project;

  const { title, mainImage, _id, slug } = cardData;
</script>

<article class="project-card">
  {#if mainImage}
    <img src={urlFor(mainImage).width(600).url()} alt={mainImage.alt} />
  {/if}
  <div class="content">
    <h4>
      {title}
    </h4>
    <a href={normalizePath(`/portfolio/${slug.current}`)} sveltekit:prefetch>
      Case Study
    </a>
  </div>
</article>

<style>
  .project-card {
    background-color: var(--light-gray);
    border-radius: var(--border-radius-md);
    box-shadow: var(--button-shadow);
    overflow: hidden;
  }

  .content {
    padding: var(--padding-sm);
  }

  img {
    /* border-top-left-radius: var(--border-radius-md);
    border-top-right-radius: var(--border-radius-md); */
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
  }

  h4 {
    margin: 0;
    margin-bottom: 2rem;
  }
</style>
