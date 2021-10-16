<template>
	<v-container>
		<h1 class="page-header">Student</h1>
		<div class="warehouse">
            <v-card class="form">
                <h3>Student ID</h3>
                <v-text-field class="text-field" v-model="studentID" placeholder="your id"/>
                <h3>Assignment Name</h3>
                <v-combobox :items="assignmentList" class="text-field"  placeholder="your id"/>
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
		studentID: '',
		description: '',
		assignmentName: '',
        assignmentList: [],
		date: null,
	}),

    // before render component -> get product
    created(){
		this.date = new Date()
        this.assignmentList = this.$store.getters.assignmentList
    },

    methods: {
        turnInAssignment(){
            // this.$store.dispatch('turnInAssignment', this.data)
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
