<template>
    <div id="form-header">
        <slot name="form-header"></slot>
        <p>Slot helper</p>
        <slot></slot>
    </div>
   
   </template>
   
   <script>



   export default {
     data () {
       return {
        stitle : 'Hello form helper'
       }
     },
     methods :{
     }
     
   }
   </script>

   <<style scoped>
      #form-header{
        background-color: blue;
        color : red;
      } 
   </style>
