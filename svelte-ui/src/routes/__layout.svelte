<script lang="ts" context="module">
  export async function load({ fetch }) {
    const res = await fetch("./api/navigation.json");

    if (res.ok) {
      // const data = await res.json()
      // console.log(data)
      const data = await res.json();

      return {
        props: {
          navItems: data[0]?.items
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
import DpmLogo from "$lib/components/DpmLogo.svelte";
import { normalizePath } from "$lib/utils/normalizePath";
import "@fontsource/inter/variable-full.css";
import "@fontsource/nunito/400.css";

  export let navItems = [];
</script>

<header>
  <div class="logo-wrapper">
    <a href="/">
      <DpmLogo />
    </a>
    <h1><span>Dauntless Pursuit</span> Media</h1>
  </div>
  <ul class="navigation-items">
    {#each navItems as {sitePageRoute: {slug, title, _id}}}
      <li class="nav-item">
        <a href={normalizePath(slug?.current)}>{title}</a>
      </li>
    {/each}
  </ul>
</header>
<slot />

<style>
  :global(h1),
  :global(h2) {
    font-family: "InterVariable", sans-serif;
    font-variation-settings: "wght" 800;
  }
  :global(p),
  :global(a) {
    font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
  .logo-wrapper {
    display: flex;
    align-items: center;
  }

  .logo-wrapper h1 {
    margin: 0;
    display: flex;
    flex-direction: column;
    font-weight: 900;
  }

  .logo-wrapper h1 span {
    letter-spacing: -1px;
  }
  .logo-wrapper a {
    width: 6rem;
    display: inline-block;
  }
</style>
