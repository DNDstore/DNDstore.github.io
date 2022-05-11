
function madLib() {
  var vetements = document.getElementById("vetements").value;
  var nourriture = document.getElementById("nourriture").value;
  var action = document.getElementById("action").value;
  var ami = document.getElementById("ami").value;
  
  //document.body.append
  //alert(nourriture);
  
  alert("J’adore l’été!  Chaque jour, quand je suis en vacances, je me réveille, je mets mes "+vetements+" je me rend à la cuisine et je mange "+nourriture+" pour déjeuner.  Ensuite, mon activité préféré est de "+action+" avec mon ami "+ami+".");
  alert(vetements+nourriture+action+ami)
}

