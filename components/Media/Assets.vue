<template>
    <div class="o-assets">
        <div class="o-assets__container">
            <div class="o-assets__header">
                <h2 class="o-assets__title">Assets</h2>
                <div class="o-assets__sub">pictures, videos and documentation at your disposal</div>
            </div>

            <div class="o-assets__row">
                <div class="c-asset">
                    <div class="c-asset__image"></div>
                    <div class="c-asset__row">
                        <div class="c-asset__content">
                            <div class="c-asset__title">Project Logo</div>
                        </div>
                        <div class="c-asset__download"><ArrowIcondown/></div>
                    </div>
                </div>
                <div class="c-asset">
                    <div class="c-asset__image"></div>
                    <div class="c-asset__row">
                        <div class="c-asset__content">
                            <div class="c-asset__title">Machina exterior</div>
                            <div class="c-asset__sub">Inspired by</div>
                        </div>
                        <div class="c-asset__download"><ArrowIcondown/></div>
                    </div>
                </div>
                <div class="c-asset">
                    <div class="c-asset__image"></div>
                    <div class="c-asset__row">
                        <div class="c-asset__content">
                            <div class="c-asset__title">Project Logo</div>
                        </div>
                        <div class="c-asset__download"><ArrowIcondown/></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ArrowIcondown from "~/assets/svgs/arrow-down.svg?inline";

export default {
  components: { ArrowIcondown },
}
</script>