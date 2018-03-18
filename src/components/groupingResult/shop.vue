<template>
  <li class="shop">    
    <h2 class="name">{{shop.restaurant.name}}</h2>
    <member-list
      v-bind:members="shop.members"
    />
  </li>
</template>

<script>
import MemberList from './memberList';

export default {
  name: 'Shop',
  components: {
    'member-list': MemberList,
  },
  props: ['shop'],
};
</script>

<style scoped lang="scss">
@import '../../assets/common';

.shop {
  display: inline-block;
  min-width: 200px;
  background: $lightGray;
  margin: 0 10px 10px;
  border-radius: 2.5px;
  vertical-align: top;
  box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 5px;
  .name {
    margin: 0;
    padding: 0 10px;
    line-height: 2.75rem;
    text-align: left;
    background: white;
    border-bottom: 3px solid $mainColor;
    border-radius: 2.5px 2.5px 0 0;
    box-shadow: rgba(0, 0, 0, 0.2) 0 1px 5px;
  }
}
</style>
