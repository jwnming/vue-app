<template>
    <div class="playCtrl">
        <div class="left">
            <!-- <img src="playList[currentPlay].al.picUrl" alt=""> -->
            <img :src="playList[currentPlay].al.picUrl" alt="" />
            <div class="content">
                <div class="title">{{ playList[currentPlay].al.name }}</div>
                <div class="tips">横滑切换上下手歌</div>
            </div>

        </div>
        <div class="right">
            <i v-if="paused" class="iconfont icon-bofang1" @click="play"></i> <!-- 播放 -->
            <i v-else class="iconfont icon-zanting" @click="play"></i>  <!-- 暂停 -->
            <i class="iconfont icon-gedan"></i>
        </div>
        <!-- <audio controls="controls" src="https://music.163.com/song/media/outer/url?id=124883596.mp3"></audio> -->
        <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playList[currentPlay].al.id}.mp3`"></audio>
        <!-- <audio controls src="/musicfromwyy/song/media/outer/url?id=124883596.mp3"></audio> -->

    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
    name: "PlayMusic",
    data() {
        return {
            paused: true, // 默认暂停
        }
    },
    setup() {
        // playList[currentPlay].al.picUrl
        // {{ playList[currentPlay].al.name }} 
    },
    computed: {
        // 引入state
        ...mapState(['playList', 'currentPlay'])
    },
    mounted() {
        // console.log(this.$refs.audio);
    },
    methods: {
        play: function() {
            if (this.$refs.audio.paused) {
                this.$refs.audio.play();
                this.paused = false;
            } else {
                this.$refs.audio.pause();
                this.paused = true;
            }
            // console.log([this.$refs.audio]);
            
        }
    }
}
</script>

<style lang="less">
.playCtrl {
    background: #FFF;
    height: 1.2rem;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: solid 1px black;;
    .left {
        display: flex;
        img {
            height: 0.8rem;
            width: 0.8rem;
            border-radius: 0.4rem;
        }
        .content {
            padding: 0rem 0.2rem;
        }
        .tips {
            font-size: 0.25rem;
            color: #999;
        }
    }
    .right {
        .iconfont {
            padding: 0rem 0.2rem;
            font-size: 0.6rem;
        }
    }
    
}

</style>