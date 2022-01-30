<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banner"></home-swiper>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import {getHomeMultidata} from 'network/home'
import HomeSwiper from "./homechildcomponents/HomeSwiper"
export default {
  name: "Home",
  data () {
    return {
      banner: []
    }
  },
  components: {
    NavBar,
    HomeSwiper
  },
  created() {
    getHomeMultidata().then(res => {
      // console.log(res.data.banner.list);
      this.banner = res.data.banner.list
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
