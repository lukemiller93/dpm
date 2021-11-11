<script lang="ts" context="module">
  export async function load({ fetch }) {
    const res = await fetch("./api/navigation.json");

    if (res.ok) {
      const data = await res.json();

      return {
        props: {
          navItems: data[0]?.items,
        },
      };
    }
    return {
      status: res?.status,
      error: res?.error,
    };
  }
</script>

<script lang="ts">
  import { normalizePath } from "$lib/utils/normalizePath";
  import "@fontsource/inter/variable-full.css";
  import "@fontsource/nunito/400.css";
  import { Modals, closeModal } from "svelte-modals";
  import { fade } from "svelte/transition";

  export let navItems = [];
</script>

<header>
  <div class="wrapper container">
    <a href="/">
      <!-- <DpmLogo /> -->
      <img style="max-width: 400px" src="dpm_wordmark.svg" alt="" />
    </a>
    <ul class="navigation-items">
      {#each navItems as { sitePageRoute: { slug, title, _id } } (_id)}
        <li class="nav-item">
          <a href={normalizePath(slug?.current)}>{title}</a>
        </li>
      {/each}
    </ul>
  </div>
</header>
<slot />
<Modals>
  <div slot="backdrop" class="backdrop" transition:fade on:click={closeModal} />
</Modals>

<style>
  :root {
    --button-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
    --bs: 0px 4px 8px rgba(0, 0, 0, 0.125);
    --light-gray: #eee;
    --light-grey: #eee;
    --spacing-sm: 2rem;
    --spacing-md: calc(var(--spacing-sm) * 1.5);
    --spacing-lg: calc(var(--spacing-sm) * 2);

    --border-radius-sm: 4px;
    --border-radius-md: calc(var(--border-radius-sm) * 2);
    --cards-grid: repeat(auto-fill, minmax(clamp(300px, 400px, 450px), 1fr));
    --grid-gap-sm: var(--spacing-sm);
    --grid-gap-md: 5vh;
    --grid-gap-lg: 10vh;
    --grid-gap-xl: 20vh;
    --font-size-default: 1rem;
    --font-stack-body: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }
  :global(.container) {
    margin: 0 auto;
    width: 96vw;
    max-width: 1680px;
  }
  :global(html) {
    font-size: 112.5%; /*18px*/
  }

  :global(*) {
    box-sizing: border-box;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: white;
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    line-height: 1.75;
    color: #000000;
  }
  :global(h1, h2, h3, h4, h5) {
    font-family: "InterVariable", sans-serif;
    font-variation-settings: "wght" 800;
    margin: 3rem 0 1.38rem;
    line-height: 1.3;
  }
  :global(p) {
    margin-bottom: 1rem;
    margin-inline: auto;
    max-width: 80ch;
  }

  :global(h1) {
    margin-top: 0;
    font-size: 2.488rem;
  }

  :global(h2) {
    font-size: 2.074rem;
  }

  :global(h3) {
    font-size: 1.728rem;
  }

  :global(h4) {
    font-size: 1.44rem;
  }

  :global(h5) {
    font-size: 1.2rem;
  }

  :global(small),
  :global(.text-small) {
    font-size: 0.833rem;
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  ul {
    flex-wrap: wrap;
    flex: 1;
    display: flex;
    justify-content: end;
    align-items: center;
    list-style: none;
  }

  .nav-item {
    margin-right: 2rem;
  }
  a {
    width: 18rem;
    /* display: inline-block; */
  }
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
  }
</style>
