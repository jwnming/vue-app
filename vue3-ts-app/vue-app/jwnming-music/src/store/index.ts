import { createStore } from 'vuex';

const store = createStore({
  state: {
    playList: [ // 播放列表
      {
        al: {
          id: '124883596',
          name: "我们终究也成路人了",
          pic: '109951165825247570',
          picUrl: "http://p4.music.126.net/3pMFi5lxEEtO9xvax0jWUA==/109951165825247572.jpg"
        },
      },
    ],
    currentPlay: 0, // 当前播放，索引值

  },
  mutations: {
    // 设置播放列表
    setPlayList: function(state, val) {
      state.playList = val;
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store;