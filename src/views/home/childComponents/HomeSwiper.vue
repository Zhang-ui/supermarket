<template>
  <div class="swiper_div">
    <my-swiper>
      <swiper-item v-for="(item,index) in banner">
        <a :href="item.href">
          <img :src="item.img" :alt="'banner'+(index+1)"/>
        </a>
      </swiper-item>
    </my-swiper>
  </div>
</template>

<script>
import {MySwiper,SwiperItem} from '@/components/common/swiper'

export default {
  name: "HomeSwiper",
  props:{
    banner:{
      type:Array,
      default(){
        return [];
      }
    }
  },
  components:{
    MySwiper,
    SwiperItem
  }

}
</script>

<style scoped>
.swiper_div{
  margin-top: 44px;
}
img{
  width: 100%;
  height:200px;
}
</style>
