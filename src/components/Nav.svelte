<script>
  // Added by Deven to help get buttons working
  import CrComLib from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib.js';

  import Router , { push } from 'svelte-spa-router';
  import Button from "./Button.svelte";
  import { onMount } from 'svelte';
  
  // STUFF ADDED BY ME
  function sendEvent(signalType, joinNumber, value) {
    CrComLib.publishEvent(signalType, joinNumber, value);
  setTimeout (() => CrComLib.publishEvent(signalType, joinNumber, false), 200);
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
  <Button color="primary" click={() => {sendEvent('b','1',true)}}>Mute</Button>
  <Button color="primary" click={() => {sendEvent('b','1',true)}}>Down</Button>   
  <Button color="primary" click={() => {sendEvent('b','1',true)}}>Up</Button>
</div>


</nav>
