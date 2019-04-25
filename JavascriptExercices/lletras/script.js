/************************************************************************ 
 * L’exercici consisteix en mostrar per consola quantes vegades apareix cada lletra del teu nom i cognoms amb diferents variants (fases).
 * 
FASE 1
Crea un llistat amb el teu nom on cada posició correspongui a una lletra.
Fes un bucle que recorri aquesta taula i mostri per consola cadascuna de les lletres.

 ***********************************************************************/
var myName = 'Citlalli3';
var nameLetters = myName.toUpperCase().split("");

//console.log(nameLetters)

const VOCALES = ['A','E','I','O','U']; 
var reDigits = RegExp('d');
//const notVOCALS = 

for(var i=0;i<nameLetters.length;i++){
  //fase 2
  if (VOCALES.includes(nameLetters[i])){
    console.log(`${nameLetters[i]} es una vocal`);
  } else if (/\d/.test(nameLetters[i])) {
    console.log(`${nameLetters[i]} NO es una vocal, es un número`);
  } //else if (nameLetters[i].typeof == number) {
    //console.log(`${nameLetters[i]} NO es una letra, es un número`);
  //}
}

 /************************************************************************ 
  FASE 2
Canvia la taula per una llista (List<Character>)
Al bucle, si la lletra és una vocal imprimeix a la consola: ‘He trobat la VOCAL: __’. Sinó, imprimeix: ‘He trobat la CONSONTANT: __’.
Si trobes un numero, mostra per pantalla: ‘Els noms de persones no contenen el número: __’
 ***********************************************************************/


 /************************************************************************ 
 ***********************************************************************/


 /************************************************************************ 
 ***********************************************************************/