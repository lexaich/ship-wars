//help
// this.name_proprty
// name_function.prototype.name_method
// доступ к клетке игрового поля gameArea[i][j], где i j  координаты этой клетки
// доступ к кораблям player1.ships[num], где player1 текущий игрок, 
// 		num порядковый номер корабля в массиве от единичный до четвртичного
// инитиализация

//для каждого игрока отдельное поле генерируется и все это ниже два раза для каждого игрока
//проверка начала игры при смене статуса игрока на готов проверяет этот статус у обоих
var game = new Game();
var gameArea = new GameArea();
function start(){
game.start();
// нажатие кнопки старт
console.log('Game is started now!');

// объявить функцию выстрела по нажатию на клетку, заменив функцию выбора
$('.cell').click(function(){console.log('its a game')})
};
// создание игроков и помещение их в игру
var player1 = new Player(1);
game.players.push(player1);
// var player2 = new Player(2);
// game.players.push(player2);

function GID(elem){
	return document.getElementById(elem);
} 


// перебор кораблей для возможности их перетаскивания визуально
$('.ship').each(function (index)
{
   $(this).draggable({
	   	snap: ".cell",
	   	stack: ".ui-draggable", 
	   	containment: ".gameArea",
	   	 scroll:false,start: function(){
	   	var num = $(this).attr('num');
		console.log('select ship');
		console.log(player1.ships[num]);
		player1.selectShip(player1.ships[num]);
		},
		stop: function(){

		}, 
	});
});



//генерация на экран клеточек игрового поля
for (var i = 1; i < gameArea.length; i++)
{ 
	for (var j = 1; j < gameArea.length; j++)
	{
        gameArea[i][j].setCoordinats(i,j);
		$('.gameArea').append('<div id="cell" class="'+gameArea[i][j].className+'" i="'+i+'" j="'+j+'"></div>');
	}

};

// перебор клеток для возможности их взаимодействия с перетаскиваемыми кораблями
$('.cell').each(function (index)
{
	$(".cell").droppable({
  accept:".ship",
drop:function(event, ui){
	
var i = $(this).attr('i');
var j = $(this).attr('j');
console.log('cell coordinate',i,j);
ship = player1.selectedShip;//получим корабль выбранный игроком

	if(Object.keys(ship).length != 0){//определяем выбран ли корабль по его длинне
	    switch(ship.rotation){
	    		// поворот вниз    i++  j
	        case 'down':
			console.log('down');
	        for(var k=1;k<=ship.length;k++){
	        	gameArea[i][j].setShip();

	        		$(this).attr('class', 'placed');
	        		$('[i='+i+']+[j='+j+']').attr('class', 'placed');

	        	console.log('set ship at ', i,j);
	        	$('#rotate').remove();
	        	i++;}
	 
	            break;
	            	//поворот влево i j--
	        case 'left':
	        console.log('left');
	        for(var k=1;k<=ship.length;k++){
	        	gameArea[i][j].setShip();

	        		$(this).attr('class', 'placed');
	        		$('[i='+i+']+[j='+j+']').attr('class', 'placed');

	        	console.log('set ship at ', i,j);
	        	$('#rotate').remove();
	        	j--;}

	            break;
	            	//поворот вправро  i j++
	        case 'right':
	        console.log('right');
	        for(var k=1;k<=ship.length;k++){
	        	gameArea[i][j].setShip();

	        		$(this).attr('class', 'placed');
	        		$('[i='+i+']+[j='+j+']').attr('class', 'placed');

	        	console.log('set ship at ', i,j);
	        	$('#rotate').remove();
	        	j++;}
	        	// }catch(err){
	        	// 	console.log('так нельзя делать');
	        	// 	i++;
	        	// 	$('[i='+i+']+[j='+j+']').attr('class', 'cell');
	        	// 	gameArea[i][j].ship = false;
	        	// 	console.log(i,j);
	        	// }

	            break;
			// поворот вверх i-- j
	        default:
	        console.log('up');
	        for(var k=1;k<=ship.length;k++){
	        	// try{
	        		gameArea[i][j].setShip();

	        		$(this).attr('class', 'placed');
	        		$('[i='+i+']+[j='+j+']').attr('class', 'placed');

	        	console.log('set ship at ', i,j);
	        	$('#rotate').remove();
	        	i--;}
	        

	    };
	}else{console.log('no select ship');};
	
console.log('корабль встал');
	var num = ship.num;
	$('[num='+num+']').remove();

	player1.unSelectShip();

console.log('принял на ',$(this).attr('i'), $(this).attr('j'))}})
});

//выбор корабля для расстановке на поле
$('.ship').click(function (){

	var num = $(this).attr('num');
	console.log('select ship');
	console.log(player1.ships[num]);
	player1.selectShip(player1.ships[num]);

	$('body').append(`
	<div id="rotate">	
	<span onclick=rotate("left")>влево</span>
	<span onclick=rotate("up")>вверх</span>
	<span onclick=rotate("right")>вправо</span>
	<span onclick=rotate("down")>вниз</span>
	<span onclick=rotate("+90")>+90</span>
	<span onclick=rotate("-90")>-90</span>
	</div>`);
	// $(this).rotate(90);

});

function rotate(align){

player1.selectedShip.rotate(align);
// if(align == '+90'){
// 	rotaion = rotation + 90;
// }else{rotation = rotation - 90};
console.log(player1.selectedShip);
// console.log(rotation);
}
