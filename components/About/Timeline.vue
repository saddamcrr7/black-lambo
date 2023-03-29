<template>
    <div class="o-timeline">
        <div class="o-timeline__container">
            <h3 class="o-timeline__title">Timeline</h3>
            <div class="o-timeline__slider" ref="timelineSlider">
                <div class="o-timeline__slider-overlay" ref="timelineOverlay"></div>
                <div class="o-timeline__slider-wrapper" ref="timelineSliderWrapper">
                    <div class="o-timeline__item">
                        <div class="o-timeline__date">2020</div>
                        <div class="o-timeline__events">
                            <div class="o-timeline__event">
                                <div class="o-timeline__event-date">Sept. 10, 2020</div>
                                <div class="o-timeline__event-text">Projects official launch</div>
                            </div>
                            <div class="o-timeline__event">
                                <div class="o-timeline__event-date">dec. 20, 2020</div>
                                <div class="o-timeline__event-text">Listing on somewhere</div>
                            </div>
                        </div>
                    </div>
                    <div class="o-timeline__item">
                        <div class="o-timeline__date">2021</div>
                        <div class="o-timeline__events">
                            <div class="o-timeline__event">
                                <div class="o-timeline__event-date">Sept. 10, 2020</div>
                                <div class="o-timeline__event-text">Projects official launch</div>
                            </div>
                            <div class="o-timeline__event">
                                <div class="o-timeline__event-date">dec. 20, 2020</div>
                                <div class="o-timeline__event-text">Listing on somewhere</div>
                            </div>
                            <div class="o-timeline__event">
                                <div class="o-timeline__event-date">Sept. 10, 2020</div>
                                <div class="o-timeline__event-text">Projects official launch</div>
                            </div>
                            <div class="o-timeline__event">
                                <div class="o-timeline__event-date">dec. 20, 2020</div>
                                <div class="o-timeline__event-text">Listing on somewhere</div>
                            </div>
                            <div class="o-timeline__event">
                                <div class="o-timeline__event-date">Sept. 10, 2020</div>
                                <div class="o-timeline__event-text">Projects official launch</div>
                            </div>
                            <div class="o-timeline__event">
                                <div class="o-timeline__event-date">dec. 20, 2020</div>
                                <div class="o-timeline__event-text">Listing on somewhere</div>
                            </div>
                        </div>
                    </div>
                    <div class="o-timeline__item">
                        <div class="o-timeline__date" ref="timelineDate">2022</div>
                        <div class="o-timeline__events">
                            <div class="o-timeline__event">
                                <div class="o-timeline__event-date">Sept. 10, 2020</div>
                                <div class="o-timeline__event-text">Projects official launch</div>
                            </div>
                            <div class="o-timeline__event">
                                <div class="o-timeline__event-date">dec. 20, 2020</div>
                                <div class="o-timeline__event-text">Listing on somewhere</div>
                            </div>
                            <div class="o-timeline__event">
                                <div class="o-timeline__event-date">Sept. 10, 2020</div>
                                <div class="o-timeline__event-text">Projects official launch</div>
                            </div>
                            <div class="o-timeline__event">
                                <div class="o-timeline__event-date">dec. 20, 2020</div>
                                <div class="o-timeline__event-text">Listing on somewhere</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="o-timeline__slider-arrows" ref="sliderArrows">
                    <div class="o-timeline__slider-arrow"><ArrowIconLeft/></div>
                    <div class="o-timeline__slider-arrow"><ArrowIconRight/></div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import ArrowIconRight from "~/assets/svgs/arrow-right.svg?inline";
import ArrowIconLeft from "~/assets/svgs/arrow-left.svg?inline";

export default {
  name: "AboutTimeline",

  mounted() {
    const gsap = this.$gsap

    const rect = this.$refs.timelineSlider.getBoundingClientRect()

    gsap.set(this.$refs.timelineOverlay, {
        width: innerWidth - rect.left,
        height: this.$refs.timelineDate.clientHeight
    })
    gsap.set(this.$refs.sliderArrows, {
        top: this.$refs.timelineDate.clientHeight
    })
  },

  methods: {},

  computed: {},

  components: { ArrowIconRight, ArrowIconLeft },
};
</script>