<?php
/**
 * TinyMCE delete plugin adding the JS file.
 *
 * @package   tinymce_autosave
 * @copyright 2013 Fahima
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
defined('MOODLE_INTERNAL') || die();

class tinymce_delete extends editor_tinymce_plugin {
    /** @var array list of buttons defined by this plugin */
    protected $buttons = array('delete');

    protected function update_init_params(array &$params, context $context,
            array $options = null) {

        // Add button after 'retrieveddraft' in advancedbuttons3.
        $this->add_button_after($params, 3, 'delete', 'reterievedraft');

        // Add JS file, which uses default name.
        $this->add_js_plugin($params);

    }
}
