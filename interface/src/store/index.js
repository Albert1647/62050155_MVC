import Vue from "vue";
import Vuex from "vuex";

import assignment from "./modules/assignment.js";

// State management in vue
Vue.use(Vuex);

export default new Vuex.Store({
	// defined module used
	modules: {
		assignment
	},
});
