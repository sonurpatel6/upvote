import { createStore } from "vuex";

export default createStore({
  state: {
    votes: [[{ voted: false }], [{ voted: false }], [{ voted: false }]],
  },
  mutations: {
    UPDATE_VOTES(state, payload) {
      state.votes = payload;
    },
  },
  actions: {
    addToVotes(context, index) {
      const votes = context.state.votes;
      votes[index].push({ voted: false });
      context.commit("UPDATE_VOTES", votes);
    },
    updateStateToVotes(context, value) {
      const votes = context.state.votes;
      votes[value.index].forEach((val) => {
        val.voted = value.voted;
      });
      context.commit("UPDATE_VOTES", votes);
    },
  },
});
