export class Hero {
    _nom;
    _prenom;
    _force;
    _degats;
    _defense;
    _ptVie;
    _sacPotions;
    _sacArmes;

    static _degats = 3;

    static minForce = 3;
    static maxForce = 10;
    
    static minDef = 1;
    static maxDef = 5;
    
    static _defenseHero = Math.floor(Math.random() * ((this.maxDef - this.minDef) + this.minDef));
    static _forceHero = Math.floor(Math.random() * ((this.maxForce - this.minForce) + this.minForce));
    
    constructor(nom, prenom, forceHero, degats, defenseHero, ptVie, sacPotions, sacArmes) {
        this.nom = nom;
        this.prenom = prenom;
        //this.force = force;
        this.forceHero = forceHero;
        this.degats = degats;
        //this.defense = defense;
        this.defenseHero = defenseHero;
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

    //get force() {
    //    return this._force;
    //}

    //set force(tmp) {
    //    return this._force = tmp;
    //}

    get forceHero() {
        return this._forceHero;
    }

    set forceHero(tmp) {
        return this._forceHero = tmp;
    }

    get degats() {
        return this._degats;
    }

    set degats(tmp) {
        return this._degats = tmp;
    }

    //get defense() {
    //    return this._defense;
    //}

    //set defense(tmp) {
    //    return this._defense = tmp;
    //}

    get defenseHero() {
        return this._defenseHero;
    }

    set defenseHero(tmp) {
        return this._defenseHero = tmp;
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
        if (cible.ptVie <= 0) { // Si l'ennemi n'as plus de PV, inutile d'attaquer
            return false;
        } else if (cible.ptVie > 0) { // Si l'ennemi a encore des PV, le héro attaque
            return true;
        }
    }

    loot(arme, potion) {

        // En Switch :

        switch (true) { // Dans le cas où on loot quelque chose

            case arme == 1: // Si c'est une arme

                case sacArmes < 4: // Et que le sac d'armes n'est pas plein
                    sacArmes = sacArmes + 1; // On ajoute une arme
                    degats = degats + 4; // Et on augmente les dégats
                    break;

                case sacArmes >= 4: // Et que le sac est plein
                    arme == 0; // On abandonne l'arme
                    break;

            case arme != 1 && potion == 1: // Si ce n'est pas une arme, mais une potion

                case sacPotions < 10: // Et que le sac de potions n'est pas plein
                    sacPotions = sacPotions + 1; // On ajoute une potion
                    break;

                case sacPotions >= 10: // Et que le sac est plein
                    potion == 0; // On abandonne la potion
                    break;

            default:
                case arme != 1 && potion != 1: // S'il n'y a pas de loot, ou qu'il a été abandonner, alors la boucle est bouclée
                break;
        }

        // En Else / If :

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

            if (sacPotions >= 10) { // Si le sac de potion est plein
                potion == 0; // On abandonne la potion lootée
                return false;

            } else if (sacPotions < 10) { // Si le sac de potion n'est pas plein
                sacPotions = sacPotions + 1; // On ajoute une potion
                return true;

            } else if(arme != 1 && potion != 1) { // S'il n'y a pas de loot, ou qu'il a été abandonner, alors la boucle est bouclée
                return false;
            }
        }
    }

    potion() {
        
        if (sacPotions > 0 && ptVie < 100) { // Si 1 potion est dispo & que les PV du Héro sont inférieurs au maximum (ici en l'occurence 100)
            sacPotions = sacPotions - 1; // On utilise 1 potion

            // [Comment faire pour ne pas dépasser les PV max en utilisant une potion ????]
            
            ptVie = ptVie + 10; // Donc on ajoute 10 PV au Héro
            return true;
        }
    }
    
}   