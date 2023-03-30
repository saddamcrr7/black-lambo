<template>
  <div>
    <Appheader />
    <AppheaderMenu />
    <AppheaderMenuToggler />
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
        document.body.classList.add("home");
      } else {
        document.body.classList.remove("home");
      }
    },
  },

  mounted() {},
};
</script>
