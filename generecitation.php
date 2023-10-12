<?php
/*
Plugin Name: Générateur de citations aléatoires
Description: Génère des citations aléatoires après un certain délai.
Version: 1.0
Author: Stéphanie Guerrier
*/


//fonction citation aleatoire
function ajouter_script_citations()
{
    // wp_enqueue_script('citations-script', get_template_directory_uri() . './code/citations.js', array('javascript'), '1.0', true);
    // wp_enqueue_script('citations-script', get_template_directory_uri() . './data/genere-citations.json', array('json'), '1.0', true);
    wp_enqueue_script('script-name', get_template_directory_uri() . '/code/citations.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'ajouter_script_citations');
