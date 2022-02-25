<script>
  import Logo from '$lib/assets/images/logo.jpg'
  import { slide } from 'svelte/transition';

    let open = false;
    
    function handleClick() {
      open = !open
    }
    

</script>

<div class="navbar bg-base-100 z-50">
    <div class="navbar-start">
      <div class="dropdown">
        <label class="btn btn-ghost lg:hidden" on:click={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        {#if open}
        <ul tabindex="0" class="absolute bg-gray-50 w-56 text-center p-6 rounded-xl z-50" transition:slide>
          <li class="mt-2" on:click={handleClick}><a href="#about">Despre noi</a></li>
          <li class="mt-2" on:click={handleClick}><a href="#service">Servicii</a></li>
          <li class="mt-2" on:click={handleClick}><a href="#gallery">Galerie</a></li>
          <li class="mt-2" on:click={handleClick}><a href="#contact">Contact</a></li>
        </ul>
        {/if}
      </div>
      <a href="/"> <img src={Logo} alt=""> </a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal p-0">
        <li><a href="/">Despre noi</a></li>
        <li><a href="/">Servicii</a></li>
        <li><a href="/">Galerie</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </div>
    <div class="navbar-end">
      <!-- <a class="btn">Get started</a> -->
</div>
  </div>

  <style>
    .open {
      display: hidden;
    }
  </style>


  