<template>
  <div class="p-index" ref="index">
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
        ScrollTrigger = this.$ScrollTrigger,
        Observer = this.$Observer;
      console.log(Observer);
      gsap.registerPlugin(ScrollTrigger, Observer);

      const wrapper = this.$refs.indexWrapper;

      gsap.set(wrapper, { width: innerWidth * 5 });

      let scrollDelta = 0;

      Observer.create({
        target: ".p-index",
        type: "touch,scroll,pointer",
        tolerance: 100,
        onChangeX: (self) => {
          scrollDelta += -self.deltaX;
          if (scrollDelta < 0) {
            scrollDelta = 0;
          }
          if (scrollDelta > innerWidth * 4) {
            scrollDelta = innerWidth * 4;
          }
          gsap.to(wrapper, {
            x: -scrollDelta,
            ease: "power4.out",
            duration: 2,
            immediateRender: true,
          });
        },
      });

      Observer.create({
        target: ".p-index",
        type: "wheel,touch",
        onChangeY: (self) => {
          scrollDelta += self.deltaY;
          if (scrollDelta < 0) {
            scrollDelta = 0;
          }
          if (scrollDelta > innerWidth * 4) {
            scrollDelta = innerWidth * 4;
          }
          gsap.to(wrapper, {
            x: -scrollDelta,
            ease: "power4.out",
            duration: 2,
            immediateRender: true,
          });
        },
      });
    },
  },

  computed: {},
};
</script>
