<template>
  <div class="o-socials">
    <a href="#" class="o-socials__cta"> <InstaIcon /></a>
    <a href="#" class="o-socials__cta"><FbIcon /> </a>
    <a href="#" class="o-socials__cta"> <telIcon /></a>
  </div>
</template>
<script>
import InstaIcon from "~/assets/svgs/insta.svg?inline";
import FbIcon from "~/assets/svgs/fb.svg?inline";
import telIcon from "~/assets/svgs/tel.svg?inline";

export default {
  name: "Social",

  mounted() {},

  methods: {},

  computed: {},

  components: { InstaIcon, FbIcon, telIcon },
};
</script>
