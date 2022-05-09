import { Monster } from "./class.monster.js";

export class Boss extends Monster {

    static linkToImg = "./assets/img";

    static maxLuck = 9; // Chance max de lacher le loot (9 exclut)
    static minLuck = 1; // Chance min de lacher le loot (1 inclut)
    static luck = Math.floor(Math.random() * (this.maxLuck - this.minLuck) + (this.minLuck)); // Permet d'avoir 1 chance sur 8 que le monstre ait du loot à lacher

    constructor() {
        super("Boss", 7, 8, 90, 0, 0);
        maxLuck = this.maxLuck;
        minLuck = this.minLuck;
        luck = this.luck;
        
    }

    posséder() {
        if (luck == 5) { // Si on obtient aléatoirement le chiffre 5, alors le monstre a du loot
            return true;
        }
    }
    
}