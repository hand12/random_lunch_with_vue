<template>
  <div class="main_container">
    <my-title></my-title>
    <h2>参加したいグループを選択してください</h2>
    <groups></groups>
    <modal-button></modal-button>
  </div>
</template>

<script>
import Title from './Title';
import AddModalButton from './AddModalButton';
import Groups from './Groups';

export default {
  name: 'Top',
  components: {
    'my-title': Title,
    'modal-button': AddModalButton,
    groups: Groups,
  },
};
</script>

<style scoped lang="scss">
@import '../assets/common';
.main_container {
  width: 50vw;
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
