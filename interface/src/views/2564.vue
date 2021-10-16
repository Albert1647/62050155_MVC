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
                <v-text-field class="text-field" v-model="input" @change="validateForm" placeholder="insert data ex. JP1000"/>
                <v-btn @click="getTextForm" > enter </v-btn>
                <p> {{ validation }}</p>
                <p :class="'validation-text ' + `${formStatus}`"> {{ `*${formValidationText}` }}</p>
            </v-card>
		</div>
	</v-container>
</template>

<script>
export default {
	data: () => ({
        input: '',
        validation: '',
        formValidationText: 'none',
        formStatus: 'form-status__hidden',
	}),

    created(){
        this.$store.dispatch('getProducts')
    },

    computed: {
        products(){
            return this.$store.getters.products
        }
    },

    methods: {
        getTextForm() {
            let countryCode = this.input.substring(0,2)
            let productCode = this.input.substring(2,6)
            

            this.validation = {
                countryCode: countryCode,
                productCode: Number(productCode) 
            }
            // this.$store.dispatch('pingServer')
        },
        validateForm() {
            if(this.input.length < 6){
                this.formValidationText = 'Character Should Not be less than six character'
                this.formStatus = 'form-status__invalid'
            } else {
                this.formValidationText = "Looks Good!"
                this.formStatus = 'form-status__valid'
            }
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
    width: 400px;
    margin: auto auto;
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

</style>
