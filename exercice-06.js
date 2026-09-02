const panier = [
 { nom: "Souris", prix: 150, quantite: 2 },
 { nom: "Casque", prix: 400, quantite: 1 },
 { nom: "Tapis", prix: 60, quantite: 3 },
 { nom: "Webcam", prix: 520, quantite: 1 }
];
    const panierName = panier.map((item)=> item.nom);
    console.log(panierName);
    const totalC = panier.map((item)=>({
        nom : item.nom ,
      total : item.prix * item.quantite 
    }));
    console.log(totalC);
const expensive = panier.filter((items)=> items.prix > 100); 
console.log(expensive);
const somme = totalC.reduce((ac, n) =>{
    return ac+ n.total;
},0);
const tous = panier.reduce((ac, n) =>{
    return ac + n.quantite;
},0);
console.log(`${somme}`);
console.log(`${tous}`);
