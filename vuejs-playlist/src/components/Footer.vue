<template>
    <footer>
      <p>{{ copyright }}</p>
    </footer>
   
   </template>
   
   <script>
   export default {
     data () {
       return {
        copyright : 'CopyRight 2017'
       }
     },
     methods :{
      
     }
   }
   </script>

   <style scoped>
   footer{
     background : #222;
     padding    : 6px;
     color      : white;
   }
   </style>