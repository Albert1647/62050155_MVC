<template>
	<v-container>
		<h1 class="page-header">ชากังราวววว</h1>
		<div class="warehouse">
			<div class="product__card" v-for="(item, index) in products" :key="index">
				<section class="product__text">
					<h3>{{ item.number }}</h3>
					<h3>{{ item.countryCode }}</h3>
				</section>
            </div>
            <v-card class="form">
                <h3>Assignment Name</h3>
                <v-text-field class="text-field" v-model="assignment_name" @change="validateForm" placeholder="insert data ex. JP1000"/>
                <h3>Description</h3>
                <v-textarea class="text-field" v-model="description" placeholder="insert data"/>
                <h3>date</h3>
                <v-date-picker class="text-field" v-model="due_date" placeholder="insert data"/>
                <h3>assign to</h3>
                <v-text-field class="text-field" v-model="student_id" placeholder="insert data" append-icon="mdi-plus" @click:append="addStudent"/>
                <div v-if="assign_to.length > 0">
                    <li v-for="(member, index) in assign_to" :key="index">
                        {{ member }}
                    </li>
                </div>
                <v-btn @click="getTextForm" > enter </v-btn>
                <p> {{ validation }}</p>
                <p :class="'validation-text ' + `${form_status} `"> {{ `*${form_validation_text}` }}</p>
            </v-card>
		</div>
	</v-container>
</template>

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

    // before render component -> get product
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
            this.form_is_valid = true
            if(this.form_is_valid){
                let formData = {
                    assignment_name: this.assignment_name,
                    description: this.description,
                    due_date: this.due_date,
                    assign_to: this.assign_to.map(student_id => {
                        return {
                            student_id: student_id,
                            is_turn_in: false,
                            turn_in_date: '',
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
            // if(this.input.length < 6){
            //     this.form_is_valid = false
            //     this.form_validation_text = 'Character Should Not be less than six character'
            //     this.form_status = 'form-status__invalid'
            // } else {
            //     this.form_is_valid = true
            //     this.form_validation_text = "Looks Good!"
            //     this.form_status = 'form-status__valid'
            // }
        },
    }
};

</script>

<style scoped>

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
