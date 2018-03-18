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
      .then(res => {
        commit('setFinishLoading');
        this.dispatch('getGroup', res.group_id)
      })
      .catch(err => console.log(err));
  },
  removeMember({ commit }, targetMember) {
    commit('setStartLoading');
    member.deleteMember(targetMember.id)
      .then(() => {
        commit('setFinishLoading');
        this.dispatch('getGroup', targetMember.group_id);
      })
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
