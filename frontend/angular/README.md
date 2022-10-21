# Angular

## Table of contents
- [Codecademy course - Learn AngularJS 1.X](#Codecademy-course---Learn-AngularJS-1.X)
  - [Your first app](#Your-first-app)

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

### Else
Course to be continued...

## Resources
[codecademy - Learn AngularJS 1.X](https://www.codecademy.com/learn/learn-angularjs)
