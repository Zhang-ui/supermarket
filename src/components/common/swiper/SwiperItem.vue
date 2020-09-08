<template>
  <swiper-slide>
    <slot></slot>
  </swiper-slide>
</template>

<script>
import {SwiperSlide} from 'vue-awesome-swiper';
export default {
  name: "SwiperItem",
  components: {
    SwiperSlide
  }
}
</script>

<style scoped>
@import "~assets/css/base.css";
</style>
