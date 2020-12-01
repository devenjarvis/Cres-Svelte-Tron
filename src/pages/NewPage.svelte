<script>
  import CrComLib from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib.js';
  import { onMount, onDestroy } from 'svelte';
  import Button from '../components/Button.svelte'

// This syntax is for declaring reactive variables. 
// That means when you update the value for this variable any reference to it will also update
// In this case we're justp rinting it to the screen to demonstrate


var digital1Fb;

$: digital1 = 0;

onMount (() => {
        digital1Fb = CrComLib.subscribeState('b','1', function (value) {
            digital1 = value;
        });
    })

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

  <h1>Digital 1 Selected: {digital1}</h1>
  
  
  <div class="grid">
    <!-- I'll admit the syntax for the click function is a bit unwieldy. This is only necessary because out function takes arguments. -->
    <Button color="primary" bind:value={digital1} click={() => {sendEvent('b','1',true)}}>Digital 1</Button>
    <Button color="primary" click={() => {sendEvent('b','2',true)}}>Digital 2</Button>
    <Button color="primary" click={() => {sendEvent('b','3',true)}}>Digital 3</Button>

    <Button color="primary" click={() => {sendEvent('n','1',65535)}}>Analog 1</Button>
    <Button color="primary" click={() => {sendEvent('n','2',32650)}}>Analog 2</Button>
    <Button color="primary" click={() => {sendEvent('n','3',0)}}>Analog 3</Button>

    <Button color="primary" click={() => {sendEvent('s','1','Button 1 Text')}}>Serial 1</Button>
    <Button color="primary" click={() => {sendEvent('s','2','Button 2 Text')}}>Serial 2</Button>
    <Button color="primary" click={() => {sendEvent('s','3','Button 3 Text')}}>Serial 3</Button>
    
  </div>
</div>