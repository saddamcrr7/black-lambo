<template>
  <div class="c-breadcumb">
    <div class="c-breadcumb__container">
      <NuxtLink to="/" class="c-breadcumb__cta">{{ `< Back` }}</NuxtLink>
      <div class="c-breadcumb__row">
        <div class="c-breadcumb__title">{{ title }}</div>
        <ul class="c-breadcumb__nav" v-show="navItems">
          <li
            class="c-breadcumb__nav-item"
            v-for="navItem in navItems"
            :data-to="navItem.to"
          >
            {{ navItem.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "breadcumb",

  props: {
    title: "",

    navItems: [
      
    ],
  },

  mounted() {},

  methods: {},

  computed: {},

  components: {},
};
</script>
