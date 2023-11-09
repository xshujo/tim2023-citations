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
    //echo $json_file_path;


    // Chargez le contenu du fichier JSON
    $citations = json_decode(file_get_contents($json_file_path), true);
    $index = array_rand($citations);
    $citation = $citations[$index];
    //echo "index = " . $index;
    return $citation['citation'] . " - " . $citation['auteur'];
}

// Shortcode pour afficher la citation et actualiser en utilisant JavaScript
function affiche_temoignage()
{
    return '<section>
        <blockquote id="citation"></blockquote>
        <p id="auteur"></p>
      </section>';
}

add_shortcode('citations', 'citation_aleatoire');
