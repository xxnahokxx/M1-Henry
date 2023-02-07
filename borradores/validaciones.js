// // var o = {clase: 123};
// // console.log(o);

// // function nFibonacci(n)


// // --asi se  usa el bind, basicamente se utiliza para indicar manualmente a que objeto o funcion debe ser dirigido el this dentro de logNombre en el ejemplo.
//     // var persona = {
//     //  nombre: "guille",
//     //  apellido: "Aszyn",
//     //  }
//     // var logNombre = function(){
//     //  console.log(this.nombre);
//     //  }

//     // var logNombrePersona = logNombre.bind(persona);


//     // logNombrePersona();

// // --bind siempre por defecto nos devuelve una funcion.
// // --otra de las funciones de bind no es solo para redireccionar el this, tambien serviria para fijar parametros en fuciones:

// // function multiplica(a,b){
// //     return a * b;
// // }
// // var multiplicaPorDos = multiplica.bind(this, 2);

// // console.log(multiplicaPorDos(20));

// // --Usando el metodo call:

// // var persona = {
// //     nombre: "Guille",
// //     apellido: "Aszyn",
// // }

// // var logNombre = function() {
//     //     console.log(this.nombre);
// // }
// // logNombre.call(persona);

// // --al igual que bind, call puede indicarnos la referencia del this de la funcion como se da en el ejemplo pasado, y tambien puede recibir mas de un dato como se muestra a continuación:
// // --el primer argumento de call es el this.

// // var persona = {
// //     nombre: "Samuel",
// //     apellido: "Aszyn",
// // }
// // var logNombre = function(arg1, arg2) {
// //     console.log(arg1 + " " + this.nombre + " " +arg2);
// // }

// // logNombre.call(persona, "Hola", ", como estas?");

// // --Apply:
// // Para el caso de apply, a diferencia de call en sus parametros recibidos, solo aceptaria la informacion contenida en un arreglo:

// // var persona = {
// //     nombre: "Samuel",
// //     apellido: "Aszyn",
// // }
// // var logNombre = function(arg1, arg2) {
// //     console.log(arg1 + " " + this.nombre + arg2);
// // }

// // logNombre.apply(persona, ["Hola", ", como estas??"]);


// // --clousures:

// // function saludar(saludo) {
// //     return function (nombre) {
// //         console.log(saludo + " " + nombre);
// //     }
// // }

// // var saludarHola = saludar("Hola");
// // saludarHola("Samuel");

// // INVESTIGAR MAS YA QUE NO QUEDA CLARO

// --recurcion:

// function factorial (x) {
//     if (x > -1 && x < 2) return 1;
//     if (x < 0) return 0;
//     return x * factorial (x - 1);
// }

// console.log(factorial(3));

// ------------------------------------------


// var saludo, nombre = "Johan", apellido = "Amaya";

// saludo = `hola ${nombre} ${apellido}.`;

// console.log(saludo);


/* function nFactorial(n) {

    if (n < 1) {
       return 0;
    }
    if (n < 2) {
       return 1;
    }
    return n * nFactorial(n-1);
 }

  console.log(nFactorial(5));
 */

/* function nFibonacci(n) {
    if(n < 2) {
        return n;
    }
    return nFibonacci(n-2) + nFibonacci(n-1);
}

console.log(nFibonacci(10));
*/


// --estructura de datos en fila (Queue).
/*
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

 var fila = new Queue();

fila.enqueue(3);
fila.enqueue(6);
fila.enqueue(9);

console.log(fila);

fila.dequeue();
fila.dequeue();

console.log(fila);

fila.enqueue(10);
fila.enqueue(56);
fila.enqueue("hola");

console.log(fila);
 */
// -- listas enlazadas --
// function LinkedList() {
//    this.length = 0;
//    this.head = null;
// }

// function Node(value) {
//    this.value = value;
//    this.next = null;
// }

// LinkedList.prototype.add = function (data) {
// // se inicializan dos variables, una seria el modelo del nodo, y el otro seria la variable que siempre apuntaria al primer dato de la lista que seria el head.
// var node = new Node(data), current = this.head;
// // en este if se valida que current tenga contenido, de no tenerlo, el dato que se esta insertando con el metodo add, seria el que se tomaria con el head, adicional a esto se hace un incremento al tamaño de la lista y se retorna el dato ingresado.
// if (!current) {
//    this.head = node;
//    this.length++;
//    return node;
// }
// // con while lo que se esta haciendo es que si existe informacion en la lista, se recorra la lista, para llegar a la ultima posicion existente y poder generar el enlace con el dato que queremos agregar.
//    while (current.next) {
//    current = current.next;
//    }
// //  una vez que se genera el recorrido de la lista, y se llega a la ultima posicion registrada, con la linea 37 se agrega el nodo y se incrementa el tamaño de la lista, adicional a esto se retorna el dato que se agrego.
//    current.next = node;
//    this.length++;
//    return node;
// };

// // -- REMOVE --

// LinkedList.prototype.remove = function () {

