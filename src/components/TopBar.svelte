<script>
	import { currentDate, currentTime, currentPage } from '../joinStore.js';
</script>

<style>
    nav {
        background: black;
        display: flex;  
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 5vh;
        top: 0px;
        left: 0px;
        padding: -5px;
        border: none;
        position: fixed;
    }

    h2,
    h3 {
        color: white;
    }
</style>

<nav>
    <h3>{$currentTime}</h3>
    <h2>{$currentPage}</h2>
    <h3>{$currentDate}</h3>
</nav>