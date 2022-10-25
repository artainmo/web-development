app.module('NearMeApp', ['leaflet-directive', 'ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .where('/', {
    controller: 'MainController',
    templateUrl: 'views/main.html'
  })
  .where('/about',{
    controller: 'AboutController',
    templateUrl: 'views/about.html'
  })
  .otherwise({ redirectTo: '/' })
})
