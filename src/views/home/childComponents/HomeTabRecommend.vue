<template>
  <div>
    <tab-control :titles="['流行','新款','精选']"></tab-control>
  </div>
</template>

<script>
import TabControl from "@/components/common/tabControl/TabControl";
export default {
  name: "HomeTabController",
  components:{
    TabControl
  }

}
</script>

<style scoped>

</style>
