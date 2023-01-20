<script lang="ts">
  export let provider: any
</script>

<form action={provider.signinUrl} method="POST">
  {#if provider.callbackUrl}
    <input type="hidden" name="callbackUrl" value={provider.callbackUrl} />
  {/if}
  <button type="submit" class="button">
    <slot>Sign in with {provider.name}</slot>
  </button>
</form>

// Where is this being utilized? Is this being auto imported someone by your library? From a svelte user's point of view who does not know how your library works, there is not much to go by as far as how to implement and use this lib.
