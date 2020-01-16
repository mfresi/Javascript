function init(){

    var champ = document.getElementById('nom');
    var confirmer = document.getElementById('bouton1');
    var supprimer = document.getElementById('bouton2');
    confirmer.onclick = fctSubmit;
    supprimer.onclick = remise_a_zero;

}

function  fctSubmit(){

    var champ = document.getElementById('nom').value;
    alert(champ);
    document.getElementById('formulaire').submit();
}

function  remise_a_zero(){

    document.getElementById('nom').value = '';
    alert("Le champ va se vider en appuyant sur ok");
}