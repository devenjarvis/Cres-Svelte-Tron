<script>
    /*** Imports ***/
    import CrComLib from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib.js';
    import { onMount, onDestroy } from 'svelte';
    import Button from '../components/Button.svelte'

    // Initialize any subscription ids
	var sig2SubId;

    // Reactive variables - Use $: instead of var when you want the UI to change with the var does
    $: slider_val = 0;

    /*** Lifecycle Hooks ***/
    // Subscribe to signals you want to listen to when this page is mounted
    onMount (() => {
        sig2SubId = CrComLib.subscribeState('n','1', function (value) {
            slider_val = value;
        });
    })

    // Unsubscribe from anything you subscribed to when this page is destroyed
    onDestroy (() => {
        CrComLib.unsubscribeState('n', '1', sig2SubId);
    })

    /*** Functions ***/

    // Sets the volume to a provided value
    function setVolume(value) {
        // Publish the value to sig_2
        CrComLib.publishEvent('n', '1', value);
    }

    // Sets the volume to something random
    function setRandomVolume() {
        // Sets value to a random integer between 0 to 100 
        let value = Math.floor(Math.random() * 101);
        // Publish the value to sig_2
        CrComLib.publishEvent('n', '1', value);
    }

  </script>

    <style>
        h1 {
            padding-top: 1rem;
        }

        input[type=range] {
            width: 100%;
        }

        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 1rem;
        }
    </style>

    <!-- Svelte has simple syntax for referencing a JS variable from the HTML -->
    <h1>Slider Value: {slider_val}</h1>

    <input type="range" min="0" max="65535" bind:value={slider_val} class="slider">

    <div class="grid">
        <!-- I'll admit the syntax for the click function is a bit unwieldy. This is only necessary because out function takes arguments. -->
        <Button color="error" click={() => {setVolume(-32768)}}>Mute</Button>
        <Button color="warning" click={setRandomVolume}>Random</Button>
        <Button color="success" click={() => {setVolume(32767)}}>Full Blast</Button>
    </div>