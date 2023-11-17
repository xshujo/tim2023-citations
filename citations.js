// Données JSON directement incluses dans le script
const citationsData = [
  {
    citation:
      "institution chaleureuse,  les Québécois sont tellement spéciaux!  accueillants,  souriants, que des gens heureux,  des profs dévoués,  vers un art nouveau, si je reprends Pauline julien. ",
    auteur: "Johanne Loken (Ancienne Timienne 2019)",
  },
  {
    citation: "La meilleur technique du collège Maisonneuve, le TIM582.A1",
    auteur: "Jonathan Grenier (Ancien Timien 2020)",
  },
  {
    citation:
      "Excellent travail fait dans ce département pour la motivation et la dynamique des enseignants et des jeunes qui auront à la fin , un très bon travail grâce à ce concept que nous je félicite     Bravo.",
    auteur: "Louise Soucy",
  },
  {
    citation:
      "Excellent travail fait dans ce département pour la motivation et la dynamique des enseignants et des jeunes qui auront à la fin , un très bon travail grâce à ce concept que nous n 'avons pas en France !!!",
    auteur: "Isabelle Gros-Dubois",
  },
  {
    citation:
      "Bravo! à ces formations, qui conduisent à de très bons emplois, ce qui prouve que l'instruction, la formation, l'apprentissage et les stages en industries, sont tributaires d'une sécurité d'emplois et de nouveaux défis.",
    auteur: "Jean Longpre ",
  },
  {
    citation:
      "Vous avez entre Vos Mains la Créativité! exprimez Vous, allez au profond de celle-ci en Nous retransmettant l'émotion du moment!  et c'est Vous qui en sortira grandit a chaque expérience! Vibré l'instant Présent...",
    auteur: "RS Lafleur ",
  },
  {
    citation:
      "Le mouvement et la dinamique du groupe ne doit jamais fléchir et participer à tout moment à  la bonne marche de l'équipe et nous autres qui les suivons, tous devons si on le peut les soutenir dans leurs projets présents et futurs bonne chance à tous ",
    auteur: "Gabriel Crisante",
  },
  {
    citation: "La meilleure école pour apprendre le multimédia à Montréal !",
    auteur: "Xavier Marchand (Enseignant retraité du TIM)",
  },
  {
    citation:
      "C'est une formation stimulante qui m'a préparé à l'avenir numérique.",
    auteur: "Caroline Dubois",
  },
  {
    citation:
      "Je recommande vivement la technique d'intégration multimédia au Collège de Maisonneuve.",
    auteur: "François Bergeron",
  },
];

// Fonction pour charger et afficher une nouvelle citation
function chargerNouvelleCitation() {
  // Sélection aléatoire d'une citation
  const randomIndex = Math.floor(Math.random() * citationsData.length);
  const citation = citationsData[randomIndex].citation;
  const auteur = citationsData[randomIndex].auteur;

  // Affichage de la citation dans le HTML
  document.getElementById("citation").textContent = citation;
  document.getElementById("auteur").textContent = `- ${auteur}`;
}

// Charger une nouvelle citation toutes les 3 secondes
setInterval(chargerNouvelleCitation, 3000);

// Charger une première citation au chargement de la page
chargerNouvelleCitation();
