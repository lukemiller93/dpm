<script lang="ts">
  export let portableText;
</script>

{#if portableText?.marks?.href}
  <a target="_BLANK" rel="noreferrer noindex" href={portableText?.marks?.href}
    >{portableText.span.text}</a
  >
{/if}
