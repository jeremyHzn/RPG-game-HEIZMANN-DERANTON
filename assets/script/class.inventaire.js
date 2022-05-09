import { Hero } from "./class.hero.js";
// création de l'inventaire
let inventaire = new Array();

// affichage de l'inventaire
function afficherInventaire(){
    for (i=0;i<inventaire.length;i++){
        document.write("["+scripts[i] +"]");
    }
}

function addInvetaire(drop){
    Hero.inventaire.push(drop)
}


