import adapter from "@sveltejs/adapter-auto"
/** @typedef {import('@sveltejs/kit').Config} Config */
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

 /** @type {Config} */ 
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    alias: {
      $components: "src/components",
      $lib: "src/lib",
    },
  },
}

export default config
