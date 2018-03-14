import group from '../../api/group'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allGroups: state => state.all
}

// actions
const actions = {
  getAllGroups({ commit }) {
    group.getGroups()
      .then(groups => commit('setGroups', groups))
      .catch(err => console.log(err));
  },
};

// mutations
const mutations = {
  setGroups(state, groups) {
    state.all = groups;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
