<script lang="ts">
  import { urlFor } from "$lib/utils/urlFor";
  import { closeModal } from "svelte-modals";
  import { fade } from "svelte/transition";

  // provided by Modals
  export let isOpen;

  export let image;
  export let caption = image?.alt || "No caption provided.";
</script>

{#if isOpen}
  <div class="modal" role="dialog" transition:fade>
    <div class="contents">
      <div class="actions">
        <button aria-label="Close Modal" on:click={closeModal}>x</button>
      </div>
      <figure>
        <img src={urlFor(image).width(1000).url()} alt={image?.alt} />
        <figcaption>
          {caption}
        </figcaption>
      </figure>
    </div>
  </div>
{/if}

<style>
  .modal {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    /* allow click-through to backdrop */
    pointer-events: none;
  }

  .contents {
    min-width: 240px;
    border-radius: var(--border-radius-md);
    padding: var(--spacing-);
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    pointer-events: auto;
  }
  figure {
    overflow: hidden;
  }

  figure > img {
    width: 100%;
  }
  figcaption {
    text-align: center;
    box-shadow: var(--bs);
  }
  .actions {
    display: flex;
    justify-content: flex-end;
  }

  .actions > button {
    cursor: pointer;
    margin-right: -0.5rem;
    margin-top: -0.5rem;
    border-radius: 50%;
    box-shadow: var(--button-shadow);
    border: none;
    background: var(--black, black);
    color: white;
    width: 3ch;
    height: 3ch;
    display: flex;
    justify-content: center;
    align-items: centerS;
  }
</style>
