<script>
	// Import the Router compontent from another file
	import Router from './Router.svelte'

	// Import your app pages from other svelte files
	import HomePage from './pages/HomePage.svelte'
	import ButtonPage from './pages/ButtonPage.svelte'

	// Define your page "routes" - basically the screens you want to show
	const routes = {
		"/buttons": ButtonPage,
		"/": HomePage
	};

	
	/* I don't know if this is helpful or not so I'm leaving it for now */
	// Eruda creates a mimic of Chrome Dev Tools on mobile/touch panels, this is automatically 
	// Removed if you use 'npm run ch5-build' or 'node ch5-run --host XXX.XXX.XXX.XXX --dev'
	//import * as eruda from 'eruda';
	//eruda.init();

</script>
<style>
	/* Set some global CSS variables */
	:global(html) {
		/* Colors */
		--color-light: #FFFBFC;
		--color-dark: #1E212B;
		--color-primary: #5EB1BF;
		--color-secondary: #A26769;
		--color-success: #4D8B31;
		--color-warning: #E9C46A;
		--color-error: #C14953;
		--color-whatever: #EC058E;

		/* Fonts */
		--sans-serif: Arial, Helvetica, sans-serif;
	}
</style>

<!--This component just handles page routing, nothing more-->
<Router routes={routes}/>