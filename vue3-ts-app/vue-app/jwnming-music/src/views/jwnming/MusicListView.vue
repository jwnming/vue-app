<template>
  <div class="musicListView">
    <!-- 头部 -->
    <MusicListViewTop :playlist="stateList.playlist"></MusicListViewTop>

    <!-- 播放列表 -->
    <MusicPlayList :playlist="stateList.playlist"></MusicPlayList>
  </div>
</template>

<script>
import { getMusicListDetail } from "@/api/api.js";
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";

import MusicListViewTop from "../../components/musiclist/MusicListViewTop.vue";
import MusicPlayList from "../../components/musiclist/MusicPlayList.vue";

export default {
  setup() {
    let route = useRoute();
    // store响应式
    let stateList = reactive({
      info: {},
      playlist: {
        creator: {}, // 防止空
        tracks: [], // 防止空异常
      },
    });

    onMounted(async () => {
      let id = route.query.id; // 获取路由请求id
      let result = await getMusicListDetail(id);
      stateList.playlist = result.data.playlist;
      // console.log(stateList.playlist.tracks);
      // this.$store.commit('setPlayList', stateList.playlist.tracks)
    });

    return { stateList };
  },
  async mounted() {
    let route = useRoute();
    let id = route.query.id; // 获取路由请求id
    let result = await getMusicListDetail(id);
    // console.log(result.data.playlist.tracks);
    this.$store.commit("setPlayList", result.data.playlist.tracks);
  },
  components: {
    MusicListViewTop,
    MusicPlayList,
  },
};
</script>
