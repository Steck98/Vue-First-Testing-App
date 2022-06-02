<script>
import City from "./components/City.vue";
export default {
	name: "App",
	components: {
		City,
	},
	data() {
		return {
			api_key: "4090cf573ee1724ee3524ada332cb41c",
		};
	},
};
</script>

<template>
	<div>
		<City title="Weather App" />
	</div>
</template>

<style></style>
