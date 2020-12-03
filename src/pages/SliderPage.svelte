<script>
    /*** Imports ***/
    import Button from '../components/Button.svelte'
    import { analogJoin2 } from '../stores/joinStore.js';
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
<h1>Volume: {$analogJoin2}</h1>

<input type="range" min="0" max="65535" bind:value={$analogJoin2} class="slider">

<div class="grid">
    <!-- I'll admit the syntax for the click function is a bit unwieldy. This is only necessary because out function takes arguments. -->
    <Button color="error" click={() => {analogJoin2.publish(-32768)}}>Mute</Button>
    <Button color="warning" click={() => {analogJoin2.publish(Math.floor(Math.random() * 101))}}>Random</Button>
    <Button color="success" click={() => {analogJoin2.publish(32767)}}>Full Blast</Button>
</div>