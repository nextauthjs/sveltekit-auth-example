<script lang="ts">
  import Register from "./register.svelte";
  import NewContact from "./new-contact.svelte";
  import { fade } from "svelte/transition";

  import FetchByRoute from "./fetch-by-route.svelte";

  let r : any;
  $: respons = r;
</script>

<div class="wrapper">
  <h2>Leave Your Note</h2>

  <div class="description">Enter your note stuff below:</div>

  <Register bind:resp={r} />
  {#if respons && respons.success}
    <div class="success message" transition:fade>{respons.message}</div>
  {/if}

  {#if respons && respons.success === false}
    <div class="failure message" transition:fade>
      {respons.message}
    </div>
  {/if}
  <div class="spacer" />
  <NewContact bind:resp={r} />
  <div class="error-wrapper">
    {#if respons && respons.success}
      <div class="success message" transition:fade>{respons.message}</div>
    {/if}

    {#if respons && respons.success === false}
      <div class="failure message" transition:fade>
        {respons.message}
      </div>
    {/if}
  </div>
</div>
<FetchByRoute route="users" />
<div class="spacer" />
<FetchByRoute route="contacts" />
<div class="spacer" />
<FetchByRoute route="trips" />

<style>
  .wrapper {
    max-width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .spacer {
    height: 40px;
  }
  .description {
    padding-bottom: 10px;
  }
  .message {
    padding: 20px;
    margin: 20px;
    font-weight: 400;
    color: white;
    border-radius: 5px;
  }
  .failure {
    background-color: #ff3636;
  }
  .success {
    background-color: #008744;
  }

  .error-wrapper {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
