<template>
	<div class="tabs"><slot></slot></div>
</template>
<script>
import Vue from 'vue';
export default {
	name: 'QkTabs',
	props: {
		selected: {
			type: String,
			required: true
		},
		direction: {
			type: String,
			default: 'transverse',
			validator(value) {
				return ['vertical', 'transverse'].indexOf(value) >= 0;
			}
		}
	},
	data() {
		return {
			eventBus: new Vue()
		};
	},
	provide() {
		return {
			eventBus: this.eventBus
		};
	},
	methods: {
		checkChildren() {
			if (this.$children.length === 0) {
				console && console.warn && console.warn('tabs的子组件应该为tabs-head和tabs-body,缺少相应子组件');
			}
		},
		selectTabs() {
			this.$children.forEach(vm => {
				if (vm.$options.name === 'QkTabsHead') {
					vm.$children.forEach(child => {
						if (child.name === this.selected) {
							this.eventBus.$emit('update:selected', this.selected, child);
						}
					});
				}
			});
		}
	},
	mounted() {
		this.checkChildren();
		this.selectTabs();
	}
};
</script>
<style scoped>
.tabs {
	
}
</style>
