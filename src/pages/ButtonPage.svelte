<script>
    /*** Imports ***/
	import CrComLib from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib.js';
	import { onMount, onDestroy } from 'svelte';
	import Button from '../components/Button.svelte'

	//Testing store
	import { join_1 } from '../joinStore.js';

	// ADDED BY ME
	var serial12Fb;

	$: currentTime = "0";

	onMount (() => {
        serial12Fb = CrComLib.subscribeState('s','12', function (value) {
            currentTime = value;
        });
    })

    // Unsubscribe from anything you subscribed to when this page is destroyed
    onDestroy (() => {
        CrComLib.unsubscribeState('s', '12', serial12Fb);
    })

</script>

<style>
	h1 {
		padding-top: 1rem;
	}

	.grid {
		display: grid;
		  grid-template-columns: 1fr 1fr 1fr 1fr;
		  grid-gap: 1rem;
	}
</style>

<!-- Svelte has simple syntax for referencing a JS variable from the HTML -->
<h1>Last Button Pressed was: {$join_1}</h1>


<div class="grid">
	<!-- I'll admit the syntax for the click function is a bit unwieldy. This is only necessary because out function takes arguments. -->
	<Button color="primary" click={() => {join_1.publish('Primary')}}>Primary Button</Button>
	<Button color="secondary" click={() => {join_1.publish('Secondary')}}>Secondary Button</Button>
	<Button color="light" click={() => {join_1.publish('Light')}}>Light Button</Button>
	<Button color="dark" click={() => {join_1.publish('Dark')}}>Dark Button</Button>
	<Button color="success" click={() => {join_1.publish('Success')}}>Success Button</Button>
	<Button color="warning" click={() => {join_1.publish('Warning')}}>Warning Button</Button>
	<Button color="error" click={() => {join_1.publish('Error')}}>Error Button</Button>
	<Button color="whatever" click={() => {join_1.publish('Whatever 1')}}>Whatever Button</Button>
	<Button color="whatever" click={() => {join_1.publish('Whatever 2')}}>Whatever Button</Button>
</div>