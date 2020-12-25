<template>
  <div>
    <v-prevent-dbclick :group="'A'">
      <template v-slot="{release,status,isEmitter}">
        <button v-if="!status" key="1" @click="clickTest(1,release)">购买A</button>
        <button v-else key="2" >{{isEmitter?'处理中':'等待B结束'}}</button>
      </template>
    </v-prevent-dbclick>
    <v-prevent-dbclick :group="'A'">
      <template v-slot="{release,status,isEmitter}">
        <button v-if="!status" key="1" @click="clickTest(1,release)">购买B</button>
        <button v-else key="2" >{{isEmitter?'处理中':'等待A结束'}}</button>
      </template>
    </v-prevent-dbclick>
  </div>
</template>

<script>
export { desc } from "./example_2"
export default {
  methods:{
    clickTest(v,release){
      setTimeout(() => {
        release()
      }, 3000);
    }
  }
}
</script>