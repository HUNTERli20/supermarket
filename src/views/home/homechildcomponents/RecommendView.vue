<!--  -->
<template>
  <div class="recommends">
    <div class="recommends-item" v-for="item in recommends">
      <a :href="item.link" >
        <img :src="item.image" alt="" />
        <div class="title">{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  data() {
    return {};
  },
  props: {
    recommends: {
      type: Array,
      default: [],
    },
  },
};
</script>
<style scoped>
.recommends {
  display: flex;
  margin-top: 10px;
  font-size: 14px;
  padding-bottom: 30px;
  border-bottom: 10px solid #eee;
  text-align:center;
}

.recommends-item {
  flex: 1;
 

}

.recommends img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>