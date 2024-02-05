console.log();('Hello World')

let monPerso = {
    nom: "Maka",
    prenom: "Brandon",
    age: 25,
    couleurPreferee: "Gris",
}

monPerso.voiturePreferee= "Bentley Continental GT 2023";

console.log(monPerso);


let age = prompt('Quelle est votre age ?');
const peutJouer = (age >= 18);
const peutPasJouer = (age < 18);


if (peutJouer) {
    alert("Vous avez l'age pour jouer a GTA 6")
} else if (peutPasJouer) { 
    alert("Vous n'avez pas l'age pour jouer à GTA 6 car vous avez " + age + " ans")
}

let nombre = 10;

// while (1 < nombre) {
//     console.log(nombre +1)
//     nombre++;
// }

