// JavaScript source code
function lahetaVastaukset() {
    var yhteensa = 5;
    var pisteet = 0;
    var huom = 0;

    //  Hae käyttäjän syötteet
    var k1 = document.forms["kyselyLomake"]["k1"].value;
    var k2 = document.forms["kyselyLomake"]["k2"].value;
    var k3 = document.forms["kyselyLomake"]["k3"].value;
    var k4 = document.forms["kyselyLomake"]["k4"].value;
    var k5 = document.forms["kyselyLomake"]["k5"].value;
}
// Tarkastus
for (i = 1; i <= yhteensa; i++)
    {
        if (eval('k' + 1) == null || eval('k' + 1) == '')
        {
            alert('Et vastannut kysymykseen numero ' + i);
            huom = 1;
        }
        if (huom = 1) return false;
}

