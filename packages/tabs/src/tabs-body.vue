<template>
	<div class="tabs-body"><slot></slot></div>
</template>
<script>
export default {
	name: 'QkTabsBody',
	inject: ['eventBus'],
	created() {
		this.eventBus.$on('update:selected', name => {
			// console.log(`body: ${name}`)
		});
	}
};
</script>
<style scoped>
.tabs-body {
}
</style>
