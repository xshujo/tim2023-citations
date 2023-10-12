<?php
/*
Plugin Name: Générateur de citations aléatoires
Description: Génère des citations aléatoires après un certain délai.
Version: 1.0
Author: Stéphanie Guerrier
*/


//fonction citation aleatoire
/*function ajouter_script_citations()
{
    // wp_enqueue_script('citations-script', get_template_directory_uri() . './code/citations.js', array('javascript'), '1.0', true);
    // wp_enqueue_script('citations-script', get_template_directory_uri() . './data/genere-citations.json', array('json'), '1.0', true);
    wp_enqueue_script('script-name', get_template_directory_uri() . '/code/citations.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'ajouter_script_citations');*/

// Tableau de citations
// Chemin du fichier JSON
$json_file_path = plugin_dir_path(__FILE__) . 'genere-citations.json';

// Chargez le contenu du fichier JSON
$citations = json_decode(file_get_contents($json_file_path), true);

// Fonction pour obtenir une citation aléatoire
function obtenir_citation()
{
    global $citations;
    $citation = $citations[array_rand($citations)];
    return $citation['citation'] . " - " . $citation['auteur'];
}
