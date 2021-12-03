/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

function S4() {
  // eslint-disable-next-line no-bitwise
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}
function guid() {
  return (`${S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`);
}
export default new Vuex.Store({
  state: {
    debate_db: {},
    list_2: [
      {
        id: guid(),
        title: '立论',
        category: 1,
        attackSide: 0,
        attackPosition: 0,
        time: 180,
      },
    ],
    ruleText: '',
  },
  mutations: {
    updateDb: (state, newDB) => {
      state.debate_db = newDB;
    },
    list2: (state, list) => {
      state.list_2 = list;
    },
    list_m: (state, index, item) => {
      state.list_2[index] = item;
    },
    list_d: (state, index) => {
      state.list_2.splice(index, 1);
    },
    list_p: (state, item) => {
      state.list_2.push(item);
    },
    rule: (state, ru) => {
      state.ruleText = ru;
    },
  },
  actions: {
  },
  modules: {
  },
});
