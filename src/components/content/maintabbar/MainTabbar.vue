<!--  -->
<template>
  <div>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="pink"> 
      <div slot="item-icon"> <img src="~assets/img/tabbar/home.svg" alt=""> </div>
      <div slot="item-icon-active"> <img src="~assets/img/tabbar/home_active.svg" alt=""> </div>
      <div slot="item-text"> 首页 </div>
    </tab-bar-item>
     <tab-bar-item path="/category" activeColor="pink"> 
      <div slot="item-icon"> <img src="~assets/img/tabbar/category.svg" alt=""> </div>
       <div slot="item-icon-active"> <img src="~assets/img/tabbar/category_active.svg" alt=""> </div>
      <div slot="item-text"> 分类 </div>
    </tab-bar-item>
     <tab-bar-item path="/shopcart" activeColor="pink"> 
      <div slot="item-icon"> <img src="~assets/img/tabbar/shopcart.svg" alt=""> </div>
       <div slot="item-icon-active"> <img src="~assets/img/tabbar/shopcart_active.svg" alt=""> </div>
      <div slot="item-text"> 购物车 </div>
    </tab-bar-item>
     <tab-bar-item path="/profile" activeColor="pink"> 
      <div slot="item-icon"> <img src="~assets/img/tabbar/profile.svg" alt=""> </div>
       <div slot="item-icon-active"> <img src="~assets/img/tabbar/profile_active.svg" alt=""> </div>
      <div slot="item-text"> 我的 </div>
    </tab-bar-item>
  </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar"
import TabBarItem from "components/common/tabbar/TabBarItem"
export default {
  name: "MainTabBar",
  data () {
    return {
    };
  },
  components: {
    TabBar,
    TabBarItem
  }
}

</script>
<style scoped>
</style>