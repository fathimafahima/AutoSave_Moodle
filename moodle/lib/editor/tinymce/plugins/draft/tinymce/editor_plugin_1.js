(function() {
    
        // Load plugin specific language pack
        tinymce.PluginManager.requireLangPack('reterievedraft');

        tinymce.create('tinymce.plugins.ReterieveDraft', {
                /**
                 * Initializes the plugin, this will be executed after the plugin has been created.
                 * This call is done before the editor instance has finished it's initialization so use the onInit event
                 * of the editor instance to intercept that event.
                 *
                 * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
                 * @param {string} url Absolute URL to where the plugin is located.
                 */
                init : function(ed, url) {

                        // Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('mceExample');
                        ed.addCommand('mceReterieveDraft', function() {
                            
                            self.editor=ed;
                               var formElement = document.getElementsByTagName("FORM")[0];
                    var formId = formElement.id;                                //get the form id
                    //var textEdit = tinyMCE.activeEditor.getContent();           //get the content inside the editor

                    $.ajax({
                        url: 'http://localhost/moodle-2.4.4/moodle/lib/editor/tinymce/plugins/autosave/tinymce/retrievedraft.php', //the script to call to get data          



                        data: 'link=' + window.location.href + '&formType=' + formId.toString() , //sending data
                        datatype: 'text', //data format

                        success: function(data)          //on recieve of reply
                        {
                            alert(data);
                            alert('Successfully saved');
                        }
                    });
                              /* ed.windowManager.open({
                                        file : ed.getParam("moodle_plugin_base") + 'reterievedraft/tinymce/reterievedraft.html', 
                                        width : 520 + ed.getLang('reterievedraft.delta_width', 0),
                                        height : 320 + ed.getLang('reterievedraft.delta_height', 0),
                                        inline : 1
                                }, {
                                        plugin_url : url
                                    });*/
                        });

                        // Register example button
                        ed.addButton('reterievedraft', {
                                title : 'reterievedraft Plugin',
                                cmd : 'mceReterieveDraft',
                                image : url + '/img/example.gif'
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
                                longname : 'Example plugin',
                                author : 'Some author',
                                authorurl : '',
                                infourl : '',
                                version : "1.0"
                        };
                }
        });

        // Register plugin
        tinymce.PluginManager.add('example', tinymce.plugins.Example);
})();