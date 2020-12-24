const tpl = `<template>
  <div>
    A:<v-prevent-dbclick >
      <template v-slot="{onTap,status}">
        <button v-if="!status" key="1" @click="clickTest(1,onTap)">可以点击</button>
        <button v-else key="2" @click="unclickable()">不可点击</button>
      </template>
    </v-prevent-dbclick>
    B:<v-prevent-dbclick :stopPropagation="false">
      <template v-slot="{onTap,status}">
        <button v-if="!status" key="1" @click="clickTest(1,onTap)">可以点击</button>
        <button v-else key="2" @click="unclickable()">不可点击</button>
      </template>
    </v-prevent-dbclick>
  </div>
</template>

<script>
export default {
  methods:{
    clickTest(v,onTap){
      setTimeout(() => {
        onTap()
      }, 3000);
    },
    unclickable(){
      alert('unclickable.')
    }
  }
}
</script>`


export const desc ={
  tpl,
  header:'使用stopPropagation的区别',
  desc:`默认\`stopPropagation\`值为\`true\`,将会在一次点击成功后\`阻止\`后续的点击操作，直至调用onTap函数释放。
设置为\`stopPropagation\`值为\`false\`后则\`不阻止\`后续的点击，方便做一些个性化操作
  `
}

