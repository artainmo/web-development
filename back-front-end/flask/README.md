# Flask

## Table of contents
- [Codecademy course](#Codecademy-course)
  - [Introduction](#Introduction)
  - [Jinja2 Templates and Forms](#Jinja2-Templates-and-Forms)
- [Resources](#Resources)


## Codecademy course
### Introduction
Flask is a popular Python framework for developing web applications. Classified as a microframework, it comes with minimal built-in components and requirements, making it easy to get started and flexible to use. At the same time, Flask is by no means limited in its ability to produce a fully featured app. Rather, it is designed to be easily extensible.

The front-end is the part of the webpage a visitor can see and interact with. At its core the frontend is composed of Javascript, CSS, HTML.<br>
Front-end development is also called client-side development. Referring to the vistor's browser who requested the webpage.<br>
The back-end runs on a web server and consists of all the behind-the-scenes processes and data that make a website function and send resources to clients. A web server is a process running on a computer that listens for incoming requests for information over the internet and sends back responses.<br>
For the simplest websites, a client makes a single request. The web server receives that request and sends the client a response containing everything needed to view the website. This is called a static website. A dynamic website is where on the webpage itself you have the option of making further content requests or where the webpage is personalized for the user.<br>
The back-ends of modern web applications include some sort of database, often more than one. Databases are collections of information. There are many different databases, but we can divide them into two types: relational databases and non-relational databases (also known as NoSQL databases). Whereas relational databases store information in tables with columns and rows, non-relational databases might use other systems such as key-value pairs or a document storage model. SQL, Structured Query Language, is a programming language for accessing and changing data stored in relational databases. Popular relational databases include MySQL and PostgreSQL while popular NoSQL databases include MongoDB and Redis.<br>
In fact, much of what the back-end entails is reading, updating, or deleting information stored in a database. In order to have consistent ways of interacting with data, a back-end will often include a web API. API stands for Application Programming Interface and can mean a lot of different things, but a web API is a collection of predefined ways of, or rules for, interacting with a web application’s data, often through an HTTP request-response cycle.<br>
Authentication is the process of validating the identity of a user. One technique for authentication is to use logins with usernames and passwords. These credentials need to be securely stored in the back-end on a database and checked upon each visit. Web applications can also use external resources for authentication. You’ve likely logged into a website or application using your Facebook, Google, or Github credentials; that’s also an authentication process.<br>
You don’t need to reinvent the wheel to create a robust back-end. Instead, most developers make use of frameworks which are collections of tools that shape the organization of your back-end and provide efficient ways of accomplishing otherwise difficult tasks.<br>

HTTP stands for Hypertext Transfer Protocol and is used to structure requests and responses over the internet. HTTP requires data to be transferred from one point to another over the network. The transfer of resources happens using TCP (Transmission Control Protocol). In viewing a webpage TCP manages the channels between the browser and the server.<br>
HTTPS stands for HTTP Secure and allows you to encrypt data that you send and receive. HTTPS is important to use when passing sensitive or personal information to and from websites. However, it is up to the businesses maintaining the servers to set it up. In order to support HTTPS, the business must apply for a certificate from a Certificate Authority.

Here is an example of how to create a simple flask app on localhost:5000.
```
from flask import Flask

app = Flask(__name__) #Flask takes as input name of app. Here we gave '__name__' which is a special python variable referring to file name.

@app.route('/') #This is a decorator indicating the associated function to be triggered when '/' endpoint of router is called.
@app.route('/home') #You can paste multiple endpoints/decorators on same function
def home(): #This function that binds to a path/endpoint is called a 'view' function.
    return 'Hello, World!' #This will be the content inside the HTTP response
```

We can also return HTML to be rendered on a webpage from a view function.
```
@app.route('/')
@app.route('/home')
def home():
    return '''
    <h1>Hello, World!</h1>
    <p>My first paragraph.</p>
    <a href="https://www.codecademy.com">CODECADEMY</a>
    '''
```

To bind view functions to a series of URLs (also called dynamic URLs) we use variable rules.
```
@app.route('/orders/<user_name>/<int:order_id>') #<user_name> accepts any text and <int:order_id> only positive ints. This means the view function binds to an infinite amount of URLs.
def orders(user_name, order_id): #user_name and order_id are defined in the URL and can be used inside the view function
    return f'<p>Fetching order #{order_id} for {user_name}.</p>'
```

### Jinja2 Templates and Forms
When you navigate through a website you may notice that many of the pages on the site have a similar look and feel. This aspect of a website can be achieved with the use of templates. Here the term template refers to an HTML file that can represent multiple web pages with the same structure and functionality.

Flask uses the Jinja2 template engine to render HTML files that include application variables and control structures.<br>
Having routes return full web pages as strings is not a realistic way to build our site. Containing our HTML in files is the standard and more organized approach to structuring our web app.<br>
To work with files, which we will call templates, we use the Flask function `render_template(file.html)`. Used in the return statement, this function takes a template file name as an argument and returns the content to send to the client. It uses the Jinja2 template engine to generate HTML using the template file as blueprint.<br>
After the filename argument in render_template() we can add keyword arguments to be used as variables within the template. To add more than one variable separate each assignment with a comma. We can pass strings, integers, lists, dictionaries or any other objects to our templates. To access the variables in our templates we need to use the expression delimiter: {{ }}.


## Resources
[codecademy - Learn Flask](https://www.codecademy.com/learn/learn-flask)
