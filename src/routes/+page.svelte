<script>
  import logo from "../../src/assets/logo.png";
  import NoteForm from "$lib/note-form.svelte";
  import Account from "$lib/account.svelte";
  import Login from "$lib/login.svelte";
</script>

<h1>SvelteKit Auth Example</h1>
<p>
  This is an example site to demonstrate how to use <a
    href="https://kit.svelte.dev/">SvelteKit</a
  >
  with <a href="https://sveltekit.authjs.dev">SvelteKit Auth</a> for authentication.
</p>

<main>
  <Login />
  <div class="wrapper">
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={logo} class="logo svelte" alt="Svelte Logo" />
    </a>

    <h1>Leave a Note</h1>
    <p>One day, you might just wish you did</p>
    <div class="card">
      <Account />
    </div>
    <NoteForm />

    <p>
      Check out <a
        href="https://github.com/sveltejs/kit#readme"
        target="_blank"
        rel="noreferrer">SvelteKit</a
      >, the official Svelte app framework powered by Vite!
    </p>

    <p class="read-the-docs">
      Click on the Vite and Svelte logos to learn more
    </p>
  </div>
</main>

<style>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo.svelte:hover {
  filter: drop-shadow(0 0 2em #898888aa);
}
.read-the-docs {
  color: #888;
}
.card {
  display: flex;
  justify-content: row;
  padding: 10px;
  row-gap: 3px;
  column-gap: 4px;
}
.wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
