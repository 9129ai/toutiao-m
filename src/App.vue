<template>
  <div id="app">
    头条，黑马
    <i class="toutiao toutiao-shouye"></i>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <div style="font-size:32px">字体</div>
    <div class="font-32">字体</div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      name: 'vvv'
    }
  }
}
</script>
<style lang="less" scoped>
.font-32{
  font-size:33px
}
</style>
