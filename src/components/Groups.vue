<template>
  <ul class="groupList">
    <loading></loading>
    <router-link
      v-for="group in groups"
      v-bind:key="group.id"
      :to="{ name: 'GroupDetail', params: { id: group.id } }">
      <group
        v-bind:group="group">
      </group>
    </router-link>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import Group from './Group';
import LoadingModal from './LoadingModal';

export default {
  name: 'Groups',
  components: {
    group: Group,
    loading: LoadingModal,
  },
  computed: {
    ...mapGetters({
      groups: 'allGroups',
    }),
  },
  created() {
    this.$store.dispatch('getAllGroups');
  },
};
</script>

<style scoped lang="scss">
@import '../assets/common';
.groupList {
  width: 50vw;
  max-width: 480px;
  min-width: 300px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0;
  list-style: none;
}
</style>
