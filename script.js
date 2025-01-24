// étape 1.1 afficher étoiles :

const afficherEtoiles = (n) => {
  let etoile = "";
  for (let i = 1; i <= n; i++) etoile += "*";
  console.log(etoile);
};
afficherEtoiles(3);
afficherEtoiles(6);
