const tpl = `<template>
  <v-prevent-dbclick>
    <template v-slot="{onTap,status}">
      <button v-if="!status"
              key="1"
              @click="clickTest(1,onTap)">保存</button>
      <span v-else>保存中...</span>
    </template>
  </v-prevent-dbclick>
</template>

<script>
export default {
  methods: {
    clickTest(v, onTap) {
      setTimeout(() => {
        onTap();
      }, 3000);
    },
  },
};
</script>`


export const desc ={
  tpl,
  header:'基本用法',
}

