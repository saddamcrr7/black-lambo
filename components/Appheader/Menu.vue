<template>
  <div class="c-menu">
    <div class="c-menu__row">
      <div class="c-menu__images">
        <div class="c-menu__images-inner">
          <div class="c-menu__image" data-index="1">
            <img src="~/assets/images/Galardo.png" alt="Galardo" />
          </div>
          <div class="c-menu__image" data-index="2">
            <img src="~/assets/images/Huracan.png" alt="Huracan" />
          </div>
        </div>
      </div>
      <div class="c-menu__content">
        <div class="c-menu__header">
          <div class="c-menu__social">
            <div class="c-menu__social-title">Follow us</div>
            <div class="c-menu__social-list">
              <a href="#" class="c-menu__social-item"><InstaIcon /></a>
              <a href="#" class="c-menu__social-item"><FbIcon /></a>
              <a href="#" class="c-menu__social-item"><telIcon /></a>
            </div>
          </div>
          <div class="c-menu__header-left">
            <NuxtLink to="/" class="c-menu__cta">pre-order</NuxtLink>
          </div>
        </div>
        <div class="c-menu__end">
          <div class="c-menu__navs">
            <ul class="c-menu__nav">
              <li class="c-menu__nav-item is-sublink">
                <div to="/" class="c-menu__nav-link">Crypto Club</div>
                <div class="c-menu__nav-sublinks">
                    <NuxtLink to="/" class="c-menu__nav-sublink">The Club Pass</NuxtLink>
                    <NuxtLink to="/" class="c-menu__nav-sublink">Detalis</NuxtLink>
                </div>
              </li>
              <li class="c-menu__nav-item" data-index="1">
                <NuxtLink to="/collection" class="c-menu__nav-link">Collection</NuxtLink>
              </li>
              <li class="c-menu__nav-item" data-index="2">
                <NuxtLink to="/" class="c-menu__nav-link"
                  >Win your Lambo</NuxtLink
                >
              </li>
            </ul>
            <ul class="c-menu__snav">
              <li class="c-menu__snav-item">
                <NuxtLink to="/media" class="c-menu__snav-link">media room</NuxtLink>
              </li>
              <li class="c-menu__snav-item">
                <NuxtLink to="/" class="c-menu__snav-link">about</NuxtLink>
              </li>
              <li class="c-menu__snav-item">
                <NuxtLink to="/careers" class="c-menu__snav-link">Careers</NuxtLink>
              </li>
              <li class="c-menu__snav-item">
                <NuxtLink to="/contact" class="c-menu__snav-link">contact</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="c-menu__event">
            <div class="c-menu__event-content">
              <div class="c-menu__event-tag">Event</div>
              <div class="c-menu__event-title">Win your <br> lambo</div>
            </div>

            <div class="c-menu__event-image">
              <img src="~/assets/images/Marciegalo.png" alt="Marciegalo" />
            </div>
            <ArrowIcon class="c-menu__event-icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InstaIcon from "~/assets/svgs/insta.svg?inline";
import FbIcon from "~/assets/svgs/fb.svg?inline";
import telIcon from "~/assets/svgs/tel.svg?inline";
import ArrowIcon from "~/assets/svgs/arrow-top-right.svg?inline";

export default {
  name: "Menu",

  mounted() {
    const images = document.querySelectorAll(".c-menu__image");
    const navItems = document.querySelectorAll(".c-menu__nav-item");
    const gsap = this.$gsap;

    navItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        if (!item.dataset.index) return;
        images.forEach((image) => {
          gsap.to(image, {
            opacity: 0,
            duration: 0.25,
          });
          if (item.dataset.index == image.dataset.index) {
            gsap.to(image, {
              opacity: 1,
              overwrite: true,
              mmediateRender: true,
              duration: 0.25,
              delay: 0.1
            });
          }
        });
      });
    });
  },

  methods: {},

  computed: {},

  components: { InstaIcon, FbIcon, telIcon, ArrowIcon },
};
</script>
