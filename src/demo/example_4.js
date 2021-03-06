const tpl = `<template>
  <v-prevent-dbclick>
    <template v-slot="{release,status,customInfo,sendInfo}">
      <button v-if="!status"
              key="1"
              @click="clickTest(1,release,sendInfo)">保存</button>
      <span v-else>保存中...</span>
      <span v-if="customInfo">{{customInfo}}</span>
    </template>
  </v-prevent-dbclick>
</template>

<script>
export default {
  methods: {
    clickTest(v, release,sendInfo) {
      setTimeout(() => {
        sendInfo(Math.random()>0.5?'执行出错了哦':'成功了哦')
        release();
      }, 3000);
    },
  },
};
</script>`


export const desc ={
  tpl,
  header:'传递customInfo',
}

