// описание игрока. получает порядковый номер игрока. и хранит свои корабли

function Player(n){

	this.num = n;

    // создание кораблей
    var one_ships = [];
    var two_ships = [];
    var three_ships = [];
var k = 0;
    for(var i=1;i<=4;i++){
        one_ships.push(new Ship(1));
        var ship = one_ships[k];
        document.write('<div id="ship" style="width:28px; height:28px; border:1px solid; cursor:pointer; margin-bottom: 5px" onclick="select()"></div>');
    };
    for(var i=1;i<=3;i++){
        two_ships.push(new Ship(2));
        document.write('<div style="width:28px; height:56px; border:1px solid; cursor:pointer; margin-bottom: 5px" onclick="select('+this+')"></div>');
    };
    for(var i=1;i<=2;i++){
        three_ships.push(new Ship(3));
        document.write('<div style="width:28px; height:84px; border:1px solid; cursor:pointer; margin-bottom: 5px" onclick="select('+this+')"></div>');
    };
    var four_ship = new Ship(4);
    document.write('<div style="width:28px; height:112px; border:1px solid; cursor:pointer; margin-bottom: 5px" onclick="select('+this+')"></div>');

    this.ships=[one_ships,two_ships,three_ships,four_ship];
this.selectedShip = {};
}

// возвращает порядковый номер этого игрока
Player.prototype.getNum = function(){
	return this.num;
};
//принимает корабль и отправляет его в хранилище игрока
Player.prototype.addShip = function(ship){
	this.ships.push(ship);
};
//возвращает ссылки на все корабли
Player.prototype.checkShips = function(){
	return this.ships;
};
//для выставления корабля на поле в начале. задает выбранный корабль в пользователя
Player.prototype.selectShip = function(ship){
this.selectedShip = ship;
};

// поставить корабль. если длина корабля не единциа, то ставим его на дальнейшие клетки согласно его длинне. 
// полчаем корабль и координаты нажатой клетки.
Player.prototype.place = function(ship,i,j){
    gameArea[i][j].getCoordinats();
    if(ship.length != 1){
        for(var k=1;k<=ship.length;k++){
            gameArea[i][j++].setShip();
        }
    }

};
