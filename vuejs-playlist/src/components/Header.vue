<template>
   <div>
     <h1 v-on:click="changeTitle">{{ header }}</h1>
     <h1 v-on:click="change">{{ header }}</h1>
     <h1>{{ title }}</h1>
   </div>
  
  </template>
  
  <script>
  export default {
    data () {
      return {
        header : 'Header',
        title  : 'title',
      }
    },
    methods :{
        change(){
            this.title = "Cahnged title";
        },
        changeTitle : function(){
            this.$emit('changeTitle','Vuewizards');
        }
    }
  }
  </script>