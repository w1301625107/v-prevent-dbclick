<template>
  <div class="contain">
      <nav>
        <ul>
          <li v-for="(comp,index) in allComponent" :key="index">
            <a  :href="`#${comp.desc.header}`">{{comp.desc.header}}</a>
          </li>
        </ul>
      </nav>
      <article>
        <section class="demo" v-for="(comp,index) in allComponent" :key="index">
          <div :id="comp.desc.header" class="content">
            <h2>{{comp.desc.header}}</h2>
            <component :is="comp.file"/>
          </div>
          <highlightjs v-if="comp.desc.desc" language='markDown' :code="comp.desc.desc"/>
          <highlightjs language='javascript' :code="comp.desc.tpl" />
        </section>
      </article>
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
.contain{
  display: flex;

  overflow: scroll;
  overflow-x: hidden;
}
article{
  flex: 1;
  margin-left: 250px;
}
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
nav{
  width: 250px;
  position: fixed;
}
ul{
  padding-left: 0;
}
ul li{
  list-style: none;
  text-align: left;
  margin: 20px 0;
}

ul li a{
  color: #444;
    font-size: 14px;
  text-decoration: none;
}

ul li a:hover{
  color: #50bfff;
}
</style>
