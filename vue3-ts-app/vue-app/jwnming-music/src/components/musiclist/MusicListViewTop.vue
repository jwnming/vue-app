<template>
  <div class="musiclistViewTop">
    <img class="bg" :src="playlist.coverImgUrl" />
    <!-- 导航按钮 -->
    <div class="nav">
      <div class="back" @click="$router.go(-1)"> <!-- 返回上一页 -->
        <i class="iconfont icon-zuojiantou"></i>
        <div class="iconTitle">歌单</div>
      </div>
      <div class="right">
        <i class="iconfont icon-sousuo"></i>
        <i class="iconfont icon-31liebiao"></i>
      </div>
    </div>

    <!-- 歌单详情 -->
    <div class="info">
      <div class="info-left">
        <img class="infoImg" :src="playlist.coverImgUrl" />
        <div class="playCount">
          <i class="iconfont icon-24gl-playSquare"></i
          >{{ changeCount(playlist.playCount) }}
        </div>
      </div>

      <div class="info-right">
        <div class="name">{{ playlist.name }}</div>
        <div class="author">
          <img
            :src="playlist.creator.avatarUrl"
            class="header"
          />&nbsp;&nbsp;@<span>{{ playlist.creator.nickname }}</span>
        </div>
        <div class="description">
          {{ playlist.description }}
        </div>
      </div>
    </div>

    <!-- 歌单按钮 -->
    <div class="tools">
      <div class="toolItem">
        <i class="iconfont icon-31pinglun"></i><span>{{ playlist.commentCount }}</span>
      </div>
      <div class="toolItem">
        <i class="iconfont icon-fenxiang"></i
        ><span>{{ playlist.shareCount }}</span>
      </div>
      <div class="toolItem">
        <i class="iconfont icon-xiazai"></i><span>下载</span>
      </div>
      <div class="toolItem">
        <i class="iconfont icon-duoxuan"></i><span>多选</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["playlist"],
  mounted() {},
  methods: {
    changeCount(value) {
      let count = value;
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
</script>

<style lang="less" scoped>
.musiclistViewTop {
  height: 5.5rem;
  .bg {
    position: fixed;
    left: 0;
    top: 0;
    width: 7.5rem;
    height: auto;
    z-index: -1;
    filter: blur(50px);
    background: grey;
    // filter: opacity(10%);
    // filter: grayscale(100%);;
  }
  .nav {
    display: flex;
    justify-content: space-between;
    height: 0.8rem;
    .back,
    .right {
      display: flex;
      margin: 0.2rem;
    }
    .iconTitle {
      margin-left: 0.3rem;
      font-size: 0.34rem;
      color: rgb(255, 255, 255);
    }
    .iconfont {
      font-size: 0.5rem;
      color: rgb(255, 255, 255);
    }
    i {
      margin-left: 0.3rem;
    }
  }
  .info {
    margin: 0.4rem 0.3rem;
    display: flex;
    justify-content: space-between;
    .info-left {
      position: relative;
      .infoImg {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 0.1rem;
      }
      .playCount {
        position: absolute; //定位
        right: 0.1rem;
        top: 0.1rem;
        font-size: 0.1rem;
        color: black;
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
    .info-right {
      width: 3.8rem;
      .name {
        font-size: 0.4rem;
        font-weight: 900;
        margin-bottom: 0.2rem;
        // 设置超过两行显示“...”
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .author {
        display: flex;
        align-items: center;
        margin-bottom: 0.2rem;
        .header {
          width: 0.4rem;
          border-radius: 0.3rem;
        }
      }
      .description {
        font-size: 0.2rem;
        color: rgb(90, 53, 53);
        // 设置超过两行显示“...”
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
  .tools {
    display: flex;
    justify-content: space-around;
    position: relative;
    .toolItem {
      font-size: 0.2rem;
      align-items: center;
      // color: black;
      display: flex;
      flex-direction: column; // 列展示
      color: white;
      .iconfont {
        font-size: 0.6rem;
        font-style: normal;
        fill: white;
        margin-right: 0.04rem;
        margin-bottom: 0.1rem;
      }
    }
  }
}
</style>