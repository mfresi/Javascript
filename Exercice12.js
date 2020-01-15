var fenetre;

function ouvrir(){

    fenetre = window.open("", "", "width=420,height=230");
    fenetre.focus();
}
 
function positionner(){

    fenetre.moveBy(50, 50);
    fenetre.focus();
}

function deplacer(){

    fenetre.moveTo(30,45);
    fenetre.focus();
}

function reduire(){

    fenetre.resizeTo(520, 230);
    fenetre.focus();
}