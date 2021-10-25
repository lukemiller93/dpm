<script lang="ts" context="module">
  export async function load({ fetch }) {
    const res = await fetch("./api/navigation.json");

    if (res.ok) {
      // const data = await res.json()
      // console.log(data)
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

  export let navItems = [];
</script>

<header>
  <a href="/">
    <!-- <DpmLogo /> -->
    <img src="dpm_wordmark.svg" alt="" />
  </a>

  <ul class="navigation-items">
    {#each navItems as { sitePageRoute: { slug, title, _id } }}
      <li class="nav-item">
        <a sveltekit:prefetch href={normalizePath(slug?.current)}>{title}</a>
      </li>
    {/each}
  </ul>
</header>
<slot />

<style>
  :root {
    --button-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  }
  :global(html) {
    font-size: 112.5%; /*18px*/
  }

  :global(body) {
    margin: 0;
    padding: 0;
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
  .text_small {
    font-size: 0.833rem;
  }
  header {
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
</style>
