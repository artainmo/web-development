# EXPRESS

## Free tutorials

### SETUP
Has to be used on a nodejs environment as it is a nodejs framework.<br>
For installation use node-package-manager "npm install express".

import it with "const express = require('express');".

### USE
The express() function creates an app object.<br>
The app object has the following methods: .get, .post, .put, .delete, .all, .use, .listen.<br>
Listen takes port as first parameter and a callback function called once function is created as second parameter.<br>
Get takes a path/url as first argument and as second argument a callback function, called each time a user makes a get request to the path/url, this callback function takes request and response object as parameters. <br>
Post, put, delete can be used in a similar way as get function but your callback function has to be appropriate to the method.<br>
All refers to all the different methods and in combination with the path '*' (all urls), can be used to make custom responses toward request mistakes.<br>
Use calls middleware.

For express, APIs are HTTP interfaces to transfer data, from the back-end to the front-end for example.<br>
Data is send with JSON (JavaScript Object Notation). <br>
JSON uses human-readable text to store and transmit data objects consisting of attribute–value pairs and arrays.<br>
With the above mentionned response and request objects the json method can be used to transform arrays of objects into json.<br>
To setup an API use .get method of express with as first parameter the api path/url, in the callback function return the JSON content, the JSON content will be accessible for the front-end by fetching the specified path/url.

Static assets are files that the server does not need to change.???<br>
An url ending with a '?' is followed by parameters with values that the server can use, this is called a query string and can be accessed with the request object's query method.

Why is middleware useful???<br>
Middleware refers to code between server request and response.<br>
The .get method normally has first parameter path and second parameter callback function, it can also have three parameters with as second parameter the middleware function and last parameter the callback function.<br>
This middleware function takes request, response and next object, the next parameter is used to indicate the end of the middleware function and go to the next middleware function or to the final callback function.<br>
Express's use method takes a middleware function and invokes it for any path/url/route, besides if you add a second argument path, than the middleware function will be invoked for all the urls/paths coming from this path.<br>
For use and get to take multiple middleware functions those have to be set in an array.

express's route method allow for the creation of a router object. ???
