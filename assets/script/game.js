import { Hero } from "./class.hero.js";
import { Spider } from "./class.spider.js";
import { Skeleton } from "./class.squelette.js";
import { Monster } from "./class.monster.js";
import { Boss } from "./class.boss.js";


let container = document.querySelector(".container");

let titre = document.querySelector("#step");
let attack = document.querySelector("#btnAttack");
let next = document.querySelector("#btnNext");
let use = document.querySelector("#btnUtiliser");
let bag = document.querySelector("#equipement");
let potions = document.querySelector("#potions");
let pvHero = document.querySelector("#pvHero");
let pvMonster = document.querySelector("#pvMonster");
let childpvHero = pvHero.lastChild


console.log(container)
console.log(titre)
console.log(attack)
console.log(next)
console.log(use)
console.log(bag)
console.log(potions)
console.log(pvHero)
console.log(pvMonster)

childpvHero.style.height = "20%"

function game(container, titre){
    init = {
        etage: titre,
        hero: Hero,
        monstre: Monster,
        attaque: attack,
        utiliser: use,
        suivant: next,
        sac: bag,
        sacPotions: potions,
        conteneur: container,
        vieHero: pvHero,
        vieMonstre: pvMonster,
    }
    return game
}

function affichage(game) {
 
}

affichage(game)