<template>
  <div class="main_container">
    <my-title></my-title>
    <h2>今回のランダムランチの組合せです</h2>
    <shop-list
      v-bind:result="result"
    />
    <loading-modal />
    <router-link :to="{ name: 'Top'}">Topに戻る</router-link>
  </div>
</template>

<script>
import Title from "../Title";
import shopList from './shopList';
import LoadingModal from '../LoadingModal';
import { mapGetters } from 'vuex';

export default {
  name: 'GroupingResult',
  components: {
    'my-title': Title,
    'shop-list': shopList,
    'loading-modal': LoadingModal,
  },
  computed: {
    ...mapGetters({
      result: 'result',
    }),
  },
  created() {
    const params = {
      perNum: this.$route.query.perNum,
      groupId: this.$route.params.id,
    };
    this.$store.dispatch('startGrouping', params);
  },
};
</script>

<style scoped lang="scss">
@import '../../assets/common';
.main_container {
  width: 80vw;
  min-width: 350px;
  margin: 0 auto;
}
h2 {
  font-size: 1rem;
  text-align: center;
  &:before {
    content: "・";
    display: inline-block;
    color: $mainColor;
  }
}
</style>
