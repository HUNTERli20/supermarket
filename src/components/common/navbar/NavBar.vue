<!--  -->
<template>
  <div>
    <div class="nav-bar">
      <div class="left"> <slot name="left"></slot> </div>
      <div class="center"> <slot name="center"></slot> </div>
      <div class="right"> <slot name="right"></slot> </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data () {
    return {
    };
  },
}

</script>
<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
}
.left, .right {
  width: 60px;
}
.center {
  flex: 1;
  box-shadow: rgba(100, 100, 100, .1);
}
</style>