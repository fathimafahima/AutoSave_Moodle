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
 * This class is used to encapsulate each  draft data 
 */

//


class draft {

    var $userid;
    var $editedTime;
    var $formid;
    var $data;
    var $formURL;
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
      
        $this->formURL=$formURL;
                

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