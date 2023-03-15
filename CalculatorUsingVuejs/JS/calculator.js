
var one = new Vue({
    el          : '#vue-app-one',
    delimiters  : ['[[',']]'],
    data  :  {
        discount : 0,
        price : 0,
        qty : 0,
        grossamount : 0,
        discountamount : 0,
        cessamount : 0,
    },
    methods: {
        calculategrossamount(){
            this.grossamount = this.price * this.qty ;
            
        },
        calculatediscountamount(){
            this.discountamount = this.grossamount * (this.discount/100) ;
        },
        calculatecessammountopt1(){
            this.cessamount = 0 ;            
        },
        calculatecessammountopt2(){
            this.cessamount = (this.grossamount - this.discountamount)*(1/100);
        }
    },
    computed : {
        totalbill() {
            return this.grossamount - this.discountamount + this.cessamount;
        },

    }

});

