//help
// this.name_proprty
// name_function.prototype.name_method
// доступ к клетке игрового поля gameArea.area[i][j], где i j  координаты этой клетки
// доступ к кораблям player.ships[num], где player текущий игрок, 
// 		num порядковый номер корабля в массиве от единичный до четвртичного
// инитиализация

//для каждого игрока отдельное поле генерируется и все это ниже два раза для каждого игрока
//проверка начала игры при смене статуса игрока на готов проверяет этот статус у обоих

var gameArea = new GameArea();  
var rules = new Rules();
var player = new Player(1);	
var game = new Game();

game.players.push(player);

// по готовности заталкиваем игроков в массив одной игры
game.startPlace();


//генерация на экран клеточек игрового поля



// нажатие кнопки старт
function start(){
game.start();

console.log('Game is started now!');

// объявить функцию выстрела по нажатию на клетку, заменив функцию выбора
$('.cell','placed').click(function(){
	console.log('its a game')
	var i = $(this).attr('i');
	var j = $(this).attr('j');
	cell = gameArea.area[i][j];
	console.log('ship '+cell.ship+' cheked '+cell.cheked);
	cell.shooted = true;
	if(cell.ship == true){
		$('[i='+ i +']+[j='+ j +']').attr('class', 'killed');
	}else{
		$('[i='+ i +']+[j='+ j +']').attr('class', 'shooted');
	};
	
	})
};


function GID(elem){
	return document.getElementById(elem);
} 

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
