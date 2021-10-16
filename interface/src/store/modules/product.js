import axios from '../../api/axios.js'

const state = {
	products: [],
};

const mutations = {
	setProducts(state, products) {
		state.products = products;
	},
	
};	

const actions = {
	// set time that admin stay sign in
	// setLogoutTimer({ commit }, expirationTime) {
	// 	setTimeout(() => {
	// 		commit("clearAuthData");
	// 		// }, expirationTime * 1000)
	// 	}, expirationTime * 1000);
	// },
	pingServer({ commit }, payload) {
		axios.get('ping').then(res => {
			console.log(res.data)
		})
	},

	getProducts({ commit }) {
		axios.get('products').then(res => {
			commit('setProducts', res.data)
		})
	},

	// getProducts({ commit }) {

	// }
};

const getters = {
	products(state){
		return state.products
	}
};

export default {
	state,
	mutations,
	actions,
	getters,
};
