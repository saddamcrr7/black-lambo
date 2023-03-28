<template>
  <div class="o-inside-project">
    <div class="o-inside-project__container">
      <div class="o-inside-project__title">Inside project</div>
      <div class="o-inside-project__slider" ref="projectSlider">
        <div class="o-inside-project__slider-wrapper">
          <div class="o-inside-project__slider-item">
            <div class="o-inside-project__slider-text">+25</div>
            <div class="o-inside-project__slider-sub">job families</div>
          </div>
          <div class="o-inside-project__slider-item">
            <div>
              <div class="o-inside-project__slider-text">7</div>
              <div class="o-inside-project__slider-sub">
                interviews maximum for a recruitment
              </div>
            </div>
          </div>
          <div class="o-inside-project__slider-item">
            <div class="o-inside-project__slider-text">+25</div>
            <div class="o-inside-project__slider-sub">job families</div>
          </div>
        </div>

        <div class="o-inside-project__slider-arrows">
          <div class="o-inside-project__slider-arrow o-inside-project__slider-arrow--prev"><ArrowIconLeft /></div>
          <div class="o-inside-project__slider-arrow o-inside-project__slider-arrow--next"><ArrowIconRight /></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper/swiper-bundle.min";
import ArrowIconRight from "~/assets/svgs/arrow-right.svg?inline";
import ArrowIconLeft from "~/assets/svgs/arrow-left.svg?inline";
export default {
  name: "InsideProject",

  async mounted() {
    await this.$nextTick();
    new Swiper(this.$refs.projectSlider, {
      slidesPerView: "auto",
      wrapperClass: "o-inside-project__slider-wrapper",
      slideClass: "o-inside-project__slider-item",
      slideActiveClass: "is-active",
      spaceBetween: 299,
      freeMode: {
        enabled: true,
      },
      navigation: {
        nextEl: ".o-inside-project__slider-arrow--next",
        prevEl: ".o-inside-project__slider-arrow--prev",
      },
    });
  },

  methods: {},

  computed: {},

  components: { ArrowIconRight, ArrowIconLeft },
};
</script>
