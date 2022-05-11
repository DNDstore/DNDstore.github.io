
function prix(quantite, price) {
  return quantite * price;
}

function prixFinal(prix, tauxTax, typeLivraison) {
  var tauxOn = 1.13;
  var tauxQc = 1.15;
  var livraisonReg = 15;
  var livraisonExp = 40;
  if (tauxTax[0].checked) {
    if (typeLivraison[0].checked){
        return prix*tauxOn + livraisonReg;
    } else {
      return prix*tauxOn + livraisonExp;
    }
  } else { 
     if (typeLivraison[0].checked) {
      return prix*tauxQc + livraisonReg;
    } else { 
      return prix*tauxQc + livraisonExp;
    }
  }
}

function achat() { 
  // produits et prix
  var tblPrix = [7.99, 14.99, 12.99, 4.99, 13.99];
  var tblProduit = ["lashes", "acrylics", "jewlery", "noseCuffs", "crystals"];
  let prixTotal = 0;
 //calcule le sous total
  var produits = document.getElementsByName("item");
  var quantite = document.getElementsByName("quantite");
  var receipt = document.getElementById("recu")
  var message = "merci d'avoir fait du shopping avec D&D, nous espérons vous revoir ! le recu: <br>";
  let i= 0
  while (i< produits.length) {
    if (produits[i].checked) {
      message += produits[i].id + " X" + quantite[i].value + "<br>";
      
      prixTotal = prixTotal + tblPrix[i] * parseInt(quantite[i].value); 
    } 
    i++;
  }
  
   alert("le prix est: " + prixTotal + "$" + " " + "avant  taxes et frais de port");
  var htmlprix = document.createElement("p");
  var htmlprixText = string("prixTotal") + "$";
  htmlprix.innerHTML = prixText;
  receipt.appendChild(prix);
    receipt.innerHTML= "<H1>D&D </H1>" + message;
  
    // calculate type of livraison
    var tauxTax = document.getElementsByName("tax");
    var typeLivraison = document.getElementsByName("shipping");
    // send
  
   var total = prixFinal(prixTotal, tauxTax, typeLivraison);
    alert("le total s'élève à :" + " " + total + "$");

  var htmlprixFinal = document.createElement("p");
  var htmlprixFinalText = "apres tax et livraison" + htmlprixFinal + "$";
  prixFinal.innerHTML = prixFinalText;
  receipt.appendChild.(prixFinal);
}
//{}
