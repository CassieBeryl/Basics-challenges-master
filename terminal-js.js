// Bienvenue à ce premier challenge.
// Vous afficherez les resultats dans le terminal avec la commande:
// 'node <nom du ficher>'
// Pour que les resultats soient visible dans le terminal, vous utiliserez
// la fonction 'console.log'
// ex: console.log('simplon');
// ex: console.log(fonction());
// ex: console.log(nom de la variable);
// Lorque vous avez validé un exercice, mettez le en commentaire !!




//Additionnez ces deux termes et stockez le résultat dans une variable
//puis l'afficher
var num1 = "4";
var num2 = "5";
var resultat = num1 + num2;
console.log(resultat);
//TODO
//valider



//Variables et opérateurs
//Déclarer deux variables avec comme valeur 4 et 5
//Créez une autre variable contenant l'addition des deux et l'afficher.
var num1 = 4;
var num2 = 5;
//Créez une autre variable contenant l'addition des deux et l'afficher.
var resultat = 4 + 5;
console.log(resultat);
//valider



//Les tableaux
//Déclarez un tableau avec 5 villes
//Afficher la ville à l'indice 3
//Ajouter une ville au tableau
//Supprimer la ville à l'indice 2

//Afficher la ville à l'indice 3
var villes = ["Marseille", "Toulon", "Ajaccio", "Montpellier", "Paris"];
console.log(villes[3]);
//Ajouter une ville au tableau
villes.splice(1, 0, 'New-York');
console.log(villes);
//supprimer la ville à l'indice 2
villes.splice(2, 1,);
console.log(villes);
//TODO
//valider




//Les boucles
//Boucler sur le tableau 'array1' afin de monter chaque
//éléments au carré et afficher le tableau.

//afficher le tableau simple
var array1 = [2, 4, 8];
array1.forEach(function(element) {
console.log(element);
});
//valider


// mettre au carré un élement en js
console.log(Math.pow(2,2));
console.log(Math.pow(4,2));
console.log(Math.pow(8,2));
//valider


//mettre au carré chaque élément d'un tableau
var array1 = [2, 4, 8].map(value => Math.pow(value,2));
console.log(array1);
//valider

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
//valider


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
result = (07==h && h<17) || (00<h && h==07)? 'Bonjour' : 'Bonsoir';
console.log(result);





//les conditions
//Déclarez une variable "age" avec la valeur de votre choix.
//En utilisant les conditions 'if' et 'else' affichez :
//peut voter si 'age' est supérieur ou égal à 18
//ne peut pas voter si 'age' est inférieur à 18

var result, number = 17;
result = (number === 18) ? 'Peut voter' : 'Ne peut pas voter';
console.log(result);

//----------------- Fonctions -------------------

//Créez deux variables initialisées à 3 et 4.
//Créez une fonction qui retourne l'addition de ces deux valeurs.

var add = (num1, num2) => {return  num1 + num2};
var x = add (3,4);
console.log(x);
//valider


//Créez une fonction qui prend en paramètre la valeur i. La fonction doit
//retourner la valeur i au carré et l'afficher.

var square1 = (number1) => {return number1 * number1};
var i = square1(2);
console.log(i);
//valider


// En utilisant la methode 'map', mettre la chaine de
// caractère en majuscule.
var beatles = ["paul", "john", "ringo", "george"];

var beatles = ["paul", "john", "ringo", "george"];
beatles.forEach(function(nouvel){
  console.log(nouvel.toUpperCase());
});

//fonction fléchée avec map
var beatles = ["paul", "john", "ringo", "george"];
var map5 = beatles.map(x => x.toUpperCase());
console.log("Tableau " + map5);
//valider

//Créez un tableau nommé tab dont le premier
//élément est -2, le deuxième 3 et le troisième 4
//Créez une fonction qui soustrait chaque éléments du tableau au suivant.

//const soustrait = (tableau) => {
 //TODO
//};

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
//const array2 = [-2, 4, -5, 3, 6];
//const addPositiveNumber = (tableau) => {
 //TODO
//};




//Créez une fonction qui prend un parametre 'r' et qui
//renvoie le périmetre d'un cercle.
//const périmetreCercle = (r) => {
  //TODO
//};

//Créez une fonction qui met la premiere lettre d'un mot en majuscule.
//Le reste du mot doit être en minuscule.
//Le mot est "SimPloN"
//const capitalize = (word) => {
  //TODO
//};



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
//const reverseWord = (word) => {
  //TODO
//};


//créez une fonction qui renvoie la somme de tableau
//const nombres = ["3", "5", "6", "2"];
