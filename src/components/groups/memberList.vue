<template>
  <div id="memberList">
    <div class="header">
      <h2>参加者</h2>
      <button>参加する</button>
    </div>
    <ul class="members">
      <member />
      <member />
      <member />
    </ul>
  </div>
</template>

<script>
import Member from './member';

export default {
  name: 'MemberList',
  components: {
    member: Member,
  }
};
</script>

<style scoped lang="scss">
@import '../../assets/common';

#memberList {
  margin-bottom: 24px;
  padding: 0 20px;
  text-align: left;
  .header {
    display: flex;
    justify-content: space-between;
    h2 {
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
