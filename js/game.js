// руководит началом игры. проверкой правил после хода. 
// игра содержит игроков, номер текущего игрока, метод проверки победы
function Game(){
this.currentPlayer = 1;
this.players = [];
};
// запускаем игру
Game.prototype.start = function () {
    this.currentPlayer = 1; //устанавливаем ход первого игрока
    //рендерим карту с кораблями
    $('.gameArea').remove();
    $('.wrap').append('<div class="gameArea"></div>');

gameArea.renderForGame();
};

// выставляем игрока кторый ходит
Game.prototype.changeCurrentPlayer = function () {
    if(this.currentPlayer == 1){
        this.currentPlayer = 2;
    }else{
        this.currentPlayer = 1
    }
};
// вернуть текущего игрока
Game.prototype.getCurrentPlayer = function () {
    return this.players[this.currentPlayer];
}

Game.prototype.startPlace = function(){
    gameArea.renderForPlace();
    // перебор кораблей для возможности их перетаскивания визуально
$('.ship').each(function (index)
{
   $(this).draggable({
        revert: true,
        snap: ".cell",
        snapMode: 'inner',
        stack: ".ui-draggable", 
        containment: ".gameArea",
         scroll:false,start: function(){
        var num = $(this).attr('num');
        console.log('select ship');
        console.log(player.ships[num]);
        player.selectShip(player.ships[num]);
        },
        stop: function(){

        }, 
    });
});



$('.cell').click(function(){
var i = Number($(this).attr('i'));
var j = Number($(this).attr('j'));
cell = gameArea.area[i][j];
    console.log('ship '+cell.ship+' blocked '+cell.blocked)
})
// перебор клеток для возможности их взаимодействия с перетаскиваемыми кораблями
// особенности работы плагина для бросания блоков в том что нижний блок определяется серединой перетаскиваемого блока
$('.cell').each(function (index)
{
    $(".cell").droppable({
  accept:".ship",
drop:function(event, ui){
    
var i = Number($(this).attr('i'));
var j = Number($(this).attr('j'));

console.log('cell coordinate',i,j);

ship = player.selectedShip;//получим корабль выбранный игроком
    if(Object.keys(ship).length != 0){//определяем выбран ли корабль по его длинне
        switch(ship.rotation+''){
                // поворот вниз    i++  j
            case '180':
if(rules.checkPlace(gameArea.area[i][j],ship.length,'down')){
    try{
    console.log('down');
    for(var k=1;k<=ship.length;k++){


                gameArea.area[i][j].setShip();

                    // $(this).attr('class', 'placed');
                    $('[i='+i+']+[j='+j+']').attr('class', 'placed');

                // console.log('set ship at ', i,j);
                $('#rotate').remove();
                i++;}
player.unSelectShip();
console.log('корабль встал');
    var num = ship.num;
    $('[num='+num+']').remove();

}catch(err){
    console.log(err);
    console.log('up');
            for(var k=1;k<=ship.length;k++){
                i--;
                gameArea.area[i][j].setShip();

                    // $(this).attr('class', 'placed');
                    $('[i='+i+']+[j='+j+']').attr('class', 'placed');

                console.log('set ship at ', i,j);
                $('#rotate').remove();
                }}
                player.unSelectShip();
                console.log('корабль встал');
    var num = ship.num;
    $('[num='+num+']').remove();

}else{
    console.log('нет');
}
                break;

                    //поворот влево i j--
            case '270':
if(rules.checkPlace(gameArea.area[i][j],ship.length,'left')){
    try{
    console.log('left');
    for(var k=1;k<=ship.length;k++){

                gameArea.area[i][j].setShip();

                    // $(this).attr('class', 'placed');
                    $('[i='+i+']+[j='+j+']').attr('class', 'placed');

                // console.log('set ship at ', i,j);
                $('#rotate').remove();
                j--;}
player.unSelectShip();
console.log('корабль встал');
    var num = ship.num;
    $('[num='+num+']').remove();
}catch(err){
    console.log(err);
    console.log('right');
            for(var k=1;k<=ship.length;k++){
                j++;
                gameArea.area[i][j].setShip();

                    // $(this).attr('class', 'placed');
                    $('[i='+i+']+[j='+j+']').attr('class', 'placed');

                console.log('set ship at ', i,j);
                $('#rotate').remove();
                }}
                player.unSelectShip();
                console.log('корабль встал');
    var num = ship.num;
    $('[num='+num+']').remove();

}else{
    console.log('нет');
}
                break;

                    //поворот вправро  i j++
            case '90':
if(rules.checkPlace(gameArea.area[i][j],ship.length,'right')){
    try{
    console.log('right');
    for(var k=1;k<=ship.length;k++){


                gameArea.area[i][j].setShip();

                    // $(this).attr('class', 'placed');
                    $('[i='+i+']+[j='+j+']').attr('class', 'placed');

                // console.log('set ship at ', i,j);
                $('#rotate').remove();
                j++;}
player.unSelectShip();
console.log('корабль встал');
    var num = ship.num;
    $('[num='+num+']').remove();

}catch(err){
    console.log(err);
    console.log('left');
            for(var k=1;k<=ship.length;k++){
                j--;
                gameArea.area[i][j].setShip();

                    // $(this).attr('class', 'placed');
                    $('[i='+i+']+[j='+j+']').attr('class', 'placed');

                console.log('set ship at ', i,j);
                $('#rotate').remove();
                }}
                player.unSelectShip();
                console.log('корабль встал');
    var num = ship.num;
    $('[num='+num+']').remove();

}else{
    console.log('нет');
}
                break;

            // поворот вверх i-- j
            default:

if(rules.checkPlace(gameArea.area[i][j],ship.length,'up')){
    try{
    console.log('up');
    for(var k=1;k<=ship.length;k++){

                gameArea.area[i][j].setShip();
                    // $(this).attr('class', 'placed');
                    $('[i='+i+']+[j='+j+']').attr('class', 'placed');
                // console.log('set ship at ', i,j);
                $('#rotate').remove();
                i--;}
player.unSelectShip();
console.log('корабль встал');
    var num = ship.num;
    $('[num='+num+']').remove();

}catch(err){
    console.log(err);
    console.log('down');
            for(var k=1;k<=ship.length;k++){
                i++;
                gameArea.area[i][j].setShip();

                    // $(this).attr('class', 'placed');
                    $('[i='+i+']+[j='+j+']').attr('class', 'placed');

                console.log('set ship at ', i,j);
                $('#rotate').remove();
                }}
                player.unSelectShip();
                console.log('корабль встал');
    var num = ship.num;
    $('[num='+num+']').remove();

}else{
    console.log('нет');
}

            
            };
    }else{console.log('no select ship');
};

console.log('принял на ',$(this).attr('i'), $(this).attr('j'))}})
});


//выбор корабля для расстановке на поле
$('.ship').click(function (){

    var num = $(this).attr('num');
    console.log('select ship');
    console.log(player.ships[num]);
    player.selectShip(player.ships[num]);
    player.selectedShip.elem = this;

    $('body').append(`
    <div id="rotate">   
    <span onclick=rotate("+90")>Повернуть влево</span>
    <span onclick=rotate("-90")>Повернуть вправо</span>
    </div>`);


});
//поворот судна по нажатию


}