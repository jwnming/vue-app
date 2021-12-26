<template>
  <div class="musicPlayList">
    <div class="nav">
      <div class="left">
        <i class="iconfont icon-bofangqi-bofangshu"></i>
        <div class="txt">
          <div class="title">播放量</div>
          <div class="num">(共{{ playlist.tracks.length }}首)</div>
        </div>
      </div>
      <div class="right">
        + 收藏({{ playlist.subscribedCount }})
      </div>
    </div>
    <!-- 列表 -->
    <div class="list">
      <div class="playItem" v-for="(item, index) in playlist.tracks" :key="index">
        <div class="left">
          <div class="index">{{ index + 1 }}</div>
          <div class="content">
            <div class="name">{{ item.name }}</div>
            <div class="author">
              <span class="tag" v-for="(tag, i) in playlist.tags" :key="i">{{ tag }}</span>
              {{ item.al.name }}</div>
          </div>
        </div>
        <div class="right">
          <i class="iconfont icon-bofang1"></i>
          <i class="iconfont icon-gengduo"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["playlist"],
  mounted() {},
  methods: {
   
  },
};
</script>

<style lang="less" scoped>
.musicPlayList {
  background: white;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  padding: 0.2rem 0.3rem;
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.6rem;
    .left {
      display: flex;
      align-items: center;
      .iconfont {
        width: 0.4rem;
      }
      .txt {
        display: flex;
        align-items: center;
        .title {
          font-size: 0.3rem;
          font-weight: 900;
        }
        .num {
          font-size: 0.1rem;
          color: rgb(23, 24, 24);
        }
      }
      
    }
    .right {
      width: 2rem;
      font-size: 0.2rem;
      color: white;
      background: rgb(255, 81, 0);
      height: 0.6rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.5rem;
    }
  }
  .list {
    .playItem {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0.1rem 0;
      .left {
        display: flex;
        justify-content: center;
        align-items: center;
        .index {
          color: rgb(104, 103, 103);
          font-size: 0.3rem;
          width: 0.6rem;
          font-weight: 900;
        }
        .content {
          //display: flex;
          .name {
            font-size: 0.3rem;
          }
          .author {
            font-size: 0.07rem;
            margin-top: 0.05rem;
            .tag {
              font-size: 0.05rem;
              color: orangered;
              border: 1px solid red;
              border-radius: 0.05rem;
              margin-right: 0.08rem;
            }
          }
        }
      }
      .right {
        .iconfont {
          font-size: 0.4rem;
          margin: 0rem 0.1rem;
        }
      }
    }
  }
}

</style>