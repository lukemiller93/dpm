<script context="module" lang="ts">
  // export const ssr = false;
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ page, fetch }) {
    // As with the server route, we have access to params.slug here
    const res = await fetch(`../api/projects/${page.params.slug}`);
    const { pageData } = await res.json();
    if (res.ok) {
      return {
        props: {
          pageData,
        },
      };
    }
  }
</script>

<script lang="ts">
  import Image from "$lib/components/Image.svelte";
  import PortableText from "$lib/components/PortableText.svelte";
  import type { Project } from "$lib/generated-graphql";
  import { generateImage } from "$lib/utils/generateImage";
  import { afterUpdate } from "svelte";
  import { urlFor } from "$lib/utils/urlFor";

  import { openModal } from "svelte-modals";
  import ImageModal from "$lib/components/ImageModal.svelte";

  export let pageData: Project[];
  let updatedData: Project[] = pageData;
  afterUpdate(() => {
    updatedData = pageData;
  });

  function handleClick(image) {
    openModal(ImageModal, { image });
    console.log("clicked");
  }
</script>

{#each updatedData as page}
  <header class="project-header">
    <img
      src={urlFor(page.mainImage).width(2160).url()}
      alt={page.mainImage.alt}
    />
    <div class="overlay">
      <h1>{page.title}</h1>
    </div>
  </header>
  <section class="container">
    <article class="project-body">
      <PortableText content={page.bodyRaw} />
    </article>
    <aside class="project-meta">
      <h4>Project Tags</h4>
      {#each page.categories as category (category.title)}
        <div class="tag">
          <!-- svelte-ignore a11y-missing-attribute -->
          <a
            href={`/portfolio?filter=${encodeURIComponent(category.title)}`}
            class="text-small"
          >
            {category.title}
          </a>
        </div>
      {/each}
    </aside>
  </section>
  <section class="project-gallery container">
    <h2>Project Screenshots</h2>
    {#each page.projectGallery?.gallery as { image } (image?.asset?.assetId)}
      <figure on:click={() => handleClick(image)}>
        <img src={urlFor(image?.asset).size(400, 300).url()} alt={image.alt} />
      </figure>
    {/each}
  </section>
{/each}

<style>
  .project-header {
    position: relative;
    display: grid;
    place-items: center;
    max-height: clamp(450px, 50vh, 600px);
  }

  /* img {
    width: 100%;
    aspect-ratio: 21/9;
    object-fit: cover;
  } */

  .project-header > * {
    grid-area: 1/2;
  }
  .tag {
    display: flex;
    height: 2ch;
    margin: 1rem auto;
    /* align-items: center; */
  }

  .tag {
    margin-right: 0.25rem;
  }

  .project-gallery {
    margin: var(--grid-gap-lg) auto;
    display: grid;
    gap: var(--grid-gap-sm);
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .project-gallery h2 {
    grid-column: 1/-1;
  }

  figure {
    margin: 0;
    box-shadow: var(--bs);
    border-radius: var(--border-radius-md);
    overflow: hidden;
    cursor: zoom-in;
    aspect-ratio: 4/3;
  }
  figure > img {
    width: 100%;
    aspect-ratio: 4/3;
  }
</style>
