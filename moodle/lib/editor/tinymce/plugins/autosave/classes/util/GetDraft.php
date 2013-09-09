<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
     * gets data from draft table for final submission
     * @param {int} $draftId the draft id of the currently using draft
     * @param {Array} $draftData stors all the records related to that draft
     * @return {Array} array of record for that draft
     */
    function GetDraft() {
        global $DB;
       // $draftData = $DB->get_record('course', array('id' => 1));
         global $DB;
         $draftData=new Draft();
//= $DB->get_record_sql('SELECT fullname FROM {user} WHERE id=?', array(2));
    $draftData->userId=1;
     $draftData->editedTime=10000;
      $draftData->formId=30;
       $draftData->data='Assalamu Aleikum';
        $draftData->attachmentid=1;
    
$DB->insert_record('editor_autosave', $draftData, $returnid = true, $bulk = false);
        return true;
    }

  

?>
