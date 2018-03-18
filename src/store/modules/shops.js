import shop from '../../api/shop';

// initial state
const state = {
  nowLoading: false,
};

// actions
const actions = {
  addShop({ commit }, params) {
    commit('setStartLoading');
    shop.postShop(params)
      .then(res => {
        commit('setFinishLoading');
        this.dispatch('getGroup', res.group_id);
      })
      .catch(err => console.log(err));
  },
  removeShop({ commit }, targetShop) {
    commit('setStartLoading');
    shop.deleteShop(targetShop.id)
      .then(() => {
        commit('setFinishLoading');
        this.dispatch('getGroup', targetShop.group_id);
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
