// описывает правила победы или поражения с которыми советуется игра
// метод проверки расстановки кораблей, проверка проигрыша игрока
function Rules(){
	// если соседние клетки содержат корабля то мы ломаем кейс и говорим что нельзя поставить тут

};
Rules.prototype.checkPlace = function(cell){
// получаем координаты всех соседних клеток
this.coordinates = [];
var coordinate = [];

for(var c=-1; c<=1;c++){
	for(var k=-1;k<=1;k++){


		
		try{var rule = gameArea[cell.getCoordinats()[0]+c][cell.getCoordinats()[1]+k].ship;}
		catch(err){rule = true};
if(rule == true){

	return false//если есть корабль на координате то возвращаем значение что нельзя ставить
}

	}
}
	return true;//если кораблей нет, то возвращаем разрешение что поставить можно
}

