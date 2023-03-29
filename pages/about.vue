<template>
  <div class="p-about">
    <Breadcumb title="About" :navItems="breadcumbNavsItem" />
    <AboutHero />
    <AboutContent />
    <AboutTimeline/>
    <AboutFeatured/>
    <AboutPartners/>
    <AppFooter/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcumbNavsItem: [
        {
          title: "The Projects Vision",
          to: "vision",
        },
        {
          title: "Timeline",
          to: "timeline",
        },
        {
          title: "Featured in",
          to: "featured",
        },
        {
          title: "Partners",
          to: "partners",
        },
      ],
    };
  },
};
</script>
