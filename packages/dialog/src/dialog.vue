<template>
	<!-- 打开弹框的动画 -->
	<transition name="animation">
		<div class="w-dialog__dialog" :class="{ isShowMask: mask == true }" v-if="isShow" @click="clickMaskCloseFn">
			<div class="w-dialog__content" :style="{height:height,width:width}" @click.stop>
				<!-- <div class="headhead">
					<slot name="header">
						<span>{{ title }}</span>
						<div class="flexr acenter jsb" style="background: #4E79AD;">
							<h4 class="title">{{title}}</h4>
							<i class="el-icon-close" @click="close"></i>
						</div>
					</slot>
					<i class="el-icon-close" @click="close" v-show="showCloseIcon"></i>
				</div> -->
				<div class="w-dialog__hearers" >
					<div class="title">{{title}}<slot name="header"></slot></div>
					<i class="w-icon-close" style="cursor: pointer;" v-show="showCloseIcon" @click="close"></i>
				</div>
				<div class="bodybody">
					<!-- 内容区我们使用默认插槽 -->
					<slot></slot>
				</div>
				<div class="w-dialog__foot" v-if="$slots.footer">
					
					<!-- 底部使用命名插槽 -->
					<slot name="footer"></slot>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'QkDialog',
	props: {
		// 控制是否展示或隐藏对话框
		isShowDialog: {
			type: Boolean,
			default: false
		},
		// 父组件传过来的标题值
		title: {
			type: String,
			default: ''
		},
		// 是否显示关闭小图标
		showCloseIcon: {
			type: Boolean,
			default: true
		},
		// 是否开启背景遮罩层
		mask: {
			type: Boolean,
			default: true
		},
		// 是否点击遮罩层mask关闭弹出框
		clickMaskClose: {
			type: Boolean,
			default: false,
			require: true
		},
		height:{
			type: String,
			default: ''
		},
		width:{
			type: String,
			default: '500px'
		}
	},
	watch: {
	    isShowDialog(val) {
			// console.log(val)
			this.isShow = val// 新增isVisible的watch，监听变更并同步到IsShowPage上
	    }
	},
	data() {
		return {
			isShow:this.isShowDialog
		};
	},
	methods: {
		// 关闭弹出框
		close() {
			this.$emit('beforeClose', false);
			this.$emit('update:isShowDialog', false);
			// this.isShowDialog = false;
			this.isShow = false;
		},
		// 点击遮罩层关闭弹框
		clickMaskCloseFn() {
			if (this.clickMaskClose == true) {
				this.$emit('beforeClose', false);
			} else {
				/* 这里要控制一下冒泡事件，注意第十行使用@click.stop
           不控制冒泡的话，点击内容区也会导致弹出框关闭*/

				return;
			}
		}
	}
};
</script>

<style scoped>
.title{
	
}
.headhead {
	width: 100%;
	height: 60px;
	line-height: 60px;
	border-bottom: 1px solid #e9e9e9;
	box-sizing: border-box;
	padding: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.bodybody {
	width: 100%;
	height: calc(100% - 90px);
	/* height: 100%; */
	flex: 1;
	padding: 10px;
	overflow: auto;
}
.isShowMask {
	background-color: rgba(0, 0, 0, 0.3);
	z-index: 2000;
}
.animation-enter,
.animation-leave-to {
	opacity: 0;
}
.animation-enter-active,
.animation-leave-active {
	transition: opacity 0.3s;
}
</style>
