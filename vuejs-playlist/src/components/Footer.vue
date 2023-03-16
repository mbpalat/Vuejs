<template>
    <footer>
      <p>{{ copyright }}</p>
      <p>{{ title }}</p>
    </footer>
   
   </template>
   
   <script>

import { bus } from '../main';

   export default {
     data () {
       return {
        copyright : 'CopyRight 2017',
        title     : 'footer'
       }
     },
     methods :{
      created(){
        bus.$on("updateTitle", (data) => {
            this.title = data ;
        })
     }
   },
}
   </script>

   <style scoped>
   footer{
     background : white;
     padding    : 6px;
     color      : black;
   }
   </style>