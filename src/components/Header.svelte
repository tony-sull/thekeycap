<script>
  /* eslint-disable import/first */
  import { stores } from '@sapper/app'

  const { page } = stores()

  let menuToggle

  $: if ($page && menuToggle) menuToggle.checked = false
</script>

<style>
  .menu-toggle {
    top: 0.5em;
    right: 0.5em;
  }

  .menu-icon,
  .menu-icon::before,
  .menu-icon::after {
    width: 1.75em;
    height: 3px;
    content: '';
    transition: all ease-in-out 350ms;
    @apply block rounded-full  bg-shades-light;
  }

  .menu-icon::before {
    transform: translateY(-6px);
  }

  .menu-icon::after {
    transform: translateY(3px);
  }

  #menu-toggle:checked ~ .menu-toggle .menu-icon {
    transform: rotate(45deg);
  }

  #menu-toggle:checked ~ .menu-toggle .menu-icon::before {
    opacity: 0;
  }

  #menu-toggle:checked ~ .menu-toggle .menu-icon::after {
    transform: translateY(-3px) rotate(-90deg);
  }

  nav {
    top: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 0%, 0 0%);
    transition: clip-path ease-in-out 200ms;
  }

  nav li {
    @apply border-gray-100 w-full h-full;
  }

  nav li a {
    @apply py-4 px-16 block;
  }

  nav li:not(:last-child) {
    @apply border-b;
  }

  nav li:hover {
    @apply bg-gray-500;
  }

  #menu-toggle:checked ~ nav {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    @apply block;
  }

  @media screen and (min-width: theme(screens.xs)) {
    nav {
      transition: none;
      clip-path: none;
    }

    nav li {
      @apply mx-2 relative;
    }

    nav li a {
      @apply py-0 px-2 inline-block;
    }

    nav li:hover {
      @apply bg-transparent;
    }

    nav li::after {
      top: -2px;
      width: 100%;
      height: 2px;
      content: '';
      transition: transform ease-in-out 250ms;
      transform: scale(0, 1);
      @apply absolute left-0 right-0 rounded-full;
    }

    nav li:hover::after {
      transform: scale(1, 1);
    }

    nav li:not(:last-child) {
      @apply border-b-0;
    }
  }
</style>

<header class="bg-brand px-6 py-4 relative" tab-index="0">
  <div
    class="content max-w-2x flex items-center justify-between xs:justify-start"
  >
    <a href="https://thekeycap.com" aria-label="Keycap" title="Keycap">
      <img class="h-6 my-1" src="logo-horizontal.svg" alt="Keycap" />
    </a>

    <input
      type="checkbox"
      id="menu-toggle"
      class="hidden"
      aria-hidden="true"
      bind:this={menuToggle}
    />

    <nav
      class="absolute left-0 right-0 bg-shades-dark z-50 text-shades-light
      xs:relative xs:bg-transparent"
    >
      <ul
        class="text-lg text-center capitalize font-light xs:flex xs:items-center
        xs:ml-2"
      >
        <li>
          <a href="." alt="Home" rel="prefetch">Home</a>
        </li>
        <li>
          <a href="reviews" alt="Reviews" rel="prefetch">Reviews</a>
        </li>
        <li>
          <a href="learn" alt="Learn" rel="prefetch">Learn</a>
        </li>
        <li>
          <a href="about" alt="About" rel="prefetch">About</a>
        </li>
      </ul>
    </nav>

    <label class="menu-toggle p-2 cursor-pointer xs:hidden" for="menu-toggle">
      <div class="menu-icon" />
      <span class="hidden" aria-hidden="true">Menu</span>
    </label>
  </div>
</header>
