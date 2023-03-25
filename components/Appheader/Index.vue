<template>
  <div class="o-header">
    <div class="o-header__container">
      <NuxtLink to="/" class="o-header__brand">
        <Logo></Logo>
      </NuxtLink>
      <Socials />
    </div>
  </div>
</template>

<script>
import Logo from "~/assets/svgs/logo.svg?inline";

export default {
  name: "AppHeader",

  mounted() {},

  methods: {},

  computed: {},

  components: { Logo },
};
</script>
