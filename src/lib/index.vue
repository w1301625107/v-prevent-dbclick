<template>
  <div class="pdc_wrapper" @click.capture="tapClick">
    <slot :startTap="startTap" :status="status">
      put something here!!!like a button!!!
    </slot>
  </div>
</template>


<script>
import {debounce} from './util'
export default {
  props:{
    delay:{
      type:Number,
      default:0
    }
  },
  data(){
    return{
      status:false,
      counting:false
    }
  },
  methods: {
    tapClick(e) {
      console.log(`it's tap click.`);
      if(this.status){
        e.stopPropagation();
        return
      }
      this.status = true
      this.$emit('stopTap')

    },
    startTap(){
      console.log(`it's release now.`)
      this.status = false
      this.$emit('startTap')
    }
  },
};
</script>


<style scoped>
.pdc_wrapper{
  display: inline;
  display: contents;
  /* position: relative; */
}
</style>