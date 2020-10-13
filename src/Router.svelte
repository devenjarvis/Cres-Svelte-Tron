<script context="module">
    var _routes;
    let component;

    const LoadRoute = path => {
        component = _routes[path];
    };

    export const navigate = path => {
        window.history.pushState(null, null, path);
        LoadRoute(path);
    };
    
    window.onpopstate = () => LoadRoute(location.pathname);
</script>

<script>
    import {onMount} from "svelte";
    export let routes = {};
    
    onMount(() => {
        _routes = routes;
        LoadRoute(location.pathname);
    });
</script>

<p>{component}</p>
<svelte:component this={component}/>