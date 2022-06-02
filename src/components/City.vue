<script>
import Date from "./Date.vue";

export default {
	name: "City",
	props: {
		title: String,
	},
	components: { Date },
};
</script>

<template>
	<header>
		<h1 class="Header__Title">{{ title }}</h1>
		<input v-model="text" placeholder="Search a City" />
		<Date class="Header__Date" />
		<h2 v-bind="text"></h2>
	</header>
</template>

<style lang="scss">
header {
	display: flex;
	flex-flow: column;
	align-items: center;
}
.Header__Date {
	color: gray;
	font-size: 12px;
}
</style>
