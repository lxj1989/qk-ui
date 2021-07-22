<template>
	<ul class="cus_tree_ul" :class="{cus_tree_ulLine:(treeData && treeData.length)}" :style="'position:relative;'+showLine && 'padding-left:16px'">
		<li :style="[{'--lineWidth': showLine  ? '1px': '0px'},{'--lineWidth': item.children && item.children.length >0  ? '1px': '0px'}]" v-for="(item,i) in treeData" @contextmenu="rightclick(item)" :class="item.active?'treeactive':''" >
			<div class="cus_item_content" :title="item.text" @click="clickNode(item,i)" :id= item.id  >
				<span 
					v-show="item[replaces && replaces.children] && item[replaces && replaces.children].length>0"
					class="treeExpandBtn " 
					@click.stop="toggleNode(item)" 
					:class="item.expand?'qk-icon-right':'qk-icon-down'">
				</span>
				
				<!-- <i v-if="item.userCode" class="qk-icon-right" style="color:#4e79ad;"></i>
				<i v-else class="qk-icon-down" style="color:#4e79ad;"></i> -->
				
				
				<span v-if="checkBox" @click="checkBoxClick(item)" class="cus_chekcbox" :class="{cus_chekcbox_checked:item.checked,cus_chekcbox_part_checked:item.partchecked}"></span>
				<!-- <span>{{item[replaces.title]}}</span> -->
				<span>{{item.userCode ?item.realname:item.label}}</span>
				
				<!-- <i class="el-icon-check " v-if="selectIndexs.includes(i)" :class="selectIndexs.includes(i)?'checkactive':''"></i> -->
				<i class="el-icon-check " v-show="multi" :class="item.active?'checkactive displayB':'displayN'"></i>
			</div>
			<qk-tree-item 
				:flow="flow+1" 
				:treeData="item[replaces && replaces.children]" 
				@rightClickCom='rightClickCom'  
				@clickNodeCom="clickNodeCom"  
				:checkBox="checkBox" 
				:style="{'--lineWidth': showLine  ? '1px': '0px'}"
				:showLine="showLine"
				:class="item.expand?'displayN':'displayB'" 
				:replaces="item.isMember?replacesM : replaces"
				:multi="multi"
				
				@toggleCheckBox="checkBoxFun(item)" ></qk-tree-item> 
		</li>
	</ul>
</template>

<script>
	export default {
		name:"qk-tree-item",
		props: ['treeData', 'checkBox','flow','showLine','multi','replaces','isMember'],
		// props: {
		// 	treeData: {
		// 		type: Array,
		// 		default:()=>[]
		// 	},
		// 	checkBox: {
		// 		type: Boolean,
		// 		default: false
		// 	},
		// 	showLine: {
		// 		type: Boolean,
		// 		default: false
		// 	},
		// 	flow:{
		// 		type: Number,
		// 		default: 1
		// 	},
		// 	multi: {
		// 		type: Boolean,
		// 		default: true
		// 	},
		// 	replaces: {
		// 		type: [Object,Array],
		// 		default: function() {
		// 			return  {
		// 				children: 'children',
		// 				title: 'label',
		// 				key: 'code'
		// 			}
		// 		}
		// 	},
		// 	isMember: {
		// 		type: Boolean,
		// 		default: false
		// 	}
		// },
		data(){
			// :class="{butopen:item.expand && item.children,btnclose:!item.expand && item.children,line: !item.last && !item.children,lastLine:item.last&&!item.children}"
			// :class="{cus_checkbox_allchecked:item.checked}" 
			return {
				inputDisabled:true,
				selectIndexs:[],
				replacesM:{
					children: 'children',
					title: 'realname',
					key: 'userCode'
				}
			}
		},
		mounted() {
			// console.log(this.isMember)
		},
		
		methods: {
			clickNode(item,i) {
				// if(this.multi){	//多选
					
				// }else{
					
				// }
				this.$emit('clickNodeCom', item);
				// if(item.userCode){		//如果点击的是员工
				// 	if(item.active){
				// 		this.$set(item,'active',false)
				// 	}else{
				// 		this.$set(item,'active',true)
				// 	}
				// 	this.$emit('clickNodeCom', item);
					
				// }else{
					
				// }
				
				//老版，保存
				// if(item.code){		//如果点击的是组织架构
				// 	this.getChildMember(item)
				// }else{
				// 	if(item.active){
				// 		this.$set(item,'active',false)
				// 	}else{
				// 		this.$set(item,'active',true)
				// 	}
				// 	this.$emit('clickNodeCom', item);
				// }
				
			},
			//获取组织架构下人员
			rightclick(item){
				event.preventDefault()
				this.$emit('rightClickCom',item)
			},
			dbClickHandle(item,e){
				this.inputDisabled = false
				// console.log(e)
				// window.getSelection().selectAllChildren(item.text)
				// console.log(e.target.focus)
				e.target.focus()
				
				e.target.style.background='white'
				// window.getSelection().selectAllChildren(e.target)
				// console.log(window.getSelection().selectAllChildren(e.target))
					
				// this.inputDisabled = false
			},
			closeFocus(){
				this.inputDisabled=true
				event.target.style.background='none'
			},
			toggleNode(item) {
				// item.expand = !item.expand;
				
				if(item.expand){
					// item.active = false;
					this.$set(item,'expand',false)
				}else{
					// item.active = true;
					this.$set(item,'expand',true)
				}
				// console.log(item.expand)
				// item.active = !item.active;
			},
			clickNodeCom(item) {
				// console.log(item,new Date().getTime())
				// this.inputDisabled = false
				// if(item.active){
				// 	this.$set(item,'active',false)
				// }else{
				// 	this.$set(item,'active',true)
				// }
				this.$emit('clickNodeCom', item);
			},
			rightClickCom(data){
				this.$emit('rightClickCom',data);
			},
			checkBoxClick(item) {
				return
				item.partchecked = false;
				item.checked = !item.checked;
				//设置子元素是否勾选
				var checkChildFun = (childrenDatas) => {
					childrenDatas.forEach((m) => {
						m.checked = item.checked;
						if (m.children) {
							checkChildFun(m.children);
						}
					})
				}
				if (item.children) {
					checkChildFun(item.children);
				}
				this.$emit('toggleCheckBox');
			},
			checkBoxFun(item) {
				var checkedNum = 0;
				var partCheckedNum = 0;
				item.children.forEach((li) => {
					if (li.checked === true) {
						checkedNum++;
					} else if (li.partchecked === true) {
						partCheckedNum++;
					}
				})
				if (checkedNum === item.children.length) { //全选
					item.checked = true;
					item.partchecked = false;
				} else if (checkedNum > 0 || partCheckedNum > 0) { //部分勾选
					item.checked = false;
					item.partchecked = true;
				} else { //没有勾选
					item.checked = false;
					item.partchecked = false;
				}
				this.$emit('toggleCheckBox')
			},
		}
	}
	
	
