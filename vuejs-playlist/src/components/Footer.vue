<template>
    <footer>
      <p>{{ copyright }}</p>
      <p>{{ title }}</p>
    </footer>
   
   </template>
   
   <script>
   export default {
     data () {
       return {
        copyright : 'CopyRight 2017',
        title     : 'footer'
       }
     },
     methods :{
      
     }
   }
   </script>

   <style scoped>
   footer{
     background : white;
     padding    : 6px;
     color      : black;
   }
   </style>