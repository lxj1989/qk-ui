# Toast 提示框
----
全局创建了一个用于显示页面加载、异步请求的提示框。
因为可复用性的关系，```Toast``` 只会全局创建一个实例，而且在 ```Vue.prototype``` 中添加了全局对象 ```$Loading```，可以直接通过 ```this.$Loading``` 操作实例
### 基础用法
通过调用 qkMessage 提供的三种方法来控制全局的提示框 ```qkMessage(success)```、```qkMessage('warning')```、```showToast('danger')```

### 基础用法
通过调用 qkMessage 提供的三种方法来控制全局的提示框 ```$qkToast('上边弹出',{position: 'top'})```、```$qkToast('底部弹出',{position: 'bottom'})```、```$qkToast('中间弹出',{position: 'middle'})```




### 常规配置
提供 Toast 的全局配置，使用方法如下：

<div class="demo-block">
   <qk-button @click="message('success')">success</qk-button>
   <qk-button @click="message('warning')">warning</qk-button>
   <qk-button @click="message('danger')">danger</qk-button>
   <qk-button @click="message('info')">info</qk-button>
   
</div>



::: demo

```html
<qk-button @click="message('success')">success</qk-button>
<qk-button @click="message('warning')">warning</qk-button>
<qk-button @click="message('danger')">danger</qk-button>
<qk-button @click="message('info')">info</qk-button>
<script>
  export default{
    methods: {
		
		
    
		message(type){
			this.$qkMessage({
				message: '恭喜你，这是一条成功消息',
				type: type
			});
		},
     
    }
  }
</script>
```

:::
### Toast config参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 类型 | String | success，warning，danger，info | success |
| $qkMessage | 类型 | String | success， warning， danger，info  | success|

