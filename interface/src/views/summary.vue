<template>
	<v-container>
		<h1 class="page-header">Assignment Summary</h1>
		<div class="assignment">
            <v-card class="form" v-for="(assignment, index) in assignments" :key="index" >
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

<style src="./style.css"> </style>

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



