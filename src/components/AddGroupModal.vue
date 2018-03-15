<template>
  <div id="ModalPanel">
    <div class="shadow" v-on:click="closeModal"></div>
    <div class="panel">
      <div class="closeButton" v-on:click="closeModal">x</div>
      <h2>グループの新規作成</h2>
      <input v-model="groupName" id="groupName" placeholder="TKメディアユニット" class="groupNameField" />
      <button type="submit" v-on:click="addGroup">作成</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddGroupModal',
  data() {
    return {
      groupName: '',
    };
  },
  methods: {
    closeModal() {
      this.$emit('closeButtonClicked');
    },
    addGroup() {
      if (this.groupName.trim().length <= 0) return;
      this.$store.dispatch('addGroup', this.groupName.trim());
      this.$emit('closeButtonClicked');
    },
  },
};
</script>

<style scoped lang="scss">
@import '../assets/common';

.closeButton {
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  font-size: 0.8rem;
  transition: 0.3s;
  &:hover {
    color: $mainColor;
    cursor: pointer;
  }
}

h2 {
  font-weight: bold;
  font-size: 1.5rem;
}

.groupNameField {
  padding: 10px;
  font-size: 1.2rem;
  border-radius: 4px;
  border: 1px solid $mainColor;
}

button {
  padding: 8px 16px;
  margin: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 4px;
  border: none;
  background: linear-gradient(135deg, $mainColor, $mainGradColor);
  color: white;
  transition: 0.2s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 5px;
  }
}
</style>
