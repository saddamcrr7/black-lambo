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

      const obsc1 = Observer.create({
        target: ".p-index",
        type: "touch,scroll,pointer",
        axis: "x",
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

      const obsc2 = Observer.create({
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

      // const slider4rect = this.$refs.slide4.$el.getBoundingClientRect();

      // const obsc3 = Observer.create({
      //   target: ".p-index",
      //   type: "wheel,touch,scroll,pointer",
      //   onDown: (self) => {
      //     if (slider4rect.x <= scrollDelta) {
      //       obsc1.disable();
      //       obsc2.disable();
      //       obsc3.disable();
      //     }
      //   },

      //   onUp: (self) => {
      //     if (
      //       slider4rect.x + slider4rect.width >=
      //       scrollDelta + slider4rect.width
      //     ) {
      //       obsc1.disable();
      //       obsc2.disable();
      //       obsc3.disable();
      //     }
      //   },
      // });

      // let op = 0.1;
      // let dt = 0;
      // let animating,
      //   detalisIndex = 0;

      // const vsiEl = document.querySelectorAll(".o-slide-four__detalis-item");

      // gsap.set(vsiEl[0], { opacity: 1 });

      // function scrollDetails(dtp, index) {
      //   animating = true;

      //   gsap.to(vsiEl, { opacity: 0.2, immediateRender: true });
      //   gsap.to(vsiEl[index], {
      //     opacity: 1,
      //     immediateRender: true,
      //     overright: true,
      //   });

      //   let tl = gsap.timeline({
      //     onComplete: () => {
      //       animating = false;
      //     },
      //   });

      //   tl.to(".o-slide-four__detalis-items", {
      //     y: dtp,
      //   });
      // }

      // Observer.create({
      //   target: ".p-index",
      //   type: "wheel,touch,pointer",
      //   onDown: () => {
      //     if (op == 1) {
      //       dt -= vsiEl[0].clientHeight;
      //       detalisIndex += 1;

      //       if (dt < -vsiEl[0].clientHeight * (vsiEl.length - 1)) {
      //         dt = -vsiEl[0].clientHeight * (vsiEl.length - 1);
      //         detalisIndex = 2;
      //       }
      //     }
      //     if (!obsc3.isEnabled) {
      //       !animating && scrollDetails(dt, detalisIndex);
      //     }

      //     console.log(obsc1.isEnabled);


      //     if (detalisIndex == 2 && !obsc1.isEnabled && op == 1) {

      //       setTimeout(()=> {

      //         obsc1.enable((Self) => {});
      //         obsc2.enable((Self) => {});
      //         obsc3.enable((Self) => {});

      //       }, 1000)

      //       }
      //   },

      //   onUp: () => {
      //     if (op == 1 && !obsc3.isEnabled) {
      //       dt += vsiEl[0].clientHeight;
      //       detalisIndex -= 1;
      //       if (dt > vsiEl[0].clientHeight * (vsiEl.length - 1)) {
      //         dt = vsiEl[0].clientHeight * (vsiEl.length - 1);
      //       }
      //     }
      //     if (!obsc3.isEnabled) {
      //       !animating && scrollDetails(dt, detalisIndex);
      //     }

      //     if (detalisIndex == 0 && !obsc1.isEnabled && op == 0) {
      //         // obsc1.enable((Self) => {});
      //         // obsc2.enable((Self) => {});
      //         // obsc3.enable((Self) => {});
      //       }
      //   },
      //   onChange: (self) => {
      //     if (!obsc1.isEnabled && !obsc3.isEnabled && detalisIndex == 0 ) {
      //       op += (self.deltaY + self.deltaX) / 500;

      //       if (op < 0) {
      //         op = 0;
      //       }

      //       if (op > 1) {
      //         op = 1;
      //       }

      //       gsap.to(".o-slide-four__detalis", {
      //         opacity: op,
      //         immediateRender: true,
      //         onComplete: () => {
      //           if (op == 0) {
      //             // obsc1.enable((Self) => {});
      //             // obsc2.enable((Self) => {});
      //             // obsc3.enable((Self) => {});
      //           }
      //         },
      //       });
      //     }

      //     // gsap.to(".o-slide-four__detalis-items", {
      //     //     y: dt,
      //     //   });
      //   },
      // });
    },
  },

  computed: {},
};
</script>
