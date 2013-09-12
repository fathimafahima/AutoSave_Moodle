/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


M.local_autosave={
    Y : null,
    transaction : [],
    init : function(Y){
       
        this.Y = Y;
        var cfg = {
                           data: {
                                        'oderid': Integer(1),
                                        

                                    },
                on: {
                    success: function (msg) {
                       // document.getElementById("thema").innerHTML = res.responseText;
                       alert(msg);
                    }
                }
                        };
                        M.mod_forumng.Y.io('tinymce/Myfirst.php', cfg);
    },
  }
 