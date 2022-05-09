import { Monster } from "./class.monster.js";

export class Skeleton extends Monster {

    static linkToImg = "./assets/img";

    // A vérifier en fonction de la consigne :
    static variousColor = ["Skeletons " + "(Green, White, Red)"];

    static maxLuck = 6; // Chance max de lacher le loot (6 exclut)
    static minLuck = 1; // Chance min de lacher le loot (1 inclut)
    static luck = Math.floor(Math.random() * (this.maxLuck - this.minLuck) + (this.minLuck)); // Permet d'avoir 1 chance sur 5 que le monstre ait du loot à lacher

    constructor() {
        super("Skeleton", 4, 2, 50, 0, 0);
        maxLuck = this.maxLuck;
        minLuck = this.minLuck;
        luck = this.luck;
        
    }

    posséder() {
        if (luck == 4) { // Si on obtient aléatoirement le chiffre 4, alors le monstre a du loot
            return true;
        }
    }

    afficheTableau() {
        console.table(variousColor);
    }

    
}