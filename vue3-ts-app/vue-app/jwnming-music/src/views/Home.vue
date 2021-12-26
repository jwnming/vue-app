<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->

    <!-- 自定义导航 -->
    <TopNav></TopNav>

    <!-- Swiper轮播图 -->
    <MySwiper></MySwiper>

    <!-- 按钮列表 -->
    <ButtonList></ButtonList>

    <!-- 发现歌单 -->
    <MusicList></MusicList>
    
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
// import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import TopNav from "../components/topnav/TopNav.vue";
import MySwiper from "../components/swiper/MySwiper.vue";
import ButtonList from "../components/buttonlist/ButtonList.vue";
import MusicList from "../components/musiclist/MusicList.vue";

@Options({
  data() {
    return {};
  },
  components: {
    TopNav, MySwiper, ButtonList, MusicList,
  },
})
export default class Home extends Vue {}
</script>

<style lang="less" scoped>
.home {
  margin: auto; // 遂平居中
  //width: 7.5rem;
}
</style>
