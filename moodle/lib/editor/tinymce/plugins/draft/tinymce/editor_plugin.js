(function() {
    
        // Load plugin specific language pack
        tinymce.PluginManager.requireLangPack('draft');

        tinymce.create('tinymce.plugins.Draft', {
                /**
                 * Initializes the plugin, this will be executed after the plugin has been created.
                 * This call is done before the editor instance has finished it's initialization so use the onInit event
                 * of the editor instance to intercept that event.
                 *
                 * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
                 * @param {string} url Absolute URL to where the plugin is located.
                 */
                init : function(ed, url) {

                        // Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('mceDraft');
                        ed.addCommand('mceDraft', function() {
                                ed.windowManager.open({
                                        file : ed.getParam("moodle_plugin_base") + 'draft/tinymce/draft.html', 
                                        width : 520 + ed.getLang('draft.delta_width', 0),
                                        height : 320 + ed.getLang('draft.delta_height', 0),
                                        inline : 1
                                }, {
                                        plugin_url : url
                                    });
                        });

                        // Register draft button
                        ed.addButton('draft', {
                                title : 'Draft Plugin',
                                cmd : 'mceDraft',
                                image : url + '/img/download.jpg'
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
                                longname : 'Draft plugin',
                                author : 'Some author',
                                authorurl : '',
                                infourl : '',
                                version : "1.0"
                        };
                }
        });

        // Register plugin
        tinymce.PluginManager.add('draft', tinymce.plugins.Draft);
})();