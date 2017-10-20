//Challenge 1 (The Beginning of Routes)

js/app.js
angular.module("NoteWrangler",["ngRoute"])
.config(function($routeProvider){
  $routeProvider.when("/notes", {
    templateUrl: "templates/pages/notes/index.html"
  });
});

//Challenge 1 (The Beginning of Routes)
//index.html
<!DOCTYPE html>
<html lang="en" ng-app="NoteWrangler">

  <head>
    <meta charset="utf-8">
    <title>Note Wrangler</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/application.css" />
  </head>

  <body>
    <div class="nav-wrapper has-dropdown">
      <div class="nav-content">
        <div class="wrapper">
          <div class="nav-content-layout">
            <div class="nav-list">

              <a href="#/"
              class="list-item"
              ng-click="selected = 'notes'"
              ng-class="{'active': selected == 'notes'}"> Notes </a>

              <a href="#/users"
              class="list-item"
              ng-click="selected = 'users'"
              ng-class="{'active': selected == 'users'}"> Users </a>

            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-wrapper">
      <div class="hero-content">
        <div class="hero"></div>
      </div>
    </div>

    <div class="main-wrapper">
     <div ng-view></div>
    </div>

    <!-- Load Js libs -->
    <script src="./js/vendor/jquery.js"></script>
    <script src="./js/vendor/angular.js"></script>
    <script src="./js/vendor/angular-route.js"></script>

    <script src="./js/app.js"></script>

    <!-- Controllers -->
    <script src="./js/controllers/notes-create-controller.js"></script>
    <script src="./js/controllers/notes-edit-controller.js"></script>
    <script src="./js/controllers/notes-index-controller.js"></script>
    <script src="./js/controllers/notes-show-controller.js"></script>
    <script src="./js/controllers/users-index-controller.js"></script>
    <script src="./js/controllers/users-show-controller.js"></script>


  </body>
</html>


//templates/pages/notes/index.html
<div class="note-wrapper">
  <div class="note-content">
	<div class="notes-header">
  	<h1 title="Notes">Notes</h1>
	</div>

	<div class="note-wrapper">
  	<a class="card-notes" ng-repeat="note in notes">

    	<div class="card" title="{{note.title}}">
      	<h2 class="h3">{{note.title}}</h2>
      	<p>{{note.description}}</p>
    	</div>

  	</a>
	</div>

  </div>
</div>

//Challenge 2 (A New Route and a Root Route)
//js/app.js
angular.module('NoteWrangler', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider

    .when('/notes', {
      templateUrl: 'templates/pages/notes/index.html'
    })
    .when('/users', {
      templateUrl: 'templates/pages/users/index.html'
    })
 .when('/notes/new', {
  templateUrl: 'templates/pages/notes/edit.html'
})
  .when('/', {
  redirectTo: '/users'
})
 .otherwise({
  redirectTo: '/notes'
});

}]);

//Challenge 4 (Inside Route Controller)
//js/app.js
angular.module('NoteWrangler', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      redirectTo: '/users'
    })
    .when('/notes', {
      templateUrl: 'templates/pages/notes/index.html',
      controller: function($http) {
    var controller = this;
    $http({method: 'GET', url: '/notes'}).success(function(data) {
  controller.notes = data;
});
  },
  controllerAs: 'notesCtrl'
    })
    .when('/users', {
      templateUrl: 'templates/pages/users/index.html'
    })
    .when('/notes/new', {
      templateUrl: 'templates/pages/notes/edit.html'
    })
    .otherwise({
      redirectTo: '/notes'
    });
}]);



//Challenge 17  (Configurable the Tweet Length)
//js/app.js
angular.module('NoteWrangler', ['ngRoute'])
.config(function (TweetableProvider){
  TweetableProvider.setLength(40);
})



//Challenge 18  ($resource Refractor)

//js/app.js
angular.module('NoteWrangler', ['ngRoute', 'ngResource'])
.config(function(TweetableProvider) {
  TweetableProvider.setLength(144);
});

//Challenge 18  ($resource Refractor)
//index.html
<!DOCTYPE html>
<html lang="en" ng-app="NoteWrangler">

  <head>
    <meta charset="utf-8">
    <title>Note Wrangler</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/application.css" />
  </head>

  <body>
    <div class="nav-wrapper has-dropdown">
      <div class="nav-content">
        <div class="wrapper">
          <div class="nav-content-layout">
            <div class="nav-list">
              <a href="#/notes"
              class="list-item"
              ng-click="selected = 'notes'"
              ng-class="{'active': selected == 'notes'}"> Notes </a>

              <a href="#/users"
              class="list-item"
              ng-click="selected = 'users'"
              ng-class="{'active': selected == 'users'}"> Users </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-wrapper">
      <div class="hero-content">
        <div class="hero"></div>
      </div>
    </div>

    <div class="main-wrapper">
      <div ng-view></div>
    </div>

    <!-- Load Js libs -->
    <script src="./js/vendor/jquery.js"></script>
    <script src="./js/vendor/angular.js"></script>
    <script src="./js/vendor/angular-route.js"></script>
    <script src="js/vendor/angular-resource.js"></script>

    <!-- NW Scripts -->
    <script src="./js/app.js"></script>
    <script src="./js/routes.js"></script>

    <!-- Controllers -->
    <script src="./js/controllers/notes-create-controller.js"></script>
    <script src="./js/controllers/notes-edit-controller.js"></script>
    <script src="./js/controllers/notes-index-controller.js"></script>
    <script src="./js/controllers/notes-show-controller.js"></script>
    <script src="./js/controllers/users-index-controller.js"></script>
    <script src="./js/controllers/users-show-controller.js"></script>

    <!-- Directives -->
    <script src="./js/directives/nw-card.js"></script>

    <!-- Services -->
    <script src="./js/services/note.js"></script>
    <script src="./js/services/tweetable.js"></script>

  </body>
</html>
