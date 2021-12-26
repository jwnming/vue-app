<template>

  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, index) in swiperImg" :key="index">
        <img :src="item.pic" alt="">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->

    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
// import "swiper/css/swiper.css";
import {getBanner} from '@/api/api';

export default {
  data() {
    return {
      // 轮播图默认图片
      swiperImg: [
        {pic: require('../../assets/swiper/swiper1.jpg')},
        {pic: require('../../assets/swiper/swiper2.jpg')},
        {pic: require('../../assets/swiper/swiper3.jpg')}
      ],
    };
  },
  components: {},
  // async 异步
  async mounted() {
    var mySwiper = new Swiper(".swiper", {
      // direction: "vertical", // 垂直切换选项
      loop: true, // 循环模式选项
      clickable: true, // 点击
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },
      // 如果需要前进后退按钮
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
      // 如果需要滚动条
      // scrollbar: {
      //   el: ".swiper-scrollbar",
      // },
    });

    // 请求网易云轮播图, 需要启动NeteaseCloudMusicApi, await等待
    let banner = await getBanner(1);
    this.swiperImg = banner.data.banners; // 修改当前轮播图数组
  },
};
</script>
<style lang="less" scoped>
.swiper {
  width: 7.1rem;
  height: 2.6rem;
  border-radius: 0.1rem;
}
.swiper-slide img{
  width: 100%;

}
</style>