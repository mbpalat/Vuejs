var health = 100 ;
var width = '';
$('#bagimg').hide();

$('#punch').on('click',function(){
    health = health - 10 ;
    console.log("health --> "+ health);
    width = health+'%';
    $('#healthbar').css('width', width);
    var img = "url('../Images/bag-burst.png')";
    if(health == 0){
        $('#bag').hide();
        $('#bagimg').show();
        $('#punch').hide();
    }
});

$('#restart').on('click',function(){
    health = 100 ;
    width = '100%';
    $('#healthbar').css('width', width);
    $('#bagimg').hide();
    $('#bag').show();
    $('#punch').show();
});