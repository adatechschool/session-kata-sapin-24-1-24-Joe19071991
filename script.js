// const afficherPointSapin = (hauteur) => {};
// afficherPointSapin(4);
const afficherEtoiles = (n) => {
  let etoile = "";
  for (let i = 1; i <= n; i++) {
    etoile += "*";
    console.log(etoile);
  }
};

afficherEtoiles(2);
afficherEtoiles(5);
