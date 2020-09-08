<template>
  <nar-bar bg-color="#ff8198">
    <div class="nav_bar_center" slot="navCenter">购物街</div>
  </nar-bar>
</template>

<script>
import NarBar from "@/components/common/navBar/NavBar";
export default {
 name: "HomeNavBar",
 components:{
   NarBar
 }
}
</script>

<style scoped>
@import "~assets/css/base.css";
.nav_bar_center{
  font-family: 微软雅黑;
  font-size: var(--font-size);
  font-weight: bolder;
  color: white;
}
.nav_bar{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;
}
</style>
