import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	shopList:[],
	test: 0,
	userPhone:""
}

const mutations = {
	 testWay (state) {
	 	state.test++;
	 	console.log('thi is a a a a a a a  ')
    }
   //  change (state) {
	 	// state.test++;
	 	// console.log('thi is a a a a a a a  ')
   //  }
}

const actions = {
	 testWay: ({ commit }) => {commit('testWay')}
	 
	 // change: ({ commit }) => {
	 // 	setTimeout( () => {
		// 	commit('change')
	 // 	},3000)
	 // }
}

const getters = {
  // testWay: state => state.shopList
}


export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})
