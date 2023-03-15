
var discount = 0;
var price = 0;
var qty = 0;
var grossamount = 0;
var totalbill = 0;
var cessamount = 0;


console.log("discount -->"+discount);
$("#price").on('keyup',function(){
    price = $("#price").val() ;
})

$("#qty").on('keyup',function(){
    qty = $("#qty").val() ;
    grossamount = price * qty ;
    $("#grossamount").val(grossamount);    
})

$('#calculator').on('click',function(){
    discount = $('#slider_output1').val();
    discountamount = grossamount * (discount/100) ;

    if($("#radio1").prop("checked")){
        cessamount = 0;
    }else{
        if($("#radio2").prop("checked")){
            cessamount = (grossamount-discountamount)*(1/100);
        }
    }
    totalbill = grossamount - discountamount + cessamount;
    
    $("#cessamount").val(cessamount);
    $("#discountamount").val(discountamount);
    $("#totalbill").val(totalbill);
})



