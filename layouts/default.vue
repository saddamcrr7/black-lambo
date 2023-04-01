<template>
  <div>
    <Appheader />
    <AppheaderMenu />
    <AppheaderMenuToggler />
    <Preloader />
    <Nuxt />
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  watch: {
    $route(to, from) {
      console.log(to);
      if (to.name == "index") {
        document.querySelector("html").classList.add("home");
        document.querySelector("body").classList.add("home");
      } else {
        document.querySelector("html").classList.remove("home");
        document.querySelector("body").classList.remove("home");
      }
    },
  },

  mounted() {},
};
</script>
