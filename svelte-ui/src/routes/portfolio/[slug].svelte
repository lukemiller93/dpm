<script context="module" lang="ts">
  export const ssr = false;
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
  import { page } from "$app/stores";
  import Image from "$lib/components/Image.svelte";
  import PortableText from "$lib/components/PortableText.svelte";
  import type { Project } from "$lib/generated-graphql";
  import { generateImage } from "$lib/utils/generateImage";
  import { afterUpdate } from "svelte";
  import kebabCase from "just-kebab-case";
  export let pageData: Project[];
  let updatedData: Project[] = pageData;
  afterUpdate(() => {
    updatedData = pageData;
  });
  console.log(updatedData);
</script>

{#each updatedData as page}
  <header>
    <Image {...generateImage(page.mainImage)} alt={page.mainImage.alt} />
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
          <a href={`/category/${kebabCase(category.title)}`} class="text-small">
            {category.title}
          </a>
        </div>
      {/each}
    </aside>
  </section>
  <!-- <pre>{JSON.stringify(page, null, 2)}</pre> -->
{/each}

<style>
  .tag {
    display: flex;
    height: 2ch;
    margin: 1rem auto;
    /* align-items: center; */
  }

  .tag {
    margin-right: 0.25rem;
  }
</style>
