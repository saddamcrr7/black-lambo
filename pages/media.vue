<template>
  <div>
    <Breadcumb title="Media room" :navItems="breadcumbNavsItem" />
    <MediaInformations />
    <MediaAssets />
    <Future />
    <MediaContact />
    <AppFooter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcumbNavsItem: [
        {
          title: "Press release",
          to: "Press",
        },
        {
          title: "Assets",
          to: "Assets",
        },
        {
          title: "Contact",
          to: "Contact",
        },
      ],
    };
  },
};
</script>
