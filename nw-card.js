//Challenge 9 (A Flexible Card Directive)

//nw-card.js
angular.module('NoteWrangler')
.directive('nwCard', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/directives/nw-card.html',
    scope: {
      header: '=',
      description: '='
    }
  };
});

//Challenge 9 (A Flexible Card Directive)
//nw-card.html
<div class="card" title="{{header}}">
  <h2 class="h3">{{header}}</h2>
  <p>{{description}}</p>
</div>
