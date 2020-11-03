<script>
    import { onMount } from "svelte";
    import { path } from './router.js';

    export let routes = {};
    $: component = routes[$path];
    
    onMount(() => {
        path.navigate(location.pathname);
    });  

    window.onpopstate = () =>  path.navigate(location.pathname);
</script>

<svelte:component this={component}/>