export const state = () => ({
  // counter: 0,
  user: null,
  materials: null,
  urls: {
    youtube: "https://www.youtube.com/@gongjusalon/videos",
  },
});

export const getters = {
  getUser(state) {
    return state.user;
  },
  getMaterials(state) {
    return state.materials;
  },
};

export const mutations = {
  setState(state, [key, value]) {
    state[key] = value;
  },
};

export const actions = {
  setState({ commit }, [key, value]) {
    commit("setState", [key, value]);
  },
};
