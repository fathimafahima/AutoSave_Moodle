/**
 * editor_plugin_src.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */

(function() {
	tinymce.create('tinymce.plugins.autosave', {
		init : function(ed, url) {
			var t = this;

			t.editor = ed;

			// Register commands
			ed.addCommand('mceautosave', t._save, t);
			ed.addCommand('mceCancel', t._cancel, t);

			// Register buttons
			ed.addButton('autosave', {title : 'save.save_desc', cmd : 'mceautosave'});
			ed.addButton('cancel', {title : 'save.cancel_desc', cmd : 'mceCancel'});

			ed.onNodeChange.add(t._nodeChange, t);
			ed.addShortcut('ctrl+s', ed.getLang('save.save_desc'), 'mceautosave');
		},

		getInfo : function() {
			return {
				longname : 'autosave',
				author : 'Moxiecode Systems AB',
				authorurl : 'http://tinymce.moxiecode.com',
				infourl : 'http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/save',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		},

		// Private methods

		_nodeChange : function(ed, cm, n) {
			var ed = this.editor;

			if (ed.getParam('autosave_enablewhendirty')) {
				cm.setDisabled('autosave', !ed.isDirty());
				cm.setDisabled('cancel', !ed.isDirty());
			}
		},

		// Private methods

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
                                    $.ajax({url: '../classes/util/InitialDraft.php',
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
                                });
                                }
					//formObj.submit();

				ed.nodeChanged();
			} else
				ed.windowManager.alert("Error: No form element found.");
		},

		_cancel : function() {
			var ed = this.editor, os, h = tinymce.trim(ed.startContent);

			// Use callback instead
			if (os = ed.getParam("save_oncancelcallback")) {
				ed.execCallback('save_oncancelcallback', ed);
				return;
			}

			ed.setContent(h);
			ed.undoManager.clear();
			ed.nodeChanged();
		}
	});

	// Register plugin
	tinymce.PluginManager.add('autosave', tinymce.plugins.autosave);
})();