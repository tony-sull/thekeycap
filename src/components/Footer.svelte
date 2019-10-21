<style>
  .content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
    place-items: center center;
  }

  #social li {
    @apply block;
  }

  #facebook .logo,
  #twitter .logo {
    @apply bg-contain bg-no-repeat h-10 w-10;
  }

  #facebook .logo {
    @apply mr-4;
  }

  footer a {
    @apply py-3;
  }

  footer a:not(.inline) {
    @apply block;
  }
</style>

<footer
  class="px-4 py-3 bg-shades-dark text-shades-light items-center text-sm"
  role="contentinfo"
>
  <div class="content max-w-4xl mx-auto p-2 xs:p-6 md:p-8">
    <ul class="font-semibold text-shades-light w-full">
      <li>
        <a href="/about" alt="About">About Keycap</a>
      </li>
      <li>
        <a href="/contact-us" alt="Contact Us">Contact Us</a>
      </li>
    </ul>

    <ul class="text-shades-light font-light w-full">
      <li>
        <a href="/privacy-policy" alt="Privacy Policy">Privacy Policy</a>
      </li>
      <li>
        <a href="/terms-of-use" alt="Terms of Use">Terms of Use</a>
      </li>
      <li>
        <a href="/partners" alt="Partnerships and Advertising">
          Partnerships and Advertising
        </a>
      </li>
      <li>
        <a href="/feed" title="RSS Feed" target="_blank">RSS Feed</a>
      </li>
    </ul>

    <div class="w-full">
      <strong>Lets be friends!</strong>

      <ul id="social" class="flex flex-row my-3">
        <li>
          <a
            id="facebook"
            href="https://www.facebook.com/thekeycap"
            title="Keycap's Facebook"
          >
            <img
              class="logo"
              src="/facebook-circle.svg"
              alt="Keycap's Facebook"
            />
          </a>
        </li>
        <li>
          <a
            id="twitter"
            href="https://www.twitter.com/thekeycap"
            title="Keycap's Twitter"
          >
            <img
              class="logo"
              src="/twitter-circle.svg"
              alt="Keycap's Twitter"
            />
          </a>
        </li>
      </ul>

      <div class="font-thin">
        You can
        <a class="underline inline" href="/contact-us">send us a note</a>
        too.
      </div>
    </div>
  </div>

  <div class="text-xs text-center mt-2 xs:mt-6 md:mt-8">
    © 2019 Keycap. All Rights Reserved.
  </div>
</footer>
