function jourDeLaSemaine(){

    var day = new Date("Janvier 13, 2020 16:31:00");
    var jourSemaine = day.getDay();

    switch (jourSemaine) {
        case 1: 
            alert('On est lundi.');
        break;
        
        case 2: 
            alert('On est mardi.');
        break;
        
        case 3:
            alert('On est mercredi.');
        break;

        case 4:
            alert('On est jeudi.');
        break;

        case 5:
            alert('On est vendredi.');
        break;

        case 6:
            alert('On est samedi.');
        break;

        case 7:
            alert('On est dimanche.');
        break;

        
     }
}