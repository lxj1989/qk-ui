<style>
  .w__tag{
    margin-right: 10px;
  }
</style>

# Tree 树桩列表
----
### 基础用法
由`type`属性来选择tag的类型，也可以通过`color`属性来自定义背景色。

<div class="demo-block">
  <qk-tree></qk-tree>
</div>

::: demo
```html

  <qk-tree></qk-tree>

```
:::



## API

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| treeData | 显示数据 | Array | [] | [] |
| checkBox | 是否显示checkbox | Boolean |  `true`, `false` | false |
| showLine | 是否显示左侧竖线 | Boolean | `true`, `false` | false |
| multi | 是否多选 | Boolean | `true`, `false` | false |
| replaces | 节点字段 | Object | - | {} |

## Tree 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| close | 点击关闭按钮时触发 | event |
