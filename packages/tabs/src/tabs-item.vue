<template>
	<div class="qk-tabs__tabs-item" @click="selectItem" :class="classes" :data-name="name"><slot></slot></div>
</template>
<script>
export default {
	name: 'QkTabsItem',
	inject: ['eventBus'],
	props: {
		name: {
			type: [String, Number],
			required: true
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			active: false
		};
	},
	computed: {
		classes() {
			return { active: this.active, disabled: this.disabled };
		}
	},
	methods: {
		selectItem() {
			if (this.disabled) {
				return;
			}
			this.eventBus && this.eventBus.$emit('update:selected', this.name, this);
			this.$emit('click', this);
		}
	},
	created() {
		if (this.eventBus) {
			this.eventBus.$on('update:selected', (name, vm) => {
				this.active = name === this.name;
			});
		}
	}
};
</script>
<style  scoped>

</style>
