<template>
  <div id="startButton">
    1グループあたり
    <input v-model="perNum" type="number" defaultValue="4" max="8" min="1" required class="memberNumField">
    人で
    <button v-on:click="startGrouping" type="submit" class="startButton">振り分け開始</button>
  </div>
</template>

<script>
export default {
  name: 'StartButton',
  data() {
    return {
      perNum: '',
    };
  },
  methods: {
    startGrouping() {
      if(this.perNum <= 0) return alert("0より大きい数字を入力してください");
      this.$router.push({name: 'GroupingResult', query: { perNum: this.perNum } });
    },
  },
};
</script>

<style scoped lang="scss">
@import '../../assets/common';

#startButton {
  font-weight: bold;
  .memberNumField {
    width: 40px;
    padding: 10px;
    font-size: 1rem;
    border-radius: 2.5px;
    border: 1px solid $mainColor;
  }
  button {
    font-weight: bold;
    font-size: 1rem;
    border-radius: 2.5px;
    background: linear-gradient(135deg, $mainColor, $mainGradColor);
    padding: 10px;
    margin-left: 8px;
    margin-top: 12px;
    color: white;
    transition: 0.2s;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 5px;
    }
  }
}
</style>
