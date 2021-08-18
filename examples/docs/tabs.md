# tabs 标签
----
全局创建了一个用于显示页面加载、异步请求的标签。
因为可复用性的关系，```tabs``` 只会全局创建一个实例，而且在 ```Vue.prototype``` 中添加了全局对象 ```$Loading```，可以直接通过 ```this.$Loading``` 操作实例
### 基础用法
通过调用 $Loading 提供的三种方法来控制全局的标签 ```start()```、```end()```、```error()```

<script>
    export default{
  	  
  	data() {
  		return {
  			selectedKey: 'sport'
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
	<qk-tabs :selected.sync="selectedKey">
	  <qk-tabs-head>
	    <!-- <template slot="action">
	      <qk-button>操作</qk-button>
	    </template> -->
	    <qk-tabs-item name="sport">体育</qk-tabs-item>
	    <qk-tabs-item name="finance">
		  <i class="qk-icon-close fs-24"></i>财经
	    </qk-tabs-item>
	    <qk-tabs-item name="international" disabled>国际</qk-tabs-item>
	  </qk-tabs-head>
	  <qk-tabs-body>
	    <qk-tabs-pane name="sport">体育资讯</qk-tabs-pane>
	    <qk-tabs-pane name="finance">财经资讯</qk-tabs-pane>
	    <qk-tabs-pane name="international">国际资讯</qk-tabs-pane>
	  </qk-tabs-body>
	</qk-tabs>
</div>

::: demo

```html
<script>
    export default{
  	  
  	data() {
  		return {
  			selectedKey: 'sport'
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
	<qk-tabs :selected.sync="selectedKey">
	  <qk-tabs-head>
	    <!-- <template slot="action">
	      <qk-button>操作</qk-button>
	    </template> -->
	    <qk-tabs-item name="sport">体育</qk-tabs-item>
	    <qk-tabs-item name="finance">
		  <i class="qk-icon-close fs-24"></i>财经
	    </qk-tabs-item>
	    <qk-tabs-item name="international" disabled>国际</qk-tabs-item>
	  </qk-tabs-head>
	  <qk-tabs-body>
	    <qk-tabs-pane name="sport">体育资讯</qk-tabs-pane>
	    <qk-tabs-pane name="finance">财经资讯</qk-tabs-pane>
	    <qk-tabs-pane name="international">国际资讯</qk-tabs-pane>
	  </qk-tabs-body>
	</qk-tabs>
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

