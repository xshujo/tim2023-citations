<?php
/*
Plugin Name: Générateur de citations aléatoires
Description: Génère des citations aléatoires après un certain délai.
Version: 1.0
Author: DiversiTIM
*/

function enfiler_script_css()
{

    wp_enqueue_style(
        'style_generateur_citations',
        plugin_dir_url(__FILE__) . 'style.css',
        array(),
        true
    );
    wp_enqueue_script(
        'js_citations',
        plugin_dir_url(__FILE__) . 'citations.js',
        array()
    );
}
add_action('wp_enqueue_scripts', 'enfiler_script_css');
function affiche_citation()
{
    return "<div class='genCite' id='genCite'>
        <blockquote id='citation'>- La meilleure école pour apprendre le multimédia à Montréal !</blockquote>
        <p id='auteur'>Xavier Marchand (Enseignant retraité du TIM)</p>
      </div>";
}

add_shortcode('citations', 'affiche_citation');

add_action('admin_menu', 'generateur_citation_setup_menu');

function generateur_citation_setup_menu()
{
    add_menu_page('Générateur de citations', 'Citations', 'manage_options', 'generateur-citations', 'affiche_citation');
}
