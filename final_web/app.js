var app = angular.module('myApp', ['ngRoute', 'firebase', 'ngCordova']);

app.constant('fb', {
  url: 'https://crackling-fire-8743.firebaseio.com'
}); 

app.config(function($routeProvider){

      $routeProvider
        .when('/' , {
          templateUrl: 'pages/main/main.html'
        })
        .when('/write' , {
          templateUrl: 'pages/write/write.html'
        }) 
        .when('/thread/:threadId', {
          templateUrl: 'pages/thread/thread.html'
        })
        .otherwise({
          redirectTo: '/'
        });
});
 