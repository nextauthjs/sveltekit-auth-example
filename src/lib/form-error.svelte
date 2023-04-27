<script lang="ts">
  //this is currently not hoocked up
  import { fade } from "svelte/transition";
  export let resp : any;
</script>

<div class="error-wrapper">
  {#if resp && resp.success}
    <div class="success message" transition:fade>{resp.message}</div>
  {/if}
  {#if resp && resp.success === false}
    <div class="failure message" transition:fade>
      {resp.message}
    </div>
  {/if}
</div>

<style>
  .error-wrapper {
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
