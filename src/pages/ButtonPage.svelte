<script>
    /*** Imports ***/
	import CrComLib from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib.js';
	import { onMount, onDestroy } from 'svelte';
	import Button from '../components/Button.svelte'

	// Initialize Subscription Ids
	var sig1SubId;

	// Reactive variables - Use $: instead of var when you want the UI to change with the var does
	$: last_pressed = null;

	/*** Lifecycle Hooks ***/
	// Subscribe to signals you want to listen to when this page is mounted
	onMount (() => {
		sig1SubId = CrComLib.subscribeState('s','sig_1', function (value) {
			last_pressed = value;
		});
	})

	// Unsubscribe from anything you subscribed to when this page is destroyed
	onDestroy (() => {
		CrComLib.unsubscribeState('s', 'sig_1', sig1SubId);
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
<h1>Last Button Pressed was: {last_pressed}</h1>


<div class="grid">
	<!-- I'll admit the syntax for the click function is a bit unwieldy. This is only necessary because out function takes arguments. -->
	<Button color="primary" click={() => {CrComLib.publishEvent('s','sig_1','Primary')}}>Primary Button</Button>
	<Button color="secondary" click={() => {CrComLib.publishEvent('s','sig_1','Secondary')}}>Secondary Button</Button>
	<Button color="light" click={() => {CrComLib.publishEvent('s','sig_1','Light')}}>Light Button</Button>
	<Button color="dark" click={() => {CrComLib.publishEvent('s','sig_1','Dark')}}>Dark Button</Button>
	<Button color="success" click={() => {CrComLib.publishEvent('s','sig_1','Success')}}>Success Button</Button>
	<Button color="warning" click={() => {CrComLib.publishEvent('s','sig_1','Warning')}}>Warning Button</Button>
	<Button color="error" click={() => {CrComLib.publishEvent('s','sig_1','Error')}}>Error Button</Button>
	<Button color="whatever" click={() => {CrComLib.publishEvent('s','sig_1','Whatever')}}>Whatever Button</Button>
	<Button color="whatever" click={() => {CrComLib.publishEvent('s','sig_1','Whatever')}}>Whatever Button</Button>
</div>