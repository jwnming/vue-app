<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </div>
  <router-view/>

  <PlayCtrl></PlayCtrl>
  
</template>
<script>
import PlayCtrl from '@/components/PlayCtrl';


export default {
  setup() {
    
  },
  components: {
    PlayCtrl,
  }
}
</script>


<style lang="less" scoped>
* {
  margin: 0rem;
  padding: 0rem;
  box-sizing: border-box;
  font-family: '微软雅黑';
}
.icon {
  width: 0.5rem;
  height: 0.5rem;
}

</style>
