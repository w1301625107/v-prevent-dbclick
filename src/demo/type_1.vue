<template>
<div>
    <section class="demo" v-for="(comp,index) in allComponent" :key="index">
      <div class="content">
        <h2>{{comp.desc.header}}</h2>
        <component :is="comp.file"/>
      </div>
      <highlightjs v-if="comp.desc.desc" language='markDown' :code="comp.desc.desc"/>
      <highlightjs language='javascript' :code="comp.desc.tpl" />
    </section>

</div>
  
</template>

<script>
const files = require.context(
  ".",
  false,
  /\bexample_\d*\.vue/
);

const allComponent = [];
files.keys().forEach(element => {
  allComponent.push({
    file:files(element).default,
    desc:files(element).desc||{}
  })
});
console.log("🚀 ~ file: type_1.vue ~ line 26 ~ allComponent[files ~ allComponent", allComponent)
export default {
  data(){
    return{
      allComponent,
    }
  },
  methods:{
  }
}
</script>

<style scoped>
.demo:hover{
  box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
}

.demo{
  margin-bottom: 10px;
  text-align: left;
  border:1px solid #ebebeb;
}
.content{
  padding: 10px;
}
.demo >>>.hljs {
  padding: 10px;
  text-align: left;
}
</style>
