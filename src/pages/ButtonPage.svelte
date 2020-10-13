<script>
    //Import CH5 CrComLib
    import CrComLib from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib.js';
    import Button from '../components/Button.svelte'

	function sendEvent(signalType, signalName, value) {
		console.log('Button test');
		// Docs: https://sdkcon78221.crestron.com/downloads/ShowcaseApp/utility-functions/utility-publish-signal.html
		CrComLib.publishEvent(signalType, signalName, value);
	}
</script>

<style>
    
</style>

<Button color="error">Test</Button>