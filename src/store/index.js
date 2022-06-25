import { createStore } from 'vuex';

export default createStore({
  state: {
    showMenu: false
  },
  getters: {},
  mutations: {
    setMenu (state, value) {
      consoe.log(value)
      state.showMenu = value
    }
  },
  actions: {
    updateMenu ({ commit }, value) {
      commit('setMenu', value)
    }
  },
  modules: {}
});
