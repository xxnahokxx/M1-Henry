'use strict';



// EJERCICIO 1
function nFactorial(n) {
// se pregunta si el numero es igual o menor de 0 para descartar los negativos
   if (n < 1) {
      return 0;
   }
   // si el numero es menor que 2 automaticamente este pasaria a ser 1
   if (n < 2) {
      return 1;
   }

   // esta linea de codigo seria como tal la recursion, por medio del llamado de la propia funcion se llgaria al valor solicitado
   return n * nFactorial(n-1);
}


// EJERCICIO 2
function nFibonacci(n) {
   if(n < 2) {
       return n;
   }
   return nFibonacci(n-2) + nFibonacci(n-1);
}
// EJERCICIO 3
function Queue() {
   this.array = [];
}

Queue.prototype.enqueue = function(value) {
   this.array.push(value);
}

Queue.prototype.dequeue = function() {
   return this.array.shift();
}

Queue.prototype.size = function() {
   return this.array.length;
}

class Queue {
   constructor(){
      this.array = [];
   }

   enqueue(elemento) {
      this.queue.push(elemento);
      return this.queue;
   }

   dequeue() {
      return this.queue.shift();
   }

   size() {
      return this.queue.length;
   }
}




// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};


