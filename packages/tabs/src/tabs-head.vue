<template>
	<div class="qk-tabs__tabs-head" ref="head">
		<slot></slot>
		<div class="line" ref="line"></div>
		<div class="action-wrapper"><slot name="action"></slot></div>
	</div>
</template>
<script>
export default {
	name: 'QkTabsHead',
	inject: ['eventBus'],
	mounted() {
		this.eventBus.$on('update:selected', (name, vm) => {
			let { width, left } = vm.$el.getBoundingClientRect();
			let { left: left1 } = this.$refs.head.getBoundingClientRect();
			this.$refs.line.style.width = `${width}px`;
			this.$refs.line.style.left = `${left - left1}px`;
		});
	}
};
</script>
<style scoped>

</style>
