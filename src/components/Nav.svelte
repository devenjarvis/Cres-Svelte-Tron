<script>
  // Added by Deven to help get buttons working
  import CrComLib from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib.js';

  import Router , { push } from 'svelte-spa-router';
  import Button from "./Button.svelte";
  import { onMount } from 'svelte';
  
  // STUFF ADDED BY ME
  function sendNumberEvent(signalName, value) {
    CrComLib.publishEvent('n', signalName, value);
	}

</script>

<style>

    nav {
    background: black;
    display: flex;  
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 15vh;
    bottom: 0px;
    left: 0px;
    padding: -5px;
    border: none;
    position: fixed;
    }

</style>

<nav>
  <div class="function">
    <Button color="primary" click={() => push('/')}>Home</Button>
    <Button color="primary" click={() => push('/buttons')}>Buttons</Button>
    <Button color="primary" click={() => push('/slider')}>Slider</Button>
    <Button color="primary" click={() => push('/newpage')}>New Page</Button>
  </div>
  
<div class="volume">
  <Button color="primary" click={() => {sendNumberEvent('sig_1', 1)}}>Mute</Button>
  <Button color="primary" click={() => {sendNumberEvent('sig_1', 2)}}>Down</Button>   
  <Button color="primary" click={() => {sendNumberEvent('sig_1', 3)}}>Up</Button>
</div>


</nav>
