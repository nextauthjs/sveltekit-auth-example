<script lang="ts">
  import { page } from "$app/stores"
</script>

{#if $page.data.session}
  <h1>Protected page</h1>
  <p>
    This is a protected content. You can access this content because you are
    signed in.
  </p>
  <p>Hello {$page.data.session?.user?.name}</p>
{:else}
  <h1>Access Denied</h1>
{/if}
