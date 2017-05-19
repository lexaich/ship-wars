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
	for (var i = 1; i < gameArea.length; i++)
	{ 
		for (var j = 1; j < gameArea.length; j++)
		{
	        gameArea[i][j].setCoordinats(i,j);
			$('.gameArea').append('<div id="cell" class="'+gameArea[i][j].className+'" i="'+i+'" j="'+j+'"></div>');
		}

	};
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