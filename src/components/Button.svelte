<script>    
    // Below we set default values in the case none are provided
    export let color = 'primary';
    export let type = 'momentary';
    export let join = null;
    export let click = () => {};
    
    // Function to handle the push of a button
    function buttonPushed(){
        // The following block only works if you've defined a join
        if (join) {
            if(type == 'momentary') {
                join.publish(true);
            } else if(type == 'toggle') {
                join.publish(!$join);
            } else if(type == 'lock-high') {
                join.publish(true);
            } else if(type == 'lock-low') {
                join.publish(false);
            }
        }
    }

    // Function to handle the release of a button
    function buttonReleased(){
        // The following block only works if you've defined a join
        if (join) {
            if(type == 'momentary') {
                join.publish(false);
            }
        }
    }

</script>

<style>
    button {
        border: solid black 1px;
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

    .pressed{
        box-shadow: inset 0 0 10px #232323;
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

<button 
    class="{color}"
    class:pressed="{$join}"
    on:click={click}

    on:touchstart|preventDefault={buttonPushed}
	on:touchend|preventDefault={buttonReleased}	
	on:touchcancel|preventDefault={buttonReleased}

    on:mousedown={buttonPushed}
	on:mouseup={buttonReleased}	
    on:mouseleave={buttonReleased}	
>
    <slot></slot>
</button>