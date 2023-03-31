<template>
  <div class="c-image-slider" ref="imageSlider">
    <div class="c-image-slider__wrapper">
      <div class="c-image-slider__image">
        <img src="~/assets/images/Urus.png" alt="" />
      </div>
      <div class="c-image-slider__image">
        <img src="~/assets/images/Aventador.png" alt="" />
      </div>
      <div class="c-image-slider__image">
        <img src="~/assets/images/Marciegalo-big.png" alt="" />
      </div>
      <div class="c-image-slider__image">
        <img src="~/assets/images/Urus.png" alt="" />
      </div>
      <div class="c-image-slider__image">
        <img src="~/assets/images/Aventador.png" alt="" />
      </div>
      <div class="c-image-slider__image">
        <img src="~/assets/images/Marciegalo-big.png" alt="" />
      </div>
      <div class="c-image-slider__image">
        <img src="~/assets/images/Urus.png" alt="" />
      </div>
      <div class="c-image-slider__image">
        <img src="~/assets/images/Aventador.png" alt="" />
      </div>
      <div class="c-image-slider__image">
        <img src="~/assets/images/Marciegalo-big.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.min";

export default {
  name: "HomeImageSlider",

  async mounted() {
    await this.$nextTick();
    new Swiper(this.$refs.imageSlider, {
      direction: "vertical",
      slidesPerView: "auto",
      wrapperClass: "c-image-slider__wrapper",
      slideClass: "c-image-slider__image",
      slideActiveClass: "is-active",
      spaceBetween: 20,
      initialSlide: 1,
      centeredSlides: true,
      centeredSlidesBounds: true,
      freeMode: {
        enabled: true,
      },
    });
  },
};
</script>
