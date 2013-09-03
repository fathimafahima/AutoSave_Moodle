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
    function getDraftData($formId) {
        global $DB;
        $draftData = $DB->get_record('draft', array('formid' => '$formId'));

        return $draftData;
    }

    /**
     * sets data to draft table whenever data retrieved
     * @param {int} $draftId the draft id of the currently using draft
     * @param {Array} $draftData stors all the records related to that draft
     * @return {Boolean} return true to show successfully saved
     */
    function setDraftData($draftData) {
        global $DB;
        $DB->update_record($draft, $draftData, $bulk = false);


        return true;
    }

?>
