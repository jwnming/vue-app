import axios from 'axios';

// 需要启动NeteaseCloudMusicApi工程或远程镜像
// const BASE_URL = 'http://localhost:3001'
const BASE_URL = 'http://110.42.153.79:3001'

// 获取网易云轮播图接口，type=1(android),2(iphone),3(ipad)
export async function getBanner(type = 1) {
     // 请求网易云轮播图, 需要启动NeteaseCloudMusicApi, await等待
    let banner = await axios.get(`http://110.42.153.79:3001/banner?type=${type}`); // await 使用需要将方法修饰为async
    return banner;
}

// 推荐歌单
export async function getMusicList(count = 10) {
   let musicList = await axios.get(BASE_URL + '/personalized?limit=' + count); // await 使用需要将方法修饰为async
   return musicList;
}

// 获取歌单详情
export async function getMusicListDetail(id) {
    let musicListDetail = await axios.get(BASE_URL + '/playlist/detail?id=' + id); // await 使用需要将方法修饰为async
    return musicListDetail;
 }
 