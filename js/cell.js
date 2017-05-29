// клетка. знает что на ней есть или нет корабля(куска корабля) и стреляли в нее или нет. знает координаты свои
// умеет проверять свои значения и устанавливать их
//состояния клетки cell(по умолчанию пустая клетка) placed(имеет поставленный корабль) 
// shooted( пустая в которую стреляли) killed( убитый корабль или часть корабля)
function Cell(){
	this.ship = false;
	this.shooted = false;
	this.coordinats = [];
	this.className = "cell";
	this.blocked = false;
};
//установка координат этой клетки
Cell.prototype.setCoordinats = function (i,j) {
	this.coordinats.push(i,j)
};
//возвращения координат этой клетки
Cell.prototype.getCoordinats = function () {
    return this.coordinats;
};
//проверка есть ли корабль на ней
Cell.prototype.checkShip = function() {
	return this.ship;
};
//установление корабля в клетку
Cell.prototype.setShip = function(){
	this.ship = true;
	$(this).attr('class', 'placed');
};
Cell.prototype.unSetShip = function(){
	this.ship = false;
	$(this).attr('class', 'cell');
};
//проверка был ли произведен выстре на клетку
Cell.prototype.checkSoot = function() {
    return this.shooted;
};
//установить клетке что в нее стреляли
Cell.prototype.setSoot = function() {
    return this.shooted = true;
};