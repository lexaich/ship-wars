// описывает правила победы или поражения с которыми советуется игра
// метод проверки расстановки кораблей, проверка проигрыша игрока
function Rules(){


};
Rules.prototype.checkPlace = function(cell,length,rotate){
var i = cell.coordinats[0];
var j = cell.coordinats[1];
var rule = true;

switch(rotate){
case 'up':
for(var k=1;k<=length;k++){ //цикл проставления корабля в направлении по его длинне
		//определение границы доступных клеток для будущих кораблей
			for(var x=-1; x<=1;x++){
				for(var y=-1;y<=1;y++){
					try{
						var curCell = gameArea.area[i + x][j + y];
						var xh = i + x;
						var yh = j + y;

						if(curCell.ship == false){
							 $('[i='+ xh +']+[j='+ yh +']').attr('class', 'blocked');
							// console.log('block at ', xh,yh);
							
						}else{
							var rule = false;
						}

					}catch(err){
						console.log(err);
					}
				};
			};

		i--;	
	}
break;
case 'down':
for(var k=1;k<=length;k++){ //цикл проставления корабля в направлении по его длинне

		//определение границы доступных клеток для будущих кораблей
			for(var x=-1; x<=1;x++){
				for(var y=-1;y<=1;y++){
					try{
						var curCell = gameArea.area[i + x][j + y];
						var xh = i + x;
						var yh = j + y;

						if(curCell.ship == false){
							$('[i='+ xh +']+[j='+ yh +']').attr('class', 'blocked');
							// console.log('block at ', xh,yh);
							
						}else{
							var rule = false;
						}

					}catch(err){
						console.log(err);
					}
				};
			};

		i++;	
	}
break;
case 'left':
for(var k=1;k<=length;k++){ //цикл проставления корабля в направлении по его длинне

		//определение границы доступных клеток для будущих кораблей
			for(var x=-1; x<=1;x++){
				for(var y=-1;y<=1;y++){
					try{
						var curCell = gameArea.area[i + x][j + y];
						var xh = i + x;
						var yh = j + y;

						if(curCell.ship == false){
							$('[i='+ xh +']+[j='+ yh +']').attr('class', 'blocked');
							// console.log('block at ', xh,yh);
							
						}else{
							var rule = false;
						}

					}catch(err){
						console.log(err);
					}
				};
			};

		j--;	
	}
break;
case 'right':
for(var k=1;k<=length;k++){ //цикл проставления корабля в направлении по его длинне

		//определение границы доступных клеток для будущих кораблей
			for(var x=-1; x<=1;x++){
				for(var y=-1;y<=1;y++){
					try{
						var curCell = gameArea.area[i + x][j + y];
						var xh = i + x;
						var yh = j + y;

						if(curCell.ship == false){
							$('[i='+ xh +']+[j='+ yh +']').attr('class', 'blocked');
							// console.log('block at ', xh,yh);
							
						}else{
							var rule = false;
						}

					}catch(err){
						console.log(err);
					}
				};
			};

		j++;	
	}
break;
}

return rule;

}

