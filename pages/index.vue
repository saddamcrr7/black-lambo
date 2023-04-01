<template>
  <div class="p-index" ref="index">
    <div class="p-index__wrapper" ref="indexWrapper">
      <HomeHero ref="slide1" />
      <HomeSlideOne ref="slide2" />
      <HomeSlideTwo ref="slide3" />
      <HomeSlideFour ref="slide4" />
      <HomeSlideAbout ref="slide5" />
    </div>
    <div class="c-section-nav">
      <div class="c-section-nav__spy">
        <div class="c-section-nav__spy-title">scroll to explore</div>
        <div class="c-section-nav__spy-bar">
          <div class="c-section-nav__spy-bar-inner"></div>
        </div>
      </div>
    </div>

    <div class="c-spy-titles">
      <div class="c-spy-titles__item">crypto club</div>
      <div class="c-spy-titles__item">pass</div>
      <div class="c-spy-titles__item">detalis</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",

  mounted() {
    document.querySelector("html").classList.add("home");
    document.querySelector("body").classList.add("home");

    setTimeout(() => {
      this.animations();
    }, 100);
  },

  methods: {
    animations() {
      const gsap = this.$gsap,
        ScrollTrigger = this.$ScrollTrigger,
        Observer = this.$Observer;
      gsap.registerPlugin(ScrollTrigger, Observer);

      const wrapper = this.$refs.indexWrapper;

      gsap.set(wrapper, { width: innerWidth * 5 });

      let scrollDelta = 0;

      let isScrolling;

      const obsc1 = Observer.create({
        target: ".p-index",
        type: "touch,pointer",
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

      let slider4rect = this.$refs.slide4.$el.getBoundingClientRect();

      window.addEventListener("resize", () => {
        slider4rect = this.$refs.slide4.$el.getBoundingClientRect();
        scrollDelta = 0;
        gsap.to(wrapper, { x: 0 });
      });

      let obisEnbale = true;
      let obisEnbale1 = true;
      let obisEnbale2 = true;

      let op = 0.1;
      let dt = 0;
      let animating;

      const obsc3 = Observer.create({
        target: ".p-index",
        type: "wheel,touch,scroll,pointer",
        onDown: (self) => {
          if (slider4rect.x <= scrollDelta && obisEnbale1) {
            obsc1.disable();
            obsc2.disable();
            obsc3.disable();
            obisEnbale1 = false;
            obisEnbale2 = true;

            gsap.to(wrapper, {
              x: -innerWidth * 3,
              ease: "power4.out",
              duration: 2,
              overright: true,
              immediateRender: true,
            });
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
            if (obisEnbale == true) {
              gsap.to(wrapper, {
                x: -innerWidth * 3,
                ease: "power4.out",
                duration: 2,
                overright: true,
                immediateRender: true,
              });
            }
          }
        },

        onDisable: () => {
          obisEnbale = false;
        },
        onEnable: () => {
          obisEnbale = true;
        },
      });

      

      const vsiEl = document.querySelectorAll(".o-slide-four__detalis-item");
      const vsidtls = document.querySelectorAll(".o-slide-four__detalis");

      window.addEventListener("resize", () => {
        op = 0.1;
        dt = 0;

        if (obisEnbale == false) {
          obsc1.enable();
          obsc2.enable();
          obsc3.enable();
          obisEnbale = true;
        }

        gsap.to(vsiEl, { opacity: 0.2, immediateRender: true });
        gsap.to(vsiEl[0], {
          opacity: 1,
          immediateRender: true,
          overright: true,
        });

        gsap.to(vsidtls, { opacity: 0 });

        gsap.to(".o-slide-four__detalis-items", { y: 0 });
      });

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
            if (
              dt == vsiEl.length - 1 &&
              drec == "down" &&
              isScrolling == false
            ) {
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
        target: ".p-index",
        type: "wheel,touch,pointer",
        onDown: (self) => {
          if (obsc3.isEnabled == false && isScrolling == false) {
            op += (self.deltaY + self.deltaX) / 800;
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
              op += (self.deltaY + self.deltaX) / 800;

              if (op <= 0.1) {
                op = 0.1;
              }
            }

            gsap.to(vsidtls, {
              opacity: op,
              immediateRender: true,
              onComplete: () => {
                if (op == 0.1 && dt == 0 && obisEnbale == false) {
                    obsc1.enable();
                    obsc2.enable();
                    obsc3.enable();
                    obisEnbale = true;
                }
              },
            });
            !animating &&
              scrollDetails(-(dt * vsiEl[0].clientHeight), dt, "up");
          }
        },
      });

      const sectionNav = document.querySelector(".c-section-nav");
      const watchBtn = document.querySelector(".o-main-hero__watch-btn"),
        barInner = document.querySelector(".c-section-nav__spy-bar-inner"),
        s4dts = document.querySelector(".o-slide-four__detalis-items"),
        watchBtnRect = watchBtn.getBoundingClientRect(),
        slide1 = this.$refs.slide1.$el,
        slide2 = this.$refs.slide2.$el,
        slide3 = this.$refs.slide3.$el,
        slide4 = this.$refs.slide4.$el,
        slide5 = this.$refs.slide5.$el;

      gsap.set(sectionNav, {
        top: watchBtnRect.y,
        left: watchBtnRect.width + 75,
      });

      setTimeout(() => {}, 100);
      gsap.ticker.add(sectionNavAnim);

      function sectionNavAnim() {
        const watchBtnRect = watchBtn.getBoundingClientRect(),
          slide1rect = slide1.getBoundingClientRect(),
          slide2rect = slide2.getBoundingClientRect(),
          slide3rect = slide3.getBoundingClientRect(),
          slide4rect = slide4.getBoundingClientRect(),
          slide5rect = slide5.getBoundingClientRect(),
          s4dtsrect = s4dts.getBoundingClientRect();

        if (-slide1rect.x < innerWidth) {
          gsap.set(barInner, { width: (-slide1rect.x / innerWidth) * 100 });
        }

        if (slide2rect.x < 0 && -slide2rect.x < innerWidth) {
          gsap.set(barInner, { width: (-slide2rect.x / innerWidth) * 100 });
        }

        if (slide3rect.x < 0 && -slide3rect.x < innerWidth) {
          gsap.set(barInner, { width: (-slide3rect.x / innerWidth) * 100 });
        }

        if (slide4rect.x + s4dtsrect.top < 0 && -slide4rect.x < innerWidth) {
          gsap.set(barInner, {
            width:
              (-(s4dtsrect.top + slide4rect.x) / (innerWidth + 644.203125)) *
              100,
          });
        }

        if (slide5rect.x < innerWidth / 2) {
          gsap.to(sectionNav, {
            autoAlpha: 0,
            immediateRender: true,
          });
        } else {
          gsap.to(sectionNav, {
            autoAlpha: 1,
            immediateRender: true,
          });
        }

        if (watchBtnRect.left > 0) {
          gsap.set(sectionNav, {
            x: watchBtnRect.left,
            ease: "none",
            immediateRender: true,
          });
        }
      }
    },
  },

  computed: {},
};
</script>
