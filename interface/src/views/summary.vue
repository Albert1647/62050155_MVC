<template>
	<v-container>
		<h1 class="page-header">Student</h1>
		<div class="warehouse">
            <v-card v-for="(assignment, index) in assignments" :key="index" class="form">
                <h3>Assignment Name: {{ assignment.assignment_name }}</h3>
                <h3>Description :{{ assignment.description }}</h3>
                <h3>Due: {{ assignment.due_date }}</h3>
                <li v-for="(studentID, index) in assignment.assign_to" :key="index">
                    {{ studentID}}
                </li>
            </v-card>
		</div>
	</v-container>
</template>


<script>
export default {
	data: () => ({
        assignments: [],
	}),

    computed: {
        homeworks(){
            return this.$store.getters.homeworks
        }
    },

    // before render component -> get product
    created(){
        
    },

    methods: {

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
