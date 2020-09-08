<template>
  <div class="tab_control">
    <div v-for="(item,index) in titles"
         :class="{active:index===currentIndex}"
          @click="changeIndex(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data(){
    return {
      currentIndex:0
    }
  },
  methods:{
    changeIndex(index){
      this.currentIndex = index;
    }
  }
}
</script>

<style scoped>
@import "~assets/css/base.css";
.tab_control{
  display: flex;
  text-align: center;
  font-size: 16px;
  height: 50px;
  line-height: 50px;
}
.tab_control div{
  flex: 1;
}
.tab_control div span{
  padding: 8px;
}
.active{
  color: var(--color-high-text);
}
.active span{
  border-bottom: 2px solid var(--color-high-text);
}
</style>
