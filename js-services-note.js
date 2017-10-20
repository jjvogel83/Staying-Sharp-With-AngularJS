//Challenge 12 (A Factory Recipe)
//js/services/note.js
angular.module('NoteWrangler')
.factory("Note", function NoteFactory(){

})
;

//Challenge 13  (A Factory Recipe 2)
//js/services/note.js
angular.module('NoteWrangler')
.factory('Note', ['$http', function NoteFactory($http) {
  return {
    all: function() {
      return $http({method: 'GET', url: '/notes'});
    }
  };
}]);

//Challenge 13  (A Factory Recipe 2)
//js/controllers/notes-index-controller.js
angular.module('NoteWrangler')
.controller('NotesIndexController', ['$scope', 'Note', function($scope, Note) {
  Note.all().success(function(data){
    $scope.notes = data;
  });
}]):

//Challenge 18  ($resource Refractor)
//js/services/note.js
angular.module('NoteWrangler')
.factory('Note', ['$resource', function NoteFactory($resource) {

  return $resource('/notes');

}]);

//Challenge 18  ($resource Refractor)
//js/app.js
angular.module('NoteWrangler', ['ngRoute', 'ngResource'])
.config(function(TweetableProvider) {
  TweetableProvider.setLength(144);
});



//Challenge 20  (A Custom Method for Our Note)
//js/services/note.js
angular.module('NoteWrangler')
.factory('Note',['$resource', function NoteFactory($resource) {
  return $resource('/notes', {}, {
    tweetIt: {
      method: "PUT"
    }
  });
}]);
