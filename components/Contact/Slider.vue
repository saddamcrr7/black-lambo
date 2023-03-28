<template>
  <div class="o-contact-slider">
    <div class="o-contact-slider__container">
      <div class="c-title-slider">
        <div class="c-title-slider__wrapper">
          <div class="c-title-slider__text">
            France France France France France
          </div>
          <div class="c-title-slider__text">
            Germany Germany Germany Germany Germany
          </div>
          <div class="c-title-slider__text">
            United states United states United states United states
          </div>
        </div>
      </div>
      <div class="o-contact-slider__arrows">
        <div class="o-contact-slider__arrow"><ArrowIconLeft/></div>
        <div class="o-contact-slider__arrow"><ArrowIconRight/></div>
      </div>

      <div class="c-address-slider">
        <div class="c-address-slider__wrapper">
            <div class="c-address-slider__item">
                <div class="c-address">
                    <div class="c-address__title">Test center</div>
                    <div class="c-address__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                </div>
                <div class="c-address">
                    <div class="c-address__title">Test center</div>
                    <div class="c-address__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                </div>
            </div>
            <div class="c-address-slider__item">
                <div class="c-address">
                    <div class="c-address__title">Test center</div>
                    <div class="c-address__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                </div>
            </div>
            <div class="c-address-slider__item">
                <div class="c-address">
                    <div class="c-address__title">Test center</div>
                    <div class="c-address__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowIconRight from "~/assets/svgs/arrow-right.svg?inline";
import ArrowIconLeft from "~/assets/svgs/arrow-left.svg?inline";

export default {
  components: { ArrowIconRight, ArrowIconLeft },
}
</script>