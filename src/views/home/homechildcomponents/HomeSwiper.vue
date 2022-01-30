<!--  -->
<template>
  <div>
    <swiper v-if="banners.length">
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" :alt="item.title">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from "components/common/swiper"
export default {
  name: "HomeSwiper",
  data () {
    return {
    };
  },
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default: []
    }
  }
}

</script>
<style scoped>
</style>