// clase 1 
console.log("Hello word")
let variable = "Hello Word";
//console.log(typeof variable)                              //type of: Te dice el tipo de variable que estas ocupando
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
