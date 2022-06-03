<script>
import Date from "./Date.vue";
import Temperature from "./Temperature.vue";

export default {
	name: "City",
	props: {
		title: String,
	},
	components: { Date, Temperature },
};
</script>

<template>
	<div class="Header">
		<h1 class="Header__Title">{{ title }}</h1>
		<input v-model="text" placeholder="Search a City" />
		<Date class="Header__Date" />
		<h2 v-bind="text"></h2>
		<div class="Header__Temperature--wrapper">
			<Temperature />
		</div>
	</div>
</template>

<style lang="scss">
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
