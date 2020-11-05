<script>
    import { path } from '../router/router.js'
    import Button from './Button.svelte'
</script>
<style>
    nav {
        background-color: #333;
        position: fixed;
        bottom: 0;
        left: 0;
        padding: 0.5rem 1rem;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-gap: 0.5rem;
    }
</style>

<nav>
    <Button color="primary" click={() => path.navigate('/')}>Home</Button>
    <Button color="secondary" click={() => path.navigate('/buttons')}>Buttons</Button>
    <Button color="secondary" click={() => path.navigate('/about')}>About</Button>
</nav>