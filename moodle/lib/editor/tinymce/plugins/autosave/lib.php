<?php
/**
 * TinyMCE autosave plugin version details.
 *
 * @package   tinymce_autosave
 * @copyright 2013 Fahima
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

class tinymce_autosave extends editor_tinymce_plugin{
    
    protected function update_init_params(array &$params, context $context, array $options = null) {
       
         
        // Add JS file, which uses default name.
        $this->add_js_plugin($params);
    }    
} 