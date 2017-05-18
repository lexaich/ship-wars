// руководит началом игры. проверкой правил после хода. 
// игра содержит игроков, номер текущего игрока, метод проверки победы
function Game(){
this.currentPlayer = 1;
this.players = [];
};
// запускаем игру
Game.prototype.start = function () {
    this.setCurrentPlayer(); //переключатель игрока
};

// выставляем игрока кторый ходит
Game.prototype.setCurrentPlayer = function () {
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