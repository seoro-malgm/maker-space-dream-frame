export const state = () => ({
  // counter: 0,
  user: null,
  materials: null,
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
