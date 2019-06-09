var villes = ["Marseille", "Toulon", "Ajaccio", "Montpellier", "Paris"];
console.log(villes[3]);

villes.splice(1, 0, 'New-York');
console.log(villes);

villes.splice(2, 1,);
// replaces 1 element at index 4
console.log(villes);

var array1 = [2, 4, 8];
array1.forEach(function(element) {
console.log([element]);
});
// expected [2, 4, 8]

 // mettre au carré un élement en js
 console.log(Math.pow(2,2));
 console.log(Math.pow(2,4));
 console.log(Math.pow(2,8));
// expected output: 343


//exemple pour multiplication
var array1 = [1, 4, 9, 16];
// pass a function to map
var map1 = array1.map(x => x * 2);
console.log([map1]);
// expected output: Array [2, 8, 18, 32]


//exemple mettre au carré chaque élément d'un tableau
var square =[1, 2, 3, 4, 5].map(function(value){
return Math.pow(value,2);
});
console.log([square]);

// exemple fonction simplifiée
var square = [1, 2, 3, 4, 5].map(value => Math.pow(value,2));
console.log([square]);

//multiplier par 2 les éléménts du tableau array1
var array1 = [2, 4, 8];
// pass a function to map
var map1 = array1.map(x => x * 2);
console.log([map1]);
// expected output: Array [4, 8, 16]

//mettre au carré chaque élément du tableaux
var array1 = [2, 4, 8].map(value => Math.pow(value,2));
console.log(array1);

//exercices


var numb1=50;
var numb2=45;
console.log(numb1+numb2);
console.log((numb1 + numb2) / 2);

var tableau = [12, 13];
console.log(tableau.length);
console.log(tableau[0] + tableau[1]);
console.log((tableau[0] + tableau[1])/tableau.length);

var myPromo = [12, 13, 17, 3, 14, 18];
var myVa = myPromo.length;
console.log(myVa);
console.log((myPromo[0] + myPromo[1] + myPromo[2] + myPromo[3] + myPromo[4] + myPromo[5]) / myVa);

var myPromo = [12, 13, 17, 3, 14, 18];
var myVa = myPromo.length;
var somme = 0;
 for (var i=0;i<myVa;i++) {
   somme = somme + myPromo[i];
 }
var resultat1 = somme/myVa;
console.log(resultat1);

// Le tableau suivant indique les notes d'une promo lointaine !
// Calculer la moyenne de cette promo et afficher le resultat
var promo = [12, 13, 17, 3, 14, 18];
var n = promo.length;
var somme = 0;
 for (var i=0;i<n;i++) {
   somme = somme + promo[i];
 }
var resultat1 = somme/n;
console.log(resultat1);



// Afficher la date d'aujourd'hui sous la forme:
// "Nous somme le [jour/mois/année] et il est [heure/minute]"
// Afficher ensuite "bonjour" si il est en 7h du matin et 17h
// et "bonsoir" s'il est entre 17h et 00H
var date =new Date();
var h=date.getHours();
if (h<10) {h = "0" + h}
var m=date.getMinutes();
if (m<10) {m = "0" + m}
console.log('Nous sommes le ' + date.toLocaleDateString()+ ' et il est ' + h + ' h / ' + m);
result4 = (07==h && h<17) || (00<h && h==07)? 'Bonjour' : 'Bonsoir';
console.log(result4);


//les conditions
//Déclarez une variable "age" avec la valeur de votre choix.
//En utilisant les conditions 'if' et 'else' affichez :
//peut voter si 'age' est supérieur ou égal à 18
//ne peut pas voter si 'age' est inférieur à 18

var result5, number = 17;
result5 = (number === 18) ? 'Peut voter' : 'Ne peut pas voter';
console.log(result5);

//----------------- Fonctions -------------------

//Créez deux variables initialisées à 3 et 4.
//Créez une fonction qui retourne l'addition de ces deux valeurs.
var add = (num1, num2) => {return  num1 + num2};
var x = add (3,4);
console.log(x);


