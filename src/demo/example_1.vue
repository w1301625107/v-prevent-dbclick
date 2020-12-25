<template>
  <v-prevent-dbclick>
    <template v-slot="{release,status}">
      <button v-if="!status"
              key="1"
              @click="clickTest(1,release)">保存</button>
      <span v-else>保存中...</span>
    </template>
  </v-prevent-dbclick>
</template>

<script>
export { desc } from "./example_1";

export default {
  methods: {
    clickTest(v, release) {
      setTimeout(() => {
        release();
      }, 3000);
    },
  },
};
</script>