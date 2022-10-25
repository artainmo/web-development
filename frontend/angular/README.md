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

### Directives
Directives let you create self-contained units of functionality. Those units/directives are reusable and more readable. They can take the form of HTML elements or HTML element's attributes.

As seen before, ng-repeat, ng-src and ng-click are built-in directives.

HTML element directives can be used together with HTML element's attribute directives.

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



### Else
Course to be continued...

## Resources
[codecademy - Learn AngularJS 1.X](https://www.codecademy.com/learn/learn-angularjs)
