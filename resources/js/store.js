import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state : {
      count: 0,
      cart: [
        {produnct_id:1, product_name:'아이폰 거치대',category:'A'},
        {produnct_id:2, product_name:'블루투스 마우스',category:'B'}
      ]
  },
  mutations:{
    increment(state){
      state.count = state.count + 1;
    }
  },
  getters:{
    cartCount:(state) => {
      return state.cart.length;
    },
    productACount:(state) => {
      return state.cart.filter(p => p.category == 'A').length;
    }
  }
})

export default store;