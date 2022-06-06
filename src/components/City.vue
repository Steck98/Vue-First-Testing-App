<script>
import Date from "./Date.vue";

export default {
	name: "City",
	props: {
		title: String,
		cityName: String,
	},
	components: { Date },
	data() {
		return {
			api_key: "4090cf573ee1724ee3524ada332cb41c",
			url_base: "https://api.openweathermap.org/data/3.0/",
			query: "",
			weather: {},
		};
	},
	methods: {
		fetchWeather(e) {
			if (e.key == "Enter") {
				fetch(
					`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`
				)
					.then((res) => {
						return res.json();
					})
					.then(this.setResults);
			}
		},
		setResults(results) {
			this.weather = results;
		},
	},
};
</script>

<template>
	<div class="Header">
		<h1 class="Header__Title">{{ title }}</h1>
		<input
			type="text"
			v-model="cityName"
			placeholder="Search..."
			@keypress="fetchWeather"
		/>
		<Date class="Header__Date" />
		<div class="Header__Temperature--wrapper">
			<div class="Header__Temperature--city">{{ weather.name }}</div>
			<div class="Header__Temperature--temperature">25C</div>
			<div class="Header__Temperature--weather">Windy</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.Header {
	display: flex;
	flex-flow: column;
	align-items: center;
	max-width: 1080px;
	background-color: white;
	padding: 30px 30px;
	line-height: 30px;
	border-radius: 50px;

	box-shadow: inset 0px 0px 18px 1px rgba(66, 68, 90, 1);
}
.Header__Title {
	padding: 10px 10px 30px 10px;
}
.Header__Temperature--wrapper {
	display: flex;
	flex-flow: column;
	align-items: center;
	max-width: 1080px;
}
input {
	border: none;
	border-bottom: solid 1px gray;
}
.Header__Date {
	color: gray;
}
</style>
