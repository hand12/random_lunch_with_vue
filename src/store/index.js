import Vue from 'vue';
import Vuex from 'vuex';

import groups from './modules/groups';
import members from './modules/members';
import shops from './modules/shops';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    groups,
    members,
    shops,
  },
});
