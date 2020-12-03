<script>
      import { push } from 'svelte-spa-router';
</script>
<style>
    main {
        height: 100vh;
        width: 100vw;
    }
</style>

<main on:click={() => push('/home')}>
    <h1>My awesome splash page!</h1>
    <p>Touch anywhere to start</p>
</main>