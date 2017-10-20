//Challenge 28  (Make It Work)
//js/directives/nw-slab-text.js
angular.module('NoteWrangler')
.directive('nwSlabText', function($timeout) {
 return function(scope, element){

        element.slabText();

        $timeout(function(){
            element.slabText();
        });
    };
});


//templates/directives/nw-card.html
<div class="card" title="{{title}}">
  <h2 class="h3" nw-slab-text>{{header}}</h2>
  <p>{{description}}</p>
</div>
