<template>
  <ul class="groupList">
    <loading v-if="nowLoading"></loading>
    <group
      v-if="!nowLoading"
      v-for="group in groups"
      v-bind:key="group.id"
      v-bind:group="group">
    </group>
  </ul>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import Group from './Group';
import LoadingModal from './LoadingModal';

export default {
  name: 'Groups',
  components: {
    'group': Group,
    'loading': LoadingModal,
  },
  computed: {
    ...mapGetters({
      groups: 'allGroups',
    }),
    ...mapState(['nowLoading']),
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
