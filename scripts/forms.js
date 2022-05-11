//var nomDeFamille = document.getElementById("txtNom").value;
//alert("Nom de famille =" + nomDeFamille);

/*document.write("<h4>old ahh slide</h4>")
document.getElementById("myh1").css.color("red");*/

// it has no value because there is no text in the box.
// the js runs before you add text in the text box, so no value
// which is why i put the js in the html with the onclick

//var prenom= document.getElementById("prenomID").value;
//var nomDeFamille = document.getElementById("myform");
//console.log(prenom);
//alert(prenom);



function affiche(quelButton) {
        var prenom = document.getElementById("prenomId").value;
        var nomFamille = document.getElementById("nomFamilleId").value;
        var nomMillieu = document.getElementById("nommillieuId").value;

        switch (quelButton) {
                case 'ini':
                        var premierLettreDuNom = prenom[0];
                        var premierLettreDuNomMillieu = nomMillieu[0];
                        var premierLettreDuNomFamille = nomFamille[0];
                        var initials = premierLettreDuNom+"."+premierLettreDuNomMillieu+"."+premierLettreDuNomFamille;
                        document.body.append("initials: "+initials+"\n");
                        break;
                case 'user':
                        var premierLettreDuNom = prenom[0];
                        var premierLettreDuNomMillieu = nomMillieu[0];
                        var utilisateur = premierLettreDuNom+"."+premierLettreDuNomMillieu+"."+nomFamille;
                        document.body.append("utilisateur: "+utilisateur+"\n");
                        break
                case 'nc':
                        var nomComplet = prenom+" "+nomMillieu+" "+nomFamille;
                        document.body.append("vous etes: "+nomComplet+"\n");
                        break;
        }
}
