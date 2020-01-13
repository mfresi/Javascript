function calcul(){

    var longueur = prompt("Entrez une longueur :");
    var largeur = prompt("Entrez une largeur :");
    var hauteur = prompt("Entrez la hauteur :")
    var resultperi = longueur * largeur;
    var resultair = longueur * largeur * hauteur;

    alert("le périmètre du rectangle est de " + resultperi);
    alert("L'ai du rectangle est de " + resultair);
}