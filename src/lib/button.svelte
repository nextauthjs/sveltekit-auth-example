<script lang="ts">
  export let button: any;
</script>

<button>
  {button}
</button>

<style>
  button {
    padding: 10px 30px 10px 30px;
    flex-shrink: 0;
    flex-grow: 0;
    background-color: rgb(99, 170, 232);
    border-radius: 10px;
    transition: background-color 0.2s ease;
  }
  button:hover {
    background-color: #1a1a1a;
    color: white;
    cursor: pointer;
  }
</style>
