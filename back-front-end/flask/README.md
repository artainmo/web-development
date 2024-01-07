# Flask

## Table of contents
- [Codecademy course](#Codecademy-course)
  - [Introduction](#Introduction)
  - [Jinja2 Templates](#Jinja2-Templates)
  - [Forms](#Forms)
  - [Databases in Flask](#Databases-in-Flask)
  - [Accounts and Authentication](#Accounts-and-Authentication)
  - [Deploy application with Heroku](#Deploy-application-with-Heroku)
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

A virtual environment is necessary to develop Flask apps locally. A virtual environment will be an isolated environment containing all the flask dependencies and their versions as required by flask. The following command can be used to generate a virtual python environment `python3 -m venv myapp`. This will generate folder you can enter. Subsequently you will need to activate the virtual environment with `source bin/activate` (on mac). You can exit the virtual environment with `deactivate` command. Now you can create an app.py file that runs a flask server. Launch it with `flask run` and see it on 'localhost:5000'.

### Jinja2 Templates
When you navigate through a website you may notice that many of the pages on the site have a similar look and feel. This aspect of a website can be achieved with the use of templates. Here the term template refers to an HTML file that can represent multiple web pages with the same structure and functionality.

Flask uses the Jinja2 template engine to render HTML files that include application variables and control structures.<br>
Having routes return full web pages as strings is not a realistic way to build our site. Containing our HTML in files is the standard and more organized approach to structuring our web app.<br>
To work with files, which we will call templates, we use the Flask function `render_template(file.html)`. Used in the return statement, this function takes a template file name as an argument and returns the content to send to the client. It searches for the file in the directory 'templates'. It uses the Jinja2 template engine to generate HTML using the template file as blueprint.<br>
After the filename argument in render_template() we can add keyword arguments to be used as variables within the template. For example `render_template("index.html", grocery_list=items)`. To add more than one variable separate each assignment with a comma. We can pass strings, integers, lists, dictionaries or any other objects to our templates. To access the variables in our templates we need to use the expression delimiter: {{ }}.

Filters are used by the template engine to act on template variables. To use them simply follow the variable with the filter name inside the delimiter and separate them with the | character as such `{{ variable | filter_name }}`.<br>
The filter 'title' acts on a string variable and capitalizes the first letter in every word.<br>
The 'default' filter takes an argument that displays text if the template variable isn't viable. For example `{{ no_template_variable | default("I am not from a variable.") }}`.<br>
A lot of other filters exist.<br>

If/else statements can also be used inside templates. Using if statements in a template happens inside a statement delimiter block: {% %}.
```
{% if template_number < 20 %}
  <p>{{ template_number }} is less than 20.</p> 
{% elif template_number > 20 %}
   <p>{{ template_number }} is greater than 20.</p> 
{% else %}
   <p>{{ template_number }} is equal to 20.</p> 
{% endif %}
```

Using the same statement delimiter block as if statements {% %}, for loops step through a range of numbers, lists and dictionaries.
```
{% for x in range(3) %}
  <li>{{ x }}</li>
{% endfor %}
```

A website's navigation bar is found on multiple web pages. Inheritance can be used to make a template reusable. This would allow one 'navigation bar' template to take the content of the 'web pages'.<br>
For example the following code in file 'base.html' is reusable:
```
<!DOCTYPE html>
<html>
  <body>
    <div>Navigation bar: <a href="/">Recipes</a> | <a href="/about">About</a></div>
    {% block content %}
    {% endblock %}
  </body>
</html>
```
'block-content/endblock' is used to indicate where the content of other templates will be inserted.<br>
The following code in 'index.html' extends 'base.html' to insert its reusable code above 'block content' and under 'endblock'.
```
{% extends "base.html" %}

{% block content %}
    <h1>Cooking By Myself</h1>
    <p>Welcome to my cookbook. These are recipes I like.</p>
    {% for id, name in template_recipes.items() %}
      <p><a href="/recipe/{{ id }}">{{ name | title }}</a></p>
    {% endfor %}
{% endblock %}
```

### Forms
Forms allow us to gather information from the website user.

When submitting a form through a website, the form data is sent as a HTTP POST request, meaning we send data to the server.<br>
By default flask routes only handle GET requests. However, routes can handle POST requests if it is specified in the methods argument of the route() decorator like such `@app.route("/", methods=["GET", "POST"])`.<br>
Flask provides access to the data in the request through the 'request' object, that needs to be imported `from flask import request`. When data is sent via a form submission it can be accessed using the form attribute of the request object. The form attribute is a dictionary with the form’s field names as the keys and the associated data as the values. Use it like this for example `request.form["my_text"]`.

As sites get larger and their file structure becomes more complex the paths of Flask routes may change. In this case paths that are hard coded into the navigation elements such as hyperlinks and forms may break. Flask addresses the challenge of expanding file structures with url_for(). The function url_for() takes a route’s function name as an argument and returns the associated URL path.<br>
Given the following Flask route declaration:
```
@app.route('/')
def index:
```
These two hyperlinks below are identical:
```
<a href="/">Index Link</a>

<a href="{{ url_for('index') }}">Index Link</a>
```
To pass variables from the template to the app, keyword arguments can be added to url_for(). They will be sent as arguments attached to the URL. It can be accessed the same way as if it was added onto the path manually. For example `<a href="{{ url_for('index', flask_var=template_var) }}">Index Link</a>`.

Flask provides an alternative to web forms by creating a form class in the application, implementing the fields in the template and handling the data back in the application.<br>
A Flask form class inherits from the class FlaskForm and includes attributes for every field:
```
from flask import Flask, render_template
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField

class MyForm(FlaskForm):
    my_textfield = StringField("TextLabel")
    my_submit = SubmitField("SubmitName")
```
This simple class will enable the creation of a form with a text field and a submit button. Access to the fields of this form class is done through the attributes, my_textfield and my_submit. The StringField and SubmitField classes are the same as <input type=text... and <input type=submit... respectively.<br>
```
app.config['SECRET_KEY'] = 'mysecret' #Necessary on server side to handle CSRF protection.

@app.route("/")
def my_route():
    flask_form = MyForm()
    return render_template("my_template", template_form=flask_form)
```
The class form needs to be send via render_template as a template variable to the template.<br>
Creating a form in the template is done by accessing attributes of the form passed to the template.
```
<form action="/" method="post">
    {{ template_form.hidden_tag() }} #While not visible in the form, this field handles the necessary tasks to protect from CSRF.
    {{ template_form.my_textfield.label }}
    {{ template_form.my_textfield() }}
    {{ template_form.my_submit() }}
</form>
```
Once a form is submitted, the data is sent back to the server through a POST request. Using our FlaskForm class, data is now accessible through the form instance in the Flask app. The data can be directly accessed by using the data attribute associated with each field in the class. For example `form_data = flask_form.my_textfield.data`.<br>
Validation is when form fields must contain data or a certain format of data in order to move forward with submission. We enable validation in our form class using the 'validators' parameter in the form field definitions.
```
from wtforms.validators import DataRequired

my_textfield = StringField("TextLabel", validators=[DataRequired()]) #This validator will make sure the fields are not empty at submission.
```
In app to verify if called route needs to handle a submitted form the `my_form.validate_on_submit()` can be used inside an if-statement. It will return true when there is a POST request and all form validators are satisfied.

FLaskWTF also contains other form fields, such as TextAreaField, BooleanField, RadioField...

Besides rendering templates from our routes, it can be important to move from one route to another. This is the role of the function `redirect("url_string")`.<br>
Consider the case where we create our form in one route, but after the form submission we want the user to end up in another route. While we can set the action attribute in the HTML \<form\> tag go to any path, 'redirect()' is the best option to move from one route to another.<br>
Once again, to avoid possible URL string pitfalls, we can utilize 'url_for()' within 'redirect()' like this for example `redirect(url_for("new_route", _external=True, _scheme='https'))`. The keyword arguments _external=True and _scheme='https' ensure that the URL we redirect to is a secure HTTPS address and not an insecure HTTP address.

### Databases in Flask
Flask-SQLAlchemy is an extension for Flask that supports the use of a Python SQL Toolkit called SQLAlchemy.
```
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///myDB.db' #Location of application database
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False #Stop receiving notifications for database changes
db = SQLAlchemy(app) #Create SQLAlchemy object and bind it to our app
```

Using the SQLAlchemy object we can create database SQL tables.
```
#declaring the Book model/table
class Book(db.Model):
    id = db.Column(db.Integer, primary_key = True) #Primary key column, automatically generated IDs
    title = db.Column(db.String(80), index = True, unique = True) #'index', when true, makes column searchable by its values
    author_surname = db.Column(db.String(80), index = True, unique = False) #'unique', when true, allows similar values across rows in column
    month = db.Column(db.String(20), index = True, unique = False) 
    year = db.Column(db.Integer, index = True, unique = False)
    
    #Get a nice printout for Book objects
    def __repr__(self):
        return "{} in: {},{}".format(self.title, self.month,self.year)
```

Often times in real-world applications we will have entities that are somehow related. Students take courses, customers buy products, and users comment on posts.<br>
In SQLAlchemy we can declare a relationship with a field initialized with the 'db.relationship()' method.<br>
A foreign key is a field (or collection of fields) in one table that refers to the primary key in another table. We can create one like this for example `book_id = db.Column(db.Integer, db.ForeignKey('book.id'))
`. Similar to the primary key, a foreign key is just another column in our model with unique entries.<br>
In a one-to-many relationship of tables, one table must initialize the relationship and the other the foreign key.

From within the application file. After all the models have been specified the database is initialized by adding `db.create_all()` to the main program. The command is written after all the defined models. The result of db.create_all() is that the database schema is created representing our declared models. After running the command, you should see your database file in the path and with the name you set in the SQLALCHEMY_DATABASE_URI configuration field.

Thanks to the ORM, creating database entries is the same as creating Python objects. For example `r1 = Reader(id = 342, name = 'Ann', surname = 'Adams', email = 'ann.adams@example.com')`. We interact with database entries in the way we interact with Python objects. In case we want to access a specific attribute or column, we do it in the same way we would access attributes of Python objects for example `print("My first reader:", r1.name)`.

To get all entries from a model called TableName we run `TableName.query.all()`. Often you know the primary key (unique identifier) value of entries you want to fetch. To get an entry with some primary key value ID from model TableName you run: `TableName.query.get(ID)`.<br>
In a one-to-many relationship you can fetch the multiple related table entries with for example `reviews_123 = Reader.query.get(123).reviews.all()` and the one related table entry with `reviewer_111 = Review.query.get(111).reviewer`.

To filter a query, SQLAlchemy provides the '.filter()' method.<br>
For example, to select books from a specific year from the Book table we use the following command: `Book.query.filter(Book.year == 2020).all()`.<br>
Other methods can be used after '.query', such as '.count()' that counts the number of fetched entries or '.first()' that returns only the first result.<br>
For more advanced querying options check the SQLAlchemy Core + ORM documentation.

A set of operations such as addition, removal, or updating database entries is called a database transaction. A database session consists of one or more transactions. The act of committing ends a transaction by saving the transactions permanently to the database. In contrast, rollback rejects the pending transactions and changes are not permanently saved in the database.<br>
An entry is added to a session with the 'add()' method. The changes in a session are permanently written to a database when '.commit()' is executed. When only changing a value inside an already existing entry, '.add()' is not necessary anymore, but '.commit()' still is. 
```
db.session.add(new_reader1)
new_reader1.name = 'Alfred'
try:
    db.session.commit()
except:
    db.session.rollback()
```

We remove entries with for example the following command `db.session.delete(Reader.query.get(753))`.

The server from a route can automatically return an error code and message if a database entry is not found like this for example `review = Review.query.filter_by(id=review_id).first_or_404(description="Error: Not found")`.

### Accounts and Authentication
An important rule of application development is to never store sensitive user data as plain text. Hashing is the process of taking text input and creating a new sequence of characters out of it that cannot be easily reverse-engineered. When we hash user passwords, we can store the hashed format rather than the original plain text passwords. If a hack were to occur, the hackers would not be able to exploit the stolen information without knowing the hashing function that was used to encrypt the data.<br>
`generate_password_hash('pass123')` takes a string as an argument and returns a hash of the string.<br>
`check_password_hash(hashed_password, 'pass123')` takes two arguments: the hashed string and a new string which we are checking the hash against. It returns a boolean indicating if the string was a match to the hash.<br>
You can import those functions like this `from werkzeug.security import generate_password_hash, check_password_hash`.

Authentification is the process of verifying that an individual has permission to perform an action.<br>
`LoginManager()` can be used to access various view function decorators for automating actions related to accounts and authentification. For example if an authorization error occurs on an HTTP request of a certain route that contains the decorator '@login_manager.unauthorized_handler', a redirection will automatically occur to the 'unauthorized' route. We can also use the decorator '@login_required' to ensure a user who is not logged in has no access to the route the decorator is used on.

### Deploy application with Heroku
Deployment consists of moving a local website to hosting it on a publicly accessible web server.<br>
Most developers utilize platform-as-a-servive (PAAS) to deploy their web app instead of building their own web servers. A PAAS is an online platform which is designed to be able to easily run, scale and manage your web application. The most popular and beginner friendly PAAS is Heroku.

When we think about deployment, we need to think in terms of two environments:
* Development environment: Your local development server where you run your app on localhost and make changes / develop new features.
* Production environment: The publicly accessible web server where the finished version of your app is running (in this case, Heroku’s Platform as a Service).

The Heroku command line interface (CLI) is a software application that runs in your command line and is able to assist you in uploading the code in your development environment to the Heroku production environment.

Continuous Deployment is a process whereby changes made to your web app are automatically deployed to Heroku without you having to do anything.<br>
If you are already storing your project on GitHub, you can tell Heroku to watch for changes made to the master branch of your GitHub repository, and automatically deploy them.

## Resources
[codecademy - Learn Flask](https://www.codecademy.com/learn/learn-flask)
