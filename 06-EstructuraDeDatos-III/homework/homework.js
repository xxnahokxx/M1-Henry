"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.size = function () {
  // el arbol solo tiene un nodo
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
  if (value >= this.value) {
    if (this.right !== null) {
      this.right.insert(value);
    } else {
      this.right = new BinarySearchTree(value);
    }
  }
  if (value < this.value) {
    if (this.left !== null) {
      this.left.insert(value);
    } else {
      this.left = new BinarySearchTree(value);
    }
  }
};

BinarySearchTree.prototype.contains = function (value) {
  if (value === this.value) {
    return true;
  }
  if (value > this.value) {
    if (this.right !== null) {
      return this.right.contains(value);
    } else {
      return false;
    }
  }
  if (value < this.value) {
    if (this.left !== null) {
      return this.left.contains(value);
    } else {
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

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {
  /* if (!array){
      var array = [];
   } */

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
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
