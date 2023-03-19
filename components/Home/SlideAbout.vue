<template>
  <div class="o-slide-about">
    <div class="o-slide-about__container">
      <div class="o-slide-about__row">
        <div class="o-slide-about__col o-slide-about__col--left">
          <h3 class="o-slide-about__title">About <ArrowIcon/></h3>
          <p class="o-slide-about__sub">The project vision</p>
          <div class="o-slide-about__text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
          <div class="o-slide-about__image">
            <img src="~/assets/images/Aventador.png" alt="">
          </div>
        </div>
        <div class="o-slide-about__col o-slide-about__col--right">
          <div class="o-slide-about__ctas">
            <NuxtLink to="/" class="o-slide-about__cta">
              
              <div class="o-slide-about__cta-title">Careers <ArrowIcon class="o-slide-about__cta-icon"/></div>
              <div class="o-slide-about__cta-sub">Excepteur sint occaecat cupidatat non proident</div>
            </NuxtLink>
            <NuxtLink to="/" class="o-slide-about__cta">
              <div class="o-slide-about__cta-title">Contact <ArrowIcon class="o-slide-about__cta-icon"/></div>
              <div class="o-slide-about__cta-sub">Duis aute irure </div>
            </NuxtLink>
            <NuxtLink to="/" class="o-slide-about__cta">
              <div class="o-slide-about__cta-title">Media Center <ArrowIcon class="o-slide-about__cta-icon"/></div>
              <div class="o-slide-about__cta-sub">Ut enim ad minim veniam, quis nostrud exercitation ullamco</div>
            </NuxtLink>
          </div>
          <div class="o-slide-about__socials">
            <div class="o-slide-about__socials-title">Follow us</div>
            <ul class="o-slide-about__socials-list">
              <li class="o-slide-about__socials-item">
                <a href="" class="o-slide-about__socials-link"><InstaIcon/></a>
              </li>
              <li class="o-slide-about__socials-item">
                <a href="" class="o-slide-about__socials-link"><FbIcon/></a>
              </li>
              <li class="o-slide-about__socials-item">
                <a href="" class="o-slide-about__socials-link"><telIcon/></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ArrowIcon from "~/assets/svgs/arrow-top-right.svg?inline";
import InstaIcon from "~/assets/svgs/insta.svg?inline";
import FbIcon from "~/assets/svgs/fb.svg?inline";
import telIcon from "~/assets/svgs/tel.svg?inline";

export default {
  name: "HomeSlideAbout",
  
  mounted() {},

  methods: {},

  computed: {},
  components: { ArrowIcon, InstaIcon, FbIcon, telIcon },
};
</script>
