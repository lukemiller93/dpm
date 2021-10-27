<script lang="ts">
  import type { Hero } from "$lib/generated-graphql";
  import CallToAction from "../CallToAction.svelte";
  import PortableText from "../PortableText.svelte";

  export let blockData: Hero;

  const { headLineRaw, headingRaw, illustration, cta } = blockData;
</script>

<section class="hero">
  <!-- <img src={urlFor(blockData.illustration.image).url()} alt="logo" /> -->
  <div class="content">
    <!-- <PortableText content={headLineRaw} /> -->
    <h1>What You Need. <br /> Nothing you don't.</h1>

    <PortableText content={headingRaw} />

    {#if cta}
      <CallToAction props={cta} />
    {/if}
  </div>
  <div class="custom-shape-divider-bottom-1635193655">
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        class="shape-fill"
      />
    </svg>
  </div>
  <!-- <pre>{JSON.stringify(blockData, null, 2)}</pre> -->
</section>

<style>
  .hero {
    position: relative;
    min-height: 60vh;
    display: grid;
    background: whitesmoke;
    place-items: center;
    padding-bottom: 4rem;
  }

  .content {
    text-align: center;
    max-width: 96vw;
    margin: auto;
    /* height: 100%; */
    display: grid;
    place-items: center;
  }

  h1 {
    text-align: center;
  }

  .custom-shape-divider-bottom-1635193655 {
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-bottom-1635193655 svg {
    position: relative;
    display: block;
    width: calc(127% + 1.3px);
    height: 100px;
  }

  .custom-shape-divider-bottom-1635193655 .shape-fill {
    fill: white;
  }
  @media (min-width: 576px) {
    .custom-shape-divider-bottom-1635193655 svg {
      height: 173px;
    }
  }
</style>
