<template>
  <div class="o-main-hero">
    <div class="o-main-hero__bg">
      <video
        class="o-main-hero__bg-video"
        data-poster="~/assets/images/Main-video.jpg"
        muted=""
        loop=""
        autoplay=""
        id="hero-video"
        playsinline=""
        v-lazy-load
      >
        <source data-src="https://github.com/saddamcrr7/ap_nuxt/raw/main/hero.mp4"  type="video/mp4"/>
      </video>
    </div>
    <div class="o-main-hero__container">
      <h1 class="o-main-hero__title">The most exclusive Cypto Club</h1>
      <div class="o-main-hero__bottom">
        <div class="o-main-hero__watch-btn">
          <PlayIcon class="o-main-hero__watch-btn-icon" />
          watch video
        </div>
      </div>
    </div>
    <div class="o-main-hero__event">
      <div class="o-main-hero__event-text">
        <p class="o-main-hero__event-sub">Event</p>
        <p class="o-main-hero__event-title">Win your lambo</p>
      </div>
      <div class="o-main-hero__event-image">
        <img src="~/assets/images/Marciegalo.png" alt="" />
      </div>
      <ArrowIcon class="o-main-hero__event-icon" />
    </div>
  </div>
</template>

<script>
import PlayIcon from "~/assets/svgs/play.svg?inline";
import ArrowIcon from "~/assets/svgs/arrow-top-right.svg?inline";

export default {
  name: "HomeHero",

  mounted() {},

  methods: {},

  computed: {},

  components: { PlayIcon, ArrowIcon },
};
</script>
