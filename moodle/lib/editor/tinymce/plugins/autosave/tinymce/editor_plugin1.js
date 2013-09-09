(function() {
    
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
                init : function(ed, url) {

                        // Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('mceExample');
                      // ed.addCommand('mceautosave', function() {
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

                      var t = this;

			t.editor = ed;

			// Register commands
			ed.addCommand('mceautoave', t._save, t);
			

			// Register buttons
			  ed.addButton('autosave', {
                                title : 'autosave Plugin',
                                cmd : 'mceautosave',
                                image : url + '/img/loaderWhite.gif'
                        });
			
                        // Register example button
                       
                        
                },
                
                
                _nodeChange : function(ed, cm, n) {
			var ed = this.editor;

			if (ed.getParam('save_enablewhendirty')) {
				cm.setDisabled('autosave', !ed.isDirty());
				cm.setDisabled('cancel', !ed.isDirty());
			}
		},
                        
               _save : function() {
			var ed = this.editor, formObj, os, i, elementId;

			formObj = tinymce.DOM.get(ed.id).form || tinymce.DOM.getParent(ed.id, 'form');

			if (ed.getParam("save_enablewhendirty") && !ed.isDirty())
				return;

			tinyMCE.triggerSave();
			// Use callback instead
			if (os = ed.getParam("save_onsavecallback")) {
				if (ed.execCallback('save_onsavecallback', ed)) {
					ed.startContent = tinymce.trim(ed.getContent({format : 'raw'}));
					ed.nodeChanged();
				}

				return;
			}

			if (formObj) {
				ed.isNotDirty = true;

				if (formObj.onsubmit == null || formObj.onsubmit() != false){
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
                           formObj.submit();
                                }
					//

				ed.nodeChanged();
			} else
				ed.windowManager.alert("Error: No form element found.");
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