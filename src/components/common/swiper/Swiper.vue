<template>
  <swiper ref="mySwiper" class="swiper" :options="swiperOption">
    <slot></slot>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import {Swiper} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css';
export default {
  name: 'MySwiper',
  title: 'Pagination',
  components: {
    Swiper,
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        //some swiper option/callback..
        width: window.innerWidth,
        height:200,
        effect:'coverflow',
        loop:true,
        autoplay:{
          delay:2000,
          stopOnLastSlide:false,
          disableOnInteraction:true,
          waitForTransition: false
        }
      }
    }
  },
  computed:{
    swiper(){
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    // console.log('Current swiper instance object', this.swiper);
    this.isLoop();
  },
  methods:{
    isLoop(){
      if(this.swiper.slides.length<=3){
       this.swiper.destroy();
      }
    }
  }
}
</script>

<style scoped>

</style>
