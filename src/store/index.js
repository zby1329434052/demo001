import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    order:'还未输入取货信息',
    clientPhone: '',
    clientOrder: '',
    clientAddress: ''
  },
  mutations: {
    setOrder(state,order) {
      state.order = order;
    },
    setRequestDelivery(state,payload) {
      state.clientPhone = payload.phone;
      state.clientOrder = payload.order;
      state.clientAddress = payload.address;
    }
    // setClientPhone(state,phone) {
    //   state.clientPhone = phone;
    // },
    // setClientOrder(state,Order) {
    //   state.clientPhone = order;
    // },
    // setClientAddress(state,address) {
    //   state.clientPhone = address;
    // }
  },
  actions: {},
  modules: {}
});
