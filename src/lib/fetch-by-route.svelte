<script lang="ts"> 
  import { API_URL } from "./config";
  

  export let route: any;

  async function byRoute(route: any) {
    try {
      const response = await fetch(`${API_URL}/${route}`);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
</script>

<button on:click={async () => await byRoute(route)}>Get {route} data</button>
