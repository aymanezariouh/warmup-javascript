const titre = " Mon Premier  Projet MERN ";
const phrase = "Le JavaScript est la base du stack MERN";
const nomComplet = "amina el idrissi";

 function genererSlug(titre){
    const slug = titre.trim().toLowerCase().split(" ").join("-");
    return slug;
 }
function genererSlugDouble(text){
const clean = text.trim().toLowerCase().split(" ").filter(e=> e != "").join("-");
return clean
}
function compterNom(text){
return text.trim().toLowerCase().split(" ").filter(e=> e != "").length;
}
function initiales(N){
return firstletters= N.trim().toLowerCase().split(" ").filter(e=> e != "").map((e)=> e[0].toUpperCase()).join('.');
}
console.log(genererSlug(titre));
console.log(genererSlugDouble(phrase));
console.log(compterNom(phrase));
console.log(initiales(nomComplet));