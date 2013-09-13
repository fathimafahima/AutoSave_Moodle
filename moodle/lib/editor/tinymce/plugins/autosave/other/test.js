/*
 AutoSave plugin for TinyMCE
 @copyright 2013 fahima
 Version: 1.0
 */
// // Wrap all code in function to create true private scope and prevent
// pollution of global namespace
(function() {

    var JSONRequest = tinymce.util.JSONRequest, each = tinymce.each, DOM = tinymce.DOM;

    // Load plugin specific language pack
    tinymce.PluginManager.requireLangPack('autosave');

    tinymce.create('tinymce.plugins.autosave', {
        /**
         * Initializes the plugin, this will be executed after the plugin has been created.
         * This call is done before the editor instance has finished it's initialization so use the onInit event
         * of the editor instance to intercept that event.
         *
         * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
         * @param {string} url Absolute URL to where the plugin is located.
         */
        init: function(ed, url) {

            var self = this, settings = ed.settings;

            self.editor = ed;

            // Parses the specified time string into a milisecond number 10m, 10s etc.
          /*  function parseTime(time) {
                var multipels = {
                    s: 1000,
                    m: 60000
                };

                time = /^(\d+)([ms]?)$/.exec('' + time);

                return (time[2] ? multipels[time[2]] : 1) * parseInt(time);
            }
            ;

            // Default config
            tinymce.each({
                ask_before_unload: TRUE,
                interval: '30s',
                retention: '20m',
                minlength: 50
            }, function(value, key) {
                key = PLUGIN_NAME + '_' + key;

                if (settings[key] === undefined)
                    settings[key] = value;
            });

            // Parse times
            settings.autosave_interval = parseTime(settings.autosave_interval);
            settings.autosave_retention = parseTime(settings.autosave_retention);*/

            /*var t = this,
             is = tinymce.is,
             resolve = tinymce.resolve,
             s, onInit, f;
             
             t.editor = ed;
             t.id = ed.id;
             t.url = url;
             t.key = ed.getParam(pluginName + "_key", ed.id);
             t.rpcUrl = ed.getParam("autosave_rpc_url", "{backend}");
             
             s = newInstanceSettings(t);*/



            // Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('mceautosave');
            ed.addCommand('mceautosave', function() {
                ed.windowManager.open({
                    file: ed.getParam("moodle_plugin_base") + 'autosave/tinymce/autosave.html',
                    width: 520 + ed.getLang('autosave.delta_width', 0),
                    height: 320 + ed.getLang('autosave.delta_height', 0),
                    inline: 1
                }, {
                    plugin_url: url
                });
            });
            
            /*ed.addCommand('save', function() {
             if (ed.getContent({draft: true}).replace(/\s|&nbsp;|<\/?p[^>]*>|<br[^>]*>/gi, "").length > 0) {
                // Show confirm dialog if the editor isn't empty
                ed.windowManager.confirm(
                        PLUGIN_NAME + ".warning_message",
                        function(ok) {
                            if (ok)
                                $.ajax({url: '../classes/util/InitialDraft.php',
                                    data: {
                                        'id': Integer(1),
                                        'editedTime':Integer('213456') ,
                                        'mform1': Integer(1),
                                        'id_summary_editor': editor.getContent({draft: true}),
                                        'attached':Integer(0)

                                    },
                                    type: 'post',
                                    success: function(output) {
                                        alert(output);
                                    }
                                });
                        }
                );
            } else
            {
                $.ajax({url: '../classes/util/InitialDraft.php',
                    data: {
                        'id': Integer(userDataElement.getAttribute('id')),
                        'editedTime': '',
                        'mform1': Integer(userDataElement.getAttribute('mform1')),
                        'Content': editor.getContent({draft: true}),
                        'attached': Integer(0)

                    },
                    type: 'post',
                    success: function(output) {
                        alert(output);
                    }
                });
            }
            });*/

            // Register load button
            ed.addButton('autosave', {
                title: 'autosave Plugin',
                cmd: 'mceautosave',
                image: url + '/img/loaderWhite.gif'
            });
            
           /*  ed.addButton('save', {
                title: 'autosave Plugin',
                cmd: 'save',
                image: url + '/img/loaderWhite.gif'
            });*/
            
           

        },
        /**
         * Returns information about the plugin as a name/value array.
         * The current keys are longname, author, authorurl, infourl and version.
         *
         * @return {Object} Name/value array containing information about the plugin.
         */
        getInfo: function() {
            return {
                longname: 'autosave',
                author: 'Fahima',
                authorurl: '',
                infourl: '',
                version: "1.0"
            };
        },
        //Saving the draft in the database table for the first time        
    /*   initialSave: function() {

            if (ed.getContent({draft: true}).replace(/\s|&nbsp;|<\/?p[^>]*>|<br[^>]*>/gi, "").length > 0) {
                // Show confirm dialog if the editor isn't empty
                ed.windowManager.confirm(
                        PLUGIN_NAME + ".warning_message",
                        function(ok) {
                            if (ok)
                                $.ajax({url: '../classes/util/InitialDraft.php',
                                    data: {
                                        'id': Integer(1),
                                        'editedTime':Integer('213456') ,
                                        'mform1': Integer(1),
                                        'id_summary_editor': editor.getContent({draft: true}),
                                        'attached':Integer(0)

                                    },
                                    type: 'post',
                                    success: function(output) {
                                        alert(output);
                                    }
                                });
                        }
                );
            } else
            {
                $.ajax({url: '../classes/util/InitialDraft.php',
                    data: {
                        'id': Integer(userDataElement.getAttribute('id')),
                        'editedTime': '',
                        'mform1': Integer(userDataElement.getAttribute('mform1')),
                        'Content': editor.getContent({draft: true}),
                        'attached': Integer(0)

                    },
                    type: 'post',
                    success: function(output) {
                        alert(output);
                    }
                });
            }

        },*/
        //Saving the draft after the first draft saving


        intermediateSave: function() {
            /*  var userDataElement = ed.getElement();
             t.formId =userDataElement.getAttribute('mform1');
             t.useId =userDataElement.getAttribute('userid');
             var t = this;*/


            /*t._sendRPC('setInitialDraft', [t.formId, t.userId, t.editedTime, t.data, t.attachmentId], function(r) {
             
             });*/
           /* $.ajax({url: '../classes/util/IntermediateDraft.php',
                data: {
                    'id': Integer(userDataElement.getAttribute('id')),
                    'editedTime': '',
                    'mform1': Integer(userDataElement.getAttribute('mform1')),
                    'id_summary_editor': Integer(userDataElement.getAttribute('id_summary_editor')),
                    'attached': $_POST['attached']

                },
                type: 'post',
                success: function(output) {
                    alert(output);
                }
            });*/

        }


    });


    // Register plugin
    tinymce.PluginManager.add('autosave', tinymce.plugins.autosave);
})();