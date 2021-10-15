<template>
	<v-app>
		<Navigation
			:navTitle="currentRouteName"
		/>
		<v-main>
			<v-container fluid style="height: 100vh">
				<router-view></router-view>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
import Navigation from "@/components/navigation.vue";

export default {
	name: "App",

	components: {
		Navigation,
	},

	data: () => ({

	}),

	created() {

	},

	computed: {
		currentRouteName() {
			return this.$route.name;
		},
	},
};
</script>

<style>
	*{
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
	}
</style>
