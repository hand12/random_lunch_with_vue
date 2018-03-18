<template>
  <div id="shopList">
    <ul>
      <shop
        v-for="shop in result.restaurants"
        v-bind:key="shop.id"
        v-bind:shop="shop"
      />
    </ul>
  </div>
</template>

<script>
import Shop from './shop';

export default {
  name: 'ShopList',
  components: {
    shop: Shop,
  },
  props: ['result'],
};
</script>

<style scoped lang="scss">
@import '../../assets/common';

#shopList {
  ul {
    padding: 10px;
    list-style: none;
    text-align: center;
  }
}
</style>
