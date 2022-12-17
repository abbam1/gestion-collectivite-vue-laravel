import { createStore } from "vuex";
import bootstrap from "bootstrap/dist/js/bootstrap.min.js";

import axios from 'axios'





let store = createStore({
  state: {
    user: {},
    hideConfigButton: false,
    isPinned: true,
    showConfig: false,
    isTransparent: "",
    isRTL: false,
    color: "",
    isNavFixed: false,
    isAbsolute: false,
    showNavs: true,
    showSidenav: true,
    showNavbar: true,
    showFooter: true,
    showMain: true,
    navbarFixed:
      "position-sticky blur shadow-blur left-auto top-1 z-index-sticky px-0 mx-4",
    absolute: "position-absolute px-4 mx-0 w-100 z-index-2",
    bootstrap,
  },
  mutations: {

    SET_USER(state, data) {
      state.user.data = data.user
      state.user.token = data.token
    },
    navbarMinimize(state) {
      const sidenav_show = document.querySelector(".g-sidenav-show");
      if (sidenav_show.classList.contains("g-sidenav-hidden")) {
        sidenav_show.classList.remove("g-sidenav-hidden");
        sidenav_show.classList.add("g-sidenav-pinned");
        state.isPinned = true;
      } else {
        sidenav_show.classList.add("g-sidenav-hidden");
        sidenav_show.classList.remove("g-sidenav-pinned");
        state.isPinned = false;
      }
    },
    sidebarType(state, payload) {
      state.isTransparent = payload;
    },
    cardBackground(state, payload) {
      state.color = payload;
    },
    navbarFixed(state) {
      if (state.isNavFixed === false) {
        state.isNavFixed = true;
      } else {
        state.isNavFixed = false;
      }
    },
    toggleEveryDisplay(state) {
      state.showNavbar = !state.showNavbar;
      state.showSidenav = !state.showSidenav;
      state.showFooter = !state.showFooter;
    },
    toggleHideConfig(state) {
      state.hideConfigButton = !state.hideConfigButton;
    },
  },
  actions: {
    toggleSidebarColor({ commit }, payload) {
      commit("sidebarType", payload);
    },
    setCardBackground({ commit }, payload) {
      commit("cardBackground", payload);
    },
  },
  getters: {},

});


let user = localStorage.getItem('collectivite_user')
if (user) {
  try {
    let userData = JSON.parse(user);
    store.state.user.data = userData.data
    store.state.user.token = userData.token

    // console.log(store.state.USER)
    let userCheck = null

    axios.get('http://52.247.224.1:8082/api/user', { headers: { Authorization: 'Bearer ' + store.state.user.token } })
      .then(res => {
        userCheck = res.data;
        // console.log(userCheck);
        if (!userCheck) {
          store.state.user = {}
        }
      })
      .catch((err) => {
        console.log(err)
        store.state.user = {}
      })
  } catch (err) {
    console.log(err);
    store.state.user = {}

  }
} else {
  console.log("not in local storage")

}


export default store