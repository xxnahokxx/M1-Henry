const { Queue, Node, LinkedList, BinarySearchTree } = require("./DS.js");

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var countArray = function (array) {
  // Tu código aca:
  // Ncesitamos una variable que sume
  let sum = 0;
  // el for a continuacion lo que hara es recorrer el array completo.
  for (let i = 0; i < array.length; i++) {
    // es la constante que se crea para almacenar el valor a vealuar y sumar
    const element = array[i];
    // en caso de que la posicion evaluada sea un arreglo, ingresaria en el if a continuacion, de ser asi, lo que hace el if es indicarle que ejecute la recurcion de la funcion countArray en el arreglo para poder sumar los valores dentro de el.
    if (Array.isArray(element)) {
      sum = sum + countArray(element);
    } else {
      // en caso de que no sea un arreglo, simplemente que se sume el valor de la posicion a la variable sum, que seria nuestro acumulador.
      sum = sum + element;
    }
  }
  return sum;
};

// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
// var obj = {
//   a: {
//     a1: 10,
//     a2: 'Franco',
//     a3: {f: 'r', a: 'n', c: {o: true}}
//   },
//   b: 2,
//   c: [1, {a: 1}, 'Franco']
// }
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

var countProps = function (obj) {
  // Tu código aca:
  // definir un contador
  let count = 0;
  // el for in nos permite ingresar en un objeto y explorar las propiedades de este, la estructura es la que se muestra a continuacion y la intencion de este es recorrer sus propiedades para que sean contadas en nuestro acumulador.
  for (const key in obj) {
    // suma una unidad al conteo.
    count++;
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      // en caso de que se identifique la propiedad como un tipo objeto, y adicional que no sea un arreglo, ingresaria en este if y se especifica que se ejecute una recurcion de la funcion countProps, para  hacer un barrido de este objeto tambien y contar sus propiedades.
      count = count + countProps(obj[key]);
    }
  }
  // por ultimo se retorna el valor de acumulador o contador.
  return count;
};

// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan castearse a numeros por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kirikocho] y la función debería haber devuelto el valor 1

LinkedList.prototype.changeNotNumbers = function () {
  // Tu código aca:
  // definir un contador
  let sum = 0;
  // se define la variable current como el "nodo" actual o inicial al que se evaluaria el fin de la funcion.
  let current = this.head;

  while (current) {
    // con el while recorreremos la lista posicion por posicion para poder identificar los valores no numericos y poder ejecutar el cambio de estos
    if (isNaN(Number(current.value))) {
      // en caso de que no sea un numero, se procede a cambiar su valro por la palabra Kiricocho.
      current.value = "Kiricocho";
      // automaticamente se agrega una cifra al contador, ya que como lo indica el ejercicio se debe mostrar cuantos cambios de valores se ejecutaron con la funcion.
      sum++;
    }
    // se reasigna el valor de current para la siguiente posicion de la lista y poder efectuar la validacion.
    current = current.next;
  }
  // se retornar el valor de las cantidades de cambios efectuados en el arreglo.
  return sum;
};

// Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.

var mergeQueues = function (queueOne, queueTwo) {
  // Tu código aca:
  // manera larga
  let newQueue = new Queue();
  while (queueOne.size() || queueTwo.size()) {
    let first = queueOne.dequeue();
    let second = queueTwo.dequeue();
    if (first) newQueue.enqueue(first);
    if (second) newQueue.enqueue(second);
  }
  return newQueue;
};

// Implementar la funcion closureMult que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo:
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function (multiplierA) {
  // Tu código aca:
  return function (multiplierB) {
    return multiplierA * multiplierB;
  };
};

// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del arbol
BinarySearchTree.prototype.sum = function () {
  // Tu código aca:
  let sum = 0;
  if (this.left) sum += this.left.sum();
  if (this.right) sum += this.right.sum();
  return sum + this.value
};

module.exports = {
  countArray,
  countProps,
  mergeQueues,
  closureMult,
};