//exemple de fonctions
var carré = function (nombre) { return nombre * nombre };
var x = carré(4); //x reçoit la valeur 16
console.log(x);




//Créez une fonction qui prend en paramètre la valeur i. La fonction doit
//retourner la valeur i au carré et l'afficher.
var square1 = (number1) => {return number1 * number1};
var i = square1(2);
console.log(i);

// En utilisant la methode 'map', mettre la chaine de
// caractère en majuscule.
var beatles = ["paul", "john", "ringo", "george"];
beatles.forEach(function(nouvel){
  console.log(nouvel.toUpperCase());
});

//fonction fléchée avec map
var beatles = ["paul", "john", "ringo", "george"];
var map5 = beatles.map(x => x.toUpperCase());
console.log("Tableau " + map5);

//exemples toUpperCase
var myAmi= "paul";
console.log(myAmi.toUpperCase());

var array5=["albert", "michel"];
array5.forEach(function(elem){
  console.log(elem.toUpperCase());
});

//en utilisant la methodde 'map'
//exemple
var array1 = [1, 4, 9, 16];
// pass a function to map
var map1 = array1.map(x => x * 2);
console.log(map1);
// expected output: Array [2, 8, 18, 32]

var array5=["albert", "michel"];
array5.forEach(function(elem){
console.log(elem.toUpperCase());
});
//exemple avec méthode map
var array5=["albert", "michel"];
var map5 = array5.map(x => x.toUpperCase());
console.log("Tableau " + map5);

//Créez un tableau nommé tab dont le premier
//élément est -2, le deuxième 3 et le troisième 4
//Créez une fonction qui soustrait chaque éléments du tableau au suivant.
//var tab = [-2, 3, 4];
//var soustrait = (tableau) => {
 //TODO
//};

//décomposition et exemple
var tab = [-2, 3, 4];
console.log(tab);


var tab = [-2, 3, 4];
// pass a function to map
var resul1 = tab [0] - tab[1];
console.log(resul1);
var resul2 = tab[1] - tab[2];
console.log(resul2);
console.log ([resul1, resul2]);

//
var tab =[-2, 3, 4];
tab.sort((a, b) => a-b);
console.log(tab);

var nombres1 = [4, 2, 5, 1, 3];
nombres1.sort((a, b) => a - b);
console.log(nombres1);

var tab = [-2, 3, 4];
//var soustrait = (tab) => {
i = 0;
var x = tab [i] - tab [(i + 1)];
i = 1;
var x1 = tab [i] - tab [(i + 1)];
//TODO
//};
console.log([x, x1]);

var tab = [-2, 3, 4];
var soustrait = tab => {
i=0 ;
var x = (i - (i++));
};
console.log('resultat' + x);
//pas terminé






//Créez une fonction qui renvoie la somme de chaque éléments du
//tableau si celui-ci est supérieur à 0.
const array2 = [-2, 4, -5, 3, 6];
const addPositiveNumber = (tableau) => {

 //TODO
};


//Créez une fonction qui prend un parametre 'r' et qui
//renvoie le périmetre d'un cercle.
const périmetreCercle = (r) => {
  //TODO
};


//Créez une fonction qui met la premiere lettre d'un mot en majuscule.
//Le reste du mot doit être en minuscule.
//Le mot est "SimPloN"
const capitalize = (word) => {
  //TODO
};


//Odd or Even
//Créez un fonction qui prend un nombre en parametre et qui renvoie :
//paire si le nombre est pair
//impaire si le nombre est impair
//Tips : jetez un coup d'oeil à l'opérateur '%' dans la doc.



//Mot inversé
//créez une fonction qui prend en paramètre une chaine de caractère.
//Cette fonction renvoie la chaine de caractère inversée.
//ex: reverseWord('simplon') ==> 'nolpmis'
//Aide : join(), split(), reverse()
const reverseWord = (word) => {
  //TODO
};


//créez une fonction qui renvoie la somme de tableau
const nombres = ["3", "5", "6", "2"];
