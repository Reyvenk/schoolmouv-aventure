/*
  Les Plaines grouilles de nuisibles, parfois seuls et faibles, parfois forts, et parfois en
  trop grand nombre. Il va falloir trouver la meilleure stratégie à adopter, combattre, ou fuir!

  Exercice : Votre personnage a 20 points de vie, votre arme fait 5 dégâts, votre 
  bouclier diminue les dégâts subis de 2. Les monstres, n'ont pas de boucliers, et 
  sont représentés comme ci [points de vie, dégâts] (ex: [15, 3] le monste a 15 points de vie et fait
  3 de dégats). 
  Les combats sont découpés en tours, à chaque tour, le héros et le(s) monstre(s) 
  attaquent une fois (les points de vie de chacun baissent). Si un monstre à 0 ou moins de vie,
  il meurt et n'attaque donc pas pour le tour, même chose pour le héros. Si il n'y plus de monstre,
  le héros remporte la victoire. Le héros ne peut taper qu'un seul monstre à la fois mais 
  il choisit celui qui frappe le plus fort si il y'en a un. C'est toujours lui qui attaque en premier.

  Complétez la fonction engagerLeCombat qui doit retourner true si le héros devrait gagner
  le combat, false si il doit fuir!
*/

/*
Je commence par vérifier si ma liste de monstres contient plusieurs monstres.
Si ce n'est pas le cas tant que le personnage ou le monstre à envore de la vie
les deux attaques. Le héros perd autant de pv que le monstre à d'attauqe moins le bouclier
(je ne vérifie pas que l'attaque du monstre est inférieur à mon bouclier, car dans cet exemple ce n'est jamais le cas).

Si il y a plusieurs monstres, tant que le personnage est en vie ou qu'il reste encore des monstres, on attaque.
Avant chaque combat, je vérifie quel monstre à l'attauqe la plus élevé et le héros l'attaque.
Ensuite pour chaque monstre dans ma liste, je vérifie si leur pv est supérieur à 0. Si ce n'est pas le cas, le monstre est mort, il est retiré de la liste.
Ensuite les monstres restant attaque mon héros.

Enfin, je vérifie si la vie de mon personnage est supérieur à 0 si oui c'est que le héros peut gagner si non il doit fuir.
*/

function engagerLeCombat(monstres) {
  vie = 20
  atk = 5
  bouclier = 2

  if (monstres[0][0] === undefined) {
    while (vie > 0 && monstres[0] > 0) {
      monstres[0] -= atk
      if (monstres[0] > 0) {
        vie -= monstres[1] - bouclier
      }
    }
  } else {
    while (vie > 0 && monstres.length > 0) {
      monstres[getStronger(monstres)][0] -= atk

      for (var i = 0; i < monstres.length; i++) {
        if (monstres[i][0] <= 0) {
          monstres.splice(i, 1)
          i -= 1
        }
      }
      for (var i = 0; i < monstres.length; i++) {
        vie -= monstres[i][1] - bouclier
      }
    }
  }
  if (vie > 0) {
    return true
  } else {
    return false
  }
}

function getStronger(monstres) {
  attaqueMax = 0
  monstreMax = 0
  for (var i = 0; i < monstres.length; i++) {
    if (monstres[i][1] > attaqueMax) {
      attaqueMax = monstres[i][1]
      monstreMax = i
    }
  }
  return monstreMax
}

const monstre1 = [10, 3]
const monstre2 = [
  [15, 3],
  [12, 6],
]
const monstre3 = [
  [6, 3],
  [6, 3],
  [6, 3],
  [6, 3],
]
const monstre4 = [
  [20, 5],
  [20, 5],
]

console.log('Monstre 1 : ' + (engagerLeCombat(monstre1) === true ? 'OK' : 'KO'))
console.log('Monstre 2 : ' + (engagerLeCombat(monstre2) === true ? 'OK' : 'KO'))
console.log('Monstre 3 : ' + (engagerLeCombat(monstre3) === true ? 'OK' : 'KO'))
console.log(
  'Monstre 4 : ' + (engagerLeCombat(monstre4) === false ? 'OK' : 'KO')
)

/* 
  Après avoir survécu à cet enfer, vous arrivez enfin devant les portes de la
  belle ville de Tolosa. Mais deux gardes semblent bloquer l'entrée principale...
*/
