//help
// this.name_proprty
// name_function.prototype.name_method
// доступ к клетке игрового поля gameArea[i][j], где i j  координаты этой клетки
// доступ к кораблям player1.ships[num], где player1 текущий игрок, 
// 		num порядковый номер корабля в массиве от единичный до четвртичного
// инитиализация

var game = new Game();
var gameArea = new GameArea();

// создание игроков и помещение их в игру
var player1 = new Player(1);
game.players.push(player1);
// var player2 = new Player(2);
// game.players.push(player2);

function GID(elem){
	return document.getElementById(elem);
} 

//вывод поля на экран

for(var i=j=k=1;i<=10;i++){
	console.log('gen');

		$('.gameArea').append('<div class="cell" onclick="place('+j,k+')"></div>');

		j++;
		console.log('gen j ',j);
		k++;
		console.log('gen k ',k);
};


for (var i = 1; i < gameArea.length; i++)
{ 
	document.write('<div class="row">');
	for (var j = 1; j < gameArea.length; j++)
	{
		var arr = [i,j];
        gameArea[i][j].setCoordinats(i,j);
		$('.row').append('<div class="cell" onclick="place('+arr+')"></div>');
	}
	document.write("</div>");
};


//выбор корабля для расстановке на поле
function select(num){
	console.log('select ship');
	console.log(player1.ships[num]);
	player1.selectShip(player1.ships[num]);

};
//поместить корабль в клетку
function place(i,j){
	ship = player1.selectedShip;

	if(Object.keys(player1.selectedShip).length != 0){
	    switch(ship.rotation){
	        case 'down':
			console.log('down');
	        for(var k=1;k<=ship.length;k++){
	        	gameArea[i][j].setShip();
	        	console.log('set ship at ', i,j);
	        	i++;}
	 
	// поворот вниз    i++  j
	            break;
	        case 'left':
	        console.log('left');
	        for(var k=1;k<=ship.length;k++){
	        	gameArea[i][j].setShip();
	        	console.log('set ship at ', i,j);
	        	j--;}
	//поворот влево i j--
	            break;
	        case 'up':
	        console.log('up');
	        for(var k=1;k<=ship.length;k++){
	        	gameArea[i][j].setShip();
	        	console.log('set ship at ', i,j);
	        	i--;}
	// поворот вверх i-- j
	            break;
	        default:
	        console.log('right');
	        for(var k=1;k<=ship.length;k++){
	        	gameArea[i][j].setShip();
	        	console.log('set ship at ', i,j);
	        	j++;}
	        
	//поворот вправро  i j++
	    };
	}else{console.log('no select ship');};
	player1.unSelectShip();
};

// //выстрел
// function shoot(i,j){
// console.log(this);
// 	if(gameArea[i][j].checkShip() == true ){

// 	};
// 	if(gameArea[i][j].checkSoot() == true){
// console.log('Уже стреляно '+gameArea[i][j]);
// 	}else{
// 		   gameArea[i][j].setSoot();
// 	}
 

// 	console.log(gameArea[i][j]);
// };
