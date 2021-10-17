<template>
	<v-container>
		<h1 class="page-header">Student</h1>
		<div class="warehouse">
            <v-card class="form">
                <h3>Assignment Name</h3>
                <v-combobox :items="assignmentList" v-model="selected_assignment" class="text-field"  placeholder="Select Assignment"/>
                <h3>Student ID</h3>
                <v-text-field class="text-field" v-model="student_id" placeholder="Student ID"/>
                <h3>Description</h3>
                <v-textarea class="text-field" v-model="description" placeholder="Description..."/>
                <h3>Send Date Time</h3>
                <v-text-field class="text-field" v-model="date" disabled />
                <v-btn class="button" @click="turnInAssignment" > enter </v-btn>
                <p :class="'validation-text ' + `${form_status} `"> {{ `*${form_validation_text}` }}</p>
            </v-card>
		</div>
	</v-container>
</template>

<style src="./style.css"> </style>

<script>
export default {
	data: () => ({
		student_id: '',
		description: '',
        selected_assignment: '',
        validation: '',
        form_is_valid: false,
        form_status: '',
        form_validation_text: '',
		date: null,
	}),

    // before render component -> get product
    created(){
        this.date = new Date().toISOString()
        this.$store.dispatch('getAssignment')
    },

    computed: {
        assignmentList(){
            console.log(this.$store.getters.assignmentList)
            return this.$store.getters.assignmentList
        },
        assignments(){
            return this.$store.getters.assignments
        }
    },

    methods: {
        turnInAssignment(){
            this.validateForm()
            if(this.form_is_valid){
                let assignment = this.$store.getters.assignment
                // find assignment_id_index
                let current_assignment_index = assignment.findIndex(
                    asm => asm.assignment_id === this.selected_assignment.assignment_id 
                )
                // find_student_id_index
                let student_index = assignment[current_assignment_index].assign_to.findIndex(
                    assign => assign.student_id === this.student_id 
                )
                // update attribute
                assignment[current_assignment_index].assign_to[student_index] = {
                    student_id: this.student_id,
                    is_turn_in: true,
                    turn_in_status: this.getTurnInStatus(new Date(), assignment[current_assignment_index].due_date),
                    turn_in_date: new Date(),
                    description: this.description
                }
                this.date = new Date()
                // PUT to back-end
                this.$store.dispatch('turnInAssignment', assignment[current_assignment_index])
            }
        },

        getTurnInStatus(turn_in_date, due_date){
            if(new Date(turn_in_date) > new Date(due_date) ){
                return 'turn in late'
            } else {
                return 'turn in'
            }
        },

        validateForm(){
            if(this.selected_assignment === ''){
                this.form_is_valid = false
                this.form_validation_text = 'please enter assignment'
                this.form_status = 'form-status__invalid'
            } else if (this.student_id === ''){
                this.form_is_valid = false
                this.form_validation_text = 'please enter student ID'
                this.form_status = 'form-status__invalid'
            } else {
                this.form_is_valid = true
                this.form_validation_text = 'Looks Good!'
                this.form_status = 'form-status__valid'
            }
        },
    }
};
</script>
