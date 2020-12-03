<script>    
    // Inputs to the Button component, we set default values in the case none are provided
    export let color = 'primary';
    export let type = 'momentary';
    export let join = null;
    export let value = true;
    export let click = () => {};

    // Boolean variable that defines if this is a button sending a digital signal or not
    let digitalButton = join && !['analog', 'serial'].includes(type);
    // A client-side variable for tracking if the button is pressed or not
    let pressed;
    
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
            } else if(type == 'analog' || type == 'serial') {
                join.publish(value);
                pressed = true;
            }
        } else {
            pressed = true;
        }
    }

    // Function to handle the release of a button
    function buttonReleased(){
        // The following block only works if you've defined a join
        if (join) {
            if(type == 'momentary') {
                join.publish(false);
            } else if(type == 'analog' || type == 'serial') {
                pressed = false;
            }
        } else {
            pressed = false;
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
    class:pressed="{digitalButton ? $join : pressed}"
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