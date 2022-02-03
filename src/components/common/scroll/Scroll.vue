<!-- 滚动组件 Date: 13:42 -->
<template>
  <div class="wraper" ref="wraper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
  data () {
    return {
      scroll: null
    };
  },
  mounted() {
    // console.log(this.$refs);
    this.scroll = new BScroll (this.$refs.wraper, {
     probeType: 2

    })
    this.scroll.on("scroll", (position) => {
      console.log(position);
    })
  }
}

</script>
<style scoped>
</style>