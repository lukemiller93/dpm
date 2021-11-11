<script lang="ts">
  export let aspectRatio: number;
  export let placeholder;
  export let src;
  export let srcset;
  export let alt;
  export let sizes = "auto";

  let padding_bottom_percentage = 100 / aspectRatio + "%";
</script>

<div class="image-wrapper">
  <div class="aspect-ratio-holder" style="--pb:{padding_bottom_percentage}" />
  <img loading="lazy" {src} {srcset} {sizes} {alt} />

  <noscript>
    <img {src} {srcset} {sizes} {alt} />
  </noscript>
</div>

<style>
  .image-wrapper {
    position: relative;
    overflow: hidden;
    grid-area: 1/2;
    /* border-radius: 4px; */
    /* box-shadow: var(--button-shadow); */
  }

  .aspect-ratio-holder {
    --pb: 100%;
    padding-bottom: var(--pb);
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
