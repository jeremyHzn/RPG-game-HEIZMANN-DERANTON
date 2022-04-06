export class Hero {
    _nom;
    _prenom;
    _force;
    _degats;
    _defense;
    _ptVie;
    _sacPotions;
    _sacArmes;

    static minForce = 3;
    static maxForce = 10;
    
    static minDef = 1;
    static maxDef = 5;
    
    static ladefense = Math.floor(Math.random() * ((this.maxDef - this.minDef) + this.minDef));
    static laforce = Math.floor(Math.random() * ((this.maxForce - this.minForce) + this.minForce));
    
    constructor(nom, prenom, force, degats, defense, ptVie, sacPotions, sacArmes) {
        this.nom = nom;
        this.prenom = prenom;
        this.force = force;
        this.degats = degats;
        this.defense = defense;
        this.ptVie = ptVie;
        this.sacPotions = sacPotions;
        this.sacArmes = sacArmes;
    }
    

    get nom() {
        return this._nom;
    }

    set nom(tmp) {
        return this._nom = tmp;
    }

    get prenom() {
        return this._prenom;
    }

    set prenom(tmp) {
        return this._prenom = tmp;
    }

    get force() {
        return this._force;
    }

    set force(tmp) {
        return this._force = tmp;
    }

    get degats() {
        return this._degats;
    }

    set degats(tmp) {
        return this._degats = tmp;
    }

    get defense() {
        return this._defense;
    }

    set defense(tmp) {
        return this._defense = tmp;
    }

    get ptVie() {
        return this._ptVie;
    }

    set ptVie(tmp) {
        return this._ptVie = tmp;
    }

    get sacPotions() {
        return this._sacPotions;
    }

    set sacPotions(tmp) {
        return this._sacPotions = tmp;
    }

    get sacArmes() {
        return this._sacArmes;
    }

    set sacArmes(tmp) {
        return this._sacArmes = tmp;
    }

    attaque(cible) {
        if (cible.ptVie <= 0) {
            return false;
        } else if (cible.ptVie > 0) {
            return true;
        }
    }

    loot(arme, potion) {

        /**
         * Refaire cette structure de contre avec des if imbriquer 
         * en switch pour améliorer le code bonne chance fréro du futur
         */

        if (arme == 1) { // Si c'est une arme

            if (sacArmes < 4) { // Et si le sac d'armes n'est pas plein
                sacArmes = sacArmes + 1; // On ajoute une arme
                degats = degats + 4; // Les dégats du perso augmentent
                return true;

            } else if (sacArmes >= 4) { // Si le sac d'armes est plein
                arme == 0; // On abandonne l'arme lootée
                return false;
            }

        } else if (arme != 1 && potion == 1) { // Si ce n'est pas une arme, mais une potion

            if (sacPotions >= 10) { // Si le sac de potion est pas plein
                potion == 0; // On abandonne la potion
                return false;

            } else if (sacPotions < 10) { // Si le sac de potion n'est pas plein
                sacPotions = sacPotions + 1; // On ajoute une potion
                return true;

            }
        }
    }
    
}