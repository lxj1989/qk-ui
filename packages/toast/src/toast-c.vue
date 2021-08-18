<template>
	<transition name="qk-toastc-fade" @after-leave="deleteEl">
		<div class="qk-toastc">
			<div
				class="qk-toastc_s"
				:class="[toastType,{'qk-toastc--big': showButton}]"
				:style="'zIndex:' + zIndex"
				@mousemove="clearTimer"
				@mouseleave="initAutoClose"
				v-show="visible"
			>
				<div >
					<slot />
				</div>
				<i class="qk-icon-close2 fs-24 qk-toastc__closeButton" @click="deleteEl" v-if="showButton"></i>
			</div>
		</div>
	</transition>
</template>

<script>
// import qkIcon from "../../Icon/main/icon.vue";
export default {
	name: 'QkToastC',
	// components: { qkIcon },
	props: {
		type: {
			type: String,
			default: 'nomal'
		},
		autoClose: {
			// 是否自动关闭
			type: Boolean,
			default: true
		},
		closeTime: {
			// 关闭的延时
			type: Number,
			default: 2000
		},
		showButton: {
			// 是否要关闭的x
			type: Boolean,
			default: true
		},
		zIndex: {
			type: Number,
			default: 10
		}
	},
	data() {
		return {
			timer: '',
			visible: false
		};
	},
	computed: {
		toastType() {
			let ary = ['nomal', 'success', 'warning', 'danger','def'];
			if (ary.includes(this.type)) {
				return 'qk-toastc--' + this.type;
			}
			return 'qk-toastc--nomal';
		}
	},
	methods: {
		deleteEl() {
			this.visible = false;
			setTimeout(() => {
				this.$el.remove();
				this.$destroy();
			}, 300);
		},
		clearTimer() {
			clearTimeout(this.timer);
		},
		initAutoClose() {
			if (this.autoClose && Math.abs(this.closeTime) > 0) {
				this.timer = setTimeout(() => {
					this.deleteEl();
				}, Math.abs(this.closeTime));
			}
		},
		keydown(e) {
			if (e.keyCode === 27) {
				this.deleteEl();
			}
		}
	},
	mounted() {
		this.initAutoClose();
		document.addEventListener('keydown', this.keydown);
	},
	beforeDestroy() {
		this.clearTimer();
		document.removeEventListener('keydown', this.keydown);
	}
};
</script>
