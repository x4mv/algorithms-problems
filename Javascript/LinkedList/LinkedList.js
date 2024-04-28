// creando un nodo de la lista enlazada 

class Node {
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}

// creando un nuevo nodo 
// const newNode = new Node(3)

// console.log(newNode);       

//creando la lista enlazada como tal

class LinkedList {

    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    // metodos de la linked list

    //agregando un elemento al final 
    push(value){
        const newNode = new Node(value)

        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.tail.next = newNode; 
            this.tail = newNode;
        }

        this.length += 1;
        return this;
    }
    //Eliminando un elemento al final 

    pop(){
        // no items
        if (!this.head) return undefined
        
        // more than one
        let pre = this.head;
        let temp = this.head; 

        while(temp.next){
            pre = temp
            temp = temp.next;
        }

        this.tail = pre; 
        this.tail.next = null;
        this.length -= 1;

        //one item
        if (this.length === 0){
            this.head = null; 
            this.tail = null;
        }

        return temp;

    }


    // agregando un elemento al comienzo
    unshift(value){
        const newNode = new Node(value);

        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length += 1; 
        return this ;
    }

    //eliminando un elemento al comienzo 

    shift(){
        // no items
        if (!this.head) return undefined;

        // more than one item 
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;

        this.length -= 1;

        if (this.length === 0){
            this.head = null;
            this.head = null;
        }
        return temp;
    }

    // get a particular node
    get(index){

        if (index < 0) return undefined; 
        if (index >= this.length) return undefined; 

        let temp = this.head 

        for (let i = 0 ; i < index ; i++){
            temp = temp.next;
        }

        return temp
    }

    set(index, value){

        let temp = this.get(index);

        if (temp){
            temp.value = value;
            return true
        }

        return false 
    }
}

// creando una lista enlazada 

let myLinkedList = new LinkedList(2)

console.log("Creando la lista: \n",myLinkedList);

myLinkedList.unshift(1)
console.log("Agregando a la izquierda \n",myLinkedList);

myLinkedList.push(3)
console.log("Agregando a la derecha \n",myLinkedList);

myLinkedList.unshift(0)
console.log("Agregando a la izquierda \n",myLinkedList);

myLinkedList.pop()
console.log("Eliminando al final de la lista \n",myLinkedList);

myLinkedList.shift()
console.log("Eliminando al comienzo de la lista \n",myLinkedList);

const nodo = myLinkedList.get(1)
console.log("Obten el valor del index 1 Value: ",nodo.value);

const nodoCambiado = myLinkedList.set(1, 24)
console.log("Obten el valor del index 1 Value: ",nodoCambiado);