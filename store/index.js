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
  // increment(state) {
  //   state.counter++
  // },
  // store.commit('auth/setState', ['key', value]);
  setState(state, [key, value]) {
    state[key] = value;
    console.log("key, value:", key, value);
  },
};

export const actions = {
  // async fetchCounter({ state }) {
  //   return res.data
  // },
  setState({ commit }, [key, value]) {
    commit("setState", [key, value]);
  },
  setUser({ commit }, value) {
    // 세션스토리지에 저장
    sessionStorage.setItem(process.env.TOKEN_NAME, value.token);
    commit("setState", ["user", value]);
  },
};
