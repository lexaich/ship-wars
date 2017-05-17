// генерация массива клеток размером 10 на 10. двумерный массив содержащий клетки или ссылки на клетки. 
// клетка знает сбита она или нет и есть ли в ней корабль или нет

function GameArea(){

	function array(rows,columns){
  var arr = [];
  var count = 0;
  for(var i=1; i<=columns; i++){
    arr[i] = [];

    for(var j=1; j<=rows; j++){
      arr[i][j] = new Cell();

    }
  }
  return arr;
}
return array(10,10);

};