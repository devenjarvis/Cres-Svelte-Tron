<script>    
    // Below we set default values in the case none are provided
    export let color = 'primary';
    export let click = () => {};
</script>

<style>
    button {
        padding: 1rem;
        border: solid red 1px;
        border-radius: 5px;
        font-weight: 800;
        font-size: 16px;
        width: 150px;
        height: 80px;
    }

    

    /* Add classes for each color */
    .primary {
        color: var(--color-light);
        background-color: var(--color-primary);
    }

    .primary:active{
        color: var(--color-dark);
        background-color: var(--color-secondary);
    }

    .primary:after{
        color: var(--color-dark);
        background-color: var(--color-secondary);
    }

	.secondary {
        color: var(--color-dark);
        background-color: var(--color-secondary);
    }

	.success {
        color: var(--color-dark);
        background-color: var(--color-success);
    }

	.warning {
        color: var(--color-dark);
        background-color: var(--color-warning);
    }

	.error {
        color: var(--color-dark);
        background-color: var(--color-error);
    }

	.dark {
        color: var(--color-light);
        background-color: var(--color-dark);
    }

	.whatever {
        color: var(--color-dark);
        background-color: var(--color-whatever);
    }
</style>

<button class="{color}" on:click={click}>
    <slot></slot>
</button>