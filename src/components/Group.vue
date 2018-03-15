<template>
  <li class="group">
    <span class="name">{{group.name}}</span>
    <span class="memberCount">{{group.memberCount}}人</span>
  </li>
</template>

<script>
export default {
  name: 'Group',
  props: ['group'],
};
</script>

<style scoped lang="scss">
@import '../assets/common';

.group {
  background: $lightGray;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  position: relative;
  font-weight: bold;
  text-align: left;
  box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 10px;
  transition: 0.2s;
  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    transition: 0.5s;
    background: rgba(0, 0, 0, 0.2);
  }
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 10px;
    transform: scale(1.05);
    cursor: pointer;
    &:after {
      width: 0;
      right: 0;
      background: $lightGray;
      opacity: 0;
    }
  }
}

.memberCount {
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  background: linear-gradient(135deg, $mainColor, $mainGradColor);
  border-radius: 0 5px 5px 0;
  color: white;
  padding: 10px 15px;
}

</style>
