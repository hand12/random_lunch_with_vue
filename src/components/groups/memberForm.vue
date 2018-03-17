<template>
  <div id="memberForm">
    <div id="ModalPanel">
      <div class="shadow" v-on:click="closeModal"></div>
      <div class="panel">
        <div class="closeButton" v-on:click="closeModal">x</div>
        <h2>グループに参加</h2>
        <p>表示する名前を入力してください</p>
        <input v-model="memberName" placeholder="やまぴ" class="nameField" />
        <button type="submit" v-on:click="addMember">参加</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemberForm',
  data() {
    return {
      memberName: '',
    };
  },
  methods: {
    closeModal() {
      this.$emit('closeButtonClicked');
    },
    addMember() {
      if (this.memberName.trim().length <= 0) return;
      const params = {
        memberName: this.memberName.trim(),
        groupId: this.$route.params.id,
      }
      this.$store.dispatch('addMember', params);
      this.$emit('closeButtonClicked');
    }
  },
};
</script>

<style scoped lang="scss">
@import '../../assets/common';
@import '../../assets/modalPanel';

</style>
