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
    document.querySelector("html").classList.add("home");
    document.querySelector("body").classList.add("home");
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

      let isScrolling;

      const obsc1 = Observer.create({
        target: window, 
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
          isScrolling = true;
          gsap.to(wrapper, {
            x: -scrollDelta,
            ease: "power4.out",
            duration: 2,
            immediateRender: true,
            onComplete: () => {
              isScrolling = false;
            },
          });
        },
      });

      const obsc2 = Observer.create({
        target: window, 
        type: "wheel,touch",
        onChangeY: (self) => {
          scrollDelta += self.deltaY;
          if (scrollDelta < 0) {
            scrollDelta = 0;
          }
          if (scrollDelta > innerWidth * 4) {
            scrollDelta = innerWidth * 4;
          }
          isScrolling = true;
          gsap.to(wrapper, {
            x: -scrollDelta,
            ease: "power4.out",
            duration: 2,
            immediateRender: true,

            onComplete: () => {
              isScrolling = false;
            },
          });
        },
      });

      const slider4rect = this.$refs.slide4.$el.getBoundingClientRect();

      let obisEnbale = true;
      let obisEnbale1 = true;
      let obisEnbale2 = true;

      const obsc3 = Observer.create({
        target: window, 
        type: "wheel,touch,scroll,pointer",
        onDown: (self) => {
          if (slider4rect.x <= scrollDelta && obisEnbale1) {
            obsc1.disable();
            obsc2.disable();
            obsc3.disable();
            obisEnbale1 = false;
            obisEnbale2 = true;
          }
        },

        onUp: (self) => {
          if (
            slider4rect.x + slider4rect.width >=
              scrollDelta + slider4rect.width &&
            obisEnbale2
          ) {
            obsc1.disable();
            obsc2.disable();
            obsc3.disable();
            obisEnbale2 = false;
            obisEnbale1 = true;
          }
        },

        onDisable: () => {
          obisEnbale = false;
        },
        onEnable: () => {
          obisEnbale = true;
        },
      });

      let op = 0.1;
      let dt = 0;
      let animating,
        detalisIndex = 0;

      const vsiEl = document.querySelectorAll(".o-slide-four__detalis-item");
      const vsidtls = document.querySelectorAll(".o-slide-four__detalis");

      gsap.set(vsiEl[0], { opacity: 1 });

      function scrollDetails(dtp, index, drec) {
        animating = true;

        gsap.to(vsiEl, { opacity: 0.2, immediateRender: true });
        gsap.to(vsiEl[index], {
          opacity: 1,
          immediateRender: true,
          overright: true,
        });

        gsap.to(".o-slide-four__detalis-items", {
          y: dtp,
          immediateRender: true,
          onComplete: () => {
            animating = false;
            if (dt == vsiEl.length - 1 && drec == "down") {
              if (obisEnbale == false) {
                obsc1.enable();
                obsc2.enable();
                obsc3.enable();
                obisEnbale = true;
              }
            }
          },
        });
      }

      Observer.create({
        target: window, 
        type: "wheel,touch,pointer",
        onDown: (self) => {
          if (obsc3.isEnabled == false && isScrolling == false) {
            op += (self.deltaY + self.deltaX) / 1000;
            if (op >= 1) {
              op = 1;
            }

            if (op == 1 && !animating) {
              if (dt == vsiEl.length - 1) {
                dt = vsiEl.length - 1;
              } else if (!animating) {
                dt += 1;
              }

              !animating &&
                scrollDetails(-(dt * vsiEl[0].clientHeight), dt, "down");
            }
            gsap.to(vsidtls, { opacity: op });
          }
        },

        onUp: (self) => {
          if (obsc3.isEnabled == false && isScrolling == false) {
            if (dt == 0) {
              dt = 0;
            } else if (!animating) {
              dt -= 1;
            }

            if (dt == 0) {
              op += (self.deltaY + self.deltaX) / 1000;

              if (op <= 0) {
                op = 0;
              }
            }

            gsap.to(vsidtls, {
              opacity: op,
              immediateRender: true,
              onComplete: () => {
                if (op == 0 && dt == 0) {
                  if (obisEnbale == false) {
                    obsc1.enable();
                    obsc2.enable();
                    obsc3.enable();
                    obisEnbale = true;
                  }
                }
              },
            });
            !animating &&
              scrollDetails(-(dt * vsiEl[0].clientHeight), dt, "up");
          }
        },
      });
    },
  },

  computed: {},
};
</script>
