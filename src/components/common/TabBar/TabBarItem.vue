<template>
  <div class="tab-bar-item" @click="clickItem">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="colorStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    activeColor:{
      type:String,
      default:'red'
    },
    path:{
      type:String,
      default:'/home'
    }
  },
  computed:{
    colorStyle(){
      return this.isActive?{color:this.activeColor}:{}
    },
    isActive:{
      get(){
        return  this.isActive = this.$route.path.indexOf(this.path)!==-1;
      },
      set(){}
    }
  },
  methods:{
    clickItem(){
      this.$router.replace(this.path);
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
  flex:1;
  text-align: center;
  vertical-align: middle;
  margin-top: 5px;
  font-size: small;
}
.tab-bar-item img{
  width: 20px;
  height:20px;
}

</style>
