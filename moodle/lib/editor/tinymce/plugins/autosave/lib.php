<?php

defined('MOODLE_INTERNAL') || die();

class tinymce_autosave extends editor_tinymce_plugin{
    
    protected function update_init_params(array &$params, context $context, array $options = null) {
       
         // Add button after 'spellchecker' in advancedbuttons3.
        $this->add_button_after($params, 3, 'autosave', 'example');
        // Add JS file, which uses default name.
        $this->add_js_plugin($params);
    }    
} 