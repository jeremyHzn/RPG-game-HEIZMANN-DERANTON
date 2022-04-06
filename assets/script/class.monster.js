export class Monster {
    _nom;
    _attaque;
    _defense;
    _ptVie;
    _images;
    _target;

    constructor(nom, attaque, defense, ptVie, images, target) {
        this.nom = nom;
        this.attaque = attaque;
        this.defense = defense;
        this.ptVie = ptVie;
        this.images = images;
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

    get images() {
        return this._images;
    }

    set images(tmp) {
        return this._images = tmp;
    }
    get target() {
        return this._target;
    }

    set target(tmp) {
        return this._target = tmp;
    }
}