<template>
  <div class="recommend">
      <slot></slot>
  </div>
</template>

<script>

export default {
name: "Recommend"
}
</script>

<style scoped>
.recommend{
  display: flex;
  width: 100%;
  text-align: center;
  padding:10px 0 20px;
  border-bottom: 10px solid #eee;
}
.recommend div{
  flex: 1;
}
.recommend img{
  width: 60px;
  height:60px;
  border-radius: 60px;
  margin-bottom: 10px;
}
</style>
