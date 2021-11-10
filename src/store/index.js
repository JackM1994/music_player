import { createStore } from 'vuex';

export default createStore({
  state: {
    authModalShow: false,
  },
  mutations: {
    toggleAuthModal: (state, authModalShow) => {
      state.authModalShow = authModalShow;
    },
  },
  getters: {
    authModalShow: (state) => state.authModalShow,
  },

});
