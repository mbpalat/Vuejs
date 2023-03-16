<template>
    <div id="ninjas">
        <h2>Hello</h2>
        <h3 v-bind:title="title">Ninjas</h3>
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
        // props : {
        //     ninjas : {
        //         type : Array,
        //         required : true
        //     }
        // },
       return {
         ninjas : [
            {name:'Ryu',speciality:'Vue Components',show:false},
            {name:'Martha',speciality:'HTML',show:false}
         ],
         title : 'Hello Ninjas',
       }
     },
     methods :{
      
     }
   }
   </script>