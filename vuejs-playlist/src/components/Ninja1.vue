<template>
    <div id="ninjas">
        <h2>Hello</h2>
      <ul>
        <li v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show">
        <h2>{{ ninja.name }}</h2>
        <h2 v-show="ninja.show">{{ ninja.speciality }}</h2>
        </li>
      </ul>
    </div>
   
   </template>
   
   <script>
   export default {
     data () {
       return {
         ninjas : [
            {name:'Ryu',speciality:'Vue Components',show:false},
            {name:'Martha',speciality:'HTML',show:false}
         ]
       }
     },
     methods :{
      
     }
   }
   </script>