</script>

<style scoped="scoped">
	.cus_vtree_wrap>ul:first-child {
		background-image: none;
	}
	ul.cus_tree_ul {
		padding-left: 0;
		/* background-image: url('../images/index.gif'); */
		background-position: 4px 10px;
		background-repeat: repeat-y;
		margin: 0;
	}
	li:last-child>ul.cus_tree_ul:last-child {
		background-image: none;
	}
	ul.cus_tree_ul li {
		text-align: left;
		cursor: pointer;
		list-style: none;
		position: relative;
	}
	.cus_item_content span.treeExpandBtn {
		display: inline-block;
		width: 18px;
		height: 18px;
		/* margin-right: 6px; */
		/* background-image: url('../images/zTreeStandard.png'); */
	}
	.cus_vtree_wrap>ul>li:first-child>.cus_item_content>span.treeExpandBtn.butopen {
		background-position: -92px 0px
	}
	li .cus_item_content span.treeExpandBtn.butopen {
		background-position: -92px -18px
	}
	li:last-child .cus_item_content span.treeExpandBtn.butopen {
		background-position: -92px -36px
	}
	.cus_vtree_wrap ul.tree_root_lonely>li>.cus_item_content>span.treeExpandBtn.butopen {
		background-position: -92px -54px
	}
	.cus_vtree_wrap>ul>li:first-child>.cus_item_content>span.treeExpandBtn.btnclose {
		background-position: -74px -0px
	}
	li .cus_item_content span.treeExpandBtn.btnclose {
		background-position: -74px -18px
	}
	li:last-child .cus_item_content span.treeExpandBtn.btnclose {
		background-position: -74px -36px
	}
	.cus_vtree_wrap ul.tree_root_lonely>li>.cus_item_content>span.treeExpandBtn.btnclose {
		background-position: -74px -54px
	}
	.cus_item_content span.treeExpandBtn.lastLine {
		background-position: -56px -36px
	}
	.cus_item_content span.treeExpandBtn.line {
		background-position: -56px -18px
	}
	.cus_item_content .cus_chekcbox {
		display: inline-block;
		width: 14px;
		height: 14px;
		margin-right: 6px;
		/* background-image: url('../images/zTreeStandard.png'); */
		background-position: -0px -0px
	}
	.cus_item_content .cus_chekcbox.cus_chekcbox_checked {
		background-position: -14px -0px
	}
	.cus_item_content .cus_chekcbox.cus_chekcbox_part_checked {
		background-position: 0px -42px
	}
	ul.cus_tree_ul li .cus_item_content {
		padding: 4px;
		white-space: nowrap;
		overflow-x: hidden;
	}
	ul.cus_tree_ul li .cus_item_content:hover {
		background: rgba(0, 170, 255, 0.1);
		color: #000
	}
	
	ul.cus_tree_ul li:before {
	    position: absolute;
	    left: 12px;
	    width: var(--lineWidth);
	    height: 100%;
	    height: calc(100% - 22px);
	    margin: 22px 0 0;
	    /* border-left: var(--lineWidth) solid #d9d9d9; */
		border-left-width: var(--lineWidth);
		border-left-color: #d9d9d9;
		border-left-style: solid;
	    content: " ";
	}
	
	/* ul.cus_tree_ul li .cus_item_content.active {
		background: rgba(0,0,0,0.3);
		color: white;
	} */
	.folder {
		display: inline-block;
		width: 16px;
		height: 16px;
		margin-right: 6px;
		/* background-image: url('../images/zTreeStandard.png'); */
		background-position: -110px -0px
	}
	.file {
		display: inline-block;
		width: 18px;
		height: 18px;
		margin-right: 6px;
		/* background-image: url('../images/zTreeStandard.png'); */
		background-position: -110px -30px
	}
	.inputTreeFile{
		border:0;
		background:none;
		outline:none;
	}
	.treeactive {
		/* background: #4e79ad;
		color: white; */
	}
	.checkactive{
		position: absolute;
		right: 20px;
		top: 8px;
	}
	
	.displayN{
		display: none;
	}
	.displayB{
		display: block;
	}
	/* .fats-enter-active,
	.fats-leave-active {
	  transition: all 1.5s;
	  transition:max-height 1.6s;
	}
	.fats-enter, .fats-leave-to {
	    max-height:0px;
	}
	.fats-enter-to, .fats-leave{
	    max-height:100px;
	} */
</style>
