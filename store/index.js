export const state = () => ({
  // counter: 0,
  user: null,
});

export const getters = {
  getUser(state) {
    return state.user;
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
