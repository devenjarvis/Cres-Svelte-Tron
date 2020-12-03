<script>
  import { serialJoin1, analogJoin2, digitalJoin3, digitalJoin4, digitalJoin5 } from '../stores/joinStore.js';
  import Button from '../components/Button.svelte'
</script>

<style>
#container {
    position: fixed;
    top: 5vh;
    width: 100%;
}

.grid {
  display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
}
</style>

<!-- Svelte has simple syntax for referencing a JS variable from the HTML -->

<div id="container">

  <h3>Digital 3 Selected: {$digitalJoin3}</h3>
  <h3>Digital 4 Selected: {$digitalJoin4}</h3>
  <h3>Digital 5 Selected: {$digitalJoin5}</h3>
  
  
  <div class="grid">
    <!-- I'll admit the syntax for the click function is a bit unwieldy. This is only necessary because out function takes arguments. -->
    <Button color="primary" join={digitalJoin3}>Digital 3</Button>
    <Button color="primary" join={digitalJoin4}>Digital 4</Button>
    <Button color="primary" join={digitalJoin5}>Digital 5</Button>

    <Button color="primary" type="analog" join={analogJoin2} value={65535}>Analog 1</Button>
    <Button color="primary" type="analog" join={analogJoin2} value={32650}>Analog 2</Button>
    <Button color="primary" type="analog" join={analogJoin2} value={0}>Analog 3</Button>

    <Button color="primary" type="serial" join={serialJoin1} value="Button 1 Text">Serial 1</Button>
    <Button color="primary" type="serial" join={serialJoin1} value="Button 2 Text">Serial 2</Button>
    <Button color="primary" type="serial" join={serialJoin1} value="Button 3 Text">Serial 3</Button>
    
  </div>
</div>