<template>
  <div>
    <Breadcumb title="Careers" :navItems="breadcumbNavsItem"/>
    <CareersTalent />
    <CareersInsideProject />
    <Future />
    <AppFooter />
  </div>
</template>

<script>
export default {
    data() {
        return {
            breadcumbNavsItem: [
                {
                    title: 'A pool of talent',
                    to: 'talent'
                },
                {
                    title: 'Inside project',
                    to: 'project'
                },
                
            ]
        }
    }
}
</script>