<template>
  <div>
    <PreventDbClick v-if="showV1" :group="'A'" id="v1">
      <template v-slot="{release}">
        <button id="b1" @click="clickTest(release)">购买A</button>
      </template>
    </PreventDbClick>
    <PreventDbClick v-if="showV2" :group="'A'" id="v2">
      <template v-slot="{release}">
        <button id="b2" @click="clickTest(release)">购买B</button>
      </template>
    </PreventDbClick>
  </div>
</template>

<script>
import PreventDbClick from "../../src/lib/index.vue"

export default {
  components:{
    PreventDbClick
  },
  props:{
    showV1:{
      type:Boolean,
      default:true
    },
    showV2:{
      type:Boolean,
      default:true
    }
  },
  methods:{
    clickTest(release){
      setTimeout(() => {
        release()
      }, 1000);
    }
  }
}
</script>