<template>
  <div>
    <div v-on:click="openModal" class="addGroup">グループを新規作成</div>
    <group-modal
      v-if="modalOpen"
      v-on:closeButtonClicked="closeModal">
    </group-modal>
  </div>
</template>

<script>
import AddGroupModal from './AddGroupModal';

export default {
  name: 'AddModalButton',
  components: {
    'group-modal': AddGroupModal,
  },
  data() {
    return {
      modalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
    },
  },
};
</script>

<style scoped lang="scss">
@import '../assets/common';

.addGroup {
  width: 50vw;
  max-width: 480px;
  min-width: 300px;
  box-sizing: border-box;
  margin: 10px auto;
  background: linear-gradient(135deg, $mainColor, $mainGradColor);
  color: white;
  font-weight: bold;
  text-align: center;
  padding: 15px;
  border-radius: 5px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 5px;
  transition: 0.2s;
  &:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    transition: 0.5s;
    background: rgba(0, 0, 0, 0.1);
  }
  &:hover {
    box-shadow: rgba(0, 0, 0 ,0.2) 2px 2px 10px;
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
</style>
