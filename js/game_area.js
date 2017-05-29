// генерация массива клеток размером 10 на 10. двумерный массив содержащий клетки или ссылки на клетки. 
// клетка знает сбита она или нет и есть ли в ней корабль или нет

function GameArea(){

this.area = this.create(10,10);

};
GameArea.prototype.create = function(rows,columns){
 var arr = [];
 var count = 0;
 for(var i=1; i<=columns; i++){
   arr[i] = [];

   for(var j=1; j<=rows; j++){
     arr[i][j] = new Cell();

   }
 }

  return arr;
 console.log(rows,columns);
}

GameArea.prototype.renderForPlace = function(){
//генерация на экран клеточек игрового поля
console.log('renderForPlace');

for (var i = 1; i < gameArea.area.length; i++)
{ 
	for (var j = 1; j < gameArea.area.length; j++)
	{
       gameArea.area[i][j].setCoordinats(i,j);
		$('.gameArea').append('<div id="cell" class="'+gameArea.area[i][j].className+'" i="'+i+'" j="'+j+'"></div>');
	}

};
};

GameArea.prototype.renderForGame = function(){
//генерация на экран клеточек игрового поля
console.log('renderForGame');

for (var i = 1; i < gameArea.area.length; i++)
{ 
	for (var j = 1; j < gameArea.area.length; j++)
	{
       gameArea.area[i][j].setCoordinats(i,j);
		$('.gameArea').append('<div id="cell" class="'+gameArea.area[i][j].className+'" i="'+i+'" j="'+j+'"></div>');
	}

};
};