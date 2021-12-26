<template>
  <div class="buttonlist">
    <!-- (.buttonitem>(img+span))*4 -->
    <div class="buttonitem">
      <img class="iconfont icon-tuijian" /><span>每日推荐</span>
    </div>
    <div class="buttonitem">
      <i class="iconfont icon-gedan"></i><span>歌单</span>
    </div>
    <div class="buttonitem">
      <img class="iconfont icon-paihangbang" /><span>排行榜</span>
    </div>
    <div class="buttonitem">
      <img class="iconfont icon-tuijian2" /><span>定制</span>
    </div>
    <div class="buttonitem">
      <img class="iconfont icon-zhidetuijian" /><span>JWnMing</span>
    </div>
  </div>
</template>
<script>
</script>
<style lang="less" scoped>
.buttonlist {
  width: 7.1rem;
  margin: 0 auto; // 碎屏居中
  display: flex; // 水平行级元素
  justify-content: space-between; // 左右平均分布
  padding: 0.2rem 0.2rem 0.1rem 0.1rem;
  .buttonitem {
    display: flex;
    flex-direction: column; // 方向
    align-items: center;
    .iconfont {
      font-size: 0.8rem;
      font-style: normal;
    }
  }
}
</style>