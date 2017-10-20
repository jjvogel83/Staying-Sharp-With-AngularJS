//Challenge 29  (A Popover for Note Descriptions)
//js/directives/title.js
angular.module('NoteWrangler')
.directive('popover', function($timeout) {
  return function(scope, element, attrs) {
   $timeout( function() {
      $(element).popover({content: attrs.popover, trigger: 'hover',});
     scope.$on('$destroy', function() {
  $(element).popover('destroy');
});
    });
  };
});


//Challenge 29  (A Popover for Note Descriptions)
//templates/pages/notes/tweeted.html
<div class="note-wrapper">
  <div class="note-content">
    <div class="notes-header">
      <h1 title="Notes">Tweeted Notes</h1>
      <input type="search" ng-model="searchTerm"/><label>Search</label>
    </div>

    <div class="note-wrapper">
      <a class="card-notes" ng-repeat=" note in notes | filter : {tweeted:true}">

        <div class="card" popover="{{note.title}} {{note.tweetedDate | date: 'MMM. dd'}}">
          <h2 class="h3">{{note.title}}</h2>
          <p>{{note.tweetedDate | date: "'Tweeted on a' EEEE 'in' MMMM"}}</p>
        </div>
      </a>
    </div>

  </div>
</div>