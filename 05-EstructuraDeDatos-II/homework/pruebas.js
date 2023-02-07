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
  var node = new Node(data),
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
  } else if (!this.head.next) {
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
};

// para continuar en el video quedamos en el minuto 26:19 de la clase Estructura de datos II.

// -- search --

LinkedList.prototype.search = function (arg) {
  var current = this.head;

  console.log(current);

  if (!current) {
    return "La lista esta vacia";
  }

  while (current) {
    if (typeof arg === "function") {
      if (arg(current.value)) {
        return current.value;
      }
    }

    if (current.value === arg) return current.value;

    current = current.next;
  }

  return null;
};

var link = new LinkedList();
link;
link.add("hola");
link;
link.add(22);
link;
link.add([32, 25, 1, 63]);
link;
console.log(link);
link.remove();
console.log(link);

console.log(link.search("hola"));
