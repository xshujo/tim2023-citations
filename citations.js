// Données JSON directement incluses dans le script
const citationsData = [
  {
    citation:
      "L'intégration multimédia au Collège de Maisonneuve m'a ouvert de nouvelles perspectives.",
    auteur: "Alice Dupont",
  },
  {
    citation:
      "Les projets collaboratifs en intégration multimédia sont incroyablement enrichissants.",
    auteur: "Jean Tremblay",
  },
  {
    citation:
      "J'ai appris tellement de choses pratiques en intégration multimédia.",
    auteur: "Marie Leclerc",
  },
  {
    citation:
      "L'approche pédagogique en intégration multimédia est très interactive.",
    auteur: "Pierre Gagnon",
  },
  {
    citation:
      "Les professeurs sont passionnés par leur domaine en intégration multimédia.",
    auteur: "Sophie Martin",
  },
  {
    citation:
      "J'ai été surpris par la variété des projets en intégration multimédia.",
    auteur: "Luc Boucher",
  },
  {
    citation:
      "L'intégration multimédia m'a permis de développer ma créativité.",
    auteur: "Isabelle Roy",
  },
  {
    citation:
      "Les compétences acquises en intégration multimédia sont très utiles sur le marché du travail.",
    auteur: "Martin Lavoie",
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
