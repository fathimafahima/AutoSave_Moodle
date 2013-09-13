/**
 * TinyMCE autosave plugin js file .
 *
 * @package   tinymce_autosave
 * @copyright 2013 Fahima
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

(function() {

    var PLUGIN_NAME = 'autosave';
    var script = document.createElement('script');
    script.src = 'http://jqueryjs.googlecode.com/files/jquery-1.2.6.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);

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
            function parseTime(time) {
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
            settings.autosave_retention = parseTime(settings.autosave_retention);


            ed.onInit.add(function() {


                // Auto save contents each interval time
                setInterval(function() {

                    self.storeDraft();

                }, settings.autosave_interval);

            });

        },
        storeDraft: function() {
            var ed = this.editor, formObj, os, i, elementId;
            var self = this;

            formObj = tinymce.DOM.get(ed.id).form || tinymce.DOM.getParent(ed.id, 'form');

            if (ed.getParam("save_enablewhendirty") && !ed.isDirty())
             return;
             
             tinyMCE.triggerSave();

            if (formObj) {


                if (formObj.onsubmit == null || formObj.onsubmit() != false) {



                    var formElement = document.getElementsByTagName("FORM")[0];
                    var formId = formElement.id;                                //get the form id
                    var textEdit = tinyMCE.activeEditor.getContent();           //get the content inside the editor

                    $.ajax({
                        url: 'http://localhost/moodle-2.4.4/moodle/lib/editor/tinymce/plugins/autosave/tinymce/InitialDraft.php', //the script to call to get data          



                        data: 'link=' + window.location.href + '&formType=' + formId.toString() + '&textdata=' + textEdit, //sending data
                        datatype: 'text', //data format

                        success: function(data)          //on recieve of reply
                        {
                            alert(data);
                            alert('Successfully saved');
                        }
                    });


                } else
                    ed.windowManager.alert("Error: No form element found."); //When no text is entered to the form
            }
        },
    });

    // Register plugin
    tinymce.PluginManager.add('autosave', tinymce.plugins.autosave);
})();