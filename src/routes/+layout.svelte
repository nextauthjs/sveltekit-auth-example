<script lang="ts">
  import '../app.css';

  import Header from "$components/header.svelte"
</script>

<div class="container">
  <Header />
  <slot />
</div>
