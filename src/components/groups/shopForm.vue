<template>
  <div id="shopForm">
    <div id="ModalPanel">
      <div class="shadow" v-on:click="closeModal"></div>
      <div class="panel">
        <div class="closeButton" v-on:click="closeModal">x</div>
        <h2>候補のお店を追加</h2>
        <p>追加したいお店を入力してください</p>
        <input v-model="shopName" placeholder="龍門" class="nameField" />
        <button type="submit" v-on:click="addShop">追加</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopForm',
  data() {
    return {
      shopName: '',
    };
  },
  methods: {
    closeModal() {
      this.$emit('closeButtonClicked');
    },
    addShop() {
      if (this.shopName.trim().length <= 0) return;
      const params = {
        shopName: this.shopName.trim(),
        groupId: this.$route.params.id,
      }
      this.$store.dispatch('addShop', params);
      this.$emit('closeButtonClicked');
    }
  },
};
</script>

<style scoped lang="scss">
@import '../../assets/common';
@import '../../assets/modalPanel';

</style>
