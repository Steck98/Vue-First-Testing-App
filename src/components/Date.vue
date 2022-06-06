<template>
	<div>
		<h4>{{ getDate() }}</h4>
	</div>
</template>

<script>
export default {
	name: Date,
	methods: {
		getDate: function () {
			let getActualDate = new Date();
			const date = `${getActualDate.getDate()}/${
				getActualDate.getMonth() + 1
			}/${getActualDate.getFullYear()} ${getActualDate.getUTCHours()}:${getActualDate.getUTCMinutes()}`;
			console.log(getActualDate);
			return date;
		},
	},
};
</script>

<style lang="scss" scoped></style>
