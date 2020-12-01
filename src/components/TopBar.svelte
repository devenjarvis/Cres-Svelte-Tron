<script>
    import CrComLib from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib.js';
	import { onMount, onDestroy } from 'svelte';
	import Button from '../components/Button.svelte'

var serial11Fb;
var serial12Fb;
var serial13Fb;

    $: currentDate = 0;  
    $: currentTime = 0;
    $: currentPage = 0;

	onMount (() => {
        serial11Fb = CrComLib.subscribeState('s','11', function (value) {
            currentDate = value;
        });
        serial12Fb = CrComLib.subscribeState('s','12', function (value) {
            currentTime = value;
        });
        serial13Fb = CrComLib.subscribeState('s','13', function (value) {
            currentPage = value;
        });
    })

    // Unsubscribe from anything you subscribed to when this page is destroyed
    

</script>

<style>
    nav {
    background: black;
    display: flex;  
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 5vh;
    top: 0px;
    left: 0px;
    padding: -5px;
    border: none;
    position: fixed;
    }

    h2,
    h3 {
        color: white;
    }
</style>

<nav>
<h3>{currentTime}</h3>
<h2>{currentPage}</h2>
<h3>{currentDate}</h3>
</nav>