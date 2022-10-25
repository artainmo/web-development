# Angular

## Table of contents
- [Codecademy course - Learn AngularJS 1.X](#Codecademy-course---Learn-AngularJS-1.X)
  - [Your first app](#Your-first-app)
  - [Directives](#Directives)
    - [Create HTML element](#create-html-element)
    - [Interactive directive](#Interactive-directive)
  - [Services](#Services)
  - [Routing](#Routing)
- [Resources](#Resources)

## Codecademy course - Learn AngularJS 1.X
### Your first app
View refers to an HTML index.<br>
A HTML tag in view can take an angular module as attribute value, this tag can contain other tags inside itself, one of those can take an angular controller related to the prior module as attribute value, this controller can contain variables and functions which can be used in the HTML within this tag.<br>

The angular workflow:
1. Create a module (`var app = angular.module("myApp", []);`) in app.js for example, contains different components of angular app.
2. Indicate the module in view tag attribute ng-app to define the application scope (`<body ng-app="myApp">...</body>`) in index.html for example.
3. Create a controller in mainController.js for example, controllers are used to manage the app's data.
<pre>
app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'fewfwf'; 
  $scope.promo = "promo"
}]);
</pre>
4. Indicate the controller in the view's application scope (`<div ng-controller='MainController'>...</div>`) to define the controller scope.
5. Display the controller `$scope` properties in the view (`<h1>{{title}}</h1>`), this is also called an expression.

When displaying content from controller, filters can be used, filters will format the content in a certain way.<br>
Examples of filters are uppercase, currency, date... they are indicated with a pipe like this `<h1>{{price | currency}}</h1>`.

Angular controllers can contain arrays, the content of those arrays can be displayed by looping over an HTML block with each item in the array.<br>
The HTML tag has to contain the ng-repeat attribute `<div ng-repeat="product in products">...</div>` whereby in this example 'products' is an array and 'product' will represent in the HTML code block each item in products array while looping over them.<br>
You will also have access to the $index variable which refers to the index of current element in array.

Usually in HTML tags for images and other media the src attribute is used, instead ng-src can be used if it takes controller content.

Attributes starting with ng are called directives they bind angular behavior to an HTML element.

The `ng-click` attributes allow users to click on the display of an HTML element, ultimately letting users interact with the site and thus make the site dynamic instead of static.<br>
The 'ng-click' attribute is usually set equal to a function, which is executed at click.

### Directives
Directives let you create self-contained units of functionality. Those units/directives are reusable and more readable. They can take the form of HTML elements or HTML element's attributes.

As seen before, ng-repeat, ng-src and ng-click are built-in directives.

HTML element directives can be used together with HTML element's attribute directives.

A lot of open-source directives exist online that you can use for your project.

#### Create HTML element
We can create HTML elements in angular through the use of directives.<br>

For example we can have a file named 'js/directives/appInfo.js' which defines the HTML element like this:
<pre>
app.directive('appInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/appInfo.html' 
  }; 
}); 
</pre>
It returns an object with three attributes:
* restrict, specifies how the directive will be used in the view. The 'E' means it will be used as a new HTML element.
* scope, specifies that we will pass information into this directive through an attribute named info. The = tells the directive to look for an attribute named info like this: `<app-info info="shutterbugg"></app-info>`.
* templateUrl, specifies the HTML to use in order to display the data in scope.info.

Here we use as template URL 'js/directives/appInfo.html' which looks like this:
```
<img class="icon" ng-src="{{ info.icon }}"> 
<h2 class="title">{{ info.title }}</h2> 
<p class="developer">{{ info.developer }}</p> 
<p class="price">{{ info.price | currency }}</p> 
```

Now we can in the viewer 'index.html' define the created HTML element `<script src="js/directives/appInfo.js"></script>` and use our created element `<app-info info="shutterbugg"></app-info>`.<br>
The directive's name is written in camelcase (appInfo) however the HTML element uses the hyphen (app-info).

#### Interactive directive
When defining a directive next to the attributes restrict, scope and templateUrl we can also define the attribute 'link' which should equal a function and is used to respond to a user's action.

The 'link' function should take three inputs;
* scope, refers to the directive’s scope. Any new properties attached to $scope will become available to use in the directive’s template.
* element, refers to the directive’s HTML element.
* attrs, contains the element’s attributes.

Here is an example of the link attribute:
<pre>
link: function(scope, element, attrs) { 
  scope.buttonText = "Install", 
  scope.installed = false, 
 
  scope.download = function() { 
    element.toggleClass('btn-active'); 
    if(scope.installed) { 
      scope.buttonText = "Install"; 
      scope.installed = false; 
    } else { 
      scope.buttonText = "Uninstall"; 
      scope.installed = true; 
    } 
  } 
}
</pre>

And here is how the template URL looks like:
```
<button class="btn btn-active" ng-click="download()"> 
  {{ buttonText }} 
</button>
```

### Services
Services allow to read live data from servers.<br>
Instead of filling the controller with code to fetch data from a server, it’s better to move this independent logic into a service so that it can be reused by other parts of the app.<br>
Services are basically reusable blocks of code with the goal of fetching outside data.

We can create a service like this:
<pre>
app.factory('forecast', ['$http', function($http) { //AngularJS’s built-in $http is used to fetch JSON from the server. 
  return $http.get('https://content.codecademy.com/courses/ltp4/forecast-api/forecast.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);
</pre>

Next we use it inside a controller to update the datas used by the application:
<pre>
app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) {
  forecast.success(function(data) {
    $scope.fiveDay = data;
  });
}]);
</pre>

### Routing
Angular’s application routes allow to have one index take different templates. This allows for an app with multiple pages. Technically because no reload is necessary, only the index's content changes, the app can still be considered a single-page-app.

This is an example of how we config routes in an angular app:
<pre>
app.config(function ($routeProvider) { //We use Angular’s $routeProvider to define the application routes
  $routeProvider 
    .when('/', {                       //We map the URL '/' to to the controller HomeController and the template home.html.
      controller: 'HomeController', 
      templateUrl: 'views/home.html' 
    }) 
    .when('/photos/:id', {            //':id' is a variable inside the URL.
      controller: 'PhotoController',
      templateUrl: 'views/photo.html'
    })
    .otherwise({                       //If a user accidentally visits a URL other than '/', we just redirect to '/' 
      redirectTo: '/' 
    }); 
}); 
</pre>
In the viewer (index.html), this line of code `<div ng-view></div>` gets replaced by the appropriate template the URL refers to.

The controller 'PhotoController' is used on an URL containing a variable.<br>
To handle this we use Angular’s '$routeParams' to retrieve the id from the URL by using '$routeParams.id' inside the controller. The controller will define different scope data based on this 'id', thus rendering different pages depending on the 'id'.<br>
An example code is shown below:
<pre>
app.controller('PhotoController', ['$scope', 'photos', '$routeParams', function($scope, photos, $routeParams) {
  photos.success(function(data) {
    $scope.detail = data[$routeParams.id];
  });
}]);
</pre>

Because routing does not come in Angular by default, the following should be included inside the view's header `<script src="https://code.angularjs.org/1.2.28/angular-route.min.js"></script>` and inside the app's module the 'ngRoute' dependency should be set like this `var app = angular.module('exampleApp', ['ngRoute']);`.

## Resources
[codecademy - Learn AngularJS 1.X](https://www.codecademy.com/learn/learn-angularjs)
