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