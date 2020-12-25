<template>
  <div>
    A:<v-prevent-dbclick >
      <template v-slot="{release,status}">
        <button v-if="!status" key="1" @click="clickTest(1,release)">可以点击</button>
        <button v-else key="2" @click="unclickable()">不可点击</button>
      </template>
    </v-prevent-dbclick>
    B:<v-prevent-dbclick :stopPropagation="false">
      <template v-slot="{release,status}">
        <button v-if="!status" key="1" @click="clickTest(1,release)">可以点击</button>
        <button v-else key="2" @click="unclickable()">不可点击</button>
      </template>
    </v-prevent-dbclick>
  </div>
</template>

<script>
export { desc } from "./example_3"
export default {
  methods:{
    clickTest(v,release){
      setTimeout(() => {
        release()
      }, 3000);
    },
    unclickable(){
      alert('unclickable.')
    }
  }
}
</script>