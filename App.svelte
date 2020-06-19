<script>
  import SimpleBeam from "./components/SimpleBeam.svelte";
  import MasonryWall from "./components/MasonryWall.svelte";
  import ConcreteBeam from "./components/ConcreteBeam.svelte";

  let module = "SimpleBeam";
</script>

<style>
  .container {
    display: flex;
  }
</style>

<div class="container">
  <button on:click = { () =>{module = "SimpleBeam"} }>Simple Beam</button>
  <button on:click = { () =>{module = "MasonryWall"} }>Masonry Wall</button>
  <button on:click = { () =>{module = "ConcreteBeam"} }>Concrete Beam</button>
</div>

<main>
   {#if module == "SimpleBeam"}  <SimpleBeam /> {/if}
   {#if module == "MasonryWall"}  <MasonryWall /> {/if}
   {#if module == "ConcreteBeam"}  <ConcreteBeam /> {/if}
</main>