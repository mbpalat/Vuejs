<template>
   <div>
     <h1 v-on:click="changeTitle">{{ header }}</h1>
     <h1 v-on:click="change">{{ header }}</h1>
     <h1>{{ title }}</h1>
   </div>
  
  </template>
  
  <script>

import { bus } from '../main';

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
        },
        updateTitle : function(){
            this.title = "Change wizards";
            bus.$emit('updateTitle','VueH1wizards');
        }
    }
  }
  </script>