<script>
    //Import CH5 CrComLib
    import CrComLib from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib.js';
    
    // Below we set default values in the case none are provided. Remove the assignment ' = X' from each line if you don't want this.
    export let signalType = 'n';
    export let signalName = 'test';
    export let value = '1';
    export let color = 'primary';

    function sendEvent() {
        // Docs: https://sdkcon78221.crestron.com/downloads/ShowcaseApp/utility-functions/utility-publish-signal.html
        CrComLib.publishEvent(signalType, signalName, value);
    }
</script>

<style>
    button {
        padding: 0.5rem;
        border: none;
    }

    .primary {
        color: #000000;
        background-color: var(--color-primary);
    }
</style>

<button class={color} on:click={sendEvent}>
    <slot></slot>
</button>