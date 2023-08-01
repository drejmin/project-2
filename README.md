# App Name
Notes on Notes
    - A notes sharing app where you can post and share notes as well as search for other notes.
    - This idea is made to help both students and teachers compile notes to better grasp and present the materials and subjects

# Tech Used
    -express.js
    -MongoDB
    -mongoose
    -jQuery
    -node.js
    -multer
    -Oauth

# Planned Updates

-More fleshed out CSS
-In depth search features
-Private notes
-Notes on group pages
-Notes editor
-downloadable notes
-share buttons 



# Overview
 <h2>This app is one that is focused on students and education. The purpose of it is to create virtual notes sharing sessions that are easily assessible to all students. The notes can be made searchable. </h2>

<a href="https://imgur.com/Xg1rpXn"><img src="https://i.imgur.com/Xg1rpXn.jpg" title="source: imgur.com" /></a>
## Possible Third Party App
https://developers.google.com/tasks/quickstart/js 

I want to add Google tasks api to the app to create a to-do list that can work with the notes, however it only worked as a personal account so I switched it to embed google into the site.

I am adding a quill api that allows for rich text input.

# Restful Routing Chart

| VERB   | URL pattern           | Action (CRUD)    | Description |
| ----   | -----------           | -------------    | ----------- |
| GET    | /notes                | Index (Read)     | lists all notes |
| GET    | /notes/new            | New (Read)       | shows a form to make a new note |
| POST   | /notes                | Create (Create)  | creates a note with the POST payload (form) data |
| GET    | /notes/:id            | Show (Read)      | shows a specific note |
| GET    | /notes/edit/:id       | Edit (Read)      | shows a form for editing a selected note|
| PUT    | /notes/:id            | Update (Update)  | updates the data for selected note |
| DELETE | /notes/:id            | Destroy (Delete) | deletes the note |
| | | |
| GET    | /classes          | Index (Read)     | lists all classes |
| GET    | /classes/new      | New (Read)       | shows a form to make a new classes |
| POST   | /classes          | Create (Create)  | creates a class with the POST payload (form) data |
| GET    | /classes/:id      | Show (Read)      | shows a specific class in the listing |
| GET    | /classes/edit/:id | Edit (Read)      | shows a form for editing a selected class |
| PUT    | /classes/:id      | Update (Update)  | updates the data for selected class |
| DELETE | /classes/:id      | Destroy (Delete) | deletes the class |
| | | |
| GET    | /groups          | Index (Read)     | lists all groups |
| GET    | /groups/new      | New (Read)       | shows a form to make a new groups |
| POST   | /groups          | Create (Create)  | creates a group with the POST payload (form) data |
| GET    | /groups/:id      | Show (Read)      | shows a specific group in the listing |
| GET    | /groups/edit/:id | Edit (Read)      | shows a form for editing a selected group |
| PUT    | /groups/:id      | Update (Update)  | updates the data for selected group |
| DELETE | /groups/:id      | Destroy (Delete) | deletes the group |

# ERD 

<a href="https://imgur.com/ZyGqKpQ"><img src="https://i.imgur.com/ZyGqKpQ.jpg" title="source: imgur.com" /></a>

# Story Frames

AAU I want to be able to create and share notes with a group.

AAU I want to have my own private notes.

AAU I want to be able to search for public notes based on classes, teachers and topics.

AAU I want to be able to upload notes that I already wrote down as an image.


# MVP
<ul>
<li>Ability to create a new note</li>
<li>Ability to link notes to different groups</li>
<li>Ability to have personal unshared notes</li>
</ul>

# Stretch Goal
<ul>
<li>Ability to use google tasks to reference for notes</li>
<li>Ability to link notes to different classes</li>
<li>Ability to add and remove members to groups if user is group/class manager </li>
</ul>

