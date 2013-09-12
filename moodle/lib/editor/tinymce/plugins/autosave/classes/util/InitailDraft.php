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
require('../../../../../../../config.php'); 
    function InitialDraft() {
       
               global $DB;
               echo'sucess done';
               $draftData=(object)draft;
       //$draftData=new draft();
             /* $draftData->userId=$_POST['id'];
         $draftData->editedTime=$_POST['editedtime'];
       $draftData->formId=$_POST['mform1'];
             $draftData->data=$_POST['Content'];*/
              $draftData->attachmentid=0;
       if(isset($_GET['id']) && !empty($_GET['Id'])) {
                  $draftData->userId=$_GET['id'];
                  print 'test';
            }

        if(isset($_GET['editedtime']) && !empty($_GET['editedtime'])) {
                  $draftData->editedTime=$_GET['editedtime'];
            }
       if(isset($_GET['mform1']) && !empty($_GET['mform1'])) {
                  $draftData->formId=$_GET['mform1'];
            }
       if(isset($_GET['Content']) && !empty($_GET['Content'])) {
                  $draftData->data=$_GET['Content'];
            }
       
           if(isset($_GET['attached']) && !empty($_GET['attached']) && $_GET['attached']==1)  {
       $draftData->attachmentid= $DB->get_record_sql('SELECT itemid FROM {files} WHERE userid = ? AND timemodified = ?', 
                       array($draftData->userId,  $draftData->editedTime));
            
            }  
           if(isset($_GET['formURL']) && !empty($_GET['formURL'])) {
                  $draftData->formURL=$_GET['formURL'];
            }
    
            
           
      print 'test';
 
        $this->lastInsertedId = $DB->insert_record('editor_autosave', $draftData);
    }

    
