<?php

//use draft;
 
require('../../../../../../config.php'); 

class draft {

    var $userid;
    var $editedTime;
    var $formid;
    var $data;
    var $formurl;
    var $attachmentid=0;
    
    /**
     * get userid 
     * @param {int} $userid the user id of the required draft
     * @return {int} userid of that draft
     */
    function getUserid() {
          
        return $this->userid ;
    }

    /**
     * sets userId 
     * @param {int} $userAssignid the draft id of the currently using draft
     * @return {Boolean} return true to show successfully set
     */
    function setDraftData($userAssignId) {
      
        $this->userid=$userAssignId;

        return true;
    }
    
    /**
     * get editedTime 
     * @param {int} $editedTime the last edited time of the required draft
     * @return {int} editedTime of that draft
     */
    function getEditedTime() {
          
        return $this->editedTime ;
    }

    /**
     * sets editedTime 
     * @param {int} $editedTimeAssign the draft id of the currently using draft
     * @return {Boolean} return true to show successfully set
     */
    function setEditedTime($editedTimeAssigned) {
      
        $this->editedTime=$editedTimeAssigned;

        return true;
    }
    /**
     * get editedTime 
     * @param {int} $editedTime the last edited time of the required draft
     * @return {int} editedTime of that draft
     */
    function getFormURL() {
          
//        return $this->formURL ;
    }

    /**
     * sets editedTime 
     * @param {int} $editedTimeAssign the draft id of the currently using draft
     * @return {Boolean} return true to show successfully set
     */
    function setFormURL($formURL) {
      
        $this->formurl=$formURL;
                

        return true;
    }
    
    /**
     * get formId 
     * @param {int} $formId the formId of the required draft
     * @return {int} formId of that draft
     */
    function getformid() {
          
        return $this->formid ;
    }

    /**
     * sets formId 
     * @param {int} $formIdAssign the formId  of the currently using draft
     * @return {Boolean} return true to show successfully set
     */
    function setFormId($formIdAssigned) {
      
        $this->formid=$formIdAssigned;

        return true;
    }
   
    /**
     * get Attachment Id 
     * @param {int} $attachmentId the Attachment Id of the required draft
     * @return {int} attachmentId of that draft
     */
    function getAttachmentId() {
          
        return $this->attachmentid ;
    }

    /**
     * sets Attachment Id 
     * @param {int} $attachmentIdAssigned the attachmentId  of the currently using draft
     * @return {Boolean} return true to show successfully set
     */
    function setAttachmentId($attachmentIdAssigned) {
      
        $this->attachmentid=$attachmentIdAssigned;

        return true;
    }

    /**
     * get text data 
     * @param {text} $data the formId of the required draft
     * @return {text} data of that draft
     */
    function getData() {
          
        return $this->data ;
    }

    /**
     * sets data 
     * @param {text} $dataAssign the data  of the currently using draft
     * @return {Boolean} return true to show successfully set
     */
    function setData($dataAssigned) {
      
        $this->data=$dataAssigned;

        return true;
    }

}
//$draftData=new draft();
global $DB;


global $USER;

$userid = $USER->id;
//$userId=$_GET['id'];
 // $editedTime=  time();
  // $formId=$_GET['mform1'];
   //$data=$_GET['Content'];
  //   $attachmentid=0;
   //$formURL=$_GET['formURL'];
   
    
     //$this->lastInsertedId = $DB->insert_record('editor_autosave', $draftData);

$link = $_GET['link'];
$formType = $_GET['formType'];
$textData = $_GET['textdata'];
$editedTime=  (int)time();

 $attachmentid=0;
 //$draftData=new  draft();
 $draftData=new draft();
 $draftData->userid=(int)$userid;

 
 $draftData->editedtime=$editedTime;
 $draftData->formid=$formType; 
 $draftData->data=$textData;
 $draftData->attachmentid=$attachmentid;
 
 $draftData->formurl=$link;

//echo "helooo".$id.$link.$formType.$textData.$editedTime.$attachmentid;
 echo $DB->insert_record('editor_autosave', $draftData).$link.time();
//echo date("l jS \of F Y h:i:s A");
//echo time();
 
//echo $query1;
?>
