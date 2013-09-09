<?php

// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * AutoSave upgrade script.
 *
 * @package   tinymce_autosave
 * @copyright 2013 fahima
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
/*
 * This class is used to encapsulate the  data such as getting and setting data from the database newly added tables.for the final submission.
 */

//



    /**
     * Constructor
     * The first draft data is stored through this
     * @param {int} the id of the last inserted data to the draft table
     */
    function setInitialDraft() {
               global $DB;
        $draftData=new draft();
        if(isset($_POST['id']) && !empty($_POST['id'])) {
                  $draftData->userId=$_POST['id'];
            }

        if(isset($_POST['editedtime']) && !empty($_POST['editedtime'])) {
                  $draftData->editedTime=$_POST['editedtime'];
            }
       if(isset($_POST['mform1']) && !empty($_POST['mform1'])) {
                  $draftData->formId=$_POST['mform1'];
            }
       if(isset($_POST['id_summary_editor']) && !empty($_POST['id_summary_editor'])) {
                  $draftData->data=$_POST['id_summary_editor'];
            }
       
           if(isset($_POST['attached']) && !empty($_POST['attached']) && $_POST['attached']==1)  {
       $draftData->attachmentid= $DB->get_record_sql('SELECT itemid FROM {files} WHERE userid = ? AND timemodified = ?', 
                       array($draftData->userId,  $draftData->editedTime));
            
            }  
            
    
      
 
        $this->lastInsertedId = $DB->update_record('editor_autosave', $draftData,  $bulk = false);
    }

    
