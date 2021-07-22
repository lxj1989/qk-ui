<template>
	<transition name="w-zoom-in-center">
		 <!-- @click.capture="clickNodeWrap" -->
		<div class="cus_vtree_wrap">
			<qk-lazy-tree-item
				:treeData="treeData"
				@clickNodeCom="clickNode"
				:flow="1"
				:showLine="showLine"
				:replaces="replaces"
				:multi="multi"
				:checkBox="checkBox"
				@rightClickCom="rightClickBack"
				@toggleCheckBox="checkBoxFun"
			></qk-lazy-tree-item>
		</div>
	</transition>
</template>

<script>
import qkLazyTreeItem from './tree-lazy-item.vue';
export default {
	name: 'QkTree',
	components: {
		qkLazyTreeItem
		// treeTransfer
	},
	props: {
		treeData: {
			type: Array,
			default: () => [
				{
					label: '一级 1',
					children: [
						{
							label: '二级 1-1',
							children: [
								{
									label: '三级 1-1-1',
									children: [
										{
											label: '四级 1-1-1'
										}
									]
								}
							]
						}
					]
				},
				{
					label: '一级 2',
					children: [
						{
							label: '二级 2-1',
							children: [
								{
									label: '三级 2-1-1'
								}
							]
						},
						{
							label: '二级 2-2',
							children: [
								{
									label: '三级 2-2-1'
								}
							]
						}
					]
				},
				{
					label: '一级 3',
					children: [
						{
							label: '二级 3-1',
							children: [
								{
									label: '三级 3-1-1'
								}
							]
						},
						{
							label: '二级 3-2',
							children: [
								{
									label: '三级 3-2-1'
								}
							]
						}
					]
				}
			]
		},
		checkBox: {
			type: Boolean,
			default: false
		},
		showLine: {
			type: Boolean,
			default: true
		},
		multi: {
			type: Boolean,
			default: false
		},
		replaces: {
			type: [Object, Array],
			default: function() {
				return {
					children: 'children',
					title: 'label',
					key: 'id'
				};
			}
		}
		// hasArr: {
		// 	type: Array,
		// 	default: ()=>[]
		// }

		// selectData: {
		// 	type: Array,
		// 	default: ()=> []
		// },
	},
	data() {
		return {};
	},
	methods: {
		hiddenTag() {},
		clickNode(data) {
			console.log('clickNode',data)
			// if(this.multi){
			// 	const isSome = this.selectData.some(item => item.userCode == data.userCode);
			// 	if (!isSome) {
			// 		if (data.active) {
			// 			this.selectData.push(data);
			// 		} else {
			// 			this.selectData = this.selectData.filter(stu => stu.userCode != data.userCode);
			// 		}
			// 	} else {
			// 		this.$set(data, 'active', false);
			// 		this.selectData = this.selectData.filter(stu => stu.userCode != data.userCode);
			// 	}
				
			// }else{
			// 	this.selectData=[]
			// 	this.selectData.push(data);
			// }
			
			// this.$emit('clickNode', this.selectData);
		},
		rightClickBack(data){
			console.log('rightClickBack',data)
		},
		checkBoxFun(item) {
			console.log('checkBoxFun',data)
		},
		// clickNodeWrap(data){
		// 	console.log('clickNodeWrap',data)
		// }
	}
};
</script>
