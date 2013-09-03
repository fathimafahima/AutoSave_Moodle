
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


            var t = this,
                    is = tinymce.is,
                    resolve = tinymce.resolve,
                    s, onInit, f;

            t.editor = ed;
            t.id = ed.id;
            t.url = url;
            t.key = ed.getParam(pluginName + "_key", ed.id);
            t.rpcUrl = ed.getParam("autosave_rpc_url", "{backend}");

            s = newInstanceSettings(t);



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

            // Register load button
            ed.addButton('autosave', {
                title: 'autosave Plugin',
                cmd: 'mceautosave',
                image: url + '/img/loaderWhite.gif'
            });

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
                
        initialSave: function(url) {
        var userDataElement = ed.getElement();
         t.formId =userDataElement.getAttribute('formid');
         t.useId =userDataElement.getAttribute('userid');
            var t = this;
           
            t.userId = 0;
            t.editedTime = 0;
            t.data = "";
            t.attachmentId = 0;
            t._sendRPC('setInitialDraft', [t.formId, t.userId, t.editedTime, t.data, t.attachmentId], function(r) {

            });
$(function(){
 
    
});
        },
                
        intermediateSave: function(url) {
            var t = this;
            t.formId = 0;
            t.userId = 0;
            t.editedTime = 0;
            t.data = "";
            t.attachmentId = 0;
            t._sendRPC('setIntermediateDraft', [t.formId, t.userId, t.editedTime, t.data, t.attachmentId], function(r) {

            });

        },
        _sendRPC: function(m, p, cb) {
            var t = this;

            JSONRequest.sendRPC({
                url: t.rpcUrl,
                method: m,
                params: p,
                success: cb,
                error: function(e, x) {
                    t.editor.setProgressState(0);
                    t.editor.windowManager.alert(e.errstr || ('Error response: ' + x.responseText));
                }
            });
        }

    });











    // Register plugin
    tinymce.PluginManager.add('autosave', tinymce.plugins.autosave);
})();