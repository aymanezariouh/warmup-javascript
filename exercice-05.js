const produit = {
  nom: "Clavier mecanique",
  prix: 450,
  stock: 12,
  categorie: "Informatique"
};
const catalogue = [
  { nom: "Clavier mecanique", prix: 450, stock: 12 },
  { nom: "Souris gamer", prix: 200, stock: 0 },
  { nom: "Écran 144Hz", prix: 1800, stock: 5 }
];
const message1 =`${produit.nom} - ${produit.prix}DH - ${produit.stock}en stock (${produit.categorie})` ;
console.log(message1);
produit.prix =produit.prix * 1.1 ;
const message2 = `nouveau prix : ${produit.prix}`;
console.log(message2);
produit.enPromotion = false
for( const key in produit){
    console.log(`${key}: ${produit[key]}`);
}
let isDispo ;

function estDisponible(produit){
    if(produit.stock >0 ){
        return true ;
    }else{
        return false ;
    }
    }
console.log(`estDisponible(produit) -> ${estDisponible(produit)}`);
catalogue.forEach((produi) => {
if(estDisponible(produi)){
    console.log(`${produi.nom} est disponible`);
}
})