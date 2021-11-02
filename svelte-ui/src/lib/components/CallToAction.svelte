<script lang="ts">
  import type { LinkCreator } from "$lib/generated-graphql";

  export let props: LinkCreator;

  // const {  title, kind, backgroundColor, link, route } = props;
</script>

{#if props?.sitePageRoute}
  <a
    class={`${props?.kind} bg--${props?.backgroundColor.colors.title}`}
    sveltekit:prefetch
    href={`/${props?.sitePageRoute?.slug?.current}`}>{props?.title}</a
  >
{/if}

<style>
  a {
    text-align: center;
    justify-self: center;
  }
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
