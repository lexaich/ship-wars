// описание игрока. получает порядковый номер игрока. и хранит свои корабли

function Player(n){

	this.num = n;
    this.ships = [];
    // создание кораблей
var k = 0;
    for(var i=1;i<=4;i++){
        this.ships.push(new Ship(1,k));
        $('#ships').append('<div id="oneShip" class="ship" num="'+k++ +'">1</div>');
    };
    for(var i=1;i<=3;i++){
        this.ships.push(new Ship(2,k));
        $('#ships').append('<div id="twoShip" class="ship" num="'+k++ +'">2</div>');
    };
    for(var i=1;i<=2;i++){
        this.ships.push(new Ship(3,k));
        $('#ships').append('<div id="threeShip" class="ship" num="'+k++ +'">3</div>');
    };
        this.ships.push(new Ship(4,k));
    $('#ships').append('<div id="fourShip" class="ship" num="'+k++ +'">4</div>');

    
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
//сброс выбранного корабля
Player.prototype.unSelectShip = function(){
this.selectedShip = {};
};

// поставить корабль. если длина корабля не единциа, то ставим его на дальнейшие клетки согласно его длинне. 
// полчаем корабль и координаты нажатой клетки.
Player.prototype.place = function(ship,i,j){
    gameArea.area[i][j].getCoordinats();
    if(ship.length != 1){
        for(var k=1;k<=ship.length;k++){
            gameArea.area[i][j++].setShip();
        }
    }

};
