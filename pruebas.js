// const user = {
//   id: 6,
//   email: "homero@maxpower.com",
//   infoPersonal: {
//     nombre: "Homero Simpson",
//     direccion: {
//       calle: "Avenida Siempreviva",
//       numero: 742,
//       barrio: "Springfield",
//       estado: "Massachusetts",
//     },
//   },
// };

// // var index = 0;

// var objContains = function (obj, prop, value, index = 0) {
//   /* Tu codigo aqui */
//   var keys = Object.keys(obj);
//   keys
//   if (obj[prop] === value) return true;
//   if (typeof obj[keys[index]] === "object") {
//   }
//   index
//   if (index < keys.length - 1) return objContains(obj, prop, value, index + 1);

//   // if (obj.infoPersonal[prop] === value) return true;
//   // if (obj.infoPersonal.direccion[prop] === value) return true;
//   return false;
// };

// console.log(objContains(user, "barrio", "Springfield"));
// console.log(objContains(user, "empleo", "Empleado en planta nuclear"));

// EJERCICIO 2
// Secuencia inventada: f(n) = (f(n-1) + f(n-2) + f(n-3)) x 2
// Donde las primeras tres posiciones son dadas por el array recibido por parametro y a partir de
// la siguiente se calcula como la suma de los 3 números anteriores multiplicados por dos.
// array es un arreglo de 3 posiciones que puede contener números o strings, aquellas posiciones que
// sean números debemos dejarlas tal cual están pero las que tengan strings debemos calcular su cantidad
// de caracteres para usarlos en la secuencia.
// Por ejemplo si recibimos: ["Franco", 1, "Henry"] deberíamos tener los siguientes 3 valores iniciales
// de la secuencia f(0) = 6, f(1) = 1 y f(2) = 5 (Ya que "Franco" tiene 6 caracteres y "Henry", 5)
// A partir de ahí la cuarta posición sería  (6 + 1 + 5) * 2 = 24 y así sucesivamente
// La función secuenciaHenry debe devolver el enésimo numero de la serie, por ejemplo para el array
// antes mencionado:
// secuencia: 6, 1, 5, 24, 60, 178, 524
// secuenciaHenry(0) // 6  ya que el elemento de la posición 0 es cero
// secuenciaHenry(1) // 1 ya que el elemento de la posición 1 es 1
// secuenciaHenry(6) // 524 ya que el elemento de la posición 6 es 524
// Para números negativos de n debe devolver false

// function secuenciaHenry(array, n, newArray = [], pos = 0, sec) {
//   // Tu código acá:
//   if (sec === undefined) sec = n;
//   if (n > array.length -1 && sec >= 0) {
//     if (sec === n) {
//       if (typeof array[pos] === "string") newArray.push(array[pos].length);
//       if (typeof array[pos] === "number") newArray.push(array[pos]);
//       if (pos < array.length - 1)
//         return secuenciaHenry(array, n, newArray, pos + 1);
//     }
//     sum =
//       (newArray[newArray.length - 1] +
//         newArray[newArray.length - 2] +
//         newArray[newArray.length - 3]) *
//       2;
//     newArray.push(sum);
//     return secuenciaHenry(array, n, newArray, pos, sec - 1);
//   } else {
//     if (typeof array[pos] === "string") newArray.push(array[pos].length);
//     if (typeof array[pos] === "number") newArray.push(array[pos]);
//     if (pos < array.length - 1)
//       return secuenciaHenry(array, n, newArray, pos + 1);
//     return newArray[n];
//   }
//   return newArray[n];
// }

// console.log(secuenciaHenry(["Franco", 1, "Henry"], 0));
function Node(valor) {
  this.value = valor;
  this.next = null;
}

