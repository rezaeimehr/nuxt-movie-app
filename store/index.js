export const state = () => ({
  genres: [],
  isSideMenuOpen: false,
  isSearchModalOpen: false
});

export const getters = {};

export const mutations = {
  TOGGLE_SIDE_MENU(state) {
    state.isSideMenuOpen = !state.isSideMenuOpen;
  },

  CLOSE_SIDE_MENU(state) {
    state.isSideMenuOpen = false;
  },

  TOGGLE_SEARCH_MODAL(state) {
    state.isSearchModalOpen = !state.isSearchModalOpen;
  },

  ADD_GENRES(states, genres) {
    states.genres.push(...genres);
  }
};

export const actions = {
  async nuxtServerInit({ commit }, { $api }) {
    const { data } = await $api.get("/genre/movie/list");
    const result = await $api.get("/genre/tv/list");
    commit("ADD_GENRES", data.genres);
    commit("ADD_GENRES", result.data.genres);
    return data.genres;
  },

  toggleSideMenu({ commit }) {
    commit("TOGGLE_SIDE_MENU");
  },

  toggleSearchModal({ commit }) {
    commit("TOGGLE_SEARCH_MODAL");
  }
};