(function() {

/**
 * TinyMCE autosave plugin js .
 *
 * @package   tinymce_autosave
 * @copyright 2013 Fahima
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
        // Load plugin specific language pack
        tinymce.PluginManager.requireLangPack('delete');

        tinymce.create('tinymce.plugins.Delete', {
                /**
                 * Initializes the plugin, this will be executed after the plugin has been created.
                 * This call is done before the editor instance has finished it's initialization so use the onInit event
                 * of the editor instance to intercept that event.
                 *
                 * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
                 * @param {string} url Absolute URL to where the plugin is located.
                 */
                init : function(ed, url) {

                        // Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('mceDelete');
                        ed.addCommand('mceDelete', function() {
                                ed.windowManager.open({
                                        file : ed.getParam("moodle_plugin_base") + 'delete/tinymce/delete.html', 
                                        width : 520 + ed.getLang('delete.delta_width', 0),
                                        height : 320 + ed.getLang('delete.delta_height', 0),
                                        inline : 1
                                }, {
                                        plugin_url : url
                                    });
                        });

                        // Register delete button
                        ed.addButton('delete', {
                                title : 'Delete Plugin',
                                cmd : 'mceDelete',
                                image : url + '/img/example.jpg'
                        });
                        
                },

                /**
                 * Returns information about the plugin as a name/value array.
                 * The current keys are longname, author, authorurl, infourl and version.
                 *
                 * @return {Object} Name/value array containing information about the plugin.
                 */
                getInfo : function() {
                        return {
                                longname : 'Delete plugin',
                                author : 'Some author',
                                authorurl : '',
                                infourl : '',
                                version : "1.0"
                        };
                }
        });

        // Register plugin
        tinymce.PluginManager.add('delete', tinymce.plugins.Delete);
})();