<template>
    <div>
        <Breadcumb title="Contact"/>
        <ContactSlider/>
        <ContactMailsSections/>
        <AppFooter/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            breadcumbNavsItem: [
                {
                    title: 'A pool of talent',
                    to: ''
                },
                {
                    title: 'Inside project',
                    to: ''
                },
                
            ]
        }
    }
}
</script>