/************************************************************************ 
 * L’exercici consisteix en mostrar per consola quantes vegades apareix cada lletra del teu nom i cognoms amb diferents variants (fases).
 * 
FASE 1
Crea un llistat amb el teu nom on cada posició correspongui a una lletra.
Fes un bucle que recorri aquesta taula i mostri per consola cadascuna de les lletres.

 ***********************************************************************/
var myName = 'Citlalli3$2';
var nameLetters = myName.toUpperCase().split("");

//console.log(nameLetters)

const VOCALES = ['A','E','I','O','U']; 
var reDigits = RegExp('d');
//const notVOCALS = 

for(var i=0;i<nameLetters.length;i++){
  //fase 2
  if (VOCALES.includes(nameLetters[i])){
    console.log(`He trobat la VOCAL: ${nameLetters[i]}`);
  } else if (/\d/.test(nameLetters[i])) {
    console.log(`Els noms de las persones no contenen el número: ${nameLetters[i]}`);
  } else if (/\w/.test(nameLetters[i])) {
    console.log(`He trobat la CONSONANT: ${nameLetters[i]}`);
  } else {
    console.log(`${nameLetters[i]} is not an alphanumerical character`)
  }
}

 /************************************************************************ 
  FASE 2
Canvia la taula per una llista (List<Character>)
Al bucle, si la lletra és una vocal imprimeix a la consola: ‘He trobat la VOCAL: __’. Sinó, imprimeix: ‘He trobat la CONSONTANT: __’.
Si trobes un numero, mostra per pantalla: ‘Els noms de persones no contenen el número: __’
 ***********************************************************************/


 /************************************************************************ 
  * FASE 3
Emmagatzemar en un Map tant les lletres de la llista com el nombre de vegades que apareixen

 ***********************************************************************/

var listedCounts = {};
//var count;

var nameMaped = nameLetters.map (letter =>{
  
  if (!listedCounts[letter]){
    listedCounts[letter]=1;
  } else {
    listedCounts[letter]=listedCounts[letter]+1
  }
  //return listedCounts;
  
})

console.log(listedCounts)

 /************************************************************************ 
   FASE 4
Crea una altra llista amb el teu cognom on cada posició correspongui a una lletra.

Fusiona les dues llistes en una sola. A més, afegeix una posició amb un espai buit entre la primera i la segona. És a dir, partim de la llista name i surname i al acabar l’execució només tindrem una que es dirà fullName.

 ***********************************************************************/

var myLastName = 'Prado';
var lastNameLetters = myLastName.toUpperCase().split("");
var space = ' ';
var concatenatedName;
var withSpace = nameLetters.concat(space)
//console.log(withSpace)
var fullname = withSpace.concat(lastNameLetters)
console.log(fullname)