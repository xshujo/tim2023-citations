<?php
/*
Plugin Name: Générateur de citations aléatoires
Description: Génère des citations aléatoires après un certain délai.
Version: 1.0
Author: DiversiTIM
*/
// Fonction pour obtenir une citation aléatoire
function obtenir_citation()
{
    // Tableau de citations
    // Chemin du fichier JSON
    $json_file_path = plugin_dir_path(__FILE__) . 'genere-citations.json';

    // Chargez le contenu du fichier JSON
    $citations = json_decode(file_get_contents($json_file_path), true);

    $citation = $citations[array_rand($citations)];
    return $citation['citation'] . " - " . $citation['auteur'];
}

// Shortcode pour afficher la citation et actualiser en utilisant JavaScript
function citation_aleatoire()
{
    // Générez la citation aléatoire
    $random_citation = obtenir_citation();

    // Affichez la citation
    echo '<div id="random-citation">' . $random_citation . '</div>';

    // Ajoutez du JavaScript pour actualiser la citation après un délai
    echo '<script>
        function actualiserCitation() {
            var randomCitationElement = document.getElementById("random-citation");

            // Générez la nouvelle citation à chaque actualisation
            var nouvelleCitation = "' . obtenir_citation() . '";

            // Mettez à jour le contenu de #random-citation
            randomCitationElement.innerHTML =" ' . obtenir_citation() . '";
        }

        // Actualisez la citation toutes les 4 secondes (4000 millisecondes)
        setInterval(actualiserCitation, 4000);
    </script>';
}

add_shortcode('citations', 'citation_aleatoire');
