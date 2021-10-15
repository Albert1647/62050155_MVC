<template>
	<nav>
		<v-app-bar app color="white" outlined elevation="1">
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
			<v-toolbar-title>{{ navTitle }}</v-toolbar-title>

			<v-spacer></v-spacer>
			<!-- Calendar -->
			
			<!-- Notification -->
			<div v-if="navTitle == 'การแจ้งเตือน'"></div>

			<!-- Users -->
			<div v-else-if="navTitle === 'ผู้ใช้'"></div>
		</v-app-bar>
		<v-navigation-drawer v-model="drawer" app>
			<!-- NumEiang Icon & Title -->
			<v-list-item class="py-2">
				<v-avatar size="50" color="deep-orange darken-4">

				</v-avatar>
				<v-list-item-content class="px-5" style="font-family: Arial">
					<v-list-item-title class=""> Test </v-list-item-title>
				</v-list-item-content>
			</v-list-item>

			<v-divider></v-divider>

			<v-list nav>
				<v-list-item-group mandatory color="red darken-4">
					<v-list-item
						v-for="item in items"
						:key="item.title"
						router
						:to="item.path"
					>
						<!-- icon & name-->
						<v-list-item-icon>
							<v-icon>{{ item.icon }}</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title class="navigation-list">{{
								item.title
							}}</v-list-item-title>
						</v-list-item-content>
					</v-list-item>

					<v-divider></v-divider>

				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
	</nav>
</template>

<script>

export default {
	name: "Navigation",

	data: () => ({
		drawer: true,
		// Navigation Path
		navClass: "route",
		items: [
			{ title: "test", icon: "mdi-calendar", path: "/test" },
		],
		logout: {
			title: "ออกจากระบบ",
			icon: "mdi-arrow-left-bold-circle",
		},

		changelogText: "",
		select: 1,
		confirm: false,
	}),

	props: ["navTitle"],

	methods: {
		
	},
};
</script>

<style scoped>
	.navigation-list {
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
		font-size: 20px;
	}
</style>
