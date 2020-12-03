<script>
  // Added by Deven to help get buttons working
  import { digitalJoin4, digitalJoin5, digitalJoin6 } from '../stores/joinStore.js';

  import { push } from 'svelte-spa-router';
  import Button from "./Button.svelte";

</script>

<style>

    nav {
    background: black;
    display: flex;  
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 15vh;
    bottom: 0px;
    left: 0px;
    padding: -5px;
    border: none;
    position: fixed;
    }

</style>

<nav>
  <div class="function">
    <Button color="primary" click={() => push('/home')}>Home</Button>
    <Button color="primary" click={() => push('/buttons')}>Buttons</Button>
    <Button color="primary" click={() => push('/slider')}>Slider</Button>
    <Button color="primary" click={() => push('/newpage')}>New Page</Button>
  </div>
  
<div class="volume">
  <Button color="primary" join={digitalJoin4}>Mute</Button>
  <Button color="primary" join={digitalJoin5}>Down</Button>   
  <Button color="primary" join={digitalJoin6}>Up</Button>
</div>


</nav>
