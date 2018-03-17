<template>
  <div id="shopList">
    <div class="header">
      <h2>候補店舗一覧</h2>
      <button>追加する</button>
    </div>
    <ul class="shops">
      <shop />
      <shop />
      <shop />
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
};
</script>

<style scoped lang="scss">
@import '../../assets/common';

#shopList {
  padding: 0 20px;
  text-align: left;
  .header {
    display: flex;
    justify-content: space-between;
    h2 {
      display: inline-block;
      margin: 0;
      font-size: 1rem;
      position: relative;
      &:after {
        z-index: -1;
        position: absolute;
        bottom: 4px;
        content: '';
        display: block;
        width: 100%;
        height: 3px;
        background: linear-gradient(135deg, $mainColor, $mainGradColor);
      }
    }
    button {
      background: linear-gradient(135deg, $mainColor, $mainGradColor);
      border-radius: 2.5px;
      color: white;
      text-align: center;
      font-size: 0.8rem;
      line-height: 1.5rem;
      font-weight: bold;
      padding: 0 10px;
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 5px;
      }
    }
  }
  ul {
    margin: 10px 0;
    padding: 10px;
    background: $lightGray;
    border-radius: 2.5px;
    font-size: 0;
  }
}
</style>
