
Integrating an option for AutoSaving user typed data on text forums in Moodle (i.e. Text Assignments) and retrieving the 
AutoSaved data when needed again. In most of the Moodle operations such as in forms text based interfaces are used to interact with the users.  
 
A common annoyance from users is losing the text inputted in to the form. Sometimes a huge amount of 
data may be typed to the form. So if a sudden crash happens (i.e. power failure, accidently closing the 
browser etc.) the huge amount of typed data will be discarded and we will have to type it again from the 
beginning.  

So this project aims at avoiding this overhead by saving the input added to the form automatically as a 
draft so that the input data is not lost and enables the users to work on between two sessions.

The implementation of added plugin can be found in Autosave_Moodle/moodle/lib/editor/tinymce/plugins/autosave folder.

All the files created under the folder Autosave_Moodle/moodle/lib/editor/tinymce/plugins/autosave are adhered to the following license 
agreement.

//This file is part of Moodle - http://moodle.org/
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
