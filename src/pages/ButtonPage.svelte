<script>
	/*** Imports ***/
	import { digitalJoin3 } from '../stores/joinStore.js';
	import Button from '../components/Button.svelte'
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
<h1>Join 3 State: {$digitalJoin3}</h1>


<div class="grid">
	<!-- I'll admit the syntax for the click function is a bit unwieldy. This is only necessary because out function takes arguments. -->
	<Button color="primary" type="momentary" join={digitalJoin3}>Momentary</Button>
	<Button color="whatever" type="toggle" join={digitalJoin3}>Toggle</Button>
	<Button color="success" type="lock-high" join={digitalJoin3}>Lock High</Button>
	<Button color="error" type="lock-low" join={digitalJoin3}>Lock Low</Button>

</div>