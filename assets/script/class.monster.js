export class Monster {
    _nom;
    _attaque;
    _defense;
    _ptVie;
    _img;
    _target;

    constructor(nom, attaque, defense, ptVie, img, target) {
        this.nom = nom;
        this.attaque = attaque;
        this.defense = defense;
        this.ptVie = ptVie;
        this.img = img;
        this.target = target;
    }
    

    get nom() {
        return this._nom;
    }

    set nom(tmp) {
        return this._nom = tmp;
    }

    get attaque() {
        return this._attaque;
    }

    set attaque(tmp) {
        return this._attaque = tmp;
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

    get img() {
        return this._img;
    }

    set img(tmp) {
        return this._img = tmp;
    }

    get target() {
        return this._target;
    }

    set target(tmp) {
        return this._target = tmp;
    }

    attaque(cible) {
        if (cible.ptVie <= 0) { // Si le héro est mort
            return true;
        } else if (cible.ptVie > 0) { // Si le héro est tjrs vivant
            attaque = attaque - cible.defense; // Voir énoncé n°2 --> méthode d'attaque, car rien comprit à la consigne 
            return false;
        }
    }

    ajoutDom() { // A laisser vide pour les classes héritages

    }

    suppressionDom() { // A laisser vide pour les classes héritages

    }

    lacherPotionOuArme() { // A laisser vide pour les classes héritages

    }

}