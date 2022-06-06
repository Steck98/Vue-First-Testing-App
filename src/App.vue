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
	methods: {},
};
</script>

<template>
	<div class="page__template">
		<div>
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
		url(https://pixabay.com/get/g0e163bb62ec8e19cb802b90cdd0e12d7ea9f576cc3499a1395a870e1c6e636bb9f18aba6a0048b049c2324d8546ad07fb19382a80d24bf46550c5fbd70553ce1ceaa53c951a72d973fc7ca8f1a6e05a0_1920.jpg);
}
.page__template > div {
	margin: auto;
}
</style>
