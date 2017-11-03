export default new Vuex.Store({
  state: {
    coords: []
  },
  mutations: {
    addCoords(state, payload) {
      state.coords.push(payload);
    },
    emptyState() {
      this.replaceState({ coords: [] });
    }
  }
});
