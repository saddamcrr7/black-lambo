<template>
  <div class="o-slider-one">
    <div class="o-slider-one__container">
      <h2 class="o-slider-one__title" ><span >Explain about the</span> <span >exclusive crypto club</span> </h2>
      <div class="o-slider-one__image">
        <img src="~/assets/images/Main-video.jpg" alt="" />
      </div>
      <p class="o-slider-one__sub">Non consectetur a erat nam at lectus urna</p>
      <div class="o-slider-one__cta">learn more</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeSlideOne",

  mounted() {
    // this.animations()
  },

  methods: {
    animations() {
      const gsap = this.$gsap,
      Observer = this.$Observer;

      gsap.registerPlugin(Observer);


      const title = this.$refs.s1title
      const split = new SplitText(this.$refs.s1titlet);
      const split1 = new SplitText(this.$refs.s1titlet1);
      console.log(split);

      let scrollDelta
      const tl = gsap.timeline()
      tl.pause()
      tl.from([split.chars, split1.chars], {
            y: '50%',
            autoAlpha: 0,
            ease: "power4.out",
            duration: 1.5,
            immediateRender: true,
            ease: "cubic",
            stagger: 0.05
          });

      const obsc1 = Observer.create({
        target: ".p-index",
        type: "touch,scroll,pointer, wheel",
        axis: "x",
        onChangeX: (self) => {
          scrollDelta += -self.deltaX;
          if (scrollDelta < 0) {
            scrollDelta = 0;
          }
          if (scrollDelta > innerWidth * 4) {
            scrollDelta = innerWidth * 4;
          }

        const titleRect = title.getBoundingClientRect()

        if(titleRect.left <= innerWidth/2) {
          tl.play()
        }
          
        },
      });

    }
  },

  computed: {},

};
</script>
