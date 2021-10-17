<template>
	<v-container>
		<h1 class="page-header">Add Assignment</h1>
		<div class="warehouse">
            <v-card class="form">
                <h3>Assignment Name</h3>
                <v-text-field class="text-field" v-model="assignment_name" @change="validateForm" placeholder="Assignment Name..."/>
                <h3>Description</h3>
                <v-textarea class="text-field" v-model="description" placeholder="Description..."/>
                <h3>date</h3>
                <input type="datetime-local" v-model="due_date"/>
                <h3>assign to</h3>
                <v-text-field class="text-field" v-model="student_id" placeholder="student_id" append-icon="mdi-plus" @click:append="addStudent"/>
                <div v-if="assign_to.length > 0">
                    <li v-for="(member, index) in assign_to" :key="index">
                        {{ member }}
                    </li>
                </div>
                <v-btn @click="getTextForm" > enter </v-btn>
                <p :class="'validation-text ' + `${form_status} `"> {{ `*${form_validation_text}` }}</p>
            </v-card>
		</div>
	</v-container>
</template>

<style src="./style.css"> </style>

<script>
export default {
	data: () => ({
        assignment_name: '',
        description: '',
        due_date: '',
        student_id: '',
        assign_to: [],
        validation: '',
        form_validation_text: 'none',
        form_status: 'form-status__hidden',
        form_is_valid: false
	}),

    created(){
        
    },

    computed: {
        // products data
        products(){
            return this.$store.getters.products
        }
    },

    methods: {
        // form handler
        getTextForm() {
            this.validateForm()
            if(this.form_is_valid){
                let formData = {
                    assignment_name: this.assignment_name,
                    description: this.description,
                    due_date: new Date(this.due_date),
                    assign_to: this.assign_to.map(student_id => {
                        return {
                            student_id: student_id,
                            is_turn_in: false,
                            turn_in_status: 'assigned',
                            turn_in_date: '',
                            description: ''
                        }
                    })
                }
                console.log(formData)
                this.$store.dispatch('addAssignment', formData)
            } else {
                // alert('form is not valid')
            }
        },
        addStudent(){
            if(this.student_id !== ''){
                this.assign_to.push(this.student_id)
                this.student_id = ''
            }
        },
        // validate form input
        validateForm() {
            if(this.assignment_name === ''){
                this.form_is_valid = false
                this.form_validation_text = 'assignment name cannot be blank'
                this.form_status = 'form-status__invalid'
            } else if(this.assign_to.length === 0){
                this.form_is_valid = false
                this.form_validation_text = 'specify assigned student'
                this.form_status = 'form-status__invalid'
            } else {
                this.form_is_valid = true
                this.form_validation_text = "Looks Good!"
                this.form_status = 'form-status__valid'
            }
        },
    }
};

</script>

