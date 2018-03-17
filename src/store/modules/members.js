import member from '../../api/member';

// initial state
const state = {
  nowLoading: false,
};

// actions
const actions = {
  addMember({ commit }, params) {
    commit('setStartLoading');
    member.postMember(params)
      .then(() => commit('setFinishLoading'))
      .catch(err => console.log(err));
  },
  removeMember({ commit }, memberId) {
    commit('setStartLoading');
    member.deleteMember(memberId)
      .then(() => commit('setFinishLoading'))
      .catch(err => console.log(err));
  },
};

// mutations
const mutations = {
  setStartLoading(state) {
    state.nowLoading = true;
  },
  setFinishLoading(state) {
    state.nowLoading = false;
  },
};

export default {
  state,
  actions,
  mutations,
};
