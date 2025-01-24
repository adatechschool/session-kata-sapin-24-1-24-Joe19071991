// étape 1.1 afficher étoiles :

const afficherEtoiles = (n) => {
  let etoile = "";
  for (let i = 1; i <= n; i++) etoile += "*";
  console.log(etoile);
};
afficherEtoiles(3);
afficherEtoiles(6);

// //étape 1.2 hauteur, largeur, carré d'étoiles
const afficherRectangle = (hauteur, largeur) => {
  for (let i = 0; i < hauteur; i++) {
    afficherEtoiles(largeur);
  }
};
afficherRectangle(5, 5);
