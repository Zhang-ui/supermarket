<template>
  <div class="nav_bar" :style="navBarStyle">
    <div class="nav_left">
      <slot name="navLeft"></slot>
    </div>
    <div class="nav_center">
      <slot name="navCenter"></slot>
    </div>
    <div class="nav_right">
      <slot name="navRight"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NarBar",
  props:{
    bgColor:{
      type:String,
      default:'#ff8198'
    }
  },
  computed:{
    navBarStyle(){
      return {'background-color':this.bgColor}
    }
  }
}
</script>

<style scoped>
.nav_bar{
  display: flex;
  line-height: 44px;
  text-align: center;
}
.nav_left,.nav_right{
  width: 60px;
}
.nav_center{
  flex: 1;
}

</style>
