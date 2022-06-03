<script>
import City from "./components/City.vue";
export default {
	name: "App",
	components: {
		City,
	},
	data() {
		return {
			posts: [],
			api_key: "4090cf573ee1724ee3524ada332cb41c",
		};
	},
	methods: {
		async getData() {
			try {
				const response = await this.$http.get(
					"http://jsonplaceholder.typicode.com/posts"
				);

				this.posts = response.data;
			} catch (error) {
				console.log(error);
			}
		},
		created() {
			this.getData();
		},
	},
};
</script>

<template>
	<div class="page__template">
		<div class="page__City--Wrapper">
			<City title="Weather App" />
		</div>
	</div>
</template>

<style>
* {
	padding: 0;
	margin: 0;
}
.page__template {
	height: 100vh;
	display: flex;
	background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
		url(https://pixabay.com/get/g13e123c8ce831a17946bd99007db89ad8020a89a566d5ac69b6ef1ca9e8700fd188dec65c45b5d213146851473193fc4de85b803c23ecc34a4aafcc53933a3c7953f36450377e93326dbe2dcc3742644_1920.jpg);
}
.page__City--Wrapper {
	margin: auto;
}
</style>
