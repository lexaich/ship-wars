//help
// this.name_proprty
// name_function.prototype.name_method
// доступ к клетке игрового поля gameArea[i][j], где i j  координаты этой клетки
// доступ к кораблям player.ships[num], где player текущий игрок, 
// 		num порядковый номер корабля в массиве от единичный до четвртичного
// инитиализация

//для каждого игрока отдельное поле генерируется и все это ниже два раза для каждого игрока
//проверка начала игры при смене статуса игрока на готов проверяет этот статус у обоих
var game = new Game();
var gameArea = new GameArea();
var rules = new Rules();
function start(){
game.start();
// нажатие кнопки старт
console.log('Game is started now!');

// объявить функцию выстрела по нажатию на клетку, заменив функцию выбора
$('.cell').click(function(){console.log('its a game')})
};
// создание игроков и помещение их в игру
var player = new Player(1);
game.players.push(player);
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



//генерация на экран клеточек игрового поля
for (var i = 1; i < gameArea.length; i++)
{ 
	for (var j = 1; j < gameArea.length; j++)
	{
        gameArea[i][j].setCoordinats(i,j);
		$('.gameArea').append('<div id="cell" class="'+gameArea[i][j].className+'" i="'+i+'" j="'+j+'">'+i+','+j+'</div>');
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
ship = player.selectedShip;//получим корабль выбранный игроком
	if(Object.keys(ship).length != 0){//определяем выбран ли корабль по его длинне
	    switch(ship.rotation+''){



	    		// поворот вниз    i++  j
	        case '180':
try{
	        	// console.log('down');
	        for(var k=1;k<=ship.length;k++){

	        	gameArea[i][j].setShip();

	        		$(this).attr('class', 'placed');
	        		$('[i='+i+']+[j='+j+']').attr('class', 'placed');

	        	// console.log('set ship at ', i,j);
	        	$('#rotate').remove();
	        	i++;}
	        }
catch(err){
// console.log('up');
	        for(var k=1;k<=ship.length;k++){
	        	i--;
	        		gameArea[i][j].setShip();

	        		$(this).attr('class', 'placed');

	        		$('[i='+i+']+[j='+j+']').attr('class', 'placed');

	        	// console.log('set ship at ', i,j);
	        	$('#rotate').remove();
	        	}
}
	            break;



	            	//поворот влево i j--
	        case '270':
try{
	        	// console.log('left');
	        for(var k=1;k<=ship.length;k++){
	        	gameArea[i][j].setShip();

	        		$(this).attr('class', 'placed');
	        		$('[i='+i+']+[j='+j+']').attr('class', 'placed');

	        	// console.log('set ship at ', i,j);
	        	$('#rotate').remove();
	        	j--;}}
catch(err){
	// console.log('right');
	        for(var k=1;k<=ship.length;k++){
	        	j++;
	        	gameArea[i][j].setShip();

	        		$(this).attr('class', 'placed');
	        		$('[i='+i+']+[j='+j+']').attr('class', 'placed');

	        	// console.log('set ship at ', i,j);
	        	$('#rotate').remove();
	        	}
}
	            break;



	            	//поворот вправро  i j++
	        case '90':
try{
	        // console.log('right');
	        for(var k=1;k<=ship.length;k++){


	        	gameArea[i][j].setShip();

	        		$(this).attr('class', 'placed');
	        		$('[i='+i+']+[j='+j+']').attr('class', 'placed');

	        	// console.log('set ship at ', i,j);
	        	$('#rotate').remove();
	        	j++;}
}catch(err){
			// console.log('left');
	        for(var k=1;k<=ship.length;k++){
	        	j--;
	        	gameArea[i][j].setShip();

	        		$(this).attr('class', 'placed');
	        		$('[i='+i+']+[j='+j+']').attr('class', 'placed');

	        	// console.log('set ship at ', i,j);
	        	$('#rotate').remove();
	        	}
	        }
	            break;




			// поворот вверх i-- j
	        default:

try{
	// console.log('up');
	        for(var k=1;k<=ship.length;k++){
//отправляем правилам координаты клетки на которую собираемся поставить корабль
console.log(rules.checkPlace(gameArea[i][j]));

	        		gameArea[i][j].setShip();

	        		$(this).attr('class', 'placed');

	        		$('[i='+i+']+[j='+j+']').attr('class', 'placed');

	        	// console.log('set ship at ', i,j);
	        	$('#rotate').remove();
	        	i--;}
}catch(err){
	// console.log('down');
	        for(var k=1;k<=ship.length;k++){
	        	i++;
	        	gameArea[i][j].setShip();

	        		$(this).attr('class', 'placed');
	        		$('[i='+i+']+[j='+j+']').attr('class', 'placed');

	        	// console.log('set ship at ', i,j);
	        	$('#rotate').remove();
	        	}}	        
	        

	    };
	}else{console.log('no select ship');};
	
console.log('корабль встал');
	var num = ship.num;
	$('[num='+num+']').remove();

	player.unSelectShip();

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

function rotate(align){
	if(align=="+90"){
		player.selectedShip.rotation = player.selectedShip.rotation - 90;
	}else{
		player.selectedShip.rotation = player.selectedShip.rotation + 90;
	}
	//приведения углов поворота к единым числам
	if(player.selectedShip.rotation==360 || player.selectedShip.rotation==-360){
		player.selectedShip.rotation=0;
	}
	if(player.selectedShip.rotation==180 || player.selectedShip.rotation==-180){
		player.selectedShip.rotation=180;
	}
	if(player.selectedShip.rotation==-90){
		player.selectedShip.rotation=270;
	}


console.log(player.selectedShip.rotation);
player.selectedShip.rotation = player.selectedShip.rotation;
$(player.selectedShip.elem).rotate(player.selectedShip.rotation);
}
