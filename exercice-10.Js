const ventes = [
 { vendeur: "Amina", produit: "Ordinateur portable", montant: 8500, mois: "janvier" },
 { vendeur: "Youssef", produit: "Smartphone", montant: 4200, mois: "janvier" },
 { vendeur: "Amina", produit: "Casque audio", montant: 900, mois: "fevrier" },
 { vendeur: "Sara", produit: "Tablette", montant: 3100, mois: "fevrier" },
 { vendeur: "Youssef", produit: "Clavier", montant: 450, mois: "mars" },
 { vendeur: "Sara", produit: "Ecran 27 pouces", montant: 2600, mois: "mars" }
];
function genererRapport(ventes){
    
const totalVentes = ventes.reduce((totalV , rec) => { 
    return totalV + rec.montant },0); 
console.log(totalVentes);
const tousMontant = ventes.map((v) => v.montant);
const maxMontant = Math.max(...tousMontant);
const maxVentes = ventes.find(v => v.montant === maxMontant);
function calculerParVendeur(ventes){
    return ventes.reduce((acc , v) => {
        if(acc[v.vendeur]){
           acc[v.vendeur] += v.montant
        }else{
            acc[v.vendeur] = v.montant; 
        }
        return acc
    },{})}
const ParVendeur = calculerParVendeur(ventes);
const listVendeur = Object.keys(ParVendeur);
const listmontant = Object.values(ParVendeur); 
const somme = listmontant.reduce((acc , rec)=>{
    return  acc + rec  },0
);
const moyenne = (somme / listVendeur.length).toFixed(2); 
const auDessus = listVendeur.filter(nom => ParVendeur[nom] > moyenne );
let texteVendeurs = "";
for (const nom of listVendeur) {
  texteVendeurs += ` ${nom} : ${ParVendeur[nom]} DH  `;
}
return ` 
Chiffre d'affaires total : ${totalVentes} DH
Meilleure vente :${maxVentes.produit} (${maxVentes.vendeur}) - ${maxVentes.montant} DH
CA par vendeur :${texteVendeurs}
Moyenne par vendeur :${moyenne} DH
Au-dessus de la moyenne : ${auDessus} 

`
}
console.log(genererRapport(ventes));