<template>
   <div  >
    <h1>{{title}}</h1> 
    <p>{{ greeting() }}</p>
    <ninjas></ninjas>
    <app-header v-on:changeTitle="updateTitle($event)" 
    v-on:updateTitle="updateTitle($event)"></app-header>
    <app-footer v-bind:title="title"></app-footer> 
    <ninja-1 ninjas="1234"></ninja-1> 
    <formhelper>
      <div slot="form-header">
        <p>I am the form Header</p>
      </div>
    </formhelper>
  

  </div> 
</template>

<script>
import Footer from './components/Footer.vue';
import FormHelper from './components/FormHelper.vue';
import Header from './components/Header.vue';
import Ninja1 from './components/Ninja1.vue';
import Ninjas from './Ninjas.vue';


export default {
  components: {
      'ninjas'      : Ninjas,
      'app-header'  : Header,
       'app-footer' : Footer,
       'ninja-1'    : Ninja1,
       'formhelper' : FormHelper,
    },
  data () {
    return {
      title  : 'Ninja-App',
      stitle : 'formslot'
    }
  },
  methods :{
    greeting : function(){
      return "Hello Vue Js"
    },
    updateTitle: function(uptitle){
      this.title = uptitle;
    }
  }
}
</script>

<!-- 
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style> -->
