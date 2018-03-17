<template>
  <li>
    <span class="memberName">やました</span>
    <span class="removeButton">x</span>
  </li>
</template>

<script>
export default {
  name: 'Member',
};
</script>

<style scoped lang="scss">
@import '../../assets/common';

li {
  color: white;
  display: inline-block;
  list-style: none;
  background: gray;
  padding: 0 10px;
  border-radius: 1.5rem;
  margin-right: 8px;
  margin-bottom: 8px;
  vertical-align: middle;
  .memberName {
    font-size: 0.8rem;
    line-height: 1.5rem;
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
  }
  .removeButton {
    background: darkgray;
    display: inline-block;
    vertical-align: middle;
    width: 0.8rem;
    height: 0.8rem;
    text-align: center;
    line-height: 0.8rem;
    font-size: 0.8rem;
    border-radius: inherit;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      color: darken(darkgray, 20);
    }
  }
}
</style>
