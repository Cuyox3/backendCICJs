// clase 1 
console.log("Hello word")
let variable = "Hello Word";
//console.log(typeof variable)                              //type of: Te dice el tipo de variable que estas ocupando1
//console.log(global)                                       //global: Es la variable global donde se guardan temporalmente todas las demas variables 
console.log( "fisrt variable"  ,  variable )                // concatenacion 
console.log( "fisrt variable"  + "  " +  variable )         // concatenacion
console.log( `fisrt variable ${variable.toUpperCase()}`)    // Interpolacion , Objeto string tiene sus propias funciones 
const constante = "this is a constant value";               // Las constantes no varian 
console.log(constante) 
// Metodo string 
let string = "Just a text"; 
const character = string.charAt(5)                         // chartAt: Seleccionar un caracter de un string
console.log(character)  
const portion = string.slice(2,6)                          // slice: Toma los caracteres que le pasamos como argumento, el ultimo es asintotico
console.log(portion)
const replace = string.replace ('s','x')                   // replace : Reemplaza una letra por otra
console.log(replace)
const split = string.split(' ')                           // split : Separa en una lista de acuerdo al argumento que le pasemos s 
console.log(split)
//Flotantes 
let flotante = 3.1416 ; 
console.log(flotante)    
console.log(typeof flotante)
//let redondeo =  flotante.round()                            //round
//let cell = flotante.cell()                                  //cell
//Casteo 

//No alcance a coopiar esta parte xd 

//Undefined
let nada; 
console.log(typeof nada)

//Boleanos 

//Valores para falsos 
/*
Boleean(0);
Boleean(null);
Boleean(false);
Boleean("");
Boleean("undefined");
*/

// Arrays 
let array = [12,23.123, 'texto', [1,2,3]]
console.log(array[1])
//console.log(array.length())
console.log(array[3])

array.push("at the end") //Agrega un valor al final de la matriz

array.pop ()

array.unshift("at the end")

array.shift("at the begining ")

//Asignacion por referencia 
// * Los arreglos se guardan por referencia 
let array2 = array 

console.log ("My array", array)
console.log ("My array2", array2)
array2.push("other value")
console.log ("My array", array)
console.log ("My array2", array2)

notLinkedArray = [...array] // Spread operator 
notLinkedArray.push("different value") 
console.log ("My array", array)
console.log ("notlinked", notLinkedArray)

// Spliee (Donde empiezan los elementos, elementos a borrar , *args)

let galletas = ["Emperador", "Oreo", "Barritas", "Prinipe"]
console.log(galletas)
galletas.splice (1,2) 
console.log(galletas)
galletas.splice (1,0,'canelitas', 'lors')
console.log(galletas)
galletas.splice (1,3,'POLVORONES')
console.log(galletas)

// Se viene el programa utilizando node



// Objetos 

const person = {
    eyes : "brown",
    height : 1.68, 
    hair_color : "black" ,
    city: "CDMX"
    }

console.log(person)
console.log(person.hair_color)
console.log(person["eyes"])
person.first_name = "Pedro";     //se puede agregar por que se le puede agregar espacio en memoria 
console.log(person)

let property_name = "nationality"
person[property_name] = "French"
console.log(person)


const {first_name, height } = person
console.log(first_name)
console.log(height)

const {eyes: eyes_color } = person
console.log(eyes_color)


person. schools = ["IPN", "Cinvestav"]

person.pet = { 
    pet_name : "Hercules",
    breed: "pug"
}

console.log(person)


const otherPerson = {
        ...person //Sprate operation 
}

otherPerson.degree  = "Ing. Robótica"

console.log(person)
console.log(otherPerson)

// Estructuras de control 

let my_condition = 65

const me = {
    age: 17 

}

let general_condition = true 

if (me.age >= my_condition && general_condition ) {
    console.log("Te puedes jubilar")
}
else if(me.age >18 ){
    console.log("A chambear")
}
else {
    console.log("a estudiar")
}

