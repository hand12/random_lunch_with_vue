<template>
  <h1 id="title">
    <span class="lunch">昼飯</span>
    <span class="meeting">会議</span>
  </h1>
</template>

<script>
export default {
  name: 'Title',
};
</script>

<style scoped lang="scss">
@import '../assets/common';
#title {
  text-align: center;
  font-size: 3rem;
  line-height: 3.5rem;
  position: relative;
  &:after {
    z-index: -1;
    position: absolute;
    bottom: 0.5rem;
    left: 0;
    right: 0;
    display: block;
    margin: 0 auto;
    content: "";
    width: 200px;
    height: 6px;
    background: $mainColor;
  }
}
.lunch {
  font-weight: bold;
}
.meeting {
  font-weight: lighter;
}
</style>
