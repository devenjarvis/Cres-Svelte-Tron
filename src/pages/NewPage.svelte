<script>
  import CrComLib from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib.js';
  import Button from '../components/Button.svelte'

// This syntax is for declaring reactive variables. 
// That means when you update the value for this variable any reference to it will also update
// In this case we're justp rinting it to the screen to demonstrate
$: last_pressed = "None";

function sendEvent(signalType, signalName, value, name) {
  last_pressed = name;
  // Docs: https://sdkcon78221.crestron.com/downloads/ShowcaseApp/utility-functions/utility-publish-signal.html
  CrComLib.publishEvent(signalType, signalName, value);
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
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
}
</style>

<!-- Svelte has simple syntax for referencing a JS variable from the HTML -->

<div id="container">

  <h1>Last Button Pressed was: {last_pressed}</h1>
  
  
  <div class="grid">
    <!-- I'll admit the syntax for the click function is a bit unwieldy. This is only necessary because out function takes arguments. -->
    <Button color="primary" click={() => {sendEvent('b','ex1_b',true, 'Primary')}}>Primary Button</Button>
    <Button color="secondary" click={() => {sendEvent('b','ex1_b',true, 'Secondary')}}>Secondary Button</Button>
    <Button color="light" click={() => {sendEvent('b','ex1_b',true, 'Light')}}>Light Button</Button>
    
  </div>
</div>