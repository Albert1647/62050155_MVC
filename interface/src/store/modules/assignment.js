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
    // get assignemnt => GET
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
	// add assignment => POST
	addAssignment({ commit }, formData) {
		axios.post('/add-assignment', formData )
			.then(res => {
				alert('assignment added')
			})
	},

	// edit assignment => PUT
	turnInAssignment({ commit }, assignment) {
		axios.put('/edit-assignment', assignment )
			.then(res => {
				alert('assignment sended')
			})
	},
};

// getters return requested data
const getters = {
	// get all assignment
	assignment(state){
		return state.assignment
	},
	// get assignment list -> assignment menu
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
