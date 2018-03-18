<template>
  <div id="memberList">    
    <ul>
      <member
        v-for="member in members"
        v-bind:key="member.id"
        v-bind:member="member"
      />
    </ul>
  </div>
</template>

<script>
import Member from './member';

export default {
  name: 'MemberList',
  components: {
    member: Member,
  },
  props: ['members'],
};
</script>

<style scoped lang="scss">
@import '../../assets/common';

#memberList {
  ul {
    padding: 10px;
    list-style: none;
  }
}
</style>
