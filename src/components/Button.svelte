<script>    
    // Below we set default values in the case none are provided
    export let color = 'primary';
    export let click = () => {};
</script>

<style>
    button {
        padding: 0.5rem;
        border: none;
        border-radius: 5px;
        font-family: var(--sans-serif);
        font-weight: 800;
    }

    /* Add classes for each color */
    .primary {
        color: var(--color-dark);
        background-color: var(--color-primary);
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

<button class={color} on:click={click}>
    <slot></slot>
</button>