import group from '../../api/group';

// initial state
const state = {
  group: {
    id: '',
    name: '',
    members: [],
    restaurants: [],
  },
  all: [],
  nowLoading: false,
};

// getters
const getters = {
  group: state => state.group,
  members: state => state.group.members,
  restaurants: state => state.group.restaurants,
  allGroups: state => state.all,
};

// actions
const actions = {
  getGroup({ commit }, groupId) {
    commit('setStartLoading');
    group.getGroup(groupId)
      .then(group => {
        commit('setGroup', group);
        commit('setFinishLoading');
      })
      .catch(err => console.log(err));

  },
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
  setGroup(state, group) {
    state.group = group;
  },
  setGroups(state, groups) {
    state.all = groups;
  },
  setStartLoading(state) {
    state.nowLoading = true;
  },
  setFinishLoading(state) {
    state.nowLoading = false;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
