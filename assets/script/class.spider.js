import { Monster } from "./class.monster.js";

export class Spider extends Monster {

    static linkToImg = "./assets/img";

    // A vérifier en fonction de la consigne :
    static variousColor = ["Spiders " + "(Black, Blue, Gold)"];

    static maxLuck = 4; // Chance max de lacher le loot (4 exclut)
    static minLuck = 1; // Chance min de lacher le loot (1 inclut)
    static luck = Math.floor(Math.random() * (this.maxLuck - this.minLuck) + (this.minLuck)); // Permet d'avoir 1 chance sur 3 que le monstre ait du loot à lacher

    constructor() {
        super("Spider", 2, 3, 40, 0, 0);
        maxLuck = this.maxLuck;
        minLuck = this.minLuck;
        luck = this.luck;
        
    }

    posséder() {
        if (this.luck == 1) { // Si on obtient aléatoirement le chiffre 1, alors le monstre a du loot
            return true;
        }
    }

    afficheTableau() {
        console.table(variousColor);
    }

    
}