function BinarySearchTree(valor) {
  this.value = valor;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
  if (value < this.value) {
    if (this.left === null) {
      var newTree = new BinarySearchTree(value);
      this.left = newTree;
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      var newTree = new BinarySearchTree(value);
      this.right = newTree;
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.size = function () {
  if (this.value === null) {
    return 0;
  }

  if (this.left === null && this.right === null) {
    return 1;
  }

  if (this.left === null) {
    return 1 + this.right.size();
  }

  if (this.right === null) {
    return 1 + this.left.size();
  }

  return 1 + this.left.size() + this.right.size();
};

function LinkedList() {
  this.head = null;
  this.size = 0;
}

LinkedList.prototype.add = function (valor) {
  var nuevoNodo = new Node(valor);

  if (!this.head) {
    this.head = nuevoNodo;
    this.size = this.size + 1;
  } else {
    var tailActual = this.head;
    while (tailActual.next !== null) {
      tailActual = tailActual.next;
    }
    tailActual.next = nuevoNodo;
    this.size = this.size + 1;
  }
};

LinkedList.prototype.remove = function () {
  var size = this.size;
  if (!this.head) {
    return undefined;
  }

  if (this.head.next === null) {
    var unicoNodo = this.head;
    this.head = null;
    this.size = this.size - 1;
    return unicoNodo.value;
  }

  var nodoActual = this.head.next;
  var nodoPrevious = this.head;
  while (nodoActual.next !== null) {
    nodoPrevious = nodoActual;
    nodoActual = nodoActual.next;
  }
  nodoPrevious.next = null;
  size--;
  return nodoActual.value;
};

LinkedList.prototype.search = function (arg) {
  var nodoActual = this.head;

  if (nodoActual === null) {
    return null;
  }

  while (nodoActual !== null) {
    if (typeof arg === "function") {
      if (arg(nodoActual.value)) {
        return nodoActual.value;
      }
    } else if (nodoActual.value === arg) {
      return nodoActual.value;
    }
    nodoActual = nodoActual.next;
  }

  return null;
};

// var generateBST = function (array) {
//   var arbol = new BinarySearchTree(array[0]);
//   for (i = 1; i < array.length; i++) {
//     arbol.insert(array[i]);
//   }
//   return arbol.value;
// };

// console.log(generateBST([,6,23,2,17,31,14,5]));

/* LinkedList.prototype.addInPos = function (pos, value) {
  var nodoActual = this.head;
  var nuevoNodo = new Node(value);
  var index = 1, ultimo;
  if (nodoActual === null) {
    return false;
  }

  while (nodoActual.next !== null) {
    if (index === pos) {
      var siguiente = nodoActual.next;
      nuevoNodo.next = siguiente;
      nodoActual.next = nuevoNodo;
      return true;
    }
    index++;
    index
    nodoActual = nodoActual.next;
  }
  if (index === pos) {
    nodoActual.next = nuevoNodo;
    return true;
  }

  return false;
};

var a = new LinkedList();
a.add(1);
a.add(2);
a.add(5);
console.log(a.addInPos(1,3));
console.log(a.head.next.value); */
/*
LinkedList.prototype.simplifyList = function () {
  var current = this.head;
  newList = new LinkedList();
  if (!current) return false;

  while (current) {
    if (newList.search(current.value) === null) {
      newList.add(current.value);
    }
    current = current.next;
  }
  this.head = null;
  this.size = 0;
  current = newList.head;
  current
  while (current) {
    this.add(current.value);
    current = current.next;
  }
};

var lista = new LinkedList();
var lista2 = new LinkedList();

lista.add(5);
lista.add(4);
lista.add(4);
lista.add(4);
lista.add(6);

lista.simplifyList();

console.log(lista.size);
lista;
console.log(lista);
 */

/* function liquidacion(array, pos, nuevoArray = []) {
  // Tu código aquí:
  if (pos == undefined) {
    pos = array.length - 1;
  }

  var keys = Object.keys(array[pos]);
  console.log(keys);
  if (array[pos][keys].LIQUIDACION === true) {
    nuevoArray.push(array[pos]);
    if (pos === 0) {
      return nuevoArray;
    }
    return liquidacion(array, pos - 1, nuevoArray);
  } else {
    if (pos === 0) {
      return nuevoArray;
    }
    return liquidacion(array, pos - 1, nuevoArray);
  }
}

var array = [{ camiseta: { LIQUIDACION: true } }, { gorro: { DESCUENTO: true } }, { abrigo: {} }, { pantalones: { LIQUIDACION: true } }];

console.log(liquidacion(array))
 */
/*
  BinarySearchTree.prototype.obtenerPrendas = function (string, sum = []) {
    // Tu código aquí:
    if (this.value.nombre === string) sum.push(string);
    console.log(sum)
    console.log(this.value.nombre)
    if (this.left) {
      this.left.obtenerPrendas(string, sum);}
      if (this.right) {
        this.right.obtenerPrendas(string, sum);
      }
    return sum;
  }; */

BinarySearchTree.prototype.vender = function (array) {
  // Tu código aquí:
  if (array === []) return false;
  for (var i = 0; i < array.length; i++) {
    if (this.value.nombre === array[i]) this.value.vendido = true;
    if (this.left) {
      this.left.vender(array);
    }
    if (this.right) {
      this.right.vender(array);
    }
  }
};

var arbol = new BinarySearchTree({ nombre: "Camiseta", num: 13 });

arbol.insert({ nombre: "Abrigo", num: 7 });
arbol.insert({ nombre: "Pantalon", num: 6 });
arbol.insert({ nombre: "Abrigo", num: 30 });
arbol.insert({ nombre: "Camiseta", num: 42 });

console.log(arbol);

console.log(arbol.vender([]));


function vacio (array) {
  if (array.length === 0) {
    return false;
  }
  return true;
}

var a = [];
var b = a.length;

console.log(b);


console.log(vacio([]))


