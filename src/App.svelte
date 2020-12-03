<script>
  //import a library like CH5 CrComLib
  import CrComLib from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib.js';

  //attach required CrComLib functions so Svelte can communicate with CH5
  window.bridgeReceiveIntegerFromNative = CrComLib.bridgeReceiveIntegerFromNative;
  window.bridgeReceiveBooleanFromNative = CrComLib.bridgeReceiveBooleanFromNative;
  window.bridgeReceiveStringFromNative = CrComLib.bridgeReceiveStringFromNative;
  window.bridgeReceiveObjectFromNative = CrComLib.bridgeReceiveObjectFromNative;

	// Import the Router compontent from another file
  import Router , { location } from 'svelte-spa-router';

   // Import your app pages from other svelte files
  import SpashPage from './pages/SplashPage.svelte';
	import HomePage from './pages/HomePage.svelte';
	import ButtonPage from './pages/ButtonPage.svelte';
	import SliderPage from './pages/SliderPage.svelte';
	import NewPage from './pages/NewPage.svelte';
	
	// Import our navigation component
	import Nav from './components/Nav.svelte';
	import TopBar from './components/TopBar.svelte';
	
  // Define your page "routes" - basically the screens you want to show
  
  const routes = {
    "/": SpashPage,
    "/home": HomePage,
		"/buttons": ButtonPage,
		"/slider": SliderPage,
		"/newpage": NewPage,
  };

	
	// Eruda creates a mimic of Chrome Dev Tools on mobile/touch panels, this is automatically 
	// Removed if you use 'npm run ch5-build' or 'node ch5-run --host XXX.XXX.XXX.XXX --dev'
	import * as eruda from 'eruda';
  eruda.init();
  
</script>

<style>
  /* Set some global CSS variables */
  :global(html) {
    /* Colors */
    --color-light: #d3d3d3;
    --color-dark: #1e212b;
    --color-primary: #5eb1bf;
    --color-secondary: #a26769;
    --color-success: #4d8b31;
    --color-warning: #e9c46a;
    --color-error: #c14953;
    --color-whatever: #ec058e;

    /* Fonts */
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;

    background-color: antiquewhite;

    box-sizing: border-box;
    padding: 0;
    margin: 0;

    }
</style>

<!-- This is our global top bar -->
{#if $location != '/'}
  <TopBar />
{/if}

<!--This component just handles page routing, nothing more-->
<Router {routes} />

<!-- This is our global naviagtion bar -->
{#if $location != '/'}
  <Nav/>
{/if}