<template>

    <div>
        <h2>Hello</h2>
        <input type="text" v-model="title" >
        
        <input type="text" v-model="content" >

        <button v-on:click="post()">Post</button>
        <button v-on:click="get()">Get</button>

    </div>
   
   </template>
   
   <script>

   export default {
     data () {
       return {
            title       : "title",
            content     : "content",
       }
     },
     methods :{
       post : function(){
        alert('post');
         this.$http.post('https://jsonplaceholder.typicode.com/posts',{
            title  : this.title,
            body   : this.content,
            userId : 1
         }).then(function(data){
            alert(data);
            console.log(data);
         });
       },
       get : function(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
            console.log(data);
         });
       }
   },
}