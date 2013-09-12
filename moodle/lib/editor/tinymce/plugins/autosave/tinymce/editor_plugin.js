(function() {
    var PLUGIN_NAME = 'autosave';
    var JQuery;
    var script = document.createElement('script');
    script.src = 'http://jqueryjs.googlecode.com/files/jquery-1.2.6.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
    //  Dispatcher = tinymce.util.Dispatcher;
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
                //ask_before_unload : TRUE,
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
            // Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('mceExample');
            //ed.addCommand('mceautosave', function() {
            /*  $.ajax({url: '../classes/util/InitialDraft.php',
             data: {
             'id': Integer(1),
             'editedTime':Integer(213456) ,
             'mform1': Integer(1),
             'Content':'TESTING' ,
             'attached':Integer(0)
             
             },
             
             
             type: 'post',
             success: function(output) {
             alert(output);
             }
             });*/
            /*tinyMCE.triggerSave();
             tinyMCE.activeEditor.getContent();
             });*/


            //    YUI().use("io", function (Y) { 
            //for (var i=1; i<4; i++) {                               
            // var button = Y.one(".bouton" + i);  
            //button.on("click", function (e){    
            //   var id = e.target.get("id");
            /*  Y.io("../classes/util/InitialDraft.php", {
             data: {
             'id': Integer(1),
             'editedTime':Integer(213456) ,
             'mform1': Integer(1),
             'Content':'TESTING' ,
             'attached':Integer(0)
             
             },
             on: {
             success: function (o, res) {
             // document.getElementById("thema").innerHTML = res.responseText;
             }
             }
             });*/
            // }
            //);
            //};
//});
            /*$.ajax({url: '../classes/util/InitialDraft.php',
             data: {
             'id': Integer(1),
             'editedTime':Integer(213456) ,
             'mform1': Integer(1),
             'Content':'TESTING' ,
             'attached':Integer(0)
             
             },
             
             
             type: 'post',
             success: function(output) {
             alert(output);
             }
             });*/
            /*ed.windowManager.open({
             file : ed.getParam("moodle_plugin_base") + 'autosave/tinymce/autosave.html', 
             width : 520 + ed.getLang('autosave.delta_width', 0),
             height : 320 + ed.getLang('autosave.delta_height', 0),
             inline : 1
             }, {
             plugin_url : url
             });
             */
            //print('test');
            /*$.ajax({url: '../classes/util/InitialDraft.php',
             data: {
             'id': Integer(1),
             'editedTime':Integer(213456) ,
             'mform1': Integer(1),
             'Content': editor.getContent({draft: true}),
             'attached':Integer(0)
             
             },
             type: 'post',
             success: function(output) {
             alert(output);
             }
             });*/
            //  });



            // Register commands
            /*ed.addCommand('mceautoave', t._save, t);
             
             
             // Register buttons
             ed.addButton('autosave', {
             title : 'autosave Plugin',
             cmd : 'mceautosave',
             image : url + '/img/loaderWhite.gif'
             });*/

            // Register example button

            ed.onInit.add(function() {
                // Check if the user added the restore button, then setup auto storage logic
                //if (ed.controlManager.get(RESTORE_DRAFT)) {
                // Setup storage engine
                //self.setupStorage(ed);

                // Auto save contents each interval time
                setInterval(function() {
                    //if (!ed.removed) {
                    self.storeDraft();
                    //

                    //ed.nodeChanged();
                    //}
                }, settings.autosave_interval);
                //}
            });
            //self.onStoreDraft = new Dispatcher(self);
        },
        storeDraft: function() {
            var ed = this.editor, formObj, os, i, elementId;
            var self = this;

            formObj = tinymce.DOM.get(ed.id).form || tinymce.DOM.getParent(ed.id, 'form');

            if (ed.getParam("save_enablewhendirty") && !ed.isDirty())
                return;

            tinyMCE.triggerSave();
            // Use callback instead
            /*if (os = ed.getParam("save_onsavecallback")) {
             if (ed.execCallback('save_onsavecallback', ed)) {
             ed.startContent = tinymce.trim(ed.getContent({format : 'raw'}));
             ed.nodeChanged();
             }
             
             return;
             }
             */
            if (formObj) {
                //ed.isNotDirty = true;

                if (formObj.onsubmit == null || formObj.onsubmit() != false) {

                    content = ed.getContent({draft: true});
                    /*YUI().use("io", function (Y) { 
                     alert('succes'); 
                     //
                     Y.io("../classes/util/InitialDraft.php", {
                     data: {
                     'id': Integer(1),
                     'editedTime':Integer(213456) ,
                     'mform1': Integer(1),
                     'Content':'TESTING' ,
                     'attached':Integer(0)
                     
                     },
                     on: {
                     
                     
                     success: function (o, res) {
                     // document.getElementById("thema").innerHTML = res.responseText;
                     
                     
                     }by goin
                     }
                     });});*/
var formElement = document.getElementsByTagName("FORM")[0];
                    var formId = formElement.id;
                   // var textEdit = document.getElementById("tinymce");
                   var textEdit=tinyMCE.activeEditor.getContent();
                   /*var editor=ed;
                    //editor.focusEditor();
                    var sel = editor._getSelection();
                        var range = editor._createRange(sel);
                    if (HTMLArea.is_ie) {
                        textEdit =range.getHtml();
                            } else {
                            textEdit =editor.getHtml();
                }*/
                   // alnoert(formId);
                   // alert(textEdit.innerHTML);
                    $.ajax({
                        url: 'http://localhost/moodle-2.4.4/moodle/lib/editor/tinymce/plugins/autosave/tinymce/Myfirst.php', //the script to call to get data          
                        //    url: 'http://localhost/moodle-2.4.4/moodle/lib/editor/tinymce/plugins/autosave/classes/util/InitialDraft.php',

//url:'../InitialDraft.php',

                       // data: "id=5&link=hoo&formType=mform&textdata=testing", //you can insert url argumnets here to pass to api.php
data: 'link='+window.location.href+'&formType='+formId.toString()+'&textdata='+textEdit,
                        //for example "id=5&parent=6"
                        /* data: {
                         'id': 1,
                         'editedTime':213456 ,
                         'mform1': 1,
                         'Content':'TESTING' ,
                         'attached':0,
                         'formURL':'http://output',
                         
                         },*/
                        datatype: 'text', //data format
                        //type: 'post', //data format      
                        success: function(data)          //on recieve of reply
                        {
                            alert(data);
                        }
                    });

                  /*  var formElement = document.getElementsByTagName("FORM")[0];
                    var formId = formElement.id;
                    var textEdit = document.getElementById("tinymce");*/
                    //alnoert(formId);
                   // alert(textEdit.innerHTML);
                    //alert(document.getElementById('mform1'));
                    //alert(document.getElementById('tinymce'));


                    // alert(ed.id);



                    alert('aaa');

                    /*  self.onStoreDraft.dispatch(self, {
                     //expires : expires,
                     content : content
                     });*/

                    //

                    //ed.nodeChanged();
                } else
                    ed.windowManager.alert("Error: No form element found.");
            }
        },
        /**
         * Returns information about the plugin as a name/value array.
         * The current keys are longname, author, authorurl, infourl and version.
         *
         * @return {Object} Name/value array containing information about the plugin.
         getInfo : function() {
         return {
         longname : 'autosave plugin',
         author : 'Fahima',
         authorurl : '',
         infourl : '',
         version : "1.0"
         };
         } */

    });

    // Register plugin
    tinymce.PluginManager.add('autosave', tinymce.plugins.autosave);
})();