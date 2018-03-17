<template>
  <div id="ModalPanel">
    <div class="shadow" v-on:click="closeModal"></div>
    <div class="panel">
      <div class="closeButton" v-on:click="closeModal">x</div>
      <h2>グループの新規作成</h2>
      <input v-model="groupName" id="groupName" placeholder="TKメディアユニット" class="nameField" />
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
@import '../assets/modalPanel';

</style>
