//help
// this.name_proprty
// name_function.prototype.name_method

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
document.write('<div style="width:330px; height:315px">');
for (var i = 1; i < gameArea.length; i++)
{ 
	document.write('<div class="row">');
	for (var j = 1; j < gameArea.length; j++)
	{
		var arr = [i,j];
        gameArea[i][j].setCoordinats(i,j);
		document.write('<div class="cell" style="display:block; cursor:pointer; float:left; margin-right:1px; border:1px solid; height:30px; width:30px;" onclick="shoot('+arr+')"></div>');
	}
	document.write("</div>");
};
document.write('</div>');

//выбор корабля для расстановке на поле
function select(){
	console.log(this);
};

//выстрел
function shoot(i,j){
console.log(this);
	if(gameArea[i][j].checkShip() == true ){

	};
	if(gameArea[i][j].checkSoot() == true){
console.log('Уже стреляно '+gameArea[i][j]);
	}else{
		   gameArea[i][j].setSoot();
	}
 

	console.log(gameArea[i][j]);
};
