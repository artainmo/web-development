# Connecting Front-End to Back-End

## Table of contents
- [Codecademy course](#Codecademy-course)
  - [Rendering and code generation](#Rendering-and-code-generation) 
  - [REST APIs](#REST-APIs)
  - [How-to-structure-apps](#How-to-structure-apps)
- [Practical resources for calling backend APIs from the frontend](#Practical-resources-for-calling-backend-APIs-from-the-frontend)

## Codecademy course

To create a full-stack application, the back-end and front-end have to be connected.<br>

To connect an app together let the front-end, back-end and database run independently (on different servers or ports of the same server) and connect/communicate between each other using APIs. 

### Rendering and code generation
Rendering is the aspect of web development concerned with translating code into a visual and interactive website.<br>
We can make distinction between client-side, server-side and hybrid rendering.<br>

In client-side rendering, the content of the page is dynamically generated in the browser as the user navigates the app.<br>
In client-side rendering, the server sends the browser a boilerplate HTML document that includes a reference to a JavaScript file. This JavaScript code is responsible for dynamically generating content in the browser, as the user moves through the site.<br>
Client-side rendering tends to lead to a slower intitial page load, but is way faster afterwards and thus tend to be preferred for highly interactive websites.<br>
Single-page apps make thus use of client-side rendering.

In server-side rendering, the server generates the content and sends it to the browser, on-demand.<br>
Every time the user navigates to a different page on the site, the server builds the web page and sends it to the client.<br>
Since static content loads quickly, server-side rendering is ideal for informational sites where there is little interactivity.<br>
Server-side rendering can also lead to improved SEO, since search engines can index static content immediately.

In hybrid-rendering, static content is generated on the server, while dynamic content is generated on the client-side as the user navigates the site.<br>
Hybrid-rendering tries to benefit from both server-side and client-side rendering.

Code generation is the process of generating code and assets from a template.<br>
Code generation tools provide boilerplate code that allows for standardization, rapid development, and increased productivity.<br>
npx create-react-app is an example.

### REST APIs
An API (application programming interface) is a connection between computers or between computer programs. It for example enables communication between the front-end and back-end, whereby the back-end gathers data from a data-base to produce dynamic front-end pages.<br>
APIs can communicate through HTTP requests and responses.<br>
An API endpoint refers to an URL of a server or service that can receive HTTP requests, thus when communicating with an API it is done through its endpoint.

In simple terms REST APIs are APIs that follow certain conventions/standards for easier/more-efficient communication between systems.
REST APIs must be able to Create(POST), Read(GET), Update(PUT), and Delete(DELETE) resources (CRUD).<br>
REST APIs are usually more on the light-weight side.

Both front-end and back-end have to be run separately, first back-end has to be launched followed by front-end, so that the frontend can call the backend.<br>

Front-end and back-end communication can be summarized as follows:
* API calls are initiated by the front-end components found in frontend/src/components.
* API calls to the back-end are defined inside of frontend/src/api, often with async-await fetch containing functions.
* The routers in backend/routes handle API calls and send an appropriate response to the front-end, usually with Express.

The back-end may have to connect with an external API representing the database or other.<br>
Supabase is an opensource PostgreSQL database management platform that provides an instant RESTful API.<br>
PostgreSQL tables can be made from the platform.<br>
The external API will have an URL and secret code, in the backend a file .env is created with variables APIName_URL and APIName_secret that takes those values.<br>
.env is set inside .gitignore to avoid making it public.<br>
In backend provider/supabase.js is filled with commands to connect to supabase and export connected supabase object, to be used in backend routes for database calls.

API definitions are a form of contract, they define how the API communicates and act as a visual representation and usage guide of the API.<br>
Usually the API definition is created first and indicates the backend developer what the API should look like afterwards.<br>
Here is a tool to create API definitions https://editor.swagger.io/, and a tool for collaboration on API defintiions https://swagger.io/tools/swaggerhub/.
Another form of contract are database shemas, those are documentation forming a visual representation of the database, which can be done for example with DbDiagram.io as explained here https://github.com/artainmo/WebDevelopment/tree/main/backend/PostgreSQL#Design-a-database.

### How to structure apps

Model view controller (MVC) is a popular app architectural pattern, wherein components are categorized by their functionality.<br>
MVC pattern organizes a system into three types of components: Model, View, and Controller.

The Model is made up of the data storage, as well as any classes that represent that data as it moves around the application.<br>
The View component consists of the purely visual frontend classes.<br>
The Controller defines the behaviors that our system will accomplish using the Model and View.<br>
The Controller is responsible for receiving events from the View and processing them to make responses by gathering data from the Model.

The primary advantage of the MVC pattern is the separation of the data representation, logical, and presentational layers.<br>
By separating the Controller from the View, we can create multiple ways of viewing our application. For example, an application can have the web and mobile Views interact with the same Controller.<br>
The main drawback of MVC is that it can introduce unneeded complexity to a simple application.

A PostgreSQL database can also be created locally on mac with Postgres.app and to access it with a UI such as Postbird.<br>
You will have to create a .env at root of project (set inside .gitignore to keep private) with those variables:
* DB_USER= username
* DB_PASSWORD= password
* DB_HOST=localhost
* DB_POST=5432
* DB_DATABASE=TableName
* PORT=8000

In to-do-list project one can better visualize the whole MVC structure and how the back and front connect..

## Practical resources for calling backend APIs from the frontend

In javascript:<br>
https://github.com/artainmo/WebDevelopment/tree/main/back-front-end/javascript#PROMISES-and-SYNC-AWAIT-and-FETCH-and-ERRORS<br>
https://github.com/artainmo/WebDevelopment/tree/main/back-front-end/javascript#REQUESTS<br>
https://github.com/artainmo/WebDevelopment/tree/main/backend/NestJS#Call-the-NestJS-API-with-axios<br>
