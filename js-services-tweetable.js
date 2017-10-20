
//Challenge 14  (A Tweetable Service)
js/services/tweetable.js
angular.module('NoteWrangler')
.factory("Tweetable", function TweetableFactory($http){
  return function(potentialTweet) {
    var url = "http://gentle-spire-1153.herokuapp.com/tweet";
    return $http({method:'POST', url: url, data: {description:potentialTweet}});
  };
});


//Challenge 14  (A Tweetable Service)
//js/controllers/notes-index-controller.js
angular.module('NoteWrangler')
.controller('NotesIndexController', ['$scope', 'Note', 'Tweetable', function($scope, Note, Tweetable) {
  Note.all().success(function(data) {
    $scope.notes = data;   
  });
  $scope.tweetThatNote = function(desc) {
    Tweetable( desc ).success(function(data, status, headers, config) {
        console.log( data );
    });
  };
}]);

//Challenge 14  (A Tweetable Service)
//templates/pages/notes/index.html
<div class="note-wrapper">
  <div class="note-content">
    <div class="notes-header">
      <h1 title="Notes">Notes</h1>
    </div>
    <div class="note-wrapper">
      <a class="card-notes" ng-repeat="note in notes">
        <nw-card header="note.title" description="note.description" tweeted="note.tweeted" ng-href="#/notes/{{note.id}}"></nw-card>
        <button class="btn" ng-click="tweetThatNote(note.description)">Tweet It!</button>
      </a>
    </div>
  </div>
</div>

//Challenge 15  (The Configurable Bits)
//js/services/tweetable.js
angular.module('NoteWrangler')
.factory('Tweetable', ['$http', function TweetableFactory($http) {
  var characterLength = 80;
  return function(potentialTweet) {
    return $http({
      method: 'POST',
      url: 'http://gentle-spire-1153.herokuapp.com/tweet',
      data: {
        description: potentialTweet,
        maxLength: characterLength
      }
    });
  };
}]);

//Challenge 16  (Configurable Bits Need a Provider)
//js/services/tweetable.js
angular.module('NoteWrangler')
.provider('Tweetable', [function TweetableProvider() {
  var characterLength = 144;
 this.$get = function($http) {
    return function(potentialTweet) {
      return $http({
        method: 'POST',
        url: 'http://gentle-spire-1153.herokuapp.com/tweet',
        data: {
          description: potentialTweet,
          maxLength: characterLength
        }
      });
    };
  };
  this.setLength = function(maxLength) {
  characterLength = maxLength;
};
}]);
