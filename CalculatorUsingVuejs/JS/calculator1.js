


var one = new Vue({
    el          : '#vue-app-one',
    delimiters  : ['[[',']]'],
    data  :  {
        discount : 0,
        price : 0,
        qty : 0,
        grossamount : 0,
        discountamount : 0,
        totalbill : 0,
        cessamount : 0,
    },
    methods: {
        calculategrossamount(){
            this.grossamount = this.price * this.qty ;
            this.totalbill = this.grossamount - this.discountamount + this.cessamount;
        },
        calculatediscountamount(){
            this.discountamount = this.grossamount * (this.discount/100) ;
            this.totalbill = this.grossamount - this.discountamount + this.cessamount;
        },
        calculatecessammountopt1(){
            this.cessamount = 0 ;
            this.discountamount = this.grossamount * (this.discount/100) ;
            this.totalbill = this.grossamount - this.discountamount + this.cessamount;
        },
        calculatecessammountopt2(){
            this.discountamount = this.grossamount * (this.discount/100) ;
            this.cessamount = (this.grossamount - this.discountamount)*(1/100);
            this.totalbill = this.grossamount - this.discountamount + this.cessamount;
        },
        calculatetotalbill(){
            this.totalbill = this.grossamount - this.discountamount + this.cessamount;
        }
    },

});

var two = new Vue({
    el          : '#vue-app-two',
    delimiters  : ['[[',']]'],
    data  :  {
        discount : 0,
        price : 0,
        qty : 0,
        grossamount : 0,
        discountamount : 0,
        totalbill : 0,
        cessamount : 0,
    },
    methods : {
        greet(){
            one.discount = 50;
            console.log("Hello Two");
        }
    },
});