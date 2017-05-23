// генерация кораблей по их длинне

function Ship(n,k){
	this.alive = true;
	this.length = n;
    this.rotation = 0;
    this.num = k;
};
//возвращение значения жив ли корабль
Ship.prototype.checkAlive = function () {
    return this.alive;
};
//установка мертвости корабля при его длинне в нуль
Ship.prototype.setAlive = function () {
    if(this.length == 0){
        this.alive = false;
    }
};
Ship.prototype.getRotation = function(){
    return this.rotation;
}
