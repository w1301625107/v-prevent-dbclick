const tpl = `<template>
  <v-prevent-dbclick>
    <template v-slot="{onTap,status}">
      <button v-if="!status" key="1" @click="clickTest(1,onTap)">可以点击</button>
      <button v-else key="2" @click="unclickable()">不可点击</button>
    </template>
  </v-prevent-dbclick>
</template>

<script>
  export default {
    methods:{
      clickTest(v,onTap){
        console.log(\`It's click test.\`)
        setTimeout(() => {
          onTap()
        }, 3000);
      },
      unclickable(){
        console.log(\`It's unclickable.\`)
      }
    }
  }
</script>`


export const desc ={
  tpl,
  header:'基本用法',
}

