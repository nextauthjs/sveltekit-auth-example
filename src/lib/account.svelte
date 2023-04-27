<script>
  import Button from "./button.svelte";
  let acct = false;
</script>

{#if acct === false}
  <Button button="Register" />
{/if}
