<template>
  <div id="ModalPanel">
    <div class="shadow"></div>
    <div class="panel">
      <h2 class="loading">Now Loading</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingModal',
};
</script>

<style scoped lang="scss">
@import '../assets/common';

.loading {
  &:after {
    content: '';
    display: block;
    margin: 20px auto;
    width: 20px;
    height: 2px;
    background: gray;
    animation-name: loading;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
  }
}
</style>
