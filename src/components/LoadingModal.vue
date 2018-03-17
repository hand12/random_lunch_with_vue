<template>
  <div v-if="!!nowLoading" id="ModalPanel">
    <div class="shadow"></div>
    <div class="panel">
      <h2 class="loading">Now Loading</h2>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'LoadingModal',
  computed: mapState({
    nowLoading: state => state.nowLoading,
  }),
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
