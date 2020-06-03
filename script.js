
var distancia = 300;


$('#botao-pular').click(function(){

    $('#sapo').css('margin-top', '300px');
    //
    $('#sapo').css('margin-left', distancia);
    //
    $('#sapo').css('border', '5px solid red');

    distancia = distancia + 50;

});