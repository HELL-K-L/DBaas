import { SOME_MUTATION } from './consts';

export default {
  state: {
    count: 0
  },
  mutations: {
    [SOME_MUTATION](state, payload) {
      state.count += payload.amount;
    }
  },
  actions: {}
};
