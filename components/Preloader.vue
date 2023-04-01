<template>
  <div class="c-preloader" ref="preloader"></div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener("load", () => {
        console.log('e');
      setTimeout(() => {
        this.$gsap.to(this.$refs.preloader, { autoAlpha: 0 });
      }, 1000);
    });
  },
};
</script>
