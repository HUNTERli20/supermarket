<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banner"></home-swiper>
    <recommend-view :recommends="recommend"></recommend-view>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import {getHomeMultidata} from 'network/home'
import HomeSwiper from "./homechildcomponents/HomeSwiper"
import RecommendView from "./homechildcomponents/RecommendView"
export default {
  name: "Home",
  data () {
    return {
      banner: [],
      recommend: []
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  created() {
    getHomeMultidata().then(res => {
      // console.log(res.data.banner.list);
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    })
  }
}; 
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
