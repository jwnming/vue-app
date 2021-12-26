<template>
  <div class="musiclist">
    <div class="top">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="list">
      <!-- Swiper -->
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <!-- 方式二 <div
            class="swiper-slide"
            v-for="(item, index) in musicList"
            :key="index"
          > -->
          <router-link :to="{path: '/musicList', query: {id: item.id}}" class="swiper-slide"
            v-for="(item, index) in stateList.musicList" :key="index">
            <img class="img" :src="item.picUrl" alt="item.name" />
            <div class="name">{{ item.name }}</div>
            <div class="playCount">
              <i class="iconfont icon-24gl-playSquare"></i>{{ changeCount(item.playCount) }}
            </div>
          </router-link>
          <!-- <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import { getMusicList } from "@/api/api.js";
import { reactive, onMounted, onUpdated } from "vue";

/* 实现方式1 */
export default {
  setup() {
    function changeCount(count) {
      let res;
      if (count > 100000000) {
        res = count / 100000000;
        res = res.toFixed(2) + "亿";
      }
      if (count > 10000) {
        res = count / 10000;
        res = res.toFixed(2) + "万";
      }
      return res;
    }

    // store响应式
    let stateList = reactive({musicList: []});

    onMounted(async () => {
      let list = await getMusicList(10);
      stateList.musicList = list.data.result;
    });
    onUpdated(() => {
      // 等数据请求到后再处理轮播图
      var swiper = new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 3.1,
        spaceBetween: 5,
      });
    });
    return {stateList, changeCount};
  },
};

/* 实现方式2
export default {
  data() {
    return {
      musicList: [],
    };
  },
  async mounted() {
    // 获取歌单
    let list = await getMusicList(10);
    this.musicList = list.data.result;
  },
  updated() {
    // 等数据请求到后再处理轮播图
    var swiper = new Swiper(".mySwiper", {
      loop: true,
      slidesPerView: 3.1,
      spaceBetween: 5,
    });
  },
  methods: {
    changeCount: function (count) {
      let res;
      if (count > 100000000) {
        res = count / 100000000;
        res = res.toFixed(2) + "亿";
      }
      if (count > 10000) {
        res = count / 10000;
        res = res.toFixed(2) + "万";
      }
      return res;
    },
  },
};
*/
</script>

<style lang="less" scoped>
.musiclist {
  margin: 0 auto;
  padding: 0 0.1rem;
  .top {
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: 0.3rem;
      font-weight: 900;
    }
    .more {
      border: 1px solid black;
      padding: 0.01rem 0.2rem;
      border-radius: 0.2rem;
      font-size: 0.24rem;
    }
  }
  .list {
    .swiper {
      width: 100%;
      .swiper-wrapper {
        width: 4rem;
        // height: 4rem;
        .swiper-slide {
          background-color: white;
          display: flex;
          flex-direction: column; // 垂直
          position: relative;
          .img {
            width: 100%;
            height: auto;
            border-radius: 0.1rem;
          }
          .name {
            height: 0.6rem;
            width: 100%;
            font-size: 0.24rem;
            line-height: 0.3rem; // 行间距
          }
          .playCount {
            position: absolute; //定位
            right: 0.1rem;
            top: 0.1rem;
            font-size: 0.1rem;
            color: whitesmoke;
            display: flex;
            align-items: center;
            .iconfont {
              font-size: 0.1rem;
              font-style: normal;
              fill: white;
              margin-right: 0.04rem;
            }
          }
        }
      }
    }
  }
}
a {
  color: black;
  text-decoration: none;
}
</style>