<?php

/*
 * copyright @ fahima 2013
 * Saving the data in the db table
 */

require('../../../../../../config.php');

class draft {

    //var $id;
    var $userid;
    var $editedtime;
    var $formid;
    var $data;
    var $formurl;
    var $attachmentid = 0;

    /**
     * get userid 
     * @param {int} $userid the user id of the required draft
     * @return {int} userid of that draft
     */
    function getUserid() {

        return $this->userid;
    }

    /**
     * sets userId 
     * @param {int} $userAssignid the draft id of the currently using draft
     * @return {Boolean} return true to show successfully set
     */
    function setDraftData($userAssignId) {

        $this->userid = $userAssignId;

        return true;
    }

    /**
     * get editedTime 
     * @param {int} $editedTime the last edited time of the required draft
     * @return {int} editedTime of that draft
     */
    function getEditedTime() {

        return $this->editedTime;
    }

    /**
     * sets editedTime 
     * @param {int} $editedTimeAssign the draft id of the currently using draft
     * @return {Boolean} return true to show successfully set
     */
    function setEditedTime($editedTimeAssigned) {

        $this->editedtimeime = $editedTimeAssigned;

        return true;
    }

    /**
     * get editedTime 
     * @param {int} $editedTime the last edited time of the required draft
     * @return {int} editedTime of that draft
     */
    function getFormURL() {

        return $this->formurl;
    }

    /**
     * sets editedTime 
     * @param {int} $editedTimeAssign the draft id of the currently using draft
     * @return {Boolean} return true to show successfully set
     */
    function setFormURL($formURL) {

        $this->formurl = $formURL;


        return true;
    }

    /**
     * get formId 
     * @param {int} $formId the formId of the required draft
     * @return {int} formId of that draft
     */
    function getformid() {

        return $this->formid;
    }

    /**
     * sets formId 
     * @param {int} $formIdAssign the formId  of the currently using draft
     * @return {Boolean} return true to show successfully set
     */
    function setFormId($formIdAssigned) {

        $this->formid = $formIdAssigned;

        return true;
    }

    /**
     * get Attachment Id 
     * @param {int} $attachmentId the Attachment Id of the required draft
     * @return {int} attachmentId of that draft
     */
    function getAttachmentId() {

        return $this->attachmentid;
    }

    /**
     * sets Attachment Id 
     * @param {int} $attachmentIdAssigned the attachmentId  of the currently using draft
     * @return {Boolean} return true to show successfully set
     */
    function setAttachmentId($attachmentIdAssigned) {

        $this->attachmentid = $attachmentIdAssigned;

        return true;
    }

    /**
     * get text data 
     * @param {text} $data the formId of the required draft
     * @return {text} data of that draft
     */
    function getData() {

        return $this->data;
    }

    /**
     * sets data 
     * @param {text} $dataAssign the data  of the currently using draft
     * @return {Boolean} return true to show successfully set
     */
    function setData($dataAssigned) {

        $this->data = $dataAssigned;

        return true;
    }

}

global $DB;
global $USER;

$userid = $USER->id;   //user id of the current user of the editor
$link = $_GET['link'];  //url of the current editor page
//$counter = (int)$_GET['counter'];
$formType = $_GET['formType']; //typr of the form 
$textData = $_GET['textdata']; //html body
$editedtime = (int) time(); //edited time of the editor
$attachmentid = 0;

$draftData = new draft();

$draftData->userid = (int) $userid;
$draftData->editedtime = $editedtime;
$draftData->formid = $formType;
$draftData->data = $textData;
$draftData->attachmentid = $attachmentid;
$draftData->formurl = $link;
//if($counter!=0){
$isThere = $DB->record_exists_sql('SELECT id FROM {editor_autosave} WHERE formurl = ? AND userid=?', array($link,(int)$userid));
$isThere =serialize($isThere);

if($isThere=='b:0;'){
  echo $DB->insert_record('editor_autosave', $draftData);  
}
else if($isThere=='b:1;'){
   

$result = $DB->get_records_sql('SELECT id FROM {editor_autosave} WHERE userid = ? AND formurl = ?', array( (int)$userid , $link ));
$text = serialize($result);
list($part1, $part2,$part3,$part4) = explode(';', $text);
list($other1, $id, $other2) = explode('"', $part3);

echo $id;

$draftData->id = (int) $id;

$DB->update_record('editor_autosave', $draftData);
}

?>
