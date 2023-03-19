<template>
  <div class="p-index">
    <div class="p-index__wrapper" ref="indexWrapper">
      <HomeHero ref="slide1" />
      <HomeSlideOne ref="slide2" />
      <HomeSlideTwo ref="slide3" />
      <HomeSlideFour ref="slide4" />
      <HomeSlideAbout ref="slide5" />
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",

  mounted() {
    this.animations();
  },

  methods: {
    animations() {
      const gsap = this.$gsap,
        ScrollTrigger = this.$ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const wrapper = this.$refs.indexWrapper;

      gsap.set(wrapper, { width: innerWidth * 5 });

      let scrollTween = gsap.to(wrapper, {
        xPercent: -100,
        x: () => window.innerWidth,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          pin: true,
          scrub: 2,
          end: () => `+=${innerWidth * 5 - innerWidth}px`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    },
  },

  computed: {},
};
</script>
