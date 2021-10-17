<template>
	<v-container>
		<h1 class="page-header">Student</h1>
		<div class="assignment">
            <v-card v-for="(assignment, index) in assignments" :key="index" class="form">
                <h3>Assignment Name: {{ assignment.assignment_name }}</h3>
                <h3>Description :{{ assignment.description }}</h3>
                <h3>Due: {{ assignment.due_date }}</h3>
                <br>
                <h3>Assing to</h3>
                <div class="homework" v-for="(student, index) in assignment.assign_to" :key="index">
                    <v-card 
                    class="student-card" 
                    :color="student.turn_in_status === 'turn in late' ? 'red lighten-4'
                    : student.turn_in_status === 'turn in' ? 'green lighten-4'
                    : '' " 
                    >
                        <p>student_id:<br>-> {{student.student_id}}</p>
                        <p>description:<br>-> {{student.description}}</p>
                        <p>turn_in_date:<br>-> {{student.turn_in_date}}</p>
                        <p>turn_in_status:<br>-> {{student.turn_in_status}}</p>
                    </v-card>
                </div>
            </v-card>
		</div>
	</v-container>
</template>


<script>
export default {
	data: () => ({
        turn_in_status: null
	}),

    computed: {
        assignments(){
            return this.$store.getters.assignment
        }
    },

    // before render component -> get product
    created(){
        this.$store.dispatch('getAssignment')
    },

    methods: {

    }
};
</script>

<style scoped>
.in-time{
    color: rgb(116, 255, 123);
}
.late{
    color: rgb(255, 70, 70);
}

.homework{
    margin: 20px;
}

.student-card{
    padding: 20px
}
.button{
    margin-bottom: 10px;
}

.text-field{
    margin-right: 30px;
}

.assignment {
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
    padding: 20px;
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
