<script lang="ts">
  import type { Project } from "$lib/generated-graphql";
  import { generateImage } from "$lib/utils/generateImage";
  import { normalizePath } from "$lib/utils/normalizePath";

  import { urlFor } from "$lib/utils/urlFor";
  import Image from "./Image.svelte";

  export let cardData: Project;

  const { title, mainImage, _id, slug, categories } = cardData;
</script>

<article class="project-card">
  {#if mainImage}
    <img src={urlFor(mainImage).width(600).url()} alt={mainImage.alt} />
  {/if}
  <div class="content">
    <h4>
      {title}
    </h4>
    <footer>
      <a href={normalizePath(`/portfolio/${slug.current}`)}> Case Study </a>
      <div class="categories">
        {#each categories as category (category.title)}
          <img
            title={category.title}
            src={urlFor(category.icon.asset).width(1000).url()}
            alt={category.title}
          />
        {/each}
      </div>
    </footer>
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
    padding: var(--spacing-sm);
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
    text-align: center;
    margin-bottom: 2rem;
  }

  .categories {
    display: flex;
    object-fit: contain;
    flex-basis: 50%;
    justify-content: end;
    align-items: center;
  }

  .categories img {
    width: 100%;
    object-fit: contain;
  }

  footer {
    display: flex;
    justify-content: space-between;
  }

  footer > a {
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    color: var(--white, white);
    text-decoration: none;
    box-shadow: var(--button-shadow);
    background-color: var(--black, black);
  }
</style>