const pc = {
    cpu : "Ryzen 8700x",
    grpu : "4090"
}


const other_pc = {
    cpu : "Ryzen 8700x",
    grpu : "4090"
}

if (pc.cpu == other_pc.cpu) {
    console.log("same pc")
}

for(let i =0 ; i<10 ; i++) {
    console.log(i)
}

const panDulce =["Concha", "Dona de chocolate", "Reja", "Muffin"]

for (bread of panDulce ){
    console.log(bread)
}


for ( key of Object.keys(person)) {
    console.log(key)
}


for ( key of Object.values (person)) {
    console.log(key)
}

for ( [key, value] of Object.entries(person)) {
    console.log(key,"-", value)
}

let contador = 10;

while (contador) { 
    console.log(contador ** 2);
    contador --
}

do {
    console.log("Still  in range")
} while (contador=0 ) // No se deben de dejar espacios 

let fruit = "banana"

switch (fruit) {
   
    case "apple":
    case "greape": 
        console.log(" That is my favorite fruit : apple or greape")
        break

    case "strawberry": 
        console.log(" That is my favorite fruit : strawberry")
        break

    case "avocado": 
        console.log(" That is my favorite fruit : avocado")
        break

    case "banana":
        console.log(" That is my favorite fruit : banana ")
        break

    default :
        console.log("Inserte una fruta ")
}

// Funciones : 


function sumNumbers (n1,n2){
    suma =  n1 + n2 
    return suma
}

sumada = sumNumbers(9,2)
console.log (sumada)

// Scope 
/* 
Es el alcance que tienen las variables para ser utilizadas 
Global para todo el codigo 
Block dentro del bloque 
Function dentro de la funcion 
*/ 

// Hoisting 
/* 
Acomoda las variables dentro de la parte superior de codigo para que se definan al arrancar
y no haya problema durante la ejecucion del codigo 

*/ 

let global_var = "Suadero"

function printValues (){
    let localtaco = "asada"
    console.log(localtaco)
    console.log(global_var)
}
printValues()
localtaco = "cochinita"
console.log(localtaco)

function operations(n1, n2) {
    return {
        sum: n1 +n2 ,
        substraction: n1-n2 ,
        product: n1*n2
    }

} 

let {product} = operations(12,18) // Se descontruye para no ocupar tanto espacio en memoria 
console.log(product)
// Si no se pasa un argumento de la funcion no se rompe, el valor queda como undefaun

function printcar (vehicule, vehicule2= "rocket" ){
    console.log(vehicule)
    if (vehicule2) console.log(vehicule2)
    }

printcar("ship")

//Funciones privadas
const printvehicule = function (vehicule, vehicule2= "rocket" )  {
    console.log(vehicule)
    if (vehicule2) console.log(vehicule2)
    }

    printvehicule("lambo","pointer")

printvehicule.subObject = {color : "green", age: 23}
console.log(printvehicule.subObject.color)




function saludar () {
    console.log("Hola amigo")
}

function conversation (ac) { 
    console.log("Contacto visual")
    ac(true)
    console.log("Adios")
}

conversation(saludar)

conversation(function (condition){ // El callback esta dentro de otra funcion es cuando se ocupa una sola vez 
    if (condition) console.log(" Como estas ? ")
    else console.log("Perdon voy tarde")
} )



const hardConversation = () => console.log("Miradas pesadas...")
conversation(hardConversation)


//Clushers  Funcion que retorna otra funcion recuerda el contexto de la funcion que lo retorno 
/* 
Funcion de orden superior, es una funcion que retorna otra funcion
*/  

function myClosure (meal1,meal2) {
    console.log("meal1" + "-" + meal1)
    return (meal2) => { console.log("My favorite meal are" ,meal1, meal2, meal3 ) }
}

const receivedFunction = myClosure("pizza", "enchiladas de spaguetti")
receivedFunction("hamburguesa")