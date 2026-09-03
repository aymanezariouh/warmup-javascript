const inscription = {
 nom: "ere",
 email: "aminaexample.com",
 motDePasse: "123",
 age: 17
};
function validerInscription(donnees){
const erreurs = [];
const valid= false;
if (donnees.email.includes("@") === false || donnees.email.includes(".") === false){
    erreurs.push("l'email doit contenir un « @ » et un « . »");
}
if(donnees.nom.length <2){
    erreurs.push(" le nom doit contenir au moins 2 caractères")
}
if (donnees.age < 18){
    erreurs.push("l'âge doit être un nombre supérieur ou égal à 18")
}
if (donnees.motDePasse. length < 8){
    erreurs.push("l'âge doit être un nombre supérieur ou égal à 18")
}

    if (erreurs.length === 0 ){
        valid = true;
    }
    return {
        valid : valid ,
        erreurs : erreurs
    }
}
console.log(validerInscription(inscription))
