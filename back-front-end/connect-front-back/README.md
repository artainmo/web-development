# Connecting Front-End to Back-End

## Table of contents
- [Codecademy course](#Codecademy-course)

## Codecademy course

To create a full-stack application, the back-end and front-end have to be connected.<br>

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

Both front-end and back-end have to be run separately, first back-end has to be launched followed by front-end.<br>
In frontend/src/api/fileName async-await functions using fetch can be made to interact with back-end API, those can be imported for use on other front-end files.<br>
In backend/routes/fileName API endpoints can be defined using Express.



