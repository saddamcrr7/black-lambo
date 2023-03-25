<template>
  <div class="c-toggler" ref="menuToggler">
    <div class="c-toggler__open">
      <span class="c-toggler__open-line"></span>
      <span class="c-toggler__open-line"></span>
      <span class="c-toggler__open-line"></span>
    </div>
    <div class="c-toggler__close">
      <span class="c-toggler__close-line"></span>
      <span class="c-toggler__close-line"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuToggler",

  mounted() {
    this.$CustomEase.create("cubic", ".5,.1,0,1");

    const rect = document
      .querySelector(".o-header__container")
      .getBoundingClientRect();
    const gsap = this.$gsap;
    gsap.set(this.$refs.menuToggler, {
      left: rect.right - 30 - this.$refs.menuToggler.clientWidth,
    });

    let isMenuOpen = false;

    this.$refs.menuToggler.addEventListener("click", () => {
      if (!isMenuOpen) {
        this.openMenu();
        isMenuOpen = true;
      } else {
        this.closeMenu();
        isMenuOpen = false;
      }
    });
  },

  methods: {
    openMenu() {
      const menu = document.querySelector(".c-menu");
      const imageInner = menu.querySelector(".c-menu__images-inner");
      const navItems = menu.querySelectorAll(".c-menu__nav-item");
      const menuSocials = menu.querySelector(".c-menu__social");
      const snavItem = menu.querySelectorAll(".c-menu__snav-item");
      const envet = menu.querySelectorAll(".c-menu__event");
      const cta = menu.querySelectorAll(".c-menu__cta");
      const openLine = document.querySelectorAll(".c-toggler__open-line");
      const closeLine = document.querySelectorAll(".c-toggler__close-line");
      const gsap = this.$gsap;
      const tl = gsap.timeline();

      gsap.set(closeLine[0], { rotation: 45 });
      gsap.set(closeLine[1], { rotation: -45 });

      tl.to(menu, {
        x: 0,
        ease: "cubic",
        duration: 1.5,
      })
        .to(
          imageInner,
          {
            x: 0,
            ease: "cubic",
            duration: 1.5,
          },
          0.2
        )
        .from(
          navItems,
          {
            y: "50%",
            opacity: 0,
            ease: "cubic",
            duration: 1.5,
            stagger: 0.15,
          },
          0.3
        )
        .from(
          menuSocials,
          {
            y: "50%",
            opacity: 0,
            ease: "cubic",
            duration: 1.5,
          },
          0.3
        )
        .from(
          snavItem,
          {
            y: "50%",
            opacity: 0,
            ease: "cubic",
            duration: 1.5,
            stagger: 0.1,
          },
          0
        )
        .from(
          envet,
          {
            y: "100%",
            ease: "cubic",
            duration: 1.5,
          },
          0.25
        )
        .from(
          cta,
          {
            y: "50%",
            opacity: 0,
            ease: "cubic",
            duration: 1.5,
          },
          0.5
        )
        .to(
          openLine,
          {
            scaleX: 0,
            ease: "cubic",
            stagger: 0.2,
          },
          0.4
        )
        .to(
          closeLine,
          {
            scaleX: 1,
            ease: "cubic",
            stagger: 0.2,
          },
          0.7
        );
    },
    closeMenu() {
      const menu = document.querySelector(".c-menu");
      const imageInner = menu.querySelector(".c-menu__images-inner");
      const openLine = document.querySelectorAll(".c-toggler__open-line");
      const closeLine = document.querySelectorAll(".c-toggler__close-line");
      const gsap = this.$gsap;
      const tl = gsap.timeline();

      gsap.set(closeLine[0], { rotation: 45 });
      gsap.set(closeLine[1], { rotation: -45 });

      tl.to(menu, {
        x: menu.clientWidth - imageInner.clientWidth,
        ease: "cubic",
        duration: 1.5,
      })
        .to(
          imageInner,
          {
            x: imageInner.clientWidth,
            ease: "cubic",
            duration: 1,
          },
          0.2
        )
        .to(
          closeLine,
          {
            scaleX: 0,
            ease: "cubic",
            stagger: 0.2,
          },
          0.2
        )
        .to(
          openLine,
          {
            scaleX: 1,
            ease: "cubic",
            stagger: 0.2,
          },
          0.5
        );
    },
  },

  computed: {},
};
</script>
