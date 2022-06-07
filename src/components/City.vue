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
			api_key: "bac6fe38ebf84821a07110419220706",
			url_base: "http://api.weatherapi.com/v1/current.json?key=",
			query: "",
			weather: {
				name: "Chose City",
				temp_c: "Temperature",
				text: "Weather Condition",
			},
		};
	},
	methods: {
		fetchWeather(e) {
			if (e.key == "Enter") {
				fetch(`${this.url_base}${this.api_key}&q=${this.query}&aqi=no`)
					.then((res) => {
						return res.json();
					})
					.then(this.setResults);
			}
		},

		setResults(results) {
			// this.weather = results;
			this.weather.name = results.location.name;
			this.weather.temp_c = results.current.temp_c;
			this.weather.text = results.current.condition.text;
			console.log(results);
		},
	},
};
</script>

<template>
	<div class="Header">
		<h1 class="Header__Title">{{ title }}</h1>
		<input
			type="text"
			v-model="query"
			placeholder="Search..."
			@keypress="fetchWeather"
		/>
		<Date class="Header__Date" />

		<div class="Header__Temperature--wrapper">
			<div class="Header__Temperature--city">
				{{ this.weather.name }}
			</div>
			<div class="Header__Temperature--temperature">
				{{ this.weather.temp_c }}°C
			</div>
			<div class="Header__Temperature--weather">
				{{ this.weather.text }}
			</div>
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
