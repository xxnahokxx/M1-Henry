/* function BinarySearchTree(value) {
  // this.value es el valor que se ingresa por parametro en la funcion.
  this.value = value;
  // lo que sigue a continuacion es lo que serian los hijos de la ramificacion del arbol.
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.size = function () {
  // si el arbol solo tiene un nodo ingresaria en el if a continuacion.
  if (this.left === null && this.right === null) {
    return 1;
  }
  // tiene un solo nodo a la izquierda
  if (this.left !== null && this.right === null) {
    return 1 + this.left.size();
  }
  // tiene un solo ndo a la derecha
  if (this.left === null && this.right !== null) {
    return 1 + this.right.size();
  }
  // tiene nodos en ambos lados:
  if (this.left !== null && this.right !== null) {
    return 1 + this.left.size() + this.right.size();
  }
};

BinarySearchTree.prototype.insert = function (value) {
  // si el valor a insertar es mayor al valor del nodo padre ingresa al if a continuacion.
  if (value >= this.value) {
    // si el nodo de la derecha existe, se evaluaria ese nodo con recurcion de la propiedad insert.
    if (this.right !== null) {
      // con esta line se ejecutaria la recurcion de la propiedad insert, por lo que entiendo el valor value de la siguiente linea es el valor que queremos insertar.
      this.right.insert(value);
    } else {
      // en caso de que el nodo del lado derecho evaluado sea de valor null, se igualaria dicho valor a un nodo de un arbol binario con el valor a insertar.
      this.right = new BinarySearchTree(value);
    }
  }
  // Ahora seria en caso contrario a lo evaluado previamente, en caso de que el valor que quiero insertar sea menor al valor del nodo en donde estoy ubicado.
  if (value < this.value) {
    // en caso de que se tenga valor existente al lado izquierdo en los hijos del nodo que estoy validando, si existe se ingresa a este if.
    if (this.left !== null) {
      // con esta linea se hace llamado a la recurcion del insert en el lado izquierdo.
      this.left.insert(value);
    } else {
      // en caso de que el valor del hijo del lado izquierdo este con valor de null, se pasa a insertar el valor en esta posicion.
      this.left = new BinarySearchTree(value);
    }
  }
};

BinarySearchTree.prototype.contains = function (value) {
  if (value === this.value) {
    // en caso de que el valor buscado este en el nodo padre, se retorna de una vez el true.
    return true;
  }
  if (value > this.value) {
    // ahora se pregunta si a la derecha existe algun dato, de ser así se ejecutaria la recurcion de contains al lado derecho.
    if (this.right !== null) {
      return this.right.contains(value);
    } else {
      // de no tener informacion en el nodo evaluado se retorna false.
      return false;
    }
  }
  if (value < this.value) {
    // ahora se pregunta si el lado izquierdo tiene informacion, de ser asi, ejecutar recurcion para el lado izquierdo.
    if (this.left !== null) {
      return this.left.contains(value);
    } else {
      // de no tener  informacion al lado izquierdo, retornar false.
      return false;
    }
  }
};

// continuacion de la clase en el minuto 57:20 de la clase pt10b

BinarySearchTree.prototype.depthFirstForEach = function (
  cb,
  order = "in-order"
) {
  // in-order
  if (order === "in-order") {
    //izq - padre - derecha
    if (this.left !== null) {
      this.left.depthFirstForEach(cb, order);
    }

    cb(this.value);

    if (this.right !== null) {
      this.right.depthFirstForEach(cb, order);
    }
  }
  // pre-order
  if (order === "pre-order") {
    //padre - izq - derecha
    cb(this.value);
    if (this.left !== null) {
      this.left.depthFirstForEach(cb, order);
    }
    if (this.right !== null) {
      this.right.depthFirstForEach(cb, order);
    }
  }
  // post-order
  if (order === "post-order") {
    // izq - derecha - padre
    if (this.left !== null) {
      this.left.depthFirstForEach(cb, order);
    }
    if (this.right !== null) {
      this.right.depthFirstForEach(cb, order);
    }
    cb(this.value);
  } else {
    return false;
  }
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) { */
/* if (!array){
       var array = [];
    } */
/*
  cb(this.value);

  if (this.left !== null) {
    array.push(this.left);
  }

  if (this.right !== null) {
    array.push(this.right);
  }

  if (array.length > 0) {
    array.shift().breadthFirstForEach(cb, array);
  }
}; */

// recursión

// hacer una cuenta regresiva con recurcion:
/*
var array = [], tamaño = 0;

function cuentaRegresiva(inicio) {
  if (inicio < 0) {
    return array;
  }
  console.log(inicio);
  array.push(inicio);
  tamaño++;
  return cuentaRegresiva(inicio - 1);
}

console.log(cuentaRegresiva(3));
console.log(tamaño); */

// buscar un dato en un array con recursividad

/* var arreglo = [14,2,3,4,"adios",98,45,"hola"], i= 0;

function buscar (dato){
  if (arreglo[i] === dato) {
    return "el dato esta en el arreglo";
  }
  if (i > arreglo.length) {
    return "dato no encontrado";
  }
  i++;
  return buscar (dato);
}

console.log(buscar(3));
 */

function Queue() {
  this.array = [];

}

Queue.prototype.enqueue = function (elemento) {
  return this.array.push(elemento);
};

Queue.prototype.dequeue = function () {
  return this.array.shift();
};

Queue.prototype.size = function () {
  return this.array.length;
};

var objeto = new Queue();




