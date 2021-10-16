import axios from '../../api/axios.js'

// state data
const state = {
	assignments: [],
};

// mutate state
const mutations = {
	setAssignment(state, assignment) {
		state.assignments = assignment;
	},
	
};	

// action -> define app data logic
const actions = {

	// check server status (for debug)
	pingServer({ commit }, payload) {
		axios.get('ping').then(res => {
			console.log(res.data)
		})
	},

	// get all products from db(jSON)
	getAssignments({ commit }) {
		axios.get('/assignment').then(res => {
			let assignmentList = res.data.map(assignment => {
				return assignment.assignment_name
			})
			console.log(res.data, assignmentList)
			commit('setAssignment', res.data)
		})
	},
	addAssignment({ commit }, formData) {
		axios.post('/add-assignment', formData )
			.then(res => {
				
			})
	},
};

// getters return requested data
const getters = {
	assignments(state){
		return state.assignments
	},
};

export default {
	state,
	mutations,
	actions,
	getters,
};