//    // primero se evalua si existe head, en caso de que no exista, se retorna el head (null).
//    if (!this.head) {
//       return this.head;
//    }else if (!this.head.next) {
//       // ahora se evalua el caso de que el tamaño de la lista sea 1, de ser de ese tamaño, lo que se hace es igualar el head a null.
//       let current = this.head;
//       this.head = null;
//       this.length--;
//       // en los test se solicita el valor por lo cual en el retorno del dato se da solo el valor y no el nodo
//       return current.value;
//    } else {
//       // por ultimo, ya descartando de que exista una lista y que no sea de tamaño 1 la lista, se hace  crea una variable que contenga la referencia de inicio (head) y se inicia con el barrido del while para llegar a la ultima posicion, se utiliza para este caso el doble next para no perder la referencia del final en caso de que se requiera.
//       let current = this.head;
//       while (current.next.next) {
//          current = current.next;
//       }
//       // Despues de que se llega a la ultima ubicación, se genera una variable para guardar la referencia eliminada y despues el nodo se iguala a null para eliminarlo, se hace el decremento para el tamaño de la lista y se retorna el valor eliminado:
//       var node = current.next;
//       current.next = null;
//       this.length--;
//       return node.value;
// }
// }

// // para continuar en el video quedamos en el minuto 26:19 de la clase Estructura de datos II.

// // -- search --

// LinkedList.prototype.search = function (arg) {
//    var current = this.head;

//    console.log(current);

//    if (!current) {
//       return "La lista esta vacia";
//    }

//    while (current) {
//       if (typeof arg === "function") {
//          if (arg(current.value)) {
//          return current.value;
//          }
//       }
//       if (current.value === arg) return current.value;
//       current = current.next;
//    }

//    return null;

// }

// var linkedList;

// linkedList = new LinkedList();

// linkedList.add('one');
// linkedList.add('two');
// linkedList.add('three');
// linkedList.add('four');

// console.log(linkedList);

// console.log(linkedList.search('two'));
// console.log(linkedList.search('two'));
// console.log(linkedList.search('two'));


//  console.log(linkedList.search("two"));



// function Queue() {
//    this.array = [];

//  }

//  Queue.prototype.enqueue = function (elemento) {
//    return this.array.push(elemento);
//  };

//  Queue.prototype.dequeue = function () {
//    return this.array.shift();
//  };

//  Queue.prototype.size = function () {
//    return this.array.length;
//  };

//  var ropaQueue = new Queue();

//  ropaQueue.enqueue("Camiseta Blanca")
//  ropaQueue.enqueue("Camiseta Negra")
//  ropaQueue.enqueue("Camiseta Azul")
//  ropaQueue.enqueue("Camiseta Amarilla")

//  function guardarCamisetas(ropaQueue) {
//    var objeto = {};

//    for (let i = 0; i < ropaQueue.array.length; i++) {
//       var nombre = ropaQueue.array[i];
//       objeto[nombre] = nombre;
//    }


//    return objeto;
//  };

//  console.log(guardarCamisetas(ropaQueue));

// const lista1 = {
//    1: "Franco",
//    2: "María",
//    3: "Alejo",
//  };



// function atenderClientes(clientes) {
//    // Tu código aquí:
//    var array = Object.keys(clientes);
//   delete clientes[array[0]];
//   var resultado = clientes;

//   if (array.length !== 0)  {
//    return atenderClientes(clientes);
//   } else {
//     return resultado;
//   }
//  }

// console.log(atenderClientes(lista1));

// let ropa = [
//    { camiseta: { LIQUIDACION: true } },
//    { gorro: { DESCUENTO: true } },
//    { abrigo: {} },
//    { pantalones: { LIQUIDACION: true } },
//  ];

//  function liquidacion(array, pos, nuevoArray = []) {
//    // Tu código aquí:
//    if (pos == undefined){
//       pos = array.length - 1;
//    }

//    var keys = Object.keys(array[pos])
//    console.log(nuevoArray);
//    console.log(pos);
//    console.log(array[pos][keys].LIQUIDACION);
//    if (array[pos][keys].LIQUIDACION === true){
//       nuevoArray.push(array[pos]);
//       console.log(nuevoArray);
//       if ( pos === 0){
//          return nuevoArray;
//        }
//       return liquidacion(array, pos - 1, nuevoArray);
//    }else{
//       if ( pos === 0){
//         return nuevoArray;
//       }
//       return liquidacion(array, pos - 1, nuevoArray);
//    }

//  }

//  console.log(liquidacion(ropa));


/* const productos =[{ nombre: 'Camiseta', precio: 12}, { nombre: 'Pantalon', precio: 2 }, { nombre: 'Saco', precio: 23 }, { nombre: 'Gorra', precio: 4 }];

function ordenarRopa(ropa) {
   // Tu código aquí:
   // console.log(ropa[0].precio);

   for (var i = 0; i < ropa.length; i++) {
      var min = i;
      for (let j = i + 1 ; j < ropa.length; j++) {
        if (ropa[j].precio < ropa[min].precio) {
          min = j;
        }
      }
      var aux = ropa[i];
      ropa[i] = ropa[min];
      ropa[min] = aux;
    }

    return ropa.reverse();

}

 console.log(ordenarRopa(productos));
 */


//  copia por referencia:

/*
var a;
var b = { nombre: "hola"};

a = b;

console.log(a.nombre)

b.nombre = "Chao";


console.log(a.nombre);

var arr1;

var arr2 = [1,2,3];

arr1 = arr2;

arr2.push(4);

// el arr1 se pusheo tambien la informacion dada al arr2 por defecto de la copia por referencia.
console.log(arr1);



// copia por valor: esto solo se cumple con variables primitivas.

var a = 1;
var b = 2;

a = b;
b = 3;

console.log(a);
console.log(b);
 */


function saludar(saludo) {
   return function (nombre) {
      console.log(`${saludo} ${nombre}`)
   }
}

var saludarHola = saludar("hola");
saludarHola("Toni");
