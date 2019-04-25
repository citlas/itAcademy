/******************************************************************
 Exercici 1:
L'exercici consisteix a crear un fitxer anomenat ciber.html i mostrar per consola un 'Hola mundo' (per activar la consola ->; F12). Pista: Console.log()

 *****************************************************************/

console.log("hola mundo");

 /******************************************************************
 Exercici 2:
Crea un alert que mostri el teu nom:

 *****************************************************************/
alert("Hola soy Citlalli");


 /******************************************************************
 Exercici 3:
Crea una variable que contingui el teu nom i un altre que contingui el teu cognom.

 *****************************************************************/
var name = "Citlalli";
var lastName = "Prado";
console.log(`${name} ${lastName}`)


 /******************************************************************
 Exercici 4:
Crea dos variables amb dos números i fes una suma entre ells.

 *****************************************************************/
var firstNumber = 3;
var secondNumber = 5;
console.log(`La suma de ${firstNumber} y ${secondNumber} es ${firstNumber+secondNumber}`)


 /******************************************************************
 Exercici 5:
Crea una variable nota_examen juntament amb un alert que ens digui si l’examen ha estat aprovat o no juntament amb la nota. (caldrà utilitzar un condicional IF)
 *****************************************************************/
var nota_examen = 2.6;

if(nota_examen<5){
  alert(`Has suspendido el examen con ${nota_examen}`)
} else {
  alert(`Has aprobado el examen ${nota_examen}`)
}

 /******************************************************************
 Exercici 6:
Reemplaça la paraula blau per la paraula verd a la següent cadena de text Tinc un cotxe de color blau. Després intenta fer-ho remplaçant les o per les u
 *****************************************************************/
var word = "Tinc un cotxe de color blau";
console.log(`original: ${word}`);
var wordReplaced = word.replace('blau','verd');
console.log(`replaced word: ${wordReplaced}`);
var letterReplaced = word.replace(/[o]/g,'u'); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace - usar regex
console.log(`replaced letters: ${letterReplaced}`);

 /******************************************************************
 Exercici 7:
Donat el seguit llistat d’objectes ‘taula’, ‘cadira’, ‘ordinador’, ‘libreta’, per un bucle que mostri per pantalla cada objecte i la save posició al llistat.

 *****************************************************************/
var array = ['taula','cadira','ordinador','libreta'];

for(var i=0; i<array.length; i++){
    console.log(`L'objecte ${array[i]} està a la posició ${i}`);
   
};


 /******************************************************************
 Exercici 8:
Crea una funció anomenada calculadora que tingui com a entrada els següents paràmetres: operador, valor1 i valor2.
Estructura de la funció que faci sumes, restes i multiplicacions. El resultat haurà de ser mostrar per pantalla.

function calculadora( __ __ __){
	……...
}

var resultat = calculadora(‘resta’,40,20);

 *****************************************************************/

 function calculadora (operador, valor1, valor2){
  if (operador == 'suma'){
      return valor1+valor2
  } else if (operador == 'resta'){
    return valor1-valor2
  } else if (operador == 'multiplica'){
    return valor1*valor2
  } else {
      return ": no hay resultado, tienes que escribir como operador: suma, resta o multiplica"
  }
 }
console.log('los operadores validos son: suma, resta, multiplica. Para saber el resultado escribe el operador y los valores a calcular de la siguiente manera: calculadora("resta",40,20)');
 var resultat = calculadora('resta',40,20)
 console.log(`El resultado es ${resultat}`)