/* 
  Gladius est heureux d'avoir un nouvel élève mais selon lui, vous avez déjà l'étoffe d'un héros.
  Alors avant de vous laisser partir vers les Plaines Sanglante, il vous demande seulement
  de résoudre un petit soucis.
  Sa plume magique qui écrit tout ce qu'il raconte n'en fait qu'à sa tête et répète des lettres.
  Il va falloir la réparer!

  Exercice : Compléter la fonction plumeMagique qui doit retourner une string sans les répétitions de
  lettres à la suite et sans prendre en compte les majuscules.
*/

/*
J'ai utilisé la fonction toLowerCase qui transforme tous les caractères de la chaîne en minuscule.
Ensuite je créé mon mot réparé en parcourant ma chaîne en paramètre et en ajoutant
les caractères un par un s'il n'est pas suivi du même caractère.
*/
function plumeMagique(phrase) {
  lowerPhrase = phrase.toLowerCase()
  reparedPhrase = ''
  for (var i = 0; i < lowerPhrase.length; i++) {
    if (lowerPhrase.charAt(i) !== lowerPhrase.charAt(i + 1)) {
      reparedPhrase += lowerPhrase.charAt(i)
    }
  }
  return reparedPhrase
}

const phrase1 = 'Reeeepassss'
const phrase2 = 'dddejJeunEeer'
const phrase3 = 'DddIiiiNnnnnnnEeRRRr'

console.log(
  'Phrase 1 : ' +
    (plumeMagique(phrase1).localeCompare('repas', 'fr') === 0 ? 'OK' : 'KO')
)
console.log(
  'Phrase 2 : ' +
    (plumeMagique(phrase2).localeCompare('dejeuner', 'fr') === 0 ? 'OK' : 'KO')
)
console.log(
  'Phrase 3 : ' +
    (plumeMagique(phrase3).localeCompare('diner', 'fr') === 0 ? 'OK' : 'KO')
)

/*
  Gladius peut enfin reprendre ses travaux et vous en remerci. Il vous souhaite bonne chance,
  et vous indique le chemin le plus court pour atteindre Tolosa. Malheureusement vous allez devoir
  traverser les Plaines Sanglantes avant d'atteindre votre destination.
*/
