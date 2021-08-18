<template>
	<div class="qk-toast__wrapper" :class="toastClass">
		<div class="qk-toast__toast" ref="toast">
			<div class="qk-toast__message">
				<slot v-if="!enableHtml"></slot>
				<div v-html="$slots.default" v-else></div>
			</div>
			<div class="qk-toast__line" ref="line"></div>
			<span v-if="closeButton" class="qk-toast__close" @click="clickClose">{{ closeButton.text }}</span>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Toast',
	props: {
		autoClose: {
			type: [Boolean, Number],
			default: 3,
			validator(value) {
				return typeof value === 'number' || value === false;
			}
		},
		// autoCloseDelay: {
		//   type: Number,
		//   default: 10
		// },
		closeButton: {
			type: Object,
			default: () => {
				return {
					text: '关闭',
					callback: undefined
				};
			}
		},
		enableHtml: {
			type: Boolean,
			default: false
		},
		position: {
			type: String,
			default: 'top',
			validator(value) {
				return ['top', 'bottom', 'middle'].indexOf(value) >= 0;
			}
		}
	},
	computed: {
		toastClass() {
			console.log(this.position)
			return [`position-${this.position}`];
		}
	},
	mounted() {
		this.setStyle();
		this.excuteClose();
	},
	methods: {
		setStyle() {
			this.$nextTick(() => {
				this.$refs.toast.style.height = getComputedStyle(this.$refs.toast, null).height;
			});
		},
		excuteClose() {
			if (this.autoClose) {
				setTimeout(() => {
					this.close();
				}, this.autoClose * 1000);
			}
		},
		close() {
			this.$el.remove();
			this.$emit('close');
			this.$destroy();
		},
		clickClose() {
			this.close();
			if (this.closeButton && typeof this.closeButton.callback === 'function') {
				this.closeButton.callback(this);
			}
		}
	}
};
</script>
<style >
@keyframes slide-up {
	0% {
		opacity: 0;
		transform: translateY(100%);
	}
	100% {
		opacity: 1;
		transform: translateY(0%);
	}
}
@keyframes slide-down {
	0% {
		opacity: 0;
		transform: translateY(-100%);
	}
	100% {
		opacity: 1;
		transform: translateY(0%);
	}
}
@keyframes fade {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

</style>
