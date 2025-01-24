// // étape 1.1 afficher étoiles :

// const afficherEtoiles = (n) => {
//   let etoile = "";
//   for (let i = 1; i <= n; i++) etoile += "*";
//   console.log(etoile);
// };
// afficherEtoiles(3);
// afficherEtoiles(6);

// // //étape 1.2 hauteur, largeur, carré d'étoiles
// const afficherRectangle = (hauteur, largeur) => {
//   for (let i = 0; i < hauteur; i++) {
//     afficherEtoiles(largeur);
//   }
// };
// afficherRectangle(5, 5);

// // étape 1.3 triangle d'étoile
// const afficherTriangleDroit = (n) => {
//   let triangle = "*";
//   for (let i = 0; i <= n; i++) {
//     let result = triangle.repeat(i) + "\\";
//     console.log(result);
//   }
// };
// afficherTriangleDroit(5);

//étape 1.4 seconde moitié et espaces
const afficherTriangleGauche = (n) => {
  let triangle = "*";
  let espace = " ";
  for (let i = 0; i < n; i++) {
    let resultat = espace.repeat(n - 1 - i) + "/" + triangle.repeat(i);
    console.log(resultat);
  }
};

afficherTriangleGauche(5);
