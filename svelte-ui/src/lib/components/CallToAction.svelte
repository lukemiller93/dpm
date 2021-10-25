<script lang="ts">
  import { goto } from "$app/navigation";

  import type { LinkCreator } from "$lib/generated-graphql";

  export let props: LinkCreator;

  const { sitePageRoute, title, kind, backgroundColor, link, route } = props;
</script>

{#if sitePageRoute}
  <a
    class={`${kind} bg--${backgroundColor.colors.title}`}
    sveltekit:prefetch
    href={sitePageRoute?.slug?.current}>{title}</a
  >
{/if}

<style>
  a:last-child {
    margin-top: 2rem;
  }
  .button {
    padding: 1rem 2rem;
    border-radius: 1rem;
    color: var(--white, #fff);
    text-decoration: none;
    box-shadow: var(--button-shadow);
  }

  .bg--black {
    background-color: var(--black, black);
  }
</style>
