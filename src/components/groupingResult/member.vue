<template>
  <li class="member">
    {{ member.name }}
  </li>
</template>

<script>
export default {
  name: 'Member',
  props: ['member'],
};
</script>

<style scoped lang="scss">
@import '../../assets/common';

li {
  padding: 10px;
  font-weight: bold;
  background: white;
  margin: 10px;
  text-align: left;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 5px;
}
</style>
