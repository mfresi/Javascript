function boucle(){

    var i;
    var tab = new Array(); 

    for(i = 0; i < 3; i++){

        resultat = i * i;
        alert(resultat);
    }
}

function boucle2(){

    var tailletab = prompt("Longueur souhaité du tableau :");

    for(i = 0; i < tailletab; i++){

        resultat = i * i;
        alert(resultat);
    }
}