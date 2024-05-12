/* Paradigma de programacion que se basa en abstraccion de propieda y comportamientos a travez de clases 
Las clases definen las propuedades de nuestro objeto 
Las instancias son objetos especificos con propiedades y metodos especificas 

Abstraccion :Transofrme ente del mundo real en propiedades y comportamientos 
             Los comportamientos de una 
Polimorfismo:
Herencia :
Encapsulamento :  




*/

class Animal {
    constructor(breed, color){
    this.bread = breed 
    this.color =color
    }
    makeNoise() {
        console.log("Making noise....")
    }
}

class Dog extends Animal {
    constructor(bread, color){
        super("mamifero")
        this.bread = bread 
    this.color =color
    }
    makeNoise() {
    console.log("Guau Guau")
    console.log("My bread is:", this.bread )
    console.log(Dog.naturaly)
    }
    static sleep(){
        console.log("zzzzzzzzzz")
    }
}

class Cat{
    constructor(bread, color){
    this.bread = bread 
    this.color =color
    }
    makeNoise(){
    console.log("Miau Maiu")
    }
    static sleep(){
        console.log("zzzzzzzzzz")
    }
}

const baxter = new Dog("pug","brown")
baxter.naturaly = "lovely"
console.log(baxter.bread)
baxter.makeNoise()

const Milo = new Cat("persian", "white")

function makeAnimalNoise(animal){
    animal.makeNoise()
}

makeAnimalNoise(baxter)
makeAnimalNoise(Milo)

