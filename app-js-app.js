//Challenge 5 (Outside Route Controller)
//app/js/app.js

angular.module('NoteWrangler', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      redirectTo: '/users'
    })
    .when('/notes', {
      templateUrl: 'templates/pages/notes/index.html',
      controller: function($http){
        var controller = this;
        $http({method: 'GET', url: '/notes'}).success(function(data){
          controller.notes = data;
        });
      },
      controllerAs: 'notesCtrl'
    })
    .when('/users', {
      templateUrl: 'templates/pages/users/index.html'
    })
    .when('/notes/new', {
     templateUrl: 'templates/pages/notes/edit.html',
     controller: 'NotesCreateController',
     controllerAs: 'newNotesCtrl'

    })
    .otherwise({
      redirectTo: '/notes'
    });
}]);


//Challenge 5 (Outside Route Controller)
//app/templates/pages/notes/new.html

<div class="new-note">
  <div class="new-note-container">
    <form class="form">
      <fieldset>
        <label for="title">Title</label>
        <input name="title" ng-model="note.title"/>
      </fieldset>

      <fieldset>
        <label for="description">Description</label>
        <textarea name="description" ng-model="note.description"></textarea>
      </fieldset>

      <fieldset>
        <label for="content">Content</label>
        <textarea name="content" ng-model="note.content"></textarea>
      </fieldset>

      <button class="btn" ng-click="newNotesCtrl.saveNote(note)">Save</button>
    </form>
  </div>
</div>
