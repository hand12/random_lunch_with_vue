import group from '../../api/group'

// initial state
const state = {
  all: [],
  nowLoading: false,
}

// getters
const getters = {
  allGroups: state => state.all,
}

// actions
const actions = {
  getAllGroups({ commit }) {
    commit('setStartLoading');
    group.getGroups()
      .then(groups => {
        commit('setGroups', groups);
        commit('setFinishLoading');
      })
      .catch(err => console.log(err));
  },
  addGroup({ commit }, groupName) {
    commit('setStartLoading');
    group.postGroup(groupName)
      .then(() => commit('setFinishLoading'))
      .catch(err => console.log(err));
  },
};

// mutations
const mutations = {
  setGroups(state, groups) {
    state.all = groups;
  },
  setStartLoading(state) {
    console.log("start呼ばれた");
    state.nowLoading = true;
  },
  setFinishLoading(state) {
    console.log("finish呼ばれた");
    state.nowLoading = false;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
