new Vue({
    el   : '#vue-app',
    delimiters: ['[[', ']]'],
    data : {
        health : 100,
        ended  : false
    },
    methods : {
        punch(){
            this.health -= 10 ;
            console.log("health ->"+ this.health);
            if( this.health === 0) {
                this.ended = true ;
            }
        },
        restart(){
            this.health = 100 ;
            this.ended  = false ;
        }

    },
    computed : {

    }
});