var tab = [-2,1,4];

function soustrait(x){

    var resultat = x -2;
    if(resultat >= 0){

        alert(resultat);
    }else{

        alert("Nombre négatif !");
    }
}

function affiche(){

    soustrait(tab[0]);
    soustrait(tab[tab.length-1]);
}