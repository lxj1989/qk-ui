# LoadingBar 加载进度条
----
全局创建了一个用于显示页面加载、异步请求的加载进度条。
因为可复用性的关系，```LoadingBar``` 只会全局创建一个实例，而且在 ```Vue.prototype``` 中添加了全局对象 ```$Loading```，可以直接通过 ```this.$Loading``` 操作实例
### 基础用法
通过调用 $Loading 提供的三种方法来控制全局的加载进度条 ```start()```、```end()```、```error()```

<script>
    export default{
  	  
  	data() {
  		return {
  			dialogVisible:false
  		}
  	},
      methods: {
        start () {
          this.dialogVisible = true
		  console.log(this.dialogVisible)
        },
		close(){
			this.dialogVisible = false
		}
      }
    }
  </script>
<div class="dome-alert demo-block">
	<qk-dialog 
		:isShowDialog.sync="dialogVisible" 
		title="成功提示的文案"
		width="500px"
		height="300px"
		>
		<template slot="footer">
			<w-button size="small" plain  @click="close">取消</w-button>
			<w-button size="small" type="success" plain>确认</w-button>
		</template>
	</qk-dialog >
  <w-button @click="start">开始</w-button>
</div>

::: demo

```html
<script>
    export default{
  	  
  	data() {
  		return {
  			dialogVisible:false
  		}
  	},
      methods: {
        start () {
          this.dialogVisible = true
		  console.log(this.dialogVisible)
        },
		close(){
			this.dialogVisible = false
		}
      }
    }
  </script>
<div class="dome-alert demo-block">
	<qk-dialog 
		:isShowDialog.sync="dialogVisible" 
		title="成功提示的文案"
		width="500px"
		height="300px"
		>
		<template slot="footer">
			<w-button size="small" plain @click="close">取消</w-button>
			<w-button size="small" type="success" plain>确认</w-button>
		</template>
	</qk-dialog >
  <w-button @click="start">开始</w-button>
</div>
```

:::


### LoadingBar config参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| speed | 加载速度 | Number | 0-100 | 5 |
| easing | spinner加载动画 | String | linear, ease, cubic-bezier... | 贝萨尔曲线值|
| percentNum | 每次前进的百分比 | Float | 0-1 | Math.random() |
| showSpinner | 是否显示spinner | Boolean | true, false | 是否显示spinner |

