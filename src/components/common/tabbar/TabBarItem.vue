<!--  -->
<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeText">
      <slot  name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {
     
    };
  },
  props: {
    path: {
      type: String,
    },
    activeColor: {
      type: String,
    },
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
      // console.log(this.activeColor);
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeText() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  // created() {
  //   console.log(this.isActive);
  // },
};
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>