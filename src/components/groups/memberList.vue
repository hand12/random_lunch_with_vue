<template>
  <div id="memberList">
    <div class="header">
      <h2>参加者</h2>
      <button v-on:click="openModal">参加する</button>
    </div>
    <ul class="members">
      <member
        v-for="member in members"
        v-bind:key="member.id"
        v-bind:member="member"
      />
    </ul>
    <member-form 
      v-if="modalOpen"
      v-on:closeButtonClicked="closeModal"
    />
  </div>
</template>

<script>
import Member from './member';
import MemberForm from './memberForm';

export default {
  name: 'MemberList',
  components: {
    member: Member,
    'member-form': MemberForm,
  },
  props: ['members'],
  data() {
    return {
      modalOpen: false,
    }
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
@import '../../assets/common';
@import '../../assets/modalPanel';

#memberList {
  margin-bottom: 24px;
  padding: 0 20px;
  text-align: left;
  .header {
    display: flex;
    justify-content: space-between;
    h2 {
      z-index: -1;
      display: inline-block;
      margin: 0;
      font-size: 1rem;
      position: relative;
      &:after {
        z-index: -1;
        position: absolute;
        bottom: 4px;
        content: '';
        display: block;
        width: 100%;
        height: 3px;
        background: linear-gradient(135deg, $mainColor, $mainGradColor);
      }
    }
    button {
      background: linear-gradient(135deg, $mainColor, $mainGradColor);
      border-radius: 2.5px;
      color: white;
      text-align: center;
      font-size: 0.8rem;
      line-height: 1.5rem;
      font-weight: bold;
      padding: 0 10px;
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 5px;
      }
    }
  }
  ul {
    margin: 10px 0;
    padding: 10px;
    background: $lightGray;
    border-radius: 2.5px;
    font-size: 0;
  }
}
</style>
