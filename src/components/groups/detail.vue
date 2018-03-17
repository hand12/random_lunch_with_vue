<template>
  <div class="main_container">
    <my-title></my-title>
    <h1 class="groupName">転職会議</h1>
    <member-list />
    <shop-list />
    <start-button />
  </div>
</template>

<script>
import Title from "../Title";
import MemberList from './memberList';
import ShopList from './shopList';
import StartButton from './startButton';

export default {
  name: 'GroupDetail',
  components: {
    'my-title': Title,
    'member-list': MemberList,
    'shop-list': ShopList,
    'start-button': StartButton,
  },
};
</script>

<style scoped lang="scss">
@import '../../assets/common';
.main_container {
  width: 50vw;
  min-width: 350px;
  margin: 0 auto;
  padding-bottom: 80px;
}

.groupName {
  text-align: left;
  font-size: 1.5rem;
  border-top: 1px solid $darkGray;
  border-bottom: 1px solid $darkGray;
  padding: 10px 20px;
  box-sizing: border-box;
}
</style>
