<script>
  import CrComLib from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib.js';
  import { serialJoin1, analogJoin2, digitalJoin3 } from '../joinStore.js';
  import Button from '../components/Button.svelte'


function sendEvent(signalType, joinNumber, value) {
  
  // Docs: https://sdkcon78221.crestron.com/downloads/ShowcaseApp/utility-functions/utility-publish-signal.html
  CrComLib.publishEvent(signalType, joinNumber, value);
  setTimeout (() => CrComLib.publishEvent(signalType, joinNumber, false), 200);
}
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

  <h1>Digital 1 Selected: {$digitalJoin3}</h1>
  
  
  <div class="grid">
    <!-- I'll admit the syntax for the click function is a bit unwieldy. This is only necessary because out function takes arguments. -->
    <Button color="primary" join={digitalJoin3}>Digital 1</Button>
    <Button color="primary" join={digitalJoin3}>Digital 2</Button>
    <Button color="primary" join={digitalJoin3}>Digital 3</Button>

    <Button color="primary" type="analog" join={analogJoin2} value={65535}>Analog 1</Button>
    <Button color="primary" type="analog" join={analogJoin2} value={32650}>Analog 2</Button>
    <Button color="primary" type="analog" join={analogJoin2} value={0}>Analog 3</Button>

    <Button color="primary" type="serial" join={serialJoin1} value="Button 1 Text">Serial 1</Button>
    <Button color="primary" type="serial" join={serialJoin1} value="Button 2 Text">Serial 2</Button>
    <Button color="primary" type="serial" join={serialJoin1} value="Button 3 Text">Serial 3</Button>
    
  </div>
</div>