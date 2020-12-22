# v-prevent-dbclick

用于各种需要避免重复点击的地方。
比如

- 多个购买按钮，在其中一个购买完成前避免其他购买按钮的点击
- 保存按钮，保存成功前避免重复提交
- 各种 ajax 请求，避免因点击重复请求

## usage

```html
<template>
  <v-prevent-dbclick>
    <template v-slot="{startTap,status}">
      <button @click="clickTest(1,startTap)">
        {{status?`不可点击`:`可以点击`}}
      </button>
    </template>
  </v-prevent-dbclick>
</template>
```

```js
<script>
  export default {
    methods:{
      clickTest(v,startTap){
        console.log(`It's click test.`)
        setTimeout(() => {
          startTap()
        }, 3000);
      }
    }
  }
</script>
```

## props

> 下面中所指的 status 均为 slot-scope 中的 status

|      param      | required |  type   |  default  | describe                                                       |
| :-------------: | :------: | :-----: | :-------: | :------------------------------------------------------------- |
|    debounce     |        | number  |     0     | 就是 debounce 啦                                               |
|      group      |        | string  | undefined | 分组名称，设置后，相同组的点击状态将会同步                     |
| stopPropagation |        | boolean |   true    | 阻止冒泡，默认在`status`为`true`时，阻止 slot 内所有的点击操作 |
|    doNothing    |        | boolean |   false   | 什么都不做，可以接收同一个`group`传递的状态                    |

## slot-scope

|   param    |      type      | describe                                                                                       |
| :--------: | :------------: | :--------------------------------------------------------------------------------------------- |
|   status   |    Boolean     | 代表当前状态是否是点击过                                                                       |
| customInfo |      Any       | 调用 onTap 时传入的数据，可以用来传递各种东西，比如消息                                        |
|   onTap    | Function(info) | onTap `调用`后将使状态变为`未点击过`，参数 info 会作为 slot-scope 的另一个属性 customInfo 的值 |



## Caution

- 注意查看vue 版本，不是2.6以上vue版本，不能直接使用demo中的v-slot的语法，需要使用旧的slot 语法[2.6之前的slot 语法](https://cn.vuejs.org/v2/guide/components-slots.html#%E5%BA%9F%E5%BC%83%E4%BA%86%E7%9A%84%E8%AF%AD%E6%B3%95)
```html
2.6+语法
<template>
  <v-prevent-dbclick>
    <template v-slot="{startTap,status}">
      <button @click="clickTest(1,startTap)">
        {{status?`不可点击`:`可以点击`}}
      </button>
    </template>
  </v-prevent-dbclick>
</template>
```

```html
2.6之前的语法
<template>
  <v-prevent-dbclick>
    <template slot-scope="{data,item}">
      <button @click="clickTest(1,startTap)">
        {{status?`不可点击`:`可以点击`}}
      </button>
    </template>
  </v-prevent-dbclick>
</template>
```