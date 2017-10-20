//Challenge 7 (Inline Controller and $scope)
//js/directives/nw-card.js

angular.module('NoteWrangler').directive('nwCard', [function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/directives/nw-card.html',
    controller: function($scope) {
      $scope.header = 'Note Title';
      $scope.description = 'A lovely note description.';
    },
    
  };
}]);

//Challenge 7 (Inline Controller and $scope)
//templates/directives/nw-card.html
<div class="card" title="{{header}}">
  <h2 class="h3">{{header}}</h2>
  <p>{{description}}</p>
</div><div class="card" title="{{}}">
  <h2 class="h3">{{header}}</h2>
  <p>{{description}}</p>
</div>



//Challenge 11 (Style the Tweeted Note)
//js/directives/nw-card.js
angular.module('NoteWrangler')
.directive('nwCard', function() {
  return {
    restrict: 'E',
    templateUrl: './templates/directives/nw-card.html',
    scope: {
      header: '=',
      description: '=',
      tweeted: '='
    },
    link: function (scope, element, attrs){
  if(scope.tweeted) {
    element.addClass('tweeted');
  }
}
  };
});