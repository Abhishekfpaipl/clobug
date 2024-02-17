import { createStore } from "vuex";
import order from './order.js';
import catalog from "./catalog.js";
import user from './user.js';
import collection from "./collection.js";
export default createStore({
  state: {
    mainMenu: false
  },
  getters: {
    mainMenu(state) {
      return state.mainMenu
    }
  },
  mutations: {
    openMainMenu(state) {
      state.mainMenu = true
    },
    closeMainMenu(state) {
      state.mainMenu = false;
    },
    toggleMainMenu(state) {
      state.mainMenu = !state.mainMenu;
    }
  },
  actions: {
    openMainMenu({ commit }) {
      commit('openMainMenu')
    },
    closeMainMenu({ commit }) {
      commit('closeMainMenu')
    },
    toggleMainMenu({ commit }) {
      commit('toggleMainMenu')
    }
  },
  modules: {
    order: order,
    catalog: catalog,
    user: user,
    collection:collection
  },
});
