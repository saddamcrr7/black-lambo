<template>
    <div class="c-navbar">
        <NuxtLink to="/" class="c-navbar__brand">
            <Logo></Logo>
        </NuxtLink>
        <div class="c-navbar__toggler">
            <div class="c-navbar__toggler-open">
                <span class="c-navbar__toggler-open-line"></span>
                <span class="c-navbar__toggler-open-line"></span>
                <span class="c-navbar__toggler-open-line"></span>
            </div>
            <div class="c-navbar__toggler-close">
                <span class="c-navbar__toggler-close-line"></span>
                <span class="c-navbar__toggler-close-line"></span>
            </div>
        </div>
    </div>
</template>

<script>

import Logo from "~/assets/svgs/logo.svg?inline";

export default {
  name: "Navbar",

  mounted() {},

  methods: {},

  computed: {},

  components: {Logo},
};


</script>