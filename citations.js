// Données JSON directement incluses dans le script
const citationsData = [
  {
    citation:
      "Institution chaleureuse, les Québécois sont tellement spéciaux! Accueillants, souriants, que des gens heureux, des profs dévoués, vers un art nouveau, si je reprends Pauline Julien.",
    auteur: "Johanne Loken (Ancienne Timienne 2019)",
  },
  {
    citation: "La meilleure technique du Collège Maisonneuve, le TIM 582.A1",
    auteur: "Jonathan Grenier (Ancien Timien 2020)",
  },
  {
    citation:
      "Excellent travail fait dans ce département pour la motivation et la dynamique des enseignants et des jeunes qui auront à la fin, un très bon travail grâce à ce concept que nous je félicite. Bravo.",
    auteur: "Louise Soucy",
  },
  {
    citation:
      "Le programme TIM est une expérience unique qui permet de développer des compétences techniques et créatives de manière enrichissante et stimulante.",
    auteur: "Stéphanie Guerrier (Finissante TIM 2024)",
  },
  {
    citation:
      "Bravo! À ces formations, qui conduisent à de très bons emplois, ce qui prouve que l'instruction, la formation, l'apprentissage et les stages en industries, sont tributaires d'une sécurité d'emplois et de nouveaux défis.",
    auteur: "Jean Longpre",
  },
  {
    citation:
      "Vous avez entre vos mains la créativité! Exprimez-vous, allez au fond de celle-ci en nous retransmettant l'émotion du moment! Et c'est vous qui en sortirez grandi à chaque expérience! Vibrez l'instant présent...",
    auteur: "RS Lafleur",
  },
  {
    citation:
      "Le mouvement et la dynamique du groupe ne doivent jamais fléchir et participer à tout moment à la bonne marche de l'équipe et nous autres qui les suivons, tous devons, si on le peut, les soutenir dans leurs projets présents et futurs. Bonne chance à tous.",
    auteur: "Gabriel Crisante",
  },
  {
    citation:
      "Au TIM, l'apprentissage se fait de manière engageante avec des enseignants enthousiastes, favorisant la découverte de sujets créatifs et la résolution de défis éducatifs.",
    auteur: "Gregory Osorio Rivera (Finissant TIM 2024)",
  },
  {
    citation:
      "Le programme offre une expérience immersive dans le monde du multimédia, avec des enseignants passionnés et des projets stimulants qui enrichissent mes compétences créatives et techniques.",
    auteur: "Taïsha Dorval-Mbele (Finissante TIM 2024)",
  },
  {
    citation:
      "Être au TIM, c'est une expérience qui va au-delà des écrans, transformant chaque projet en une aventure immersive et enrichissante.",
    auteur: "Kajanthan Seevarathinam (Finissant TIM 2024)",
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

// Charger une nouvelle citation toutes les 5 secondes
setInterval(chargerNouvelleCitation, 5000);

// Charger une première citation au chargement de la page
chargerNouvelleCitation();
