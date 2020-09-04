<template>
  <tab-bar>
       <tab-bar-item path="/home">
         <img slot="item-icon" src="~assets/img/home.svg" alt="home">
         <img slot="item-icon-active" src="~assets/img/home-active.svg" alt="home-active">
         <div slot="item-text">首页</div>
       </tab-bar-item>
    <tab-bar-item path="/classify">
      <img slot="item-icon" src="~assets/img/classify.svg" alt="classify">
      <img slot="item-icon-active" src="~assets/img/classify-active.svg" alt="classify-active">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shop">
      <img slot="item-icon" src="~assets/img/shop.svg" alt="shop">
      <img slot="item-icon-active" src="~assets/img/shop-active.svg" alt="shop-active">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/profile.svg" alt="home">
      <img slot="item-icon-active" src="~assets/img/profile-active.svg" alt="home-active">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/TabBar/TabBar";
import TabBarItem from "components/common/TabBar/TabBarItem";
export default {
  name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
