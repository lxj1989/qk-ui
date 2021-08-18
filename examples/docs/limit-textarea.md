# Limit 限制输入域
----
### 基础用法
Limit 可以控制用户输入的字符数，```placeholder``` 指定初始输入的提示文案
<div class="demo-block">
<qk-limit :maxLen="10" placeholder="最多输入10个字符" ref="singleText"></qk-limit>
<button @click="insert('<name>')" type="button">插入会员名</button>
</div>

::: demo
```html

<qk-limit v-mode="content" :max-len="10" placeholder="最多输入10个字符"></qk-limit>
<script>
export default {
  data() {
    return {
      content: ''
    };
  },
  
  methods:{
      async insert(myValue) {
            // const myField = document.querySelector('#textarea');
              const myField = this.$refs.singleText;
              if (myField.selectionStart || myField.selectionStart === 0) {
                  var startPos = myField.selectionStart
                  var endPos = myField.selectionEnd
                  this.content = myField.value.substring(0, startPos) + myValue 
                              + myField.value.substring(endPos, myField.value.length)
                  await this.$nextTick() // 这句是重点, 圈起来
                  myField.focus()
                  myField.setSelectionRange(endPos + myValue.length, endPos + myValue.length)
              } else {
                  this.content += myValue
              }
          },
   
  }
}
</script>
```
:::


### 裁剪超出字符
如果超过了限制的字符数，超过部分进行裁剪

<div class="demo-block">
<qk-limit :max-len="10" placeholder="最多输入10个字符" isCut></qk-limit>
 
</div>

::: demo
```html

<qk-limit v-mode="content" :max-len="10" placeholder="最多输入10个字符" is-cut></qk-limit>

```
:::

### 列高
通过 ```rows``` 属性指定```limit```的高度

<div class="demo-block">
<qk-limit :max-len="10" :rows="3" placeholder="最多输入10个字符" is-cut></qk-limit>
</div>


:::demo
```html

<qk-limit :max-len="10" :rows="3" placeholder="最多输入10个字符" is-cut></qk-limit>

```
:::

<script>
export default {
  data() {
    return {
      content: ''
    };
  },
  
  methods:{
      async insert(myValue) {
            // const myField = document.querySelector('#textarea');
              const myField = this.$refs.singleText;
              if (myField.selectionStart || myField.selectionStart === 0) {
                  var startPos = myField.selectionStart
                  var endPos = myField.selectionEnd
                  this.content = myField.value.substring(0, startPos) + myValue 
                              + myField.value.substring(endPos, myField.value.length)
                  await this.$nextTick() // 这句是重点, 圈起来
                  myField.focus()
                  myField.setSelectionRange(endPos + myValue.length, endPos + myValue.length)
              } else {
                  this.content += myValue
              }
          },
   
  }
}
</script>


## API

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| rows | 列高 | Number | — | 4 |
| max-len | Number | 最大长度限制 | - | 20 |
| is-cut | 超出字符是否裁剪 | Boolean | — | false |
| placeholder | 输入时需要显示的提示文案 | String | — | 请输入内容 |


## Limit 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| overText | 超出限制长度触发 | content |
|change   | 在 Input 值改变时触发| value |
