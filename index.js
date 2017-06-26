var assert = require('assert');

function EjerciciosArray()
{
  this.ejercicio1 = function(_arr, _num)
  {
      var res = 0;
      if(Array.isArray(_arr))
      {
        res = _arr.reduce(function(_total, _actual){
          return _total * _actual;
        });
      }else{
        if(!isNaN(_arr)){
          res = _arr;
        }
      }


     if(!isNaN(_num)){
       res = res * _num;
     }

     return res;
  }

  this.ejercicio2 = function(_telefonos, _filtro)
  {
      return _telefonos.filter(function(a){
        var primeras = a.toString().substr(0,3);
        var ultimas = a.toString().substr(-3);
        return (primeras == _filtro || ultimas == _filtro);
      });
  }

  this.ejercicio3 = function(array, numero) {
  var multi = [];
  array.forEach(function (valor) {
      if(valor%numero==0){
      multi.push(valor);
    }
  });
  return multi;
}


//ejercicio 4

this.ejercicio4 = function(array) {
   return array.map(function(num) {
    return num * 2 +1;
   });
   }

// ejercicio 5
this.ejercicio5 = function (array) {
  return array.map(function(grados){
    return grados* 9/5 + 32;
  });
}
//ejercicio 6

this.ejercicio6 = function (numbers) {
var v = numbers.reduce(function(a, b){
  return a * b;
}); return v;
}

//ejercicio 7

this.ejercicio7 = function (edades) {
var edad = [];
var d = new Date();
var n = d.getFullYear();
  edades.forEach(function(elemento){
    if (elemento%2 == 0 && elemento > 18) { edad.push(n - elemento);
         }

  }); return edad;



}
}

var ejercicios = new EjerciciosArray();




describe('Ejercicios Arrays', function(){
  describe('Ejercicio 1', function(){
    it('Prueba de [2,3] y 10', function(){
      assert.equal(60, ejercicios.ejercicio1([2,3], 10));
    });
    it('Prueba de [2,3] y "Hola"', function(){
      assert.equal(6, ejercicios.ejercicio1([2,3], "Hola"));
    });
    it('Prueba de [2,3] y nada', function(){
      assert.equal(6, ejercicios.ejercicio1([2,3]));
    });
    it('Prueba de 2 y 3', function(){
      assert.equal(6, ejercicios.ejercicio1(2,3));
    });
  });

  describe('Ejercicio 2', function(){
    it("cuando es [996548337, 997616207], 207", function(){
      assert.deepEqual([997616207], ejercicios.ejercicio2([996548337, 997616207], 207));
    });
    it("cuando es [996548337, 97616207], 207", function(){
      assert.deepEqual([97616207], ejercicios.ejercicio2([996548337, 97616207], 207));
    });
  });
  describe('Ejercicio 3', function(){
    it("cuando es [7,21,44,80,77,35], 7", function(){
      assert.deepEqual([7,21,77,35], ejercicios.ejercicio3([7,21,44,80,77,35], 7));
    });

  });


  describe('Ejercicio 4', function(){
    it("cuando es [0,1,2,3,4,5]", function(){
      assert.deepEqual( [1,3,5,7,9,11], ejercicios.ejercicio4( [0,1,2,3,4,5]));
    });

  });
  describe('Ejercicio 5', function(){
    it("cuando es  [0,1,2,3]", function(){
      assert.deepEqual( [32,33.8,35.6,37.4], ejercicios.ejercicio5( [0,1,2,3]));
    });

  });
  describe('Ejercicio 6', function(){
    it("cuando es  [1,2,3,4]", function(){
      assert.equal( 24, ejercicios.ejercicio6( [1,2,3,4]));
    });

  });
  describe('Ejercicio 7', function(){
    it("cuando es [20,16,89,6]", function(){
      assert.deepEqual([1997], ejercicios.ejercicio7([20,16,89,6]));
    });

  });

});












//
