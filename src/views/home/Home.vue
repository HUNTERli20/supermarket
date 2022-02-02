<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banner"></home-swiper>
    <recommend-view :recommends="recommend"></recommend-view>
    <home-feature />
    <tabbar-control
      class="tabbar-control"
      :titles="['流行', '新款', '精选']"
    ></tabbar-control>
    <good-list
    :goods="homeData['pop'].list"></good-list>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
    </ul>
  </div>
</template>

<script>
// 公共组件
import NavBar from "components/common/navbar/NavBar";
import TabbarControl from "components/content/tabbarcontrol/TabbarControl";
import GoodList from "components/content/goodlist/GoodList"
// 网络请求组件
import { getHomeMultidata, getHomeData } from "network/home";
// Home子组件
import HomeSwiper from "./homechildcomponents/HomeSwiper";
import RecommendView from "./homechildcomponents/RecommendView";
import HomeFeature from "./homechildcomponents/HomeFeature";
export default {
  name: "Home",
  data() {
    return {
      banner: [],
      recommend: [],
      //搭建数据结构
      homeData: {
        pop: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
      },
    };
  },
  components: {
    NavBar,
    TabbarControl,
    HomeSwiper,
    RecommendView,
    HomeFeature,
    GoodList
  },
  created() {
    this.getMultiData(),
    this.getProductData("pop"),
    this.getProductData("new"),
    this.getProductData("sell")
  },
  methods: {
    getMultiData() {
      getHomeMultidata().then((res) => {
        // console.log(res.data.banner.list);
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getProductData(type) {
      const page = this.homeData[type].page + 1
      getHomeData(type, page).then(res => {
        // console.log(res);
        console.log(res);
        this.homeData[type].list.push(...res.data.list);
        this.homeData[type].page += 1;
      })
    }
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
}
.home-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: var(--color-tint);
  color: #fff;
}
.tabbar-control {
  position: sticky;
  top: 44px;
}
</style>
