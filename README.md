# v-prevent-dbclick

一种避免元素重复点击的组件

## 使用方法
```html
  <template>
    <div id="app">
      <v-prevent-dbclick >
        <template v-slot="{startTap,status}">
          <button @click="clickTest(1,startTap)">{{status?`不可点击`:`可以点击`}}</button>
        </template>
      </v-prevent-dbclick>
    </div>
  </template>
```
```js

 <script>
  export default {
    name: 'App',
    components: {
    },
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

## slot-scope 
### status Boolean
status 代表当前状态是否可点击

### startTap Function
startTap `调用`后将使状态变为`可点击`

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
