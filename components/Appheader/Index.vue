<template>
  <div class="o-header">
    <div class="o-header__container">
      <NuxtLink to="/" class="o-header__brand">
        <Logo></Logo>
      </NuxtLink>
      <Socials  v-if="isIndex"/>
    </div>
  </div>
</template>

<script>
import Logo from "~/assets/svgs/logo.svg?inline";

export default {
  name: "AppHeader",

  data() {
    return {
      isIndex : ''
    }
  },

  watch: {
    $route(to, from) {
      if (to.name == "index") {
        this.isIndex = true
      }else {
        this.isIndex = false
      }
    },
  },

  mounted() {
   
  },

  methods: {},

  computed: {},

  components: { Logo },
};
</script>
