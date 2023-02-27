# WebDevelopment

## Table of contents
- [Basics](#Basics)
- [Programming languages and frameworks and libraries](#Programming-languages-and-frameworks-and-libraries)
- [Learning materials](#Learning-materials)

## Basics
**World Wide Web** (www), grouping of all documents on the web accessible through URLs(uniform resource locator)

A **server** is a computer connected to the www, it contains an IP(Internet Protocol) address to identify itself, this IP address can be associated with an URL, which is a non-random name for easier identification.

**Web browser**, is a software application that allows access to the world wide web via URLs. The web browser transforms the URL into an IP address using the DNS (domain name system), it creates a connection and sends http requests towards that ip address to receive the requested content.

**Webservers** serve an application/platform/website on the web. They let clients(browsers) connect to allow HTTP communication, receive web browser requests and send back responses.<br>
They often run on an external server, which is a computer with no visual display that runs 24/7, waiting for client-servers to make requests.

A **web platform** consists of a back-end and front-end.<br>
Back-end acts as web-server(answer HTTP request) and data-base-manager.<br>
Front-end refers to the pages send by web-server to client-server, that the client's web browser will visually display, creating an user interface (UI).<br>
Different programming languages can be used for the back-end and front-end development.

**HTTP**<br>
The language used between servers to communicate.<br>
http requests are made by a web browser and follow a specific syntax, they can request content from the webserver or even post content on the webserver, allowing the client to interact with the webserver.<br>
http responses are made by the web server and follow a specific syntax, they can send HTML pages for the browser to display.<br>
http stands for hypertext transfer protocol, hypertext are documents that include links to other documents.

Structure of a request:<br>
First line: method + request targer (URL) + HTTP version (HTTP/1.1)<br>
Header fields: Optional extra information about request<br>
Separation empty space<br>
Body: Content of the request<br>

Structure of a response:<br>
Status line: HTTP version (HTTP/1.1) + status code + status short description<br>
Header fields: Optional extra information about response<br>
Separation empty space<br>
Body: Content of the response<br>

The different HTTP methods for requests are:<br>
GET: requests representation of specified resource, specified resource is indicated by URL.<br>
HEAD: The HEAD method asks for a response identical to that of a GET request, but without the response body, is used to verify if any errors.<br>
POST: used to submit an entity to the specified resource, often causing a change in state on the server.<br>
PUT: replaces all current representations of the specified resource with the submitted request entity.<br>
DELETE: deletes the specified resource.

The different status codes for responses are:<br>
200: OK, successful request<br>
201: Created, for put and post methods<br>
400: Bad request, invalid syntax<br>
404: Not found, the URL is not recognized<br>
405: Not allowed, the resource does not accept the method<br>
500: Internal server error, situation the server does not know how to handle<br>

**TCP, UDP & TLS**<br>
Those are protocols that enable the transmission of HTTP responses/requests.

Transmission control protocol (TCP) enables the transmission of resources, it is used to manage many types of internet connections and allows HTTP communication.
<br>
User diagram protocol (UDP) is a communication protocol used across the internet, especially for the transmission of time-sensitive information.<br>
Both are internet communication protocols, the main difference between them is that TCP is more reliable but slower, while UDP is less reliable but faster and enables broadcasting.

TLS, also known as Transport Layer Security, is a widely adopted security protocol designed to facilitate secure data transmission via encryption. Using TLS with HTTP will allow you to use HTTPS (Hypertext Transfer Protocol Secure), which helps denote the presence of the extra security.

**OTHER CONCEPTS**<br>
APIs<br>
An application programming interface is a connection between computers or between computer programs. It for example enables communication between the front-end and back-end, whereby the back-end gathers data from a data-base to produce dynamic front-end pages.

Cloud computing is the on-demand availability of computer-system-resources, especially data-storage and computing-power. Large clouds consist of multiple servers connected/working together.

A single-page application (SPA) is a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of a web browser loading entire new pages.

## Programming languages and frameworks and libraries
Programming languages allow to write human-readable-code that give instructions to a computer machine, different kinds exist.
Both frameworks and libraries allow the addition of reusable-pre-written-code, frameworks do this at a higher magnitude, they can enable the creation of a whole application while libraries only serve for a more specific functionality.  

### Frontend & backend
**Javascript**<br>
Is a high-level-language used both for front-end and back-end.<br>
The most often used frameowrks in front-end are react and angular and in back-end is nodejs.<br>
Front-end javascript allows for dynamic webpages, plus is more easy to write than HTML/CSS code.<br>
Through API, front-end javascript can contact the back-end for data-base-infomation leading to dynamic pages.<br>
The web browser has to first transform javascript to HTML/CSS before display, it gets called from an HTML document with the script tag, javascript can be viewed as a high-level-language for dynamic HTML/CSS code generation.

**Typescript**<br>
It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript.<br>
By making use of static typing it makes the code more readable and allows compile-time-errors.

**Ruby on Rails**<br>
This is a framework for webdevelopment written in the general-purpose programming language Ruby. Although both backend and frontend development is possible, it is mostly used for backend development.<br>
It uses a default MVC structure and uses multiple web/programming conventions, it enables rapid deployment and is widely used.

### Frontend
**HTML & CSS**<br>
The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser.<br>
CSS describes how HTML elements should be displayed and is thus a styling language.<br>
Those are the only languages a web browser can display.

**React**<br>
React is a free and open-source front-end JavaScript library for building user interfaces or UI components allowing dynamic single-page client applications.<br>
Material-UI is a react framework that contains pre-made UI components.

**Angular**<br>
Angular is a platform and framework for building dynamic single-page client applications using HTML and TypeScript.

### Backend
**PHP**<br>
PHP was created in 1994 and is one of the foundational technologies of web-development. For new websites newer technologies are usually used, but PHP maintains ground by still being present in foundational widely-used content management systems such as Wordpress.

**nodeJS**<br>
Node.js is a back-end JavaScript runtime environment that executes JavaScript code outside a web browser.

**Express**<br>
Express.js, or simply Express, is a back-end web application framework for Node.js. It is designed for building web applications and APIs way faster.

**Nest.js**<br>
Nest.js is a Node.js framework built on top of express.js and TypeScript that comes with a strong opinion on how API's should be built. Since it is very opinionated it provides a structure, a CLI, and lots of tools that let you create professional APIs fast.

**PostgreSQL**<br>
PostgreSQL is a commonly used and advanced database-management-system, used to store and retrieve data.

**Sinatra**<br>
Sinatra is a Ruby framework used to quickly create APIs or the backend of a web-application. Large applications usually use 'Ruby on Rails instead'.

### Other

**Git**<br>
Git is a software that allows you to keep track of changes made to a coding project over time and collaborate.

**Docker**<br>
Docker is a platform that uses OS-level virtualization allowing easy automation through a script of the building of a specific environment a program necessiates to run on.

**Kubernetes**<br>
When using microservices, complex applications are composed of small independent processes which communicate with each other through APIs over a network.<br>
Containers are best suited to deliver microservices by providing fast, portable, isolated virtual environments for applications to run without interference from other running applications.<br>
Kubernetes is an open-source system for automating deployment, scaling, and management of containerized applications.

**DevOps**<br>
DevOps, is a way of organizing or a culture, that aims at ending the division between development and operations for a faster work-flow. It is an abbreviation of and refers to development and operations.<br>
The Development team writes an application’s code/features.<br>
The Operation team creates and maintains the infrastructure that the application runs on.

**Git**<br>
Git is a software that allows you to keep track of changes made to a coding project over time.

**Cybersecurity**<br>
Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. The web is one medium that permits such threats.

## Learning materials
! -> consumed as wanted<br>
| -> partly consumed

**Books**<br>
Javascript: The good parts - O'Reilly !

**Tutorials**<br>
https://www.youtube.com/watch?v=ahCwqrYpIuM - Typescript - The Basics - 12m !<br>
https://www.youtube.com/watch?v=BwuLxPH8IDs - TypeScript Course for Beginners 2021 - 3h16m !<br>
https://www.youtube.com/watch?v=NjN00cM18Z4 - TypeScript for React - 51m !<br>
https://www.youtube.com/watch?v=gp5H0Vw39yw - Typescript full course for beginners - 1h34m !<br>
https://www.tutorialspoint.com/typescript/index.htm - Typescript written complete tutorial !<br>

https://www.youtube.com/watch?v=dOnAC2Rr-6A - Javascript full course for beginners to advanced - 4h11m !<br>
https://www.youtube.com/watch?v=PkZNo7MFNFg - Learn JavaScript - Full Course for Beginners - 3h26m !<br>
https://www.youtube.com/watch?v=DHvZLI7Db8E - Javascript promises - 11m !<br>
https://www.youtube.com/watch?v=V_Kr9OSfDeU&t=0s - JavaScript Async Await - 7m !<br>
https://www.youtube.com/watch?v=cuEtnrL9-H0 - Fetch API - 6m !<br>

https://www.youtube.com/watch?v=hQAHSlTtcmY - Learn React In 30 Minutes - 27m !<br>
https://www.youtube.com/watch?v=MRIMT0xPXFI - Learn React in 5min (2020) - 5m !<br>
https://www.youtube.com/watch?v=w7ejDZ8SWv8 - React JS Crash Course 2021 - 1h48m !<br>
https://www.youtube.com/watch?v=vyJU9efvUtQ - Material UI React Tutorial - 42m !<br>
https://www.youtube.com/watch?v=Z5iWr6Srsj8 - React Typescript Tutorial - 23m ! <br>

https://www.youtube.com/watch?v=Oe421EPjeBE - Node.js and Express.js - Full Course - 8h16m !<br>

https://www.youtube.com/watch?v=qw--VYLpxG4 - PostgreSQL full course - 4h20m !<br>

https://www.youtube.com/watch?v=S0R82Osg-Mk - NestJS Crash Course 2021 - 2h15min !<br>
https://progressivecoder.com/nestjs-providers-with-examples-learn-nestjs-series-part-3/ !<br>
https://docs.nestjs.com !<br>
https://typeorm.io !<br>
https://docs.nestjs.com/techniques/database !<br>
https://axios-http.com/docs/intro !<br>
https://docs.nestjs.com/techniques/http-module !<br>
https://www.youtube.com/watch?v=7xpLYk4q0Sg - Chat App With Nest.js + Socket.io in 15 Minutes - 13min !<br>
https://docs.nestjs.com/websockets/gateways !<br>
https://www.merixstudio.com/blog/validated-rest-api-nestjs/ !<br>
https://dsebastien.medium.com/input-validation-with-nestjs-7184ba81af7e !<br>
https://docs.nestjs.com/techniques/validation !<br>

https://faun.pub/whats-docker-and-how-to-start-with-it-b13ff51013d0 !<br>
https://wkrzywiec.medium.com/how-to-put-your-java-application-into-docker-container-5e0a02acdd6b ! <br>
https://nodejs.org/en/docs/guides/nodejs-docker-webapp/ ! <br>
https://wkrzywiec.medium.com/how-to-run-database-backend-and-frontend-in-a-single-click-with-docker-compose-4bcda66f6de ! <br>
https://tushar-chy.medium.com/a-simple-todo-application-with-nestjs-typeorm-postgresql-swagger-pgadmin4-jwt-and-docker-caa2742a4295 !

http://sinatra-org-book.herokuapp.com/ ! <br>
http://sinatrarb.com/intro.html ! <br>
http://sinatrarb.com/configuration.html ! <br>

**Courses**<br>
https://www.codecademy.com/learn/learn-html - 9h !<br>
https://www.codecademy.com/learn/learn-css - 10h !<br>
https://www.codecademy.com/learn/introduction-to-javascript - 20h !<br>
https://www.codecademy.com/learn/learn-intermediate-javascript - 10h !<br>
https://www.codecademy.com/learn/learn-typescript - 10h !<br>
https://www.codecademy.com/learn/react-101 - 20h !<br>
https://www.codecademy.com/learn/learn-node-js - 7h !<br>
https://www.codecademy.com/learn/learn-express - 4h !<br>
https://www.codecademy.com/learn/paths/design-databases-with-postgresql - 30h !<br>
https://www.codecademy.com/learn/connecting-front-end-to-back-end - 2h !<br>
https://www.codecademy.com/learn/learn-websockets - 2h !<br>
https://www.codecademy.com/learn/learn-ruby - 10h !<br>
https://www.codecademy.com/learn/learn-git - 15h !<br>
https://www.codecademy.com/learn/learn-angularjs - 15h |<br>
https://www.codecademy.com/learn/learn-php - 25h !<br>
