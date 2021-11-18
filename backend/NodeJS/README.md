# NODEJS

## Table of contents
- [Codecademy course](#Codecademy-course)
  - [Backend](#Backend)
  - [Introduction](#Introduction)
  - [Essentials](#Essentials)
  - [HTTP server setup](#HTTP-server-setup)
- [Free tutorials](#Free-tutorials)
  - [Setup](#SETUP)
  - [Use](#USE)

## Codecademy course

Is a back-end runtime environment for javascript, used to create web applications.

### Backend
#### Web
The front-end consists of the UI send to the client so that it can interact with the web application, the back-end refers to all the rest necessary for an application.</br>
A web server is a process running on a computer that listens for incoming requests for information over the internet and sends back responses.</br>
HTTP is the protocol used to acces websites, allows communication between server and client.</br>
A static website consists of sending non-personalized content, contrary to dynamic websites such as platforms.</br>
The collection of programming logic required to deliver dynamic content to a client, manage security, process payments, and myriad other tasks is sometimes known as the “application” or application server.

#### Databases
The back-ends of modern web applications include some sort of database, often more than one. Databases are collections of information.</br>
Distinction can be made between relational and non-relational databses:
* relational databases consist of columns and rown to store data and uses the SQL language to communicate. (example mySQL and PostgreSQL)
* non-relational databases consist of other systems such as key-value pairs or a document storage model. (MongoDB and Redis)
Backends also need a way to programmatically interact with those databases.

#### APIs
API stands for application program interface and refers to a connection between computers or computer programs, while a web API more specifically allows interaction with web app data often through HTTP requests.</br>
A web API is often used to interact with the database.</br>
Some web APIs are open to the public while others are only used for internal application development.

#### Authentification
Authentification of a user can be done internally by verifying the user's login and password in database but can also be done externaly with Facebook for exaple. </br>
This is followed by authorization whereby through dynamic content the user's content is personalized.

#### Stacks
Developers can construct back-ends in many different languages like PHP, Java, JavaScript, Python, and more.</br>
Generally frameworks are used to create backends easier, such as express.js for javascript.</br>
The collection of technologies used to create the front-end and back-end of a web application is referred to as a stack.

#### JSON
Is a language/format that all different programming languages can understand that is used to transfer data, it thus is the universal data-exchange format/language.

It is similar to javascript objects in appearance, the only difference is that names of properties of object must be in between "".

### Introduction
Prior to nodejs browsers were the only place javscript could be executed, thus it was only used for front-end.</br>
Nodejs allows javascript execution outside of the browser and thus its use for backend.</br>
Nodejs is often combined with the express.js framework for the backend.

When you install Node, it comes with a built-in JavaScript REPL. You can access the REPL by typing the command node (with nothing after it) into the terminal and hitting enter. This allows experimenting with node.</br>
Node contains a global object called global, it is a javascript object at its core but it does not contain the window property, because node is for the frontend.

To run a program with node, first create .js file, in terminal use the command `node fileName.js`, console.log will not output on the console but inside the terminal.

Modules allow to import code from other files.</br>
Modules can be imported like this `const moduleName = require('moduleName')`.</br>
Nodejs contains core modules.</br>
The console module used for console.log (log in the terminal in nodejs, in ES6 log in browser console) is a global module and thus does not have to be imported.</br>
The process module used to access information about the environment, memory used and program arguments is a global module and does not have to be imported.</br>
The os module has to be imported and provides information about operating system.</br>
The util module has to be imorted and contains various utility functions.

The regular ES6 browser javascript imports and exports modules with the import/export syntax.</br>
While nodejs uses require() and modules.exports.</br>
Modules.export is an object, give it the to be exported code as properties such as `module.export.fundtionName = functionName`.</br>
This object can be imported with the require() function with the path to module as argument like this `const moduleName = require(pathToModule)`.</br>
Object destructuring can be used to import more selectively like this `const { funtionName1, functionName2 } = require(pathToModule)`.

Node package manager can be used to download external packages to node project, those packages are like third-party modules and are also called dependencies if your project depends on them.</br>
To verify if npm is available use npm -v, it should usually be downloaded together with node.</br>
To install a package locally(only in current node project) `npm install packageName`.</br>
A package can also be installed globally with the -g flag, this leads to the package being available over whole os, this is not recommended.

### Essentials
The event module allows the creation of an event class that can be given a callback function and name with .on(), the callback function can be called when necessary with .emit().

`process.stdin.on(EventName, callbackFunction)` with the callback function taking input from terminal, can be used to take input from a user inside a terminal.

The error global module allows the creation of error instances, useful to throw errors or inside try-catch statements.</br>
Try-catch statements are usually used inside synchronous code, but asynchronous code usually uses an error-callback-function, if an error occurs the error is given to the error-callback-function else undefined is given, meaning that the error-callback-function can verify if an error occured by checking if its parameter is undefined or not, this error-callback-function can take as second argument data if operation was successful and display it.

The global buffer module allows representation of memory in binary data.

The fs module stands for file system and can be used to read and write to files.

The global time module can be used to handle code execution at specific times. 

### HTTP server setup
HTTP, short for Hypertext Transfer Protocol, is a request-response protocol that serves as the foundation of data exchange and communication within the client-server computing model.

Nodejs contains a HTTP module.<br>
With `const server = http.createServer((req, res)=>{})` a server can be created, it takes as argument a callback function that holds the request and response objects, who can manage the HTTP communication and terminates with response.end() to send the response.<br>
This can be followed by `server.listen(port)` for the server to listen at a certain port, it can also take a second argument, a callback function that is called once as the server is launched.

A URL can provide a great deal of information about a request and how it is expected to behave.
* It starts with a protocol, for example `https://`
* It is followed by a domain, for example `github.com`
* It can be followed by a path, for example `/artainmo`
* It can be followed by a query, for exaple `?key=value&key2=value2`, a query starts with ? and is followed by value=key pairs, often used to be selective with get requests.

To easily parse URLs the NodeJS module url exists, it uses the url class that takes a url as parameter and builds the following properties hostname, pathName and searchParams.<br>
For parsing the searchParams (query) of an url, the querystring module can be used.

The process of handling requests in specific ways based on the information provided within the request is known as routing.<br>

The request object in the callback function in the http.createServer function, contains for example the HTTP method or pathname like this req.HTTP req.pathname.<br>
The response object contains for example the status code like this res.statusCode and sends the response with res.end().

Server often make requests to a databse (possible with HTTP.request()) before sending back a response to client, but they can also make requests to external APIs.<br>
HTTP.request() takes two arguments, an object with details about the request and a callback function to handle the response.<br>
HTTP.get() directly makes requests with the HTTP method GET.<br>
The fact that servers can make HTTP requests to other services opens up possibilities for different architecture designs for back-ends. One example of an architecture made possible by this ability is microservice architectures. Microservice architectures divide needs into separate lightweight services that communicate via HTTP over a network.

REST, or REpresentational State Transfer, is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other.<br>
In the REST architectural style, the implementation of the client and the implementation of the server can be done independently. As long as each side knows what format of messages to send to the other, they can be kept modular and separate. <br>
Systems that follow the REST paradigm are stateless, meaning that the server does not need to know anything about what state the client is in and vice versa.<br>
REST APIs must be able to Create(POST), Read(GET), Update(PUT), and Delete(DELETE) resources (CRUD).<br>
In simple terms REST APIs are APIs that follow certain conventions for easier/more-efficient communication between systems.

## Free tutorials

### SETUP
Install nodejs from the web or with brew on mac. To verify it exists type node --version in terminal.

The node command will compile and execute javascript in the terminal instead of in the browser, by using console.log() you write into the terminal.<br>
node only executes one file, but this file can import from other files.

npm(nodejs-package-manager) command enables to install packages/modules/dependencies(those names are all referring to the same). Those packages can be installed with -g globally or locally (solely on current project). <br>
Those packages can also be uninstalled.<br>
"npm init" creates a package.json file which stores important info about the package/project.<br>
npx(nodejs-package-execute), executes packages can start apps for example "npx create-react-app".<br>

VScode can be used to view implicit types.

### USE
Default global variables; __dirname, __filename, require(imports), module(info module), process (info env).

To export code go to the module and make the variable 'module.exports' equal to what you want to export, if multiple exports set them in an object or make multiple 'module.exports.NameExport'.<br>
To import that code make a variable equal require('modulePath'), by calling require the code on the module/file will be executed.

A lot of built-in modules with lots of different functions already exist. <br>
Nodejs.org/en/docs/ for more info on all posibilities.

OS module, import it with "const os = require('os')". Gives all the information surrounding the operating system and its user.<br>
path module, helps work with paths.

The http module enables us to create a server, with createServer and listen functions. <br>
The createServer function takes a function that will loop indefinitively waiting for requests and responding, this function takes two parameters the request and response objects to access/enable requests/responses.<br>
The response object can fill header and status code of reponse with .writeHeader, fill body of reponse with .write and end the communication with .end.<br>
From the request object access .method, .url...

Javascript is synchronous and single threaded.<br>
While making an external request and waiting for a response our sole thread loses its time. <br>
Event loops are asynchronous and take a function/callback that makes an external request, while waiting for the response it starts executing the following code outside the function, once a response arrives it comes back to finish execution of that function. Use async/await/promises to setup event loops.

Events occur from users for example clikcing on a button, then an event/function will be called.<br>
The 'events' module element 'EventEmitter' has to be imported, it will allow use to create an EventEmitter object.<br>
This object has the 'on' function that takes a keyword and function, it also has an emit function that takes a keyowrd and optionally parameter values for the function it will end up calling.<br>
If the 'emit' function calls a keyowrd, the function given as argument to the 'on' function with same keyword will be called.<br>
http module has own event functions.

fs module, short for file system, this module enables to handle files, like reading and writing. This can be done in an asynchronous way to gain time if using large files.<br>
FileSync is used to access whole file at once and does not work well on large files.<br>
Streams are used to read large files and allow more customization. ReadStream, WriteStream, DuplexStream exist.
