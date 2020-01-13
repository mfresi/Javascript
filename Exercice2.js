function calcul(){

    var rayon = prompt("Entrez le rayon du cercle :");
    var pi = 3.14;
    var resultperi = 2 * pi * rayon;
    var resultair = pi * rayon * rayon;

    alert("le périmètre du cercle est de " + resultperi);
    alert("L'ai du cercle est de " + resultair);
}