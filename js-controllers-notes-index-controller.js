//Challenge 8 (Outside Controller and $scope)
//js/controllers/notes-index-controller.js
angular.module('NoteWrangler')
.controller('NotesIndexController', ['$http', function($http, $scope) {
  $http({method: 'GET', url: '/notes'}).success(function(data) {
    $scope.notes = data;
  });
}]);


//Challenge 8 (Outside Controller and $scope)
//templates/pages/notes/index.html
<div class="note-wrapper">
  <div class="note-content">
    <div class="notes-header">
      <h1 title="Notes">Notes</h1>
    </div>

    <div class="note-wrapper">
      <a class="card-notes" ng-repeat="note in notes">
        <nw-card></nw-card>
      </a>
    </div>

  </div>
</div>


//Challenge 13  (A Factory Recipe 2)
//js/controllers/notes-index-controller.js
angular.module('NoteWrangler')
.controller('NotesIndexController', ['$scope', 'Note', function($scope, Note) {
  Note.all().success(function(data){
    $scope.notes = data;
  });
}]);


//Challenge 19  (Using $resource-ful Note Service)

//js/controllers/notes-index-controller.js
angular.module('NoteWrangler')
.controller('NotesIndexController', ['$scope', 'Note', 'Tweetable', function($scope, Note, Tweetable) {
  $scope.notes = Note.query();
  $scope.tweetThatNote = function(noteToTweet) {
    Tweetable(noteToTweet).success(function(status) {
      console.log(status);
    });
  };
}]);
