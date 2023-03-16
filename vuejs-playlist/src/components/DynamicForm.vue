<template>

    <div >
        <keep-alive>
            <component v-bind:is="component"></component>
        </keep-alive>
        <button v-on:click="component = 'form-one'">Show form One</button>
        <button v-on:click="component = 'form-two'">Show form two</button>

    </div>
   
   </template>
   
   <script>

import FormOne from './FormOne.vue';
import FormTwo from './FormTwo.vue';

   export default {
  components: { 
        'form-one' : FormOne,
        'form-two' : FormTwo,
     },
     data () {
       return {
         component : 'form-two'
       }
     },
     methods :{
      post : function(){

      }
     }
   }
