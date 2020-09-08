<template>
    <recommend>
      <div v-for="(item,index) in recommends">
        <a :href="item.href">
          <img :src="item.img" :alt="'推荐'+(index+1)">
          <p>{{item.text}}</p>
        </a>
      </div>
    </recommend>
</template>
<script>
import Recommend from "@/components/common/recommend/Recommend";
export default {
  name: "HomeRecommend",
  props:{
    recommends:{
      type:Array,
      default(){
        return [];
      }
    }
  },
  components:{
    Recommend
  }
}
</script>

<style scoped>

</style>
