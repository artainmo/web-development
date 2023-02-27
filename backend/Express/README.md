# EXPRESS

## Table of contents
- [Codecademy course](#Codecademy-course)
  - [Routes](#Routes)
  - [Middleware](#Middleware)
- [Free tutorials](#Free-tutorials)
  - [Setup](#Setup)
  - [Use](#Use)

## Codecademy course

Express is a framework for the creation of web servers and APIs.

### Routes
To use express it first has to be imported like this `const express = require('express')`.<br>
Then we have to invoke an express application instance to a variable `const app = express()`.<br>
To start the server (to enable accepting requests and sendig responses to clients) we have to listen on a port `app.listen(portNumber, ()=>{console.log('server started!')}`.

Routes define how to handle requests based on the HTTP request method and path.<br>
Web servers and APIs should be able to handle CRUD (create, read, update, and delete) or their associated HTTP methods POST, GET, PUT, DELETE.<br>
Express contains associated functions .get(), .post(), .put(), .delete(), their first argument equals a path and second argument a callback function, this allows a function to be called each time a certain method and path is requested.<br>
The callback function has a request, response and next object, to send back a response the .send() method on the response object is used or .json() to send json (javascript will be transformed into json).<br>
If no route matches or no response is send back, express will automatically send a 404 error back.<br>
res.send automatically sets the status code of the response to 200, but to choose it yourself res.status() can be used.

Parameters are route path segments that begin with : in their Express route definitions. They act as wildcards, matching any text at that path segment. For example /monsters/:id will match both /monsters/1 and /monsters/45. req.params contains as keys, paramameters and as value its actual path segment value. <br>
In req.query the query string of the request url can be found.

To separate the routes, routers can be used, they allow to handle requests that start with a certain path, each router usually sits in a different file.<br>
`const app = express(); const startPathRouter = epress.Router(); app.use('startPath', startPathRouter); startPathRouter.get('/', (req,res,next)=>{})`<br>
Whereby the startPathRouter.get() will handle all the startPath with get method requests.

### Middleware
Middleware is used for cleaner code, by avoiding code replication.<br>
Avoiding code replication is usually done by usage of functions.<br>
Middleware is able to avoid code replication and is code that executes between a server receiving a request and sending a response.<br>

All functions with argument next are middleware functions.
`app.use((req,res,next)=>{})` app.use can take as first argument a path an array of paths or no path and as second/first argument a callback-function, it is applicable to all HTTP methods but paths can be specified.

If multiple routes are possible for a request the one that comes in the code first will be used.<br>
Though by calling the next() function at end of middleware function it will execute the next possible middleware function.

.use, .post, .get, .delete and .put can all take an infinite amount of callback functions, the first one would be called first and if it calls next(), the next one would be called and so forth...

Javascript packages with express middleware functions exists, those can be used to resolve common programming challenges.<br>
To parse the request body, body-parser is a good package.

Error middleware functions exist, they are always called last thus should come at end of file, they have one extra parameter in front of the others called err, they usually send and log the error with err.status and err.message.<br>
Prior middleware that wants to call the error middleware has to create an instance of Error object fill it and give it as argument to next():<br>
`const err = new Error(errorMessage); err.status = 404; return next(err);`

Middleware functions can also be used to set params in the req object for following middleware functions like this:<br>
`app.param('nameId', (req,res,next,id)=> {if (req.id exists) req.nameId = id; else Error})`, whereby all paths with :nameId will first pass through this middleware function.

Routers can be nested inside each other a nested router is indicated with `Router({mergeParams:true})`.

## Free tutorials

### Setup
Has to be used on a nodejs environment as it is a nodejs framework.<br>
For installation use node-package-manager "npm install express".

import it with "const express = require('express');".

### Use
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

## Resources
[Codecademy - Learn Express](https://www.codecademy.com/learn/learn-express) - 4h<br>
[Node.js and Express.js - Full Course](https://www.youtube.com/watch?v=Oe421EPjeBE) - 8h16m<br>
