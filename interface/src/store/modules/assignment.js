import axios from '../../api/axios.js'

// state data
const state = {
	assignment: [],
	assignmentList: []
};

// mutate state
const mutations = {
	setAssignment(state, assignment) {
		state.assignment = assignment;
	},
	setAssignmentList(state, assignmentList) {
		state.assignmentList = assignmentList;
	},
	
};	

// action -> define app data logic
const actions = {
	// get all products from db(jSON)
	getAssignment({ commit }) {
		axios.get('/assignment').then(res => {
			let assignmentList = res.data.map(assignment => {
				return {
					assignment_id: assignment.assignment_id,
					text: assignment.assignment_name
				}
			})
			console.log(res.data, assignmentList)
			commit('setAssignment', res.data)
			commit('setAssignmentList', assignmentList)
		})
	},

	addAssignment({ commit }, formData) {
		axios.post('/add-assignment', formData )
			.then(res => {
				
			})
	},

	turnInAssignment({ commit }, assignment) {
		axios.put('/edit-assignment', assignment )
			.then(res => {
				console.log(res)
			})
	},
};

// getters return requested data
const getters = {
	assignment(state){
		return state.assignment
	},
	assignmentList(state){
		return state.assignmentList
	},
};

export default {
	state,
	mutations,
	actions,
	getters,
};
