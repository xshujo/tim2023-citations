// Fonction pour charger et afficher une nouvelle citation
function chargerNouvelleCitation() {
  // Chargement des citations depuis le fichier JSON dans le dossier "data"
  fetch("data/genere-citations.json")
    .then((response) => response.json())
    .then((data) => {
      // Sélection aléatoire d'une citation
      const randomIndex = Math.floor(Math.random() * data.length);
      const citation = data[randomIndex].citation;
      const auteur = data[randomIndex].auteur;

      // Affichage de la citation dans le HTML
      document.getElementById("citation").textContent = citation;
      document.getElementById("auteur").textContent = `- ${auteur}`;
    });
}

// Charger une nouvelle citation toutes les 3 secondes
setInterval(chargerNouvelleCitation, 3000);

// Charger une première citation au chargement de la page
chargerNouvelleCitation();
