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
      .then(() => commit('setFinishLoading'))
      .catch(err => console.log(err));
  },
  removeShop({ commit }, shopId) {
    commit('setStartLoading');
    shop.deleteShop(shopId)
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
