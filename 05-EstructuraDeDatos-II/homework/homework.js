'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true.
  EJEMPLO
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

// se consideran funciones constructoras, ya que son modelos o plantillas para ser utilizadas en variables que tomarian esa estructura por defecto. (por lo que noto se nombra la clase con la letra primera en mayuscula adicional la estructura del objeto plantilla esta con cada una de sus propiedades con el this.(inserte aqui su propiedad) = valor por defecto)
function LinkedList() {
  this.length = 0;
  this.head = null;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (data) {
// se inicializan dos variables, una seria el modelo del nodo, y el otro seria la variable que siempre apuntaria al primer dato de la lista que seria el head.
var node = new Node(data);
current = this.head;
// en este if se valida que current tenga contenido, de no tenerlo, el dato que se esta insertando con el metodo add, seria el que se tomaria con el head, adicional a esto se hace un incremento al tamaño de la lista y se retorna el dato ingresado.
if (!current) {
  this.head = node;
  this.length++;
  return node;
}
// con while lo que se esta haciendo es que si existe informacion en la lista, se recorra la lista, para llegar a la ultima posicion existente y poder generar el enlace con el dato que queremos agregar.
  while (current.next) {
  current = current.next;
  }
//  una vez que se genera el recorrido de la lista, y se llega a la ultima posicion registrada, con la linea 37 se agrega el nodo y se incrementa el tamaño de la lista, adicional a esto se retorna el dato que se agrego.
  current.next = node;
  this.length++;
  return node;
};

// -- REMOVE --

LinkedList.prototype.remove = function () {

  // primero se evalua si existe head, en caso de que no exista, se retorna el head (null).
  if (!this.head) {
     return this.head;
  }else if (!this.head.next) {
     // ahora se evalua el caso de que el tamaño de la lista sea 1, de ser de ese tamaño, lo que se hace es igualar el head a null.
     let current = this.head;
     this.head = null;
     this.length--;
     // en los test se solicita el valor por lo cual en el retorno del dato se da solo el valor y no el nodo
     return current.value;
  } else {
     // por ultimo, ya descartando de que exista una lista y que no sea de tamaño 1 la lista, se hace  crea una variable que contenga la referencia de inicio (head) y se inicia con el barrido del while para llegar a la ultima posicion, se utiliza para este caso el doble next para no perder la referencia del final en caso de que se requiera.
     let current = this.head;
     while (current.next.next) {
      // al hacer este while, el bucle se detendria en la penultima posicion, ya que esta seria la posicion que el apuntador se le igualaria a null para eliminar la ultima posicion de la lista.
        current = current.next;
     }
     // Despues de que se llega a la penultima ubicación, se genera una variable para guardar la referencia que se va a eliminar del ultimo nodo de la lista.
     var node = current.next;
      //se indica que la ultima posicion de la lista se va a igualar a null con lo cual se pierde la referencia del nodo y quedaria eliminado.
     current.next = null;
  //    lo que seria el tamaño de la lista se le restaria 1 para descontar el tamaño del nodo eliminado
     this.length--;
  //    por ultimo, se retorna el valor del nodo que se elimino y se guardo en la variable node.
     return node.value;
}
}

// para continuar en el video quedamos en el minuto 26:19 de la clase Estructura de datos II.

// -- search --

LinkedList.prototype.search = function (arg) {
// como es habitual, se crea la variable current (actual) y se le asigna el valor del head.
  var current = this.head;

  if (!current) {
    // si current no existe entraria en el if y retornaria el mensaje a continuacion.
    return "La lista esta vacia";
  }

  while (current) {
    // cuando current tenga informacion, lo primero que cuestionaria seria de si ese dato almacenado en el nodo evaluado es de tipo funcion.
     if (typeof arg === "function") {
      // si es de tipo function, entonces preguntaria una vez mas y retornaria el valor de current.
        if (arg(current.value)) {
        return current.value;
        }
     }
    //  de no tener ser una funcion se le preguntaria con el if siguiente de si el valor contenido en el actual nodo es igual al argumento ingresado en la busqueda, de ser ese nos retornaria el valor del nodo
     if (current.value === arg) return current.value;
    //  si el nodo no cumple con ninguno de los if previos se igualaria current con el siguiente nodo en la lista.
     current = current.next;
  }
  // por ultimo en caso de no estar en la lista el valor indicado en la busqueda se da como respuesta por defecto el retorno del valor null
  return null;
}

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.buckets = [];
  this.numBuckets = 35;
}

// -- HASH --

HashTable.prototype.hash = function (input) {
  var code = 0;
  for ( let i = 0; i < input.length ; i++) {
    code += input.charCodeAt(i);
  }
  return code % this.numBuckets;
}

HashTable.prototype.set = function (key, value) {
  if (typeof key !== 'string') throw new TypeError ("Keys must be strings");

  var bucketNumber = this.hash(key);

  if (!this.buckets[bucketNumber]) this.buckets[bucketNumber] = {};
  this.buckets[bucketNumber][key] = value;
}

HashTable.prototype.get = function (key) {
  var bucketNumber = this.hash(key);
  if (this.buckets[bucketNumber][key]) return this.buckets[bucketNumber][key];
  return false;
}



HashTable.prototype.hasKey = function (key) {
  var bucketNumber = this.hash(key);
  if (this.buckets[bucketNumber][key]) return true;
  return false;
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
