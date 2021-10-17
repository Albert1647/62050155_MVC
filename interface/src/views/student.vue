<template>
	<v-container>
		<h1 class="page-header">Student</h1>
		<div class="warehouse">
            <v-card class="form">
                <h3>Assignment Name</h3>
                <v-combobox :items="assignmentList" v-model="selected_assignment" class="text-field"  placeholder="your id"/>
                <h3>Student ID</h3>
                <v-text-field class="text-field" v-model="student_id" placeholder="your id"/>
                <h3>Description</h3>
                <v-textarea class="text-field" v-model="description" placeholder="insert data"/>
                <h3>date</h3>
                <v-text-field class="text-field" v-model="date" placeholder="your id" disabled />
                <v-btn class="button" @click="turnInAssignment" > enter </v-btn>
            </v-card>
		</div>
	</v-container>
</template>


<script>
export default {
	data: () => ({
		student_id: '',
		description: '',
		assignmentName: '',
        selected_assignment: '',
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
            let assignment = this.$store.getters.assignment
            let current_assignment_index = assignment.findIndex(
                asm => asm.assignment_id === this.selected_assignment.assignment_id 
            )
            let student_index = assignment[current_assignment_index].assign_to.findIndex(
                assign => assign.student_id === this.student_id 
            )
            assignment[current_assignment_index].assign_to[student_index] = {
                student_id: this.student_id,
                is_turn_in: true,
                turn_in_status: this.getTurnInStatus(new Date(), assignment[current_assignment_index].due_date),
                turn_in_date: new Date(),
                description: this.description
            }
            
            this.$store.dispatch('turnInAssignment', assignment[current_assignment_index])
        },

        getTurnInStatus(turn_in_date, due_date){
            if(new Date(turn_in_date) > new Date(due_date) ){
                return 'turn in late'
            } else {
                return 'turn in'
            }
        }
    }
};
</script>

<style scoped>
.button{
    margin-bottom: 10px;
}

.text-field{
    margin-right: 30px;
}

.warehouse {
    margin-left: 400px;
    margin-right: 400px;
}
.page-header {
	text-align: center;
}
.product__card {
	display: inline-block;
	overflow: hidden;
	border-color: black;
	border-width: 10px;
	border-radius: 10px;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	padding: 40px;
	margin: 4px 12px;
}
.product__text {
	text-align: center;
}

.form{
    width: 600px;
    margin: auto auto;
    padding-top: 20px;
    padding-left: 30px;
}

.validation-text{
    padding-bottom: 3px;
}

.form-status__valid{
    color: rgb(1, 114, 1);
}

.form-status__invalid{
    color:red;
}

.form-status__hidden{
    visibility: hidden;
}

.disable{

}


</style>
