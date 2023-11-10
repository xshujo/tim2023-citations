<?php
/*
Plugin Name: Générateur de citations aléatoires
Description: Génère des citations aléatoires après un certain délai.
Version: 1.0
Author: DiversiTIM
*/

function enfiler_script_css()
{
    // $version_css =  filemtime(plugin_dir_path(__FILE__) . 'style.css');
    //$version_js = filemtime(plugin_dir_path(__FILE__) . 'citations.js');
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
    return '<div class="genCite">
        <blockquote id="citation"></blockquote>
        <p id="auteur"></p>
      </div>';
}

add_shortcode('citations', 'affiche_citation');
