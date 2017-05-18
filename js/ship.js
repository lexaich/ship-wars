// генерация кораблей по их длинне

function Ship(n){
	this.alive = true;
	this.length = n;
    this.rotation = 'right';
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
//повороты корабля при расстановке
Ship.prototype.rotate = function (rotation) {
    this.rotation = rotation;
    switch(this.rotation){
        case 'down':
// поворот вниз    i++  j
            break;
        case 'left':
//поворот влево i j--
            break;
        case 'up':
// поворот вверх i-- j
            break;
        default:
//поворот вправро  i j++
    }
};
