const commandes = [
 { montant: 150, statut: "standard" },
 { montant: 620, statut: "standard" },
 { montant: 1200, statut: "premium" }
];

function calculerMontant(montant , statut){
    let pourcentage = 0;
    if (montant >= 1000){
        pourcentage = 15;
    }else if (montant >=500){
        pourcentage = 10;
    }
    else if (montant >=200){
        pourcentage = 5;
    }
    
    if (statut === "premium"){
        pourcentage += 5 ;
    }
    function calcule(pourcentage){
        if(pourcentage > 20){
            return pourcentage = 20;
        }else {
            return pourcentage;
        }
    }
    pourcentage = calcule(pourcentage);
    function apresRemise(montant , pourcentage){
        return montant - (montant * (pourcentage / 100));
    }
    newMontant = apresRemise(montant , pourcentage)
    let livraison = 30 ; 
    if (newMontant >= 300) {
        livraison = 0;
    }
    const remise = montant * (pourcentage / 100);
    function totalAPayer(newMontant , livraison){
        return newMontant + livraison;
    }
    const Total = totalAPayer(newMontant, livraison);
    return {
        montant : Number(montant.toFixed(2)),
        pourcentageRemise: pourcentage,
        remise: Number(remise.toFixed(2)),
        totalApresRemise : Number(newMontant.toFixed(2)),
        livraison : livraison,
        totalAPayer: Number(Total.toFixed(2))
    }
}
console.log(calculerMontant(150, "standard"));
console.log(calculerMontant(620, "standard"));
console.log(calculerMontant(1200, "premium"));