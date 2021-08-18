# Toast 提示框
----
全局创建了一个用于显示页面加载、异步请求的提示框。
因为可复用性的关系，```Toast``` 只会全局创建一个实例，而且在 ```Vue.prototype``` 中添加了全局对象 ```$Loading```，可以直接通过 ```this.$Loading``` 操作实例
### 基础用法
通过调用 showToast 提供的三种方法来控制全局的提示框 ```showToast(success)```、```showToast('warning')```、```showToast('danger')```

### 基础用法
通过调用 showToast 提供的三种方法来控制全局的提示框 ```$qkToast('上边弹出',{position: 'top'})```、```$qkToast('底部弹出',{position: 'bottom'})```、```$qkToast('中间弹出',{position: 'middle'})```


:::

### 常规配置
提供 Toast 的全局配置，使用方法如下：

<div class="demo-block">
   <qk-button @click="top()">top</qk-button>
   <qk-button @click="bottom()">bottom</qk-button>
   <qk-button @click="middle()">middle</qk-button>
   <qk-button @click="message()">message</qk-button>
   
</div>
<div class="demo-block">
   <qk-button @click="showToast('success')">success</qk-button>
   <qk-button @click="showToast('warning')">warning</qk-button>
   <qk-button @click="showToast('danger')">danger</qk-button>
   <qk-button @click="showToast('nomal')">nomal</qk-button>
   <qk-button @click="showToast('def')">def</qk-button>
</div>



::: demo

```html
<qk-button @click="$qkToast('上边弹出',{position: 'top'})">top</qk-button>
<qk-button @click="$qkToast('底部弹出',{position: 'bottom'})">bottom</qk-button>
<qk-button @click="$qkToast('中间弹出',{position: 'middle'})">middle</qk-button>
<script>
  export default{
    methods: {
		showToast(type) {
		  this.$qkToastC({
		    type,
		    autoClose: true,
		    closeTime: 3000,
		    showButton: true,
		    zIndex: 999,
		    message:
		      "我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息我是信息"
		  });
		},
		
     top () {
       this.$qkToast({
         closeButton: {
            text: '收到'
         },
         autoClose: false,
		 position: 'top',
         closeTime: 13000,
         showButton: true,
         zIndex: 999,
         message:"上边弹出"
       });
	   
     },
     middle () {
       this.$qkToast({
         closeButton: {
            text: '收到'
         },
         autoClose: false,
       		 position: 'middle',
         closeTime: 13000,
         showButton: true,
         zIndex: 999,
         message:"上边弹出"
       });
     },
     bottom () {
      this.$qkToast({
        closeButton: {
           text: '收到'
        },
        autoClose: false,
      		 position: 'bottom',
        closeTime: 13000,
        showButton: true,
        zIndex: 999,
        message:"上边弹出"
      });
     },
	 message(){
		 this.$qkMessage({
		   message: '恭喜你，这是一条成功消息',
		   type: 'success'
		 });
	 },
     setShowSpinner () {
       this.$loading.config({
         showSpinner: false
       })
       this.$loading.start()
     }
    }
  }
</script>
```

:::
### Toast config参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 类型 | String | success，warning，danger，nomal，def | def |
| $qkToast | 第二种 | String | top, middle, bottom | top|

