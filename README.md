# WebDevelopment

## Table of contents
- [Basics](#Basics)
- [Programming languages and frameworks and libraries](#Programming-languages-and-frameworks-and-libraries)
- [Learning materials](#Learning-materials)

## Basics
**World Wide Web** (www), grouping of all documents on the web accessible through URLs(uniform resource locator)

A **server** is a computer connected to the www, it contains an IP address to identify itself, this IP address can be associated with an URL, which is a non-random name for easier identification.

**Web browser**, is a software application that allows access to the world wide web via URLs. The web browser transforms the URL into an IP address using the DNS (domain name system), it creates a connection and sends http requests towards that ip address to receive the requested content.

**Webservers** serve an application/platform/website on the web. They let clients(browsers) connect to allow HTTP communication, receive web browser requests and send back responses.
  They often run on an external server, which is a computer with no visual display that runs 24/7, waiting for client-servers to make requests.

A **web platform** consists of a back-end and front-end. 
  Back-end acts as web-server(answer HTTP request) and data-base-manager.
  Front-end refers to the pages send by web-server to client-server, that the client's web browser will visually display, creating an user interface (UI).
  Different programming languages can be used for the back-end and front-end development.

**TCP & UDP**
Transmission control protocol (TCP) enables the transmission of resources, it is used to manage many types of internet connections and allows HTTP communication.
  User diagram protocol (UDP) is a communication protocol used across the internet, especially for the transmission of time-sensitive information.
  Both are internet communication protocols, the main difference between them is that TCP is more reliable but slower, while UDP is less reliable but faster and enables broadcasting.

**HTTP**
The language used between servers to communicate.
  http requests are made by a web browser and follow a specific syntax, they can request content from the webserver or even post content on the webserver, allowing the client to interact with the webserver.
  http responses are made by the web server and follow a specific syntax, they can send HTML pages for the browser to display.
  http stands for hypertext transfer protocol, hypertext are documents that include links to other documents.

Structure of a request:
First line: method + request targer (URL) + HTTP version (HTTP/1.1)
Header fields: Optional extra information about request
Separation empty space
Body: Content of the request

Structure of a response:
Status line: HTTP version (HTTP/1.1) + status code + status short description
Header fields: Optional extra information about response
Separation empty space
Body: Content of the response

The different HTTP methods for requests are:
GET: requests representation of specified resource, specified resource is indicated by URL.
HEAD: The HEAD method asks for a response identical to that of a GET request, but without the response body, is used to verify if any errors.
POST: used to submit an entity to the specified resource, often causing a change in state on the server.
PUT: replaces all current representations of the specified resource with the submitted request entity.
DELETE: deletes the specified resource.

The different status codes for responses are:
200: OK, successful request
201: Created, for put and post methods
400: Bad request, invalid syntax
404: Not found, the URL is not recognized
405: Not allowed, the resource does not accept the method
500: Internal server error, situation the server does not know how to handle

**OTHER CONCEPTS**
Cloud computing is the on-demand availability of computer-system-resources, especially data-storage and computing-power. Large clouds consist of multiple servers connected/working together.

A single-page application (SPA) is a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of a web browser loading entire new pages.

## Programming languages and frameworks and libraries
Programming languages allow to write human-readable-code that give instructions to a computer machine, different kinds exist.
Both frameworks and libraries allow the addition of reusable-pre-written-code, frameworks do this at a higher magnitude, they can enable the creation of a whole application while libraries only serve for a more specific functionality.  
---
### FRONT-END & BACK-END
---
**JAVASCRIPT**
Is a high-level-language used both for front-end and back-end.
The most often used frameowrks in front-end are react and angular and in back-end is nodejs.
Front-end javascript allows for dynamic webpages, plus is more easy to write than HTML/CSS code.
Through API, front-end javascript can contact the back-end for data-base-infomation leading to dynamic pages.
The web browser has to first transform javascript to HTML/CSS before display, it gets called from an HTML document with the script tag, javascript can be viewed as a high-level-language for dynamic HTML/CSS code generation.

**TYPESCRIPT**
It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript.
By making use of static typing it makes the code more readable and allows compile-time-errors.

---
### FRONT-END
---
**HTML & CSS**
The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. 
CSS describes how HTML elements should be displayed and is thus a styling language.
Those are the only languages a web browser can display.

**REACT**
React is a free and open-source front-end JavaScript library for building user interfaces or UI components. 
Material-UI is a react framework that contains pre-made UI components.

---
### BACK-END
---
**NODEJS**
Node.js is a back-end JavaScript runtime environment that executes JavaScript code outside a web browser.

**EXPRESS**
Express.js, or simply Express, is a back-end web application framework for Node.js. It is designed for building web applications and APIs way faster.

**POSTGRESQL**
PostgreSQL is a commonly used and advanced database-management-system, used to store and retrieve data. 

**APIs**
An application programming interface is a connection between computers or between computer programs. It allows communication between the front-end and back-end, whereby the back-end gathers data from a data-base to produce dynamic front-end pages.

## Learning materials
! -> consumed
| -> partly consumed

**Books**
Javascript: The good parts - O'Reilly !

**Tutorials**
https://www.youtube.com/watch?v=ahCwqrYpIuM - Typescript - The Basics - 12m !
https://www.youtube.com/watch?v=BwuLxPH8IDs - TypeScript Course for Beginners 2021 - 3h16m !
https://www.youtube.com/watch?v=NjN00cM18Z4 - TypeScript for React - 51m !
https://www.youtube.com/watch?v=gp5H0Vw39yw - Typescript full course for beginners - 1h34m !
https://www.tutorialspoint.com/typescript/index.htm - Typescript written complete tutorial !

https://www.youtube.com/watch?v=dOnAC2Rr-6A - Javascript full course for beginners to advanced - 4h11m !
https://www.youtube.com/watch?v=PkZNo7MFNFg - Learn JavaScript - Full Course for Beginners - 3h26m !
https://www.youtube.com/watch?v=DHvZLI7Db8E - Javascript promises - 11m !
https://www.youtube.com/watch?v=V_Kr9OSfDeU&t=0s - JavaScript Async Await - 7m !
https://www.youtube.com/watch?v=cuEtnrL9-H0 - Fetch API - 6m |

https://www.youtube.com/watch?v=hQAHSlTtcmY - Learn React In 30 Minutes - 27m |
https://www.youtube.com/watch?v=MRIMT0xPXFI - Learn React in 5min (2020) - 5m !
https://www.youtube.com/watch?v=w7ejDZ8SWv8 - React JS Crash Course 2021 - 1h48m !
https://www.youtube.com/watch?v=vyJU9efvUtQ - Material UI React Tutorial - 42m !

https://www.youtube.com/watch?v=Oe421EPjeBE - Node.js and Express.js - Full Course - 8h16m !

https://www.youtube.com/watch?v=qw--VYLpxG4 - PostgreSQL full course - 4h20m !

**Courses**
https://www.codecademy.com/learn/learn-html - 9h !
https://www.codecademy.com/learn/learn-css - 10h !
https://www.codecademy.com/learn/introduction-to-javascript - 20h !
https://www.codecademy.com/learn/learn-intermediate-javascript - 10h !
https://www.codecademy.com/learn/learn-typescript - 10h !
https://www.codecademy.com/learn/react-101 - 20h !
https://www.codecademy.com/learn/learn-node-js - 7h
https://www.codecademy.com/learn/learn-express - 4h
https://www.codecademy.com/learn/paths/design-databases-with-postgresql - 30h
https://www.codecademy.com/learn/paths/full-stack-engineer-career-path - 6months




==================
CODECADEMY COURSES
==================

----
HTML
----
Consists of elements
Elements consist of one opening and one closing tag and content between the tags like this "<p>Hello World</p>"
Child/nested elements are elements inside elements, they can inherit styling from their parent elements. 
One element per line and nested elements should be indented once compared to their direct parent element for readable code.
Attributes are content added to the opening tag of an element, it has a name and is equal to a value. One common attribute is id to identify your elements.

HTML files should have the .html extension and start with <!DOCTYPE html>.
All the code should be in between <html></html>.
The <header></header> tags should follow and they allow metadata (info that does not get displayed). As nested element it can contain the <title> element which will give a title on browser tab, the header element should come before the body element.

All content between body tags get displayed on screen "<body></body>".
Different heading types exist <h1> for the main heading and for subheadings: <h2> <h3> <h4> <h5> <h6>.
The div tag is used to group content together or divide the content "<div></div>", the <p> and <span> tags too.
The <em> tag allows for italic text and <strong> tag for bold text.
The <br> tag has no closing tag and refers to a line break.
The <ul> or <ol> nested with <li> tags allow for the creation of a bullet-pointed-list or numbered-list.

The <img /> is a self-closing tag used to display images, it must contain an src attribute with the value containing the path/link towards the image, the alt attribute can be used to add a description, this can be positive for blind people, SEO or browsers that cannot render the image. (graphic images can be made using Canva)
The <video></video> tags are used to display videos, in between tags a text for when the video cannot be displayed, in opening tag src attribute should link to video. Control attribute can be used to include basic video controls like pause...
For audio use <source src=linkToAudio type=audioType controls>

To link/hyperlink(same) to other webpages you can use an anchor element like this <a href=hyperlink/relativePath>text/image/buttton..</a>, by using the target attribute as such target="_blank" the pages will be opened in a new window. 
Linking to same page is possible with href="#idOfElement".

Comments begin with <!-- and end with -->.

Inside <table></table> tags a table can be created. By using <tr></tr> you can define rows wherein you can define columns/fill-data with <td><td>. 
With <th></th> table headings can be defined with attribute scope one can choose 'col' or 'row'. 
Attribute rowspan and colspan can be used to span one block over multiple rows/columns. <tbody>, <thead> and <tfoot> are used to separate table's body, header, footer.

To create a form use <form></form> that can have attribute action (where the information is sent) and method (POST).
In between tags can contain text and must contain an input element, the input element must take as attribute type(text,password,number,checkbox) and name(id) and potentially value(default text).
Labels are used to give description to form, their advantage is that when clicking on them they focus on the form, they go as follows <label for=idInput></label>.
Step attribute in input with type number allows to increment, decrement the number with arrows.
For input slider set type attribute to range, min and max can be used as attributes to be more specific.
For radio buttons, which allow to choose one option between multiple checkboxes, set type attribute to radio.
For a drop-down menu use the select tags that contain option tags.
A datalist is an input wherein you can write and an appropriate drop-down will follow, this is possible using the datalist tags containing the option tags.
<textarea></textarea> can be used to take larger text input.
A form element must always end with a submit button this can be created with an input element containing the type attribute equaling submit.
When a <form> is submitted, the name of the fields that accept input and the value of those fields are sent as name=value pairs.

The required attribute in an input element can force the filling of that form.
The min/minlength and max/maxlength attributes in an input element can force the number-or-range/text to be in between certain values / to have a certain length.
The patern element can indicate what chars can be used or not.

For more readable, SEO-friendly, blind-people-friendly code instead of divs use:
Nav tag can be used to indicate the navigation links section.
main tag can be used to indicate content of page.
footer tag can be used to indicate the footer part of the page.
section tags can encapsulate elements with the same theme.
aside tags are used to indicate extra information of an article or section.
figure tag is used to encapsulate media, the media post can receive a description with figcaption, audio can be encapsulated with audio tag.

---
CSS
---
Used to style HTML.

SYNTAX
CSS declarations contain a property (ex. color) and a value (ex. blue), example color: blue;
CSS selectors consist of a tag (ex. p, also called the type selector) followed by braces like a function ({}) filled with declarations, to define a style for a particular tag.

The usual syntax for CSS is external stylesheet, consisting of selectors inside a .css file, to style an HTML based on that css file, use the element <link href=pathCSS rel="stylesheet"> with rel for relationship.
But inline and internal stylesheet also exist.
In HTML elements can have the attribute style, that can directly be set with a css declaration (inline).
In the header element of an HTML file, style element can be created which will contain selectors like in a .css, applicable for the elements in the .HTML file.

SELECTORS
Type selectors refer to HTML tags, multiple can be used on one selector and the universal type selector (*) refers to all the tags.
CSS classes can also be made, HTML elements must use the class attribute to use them, CSS classes have a type selector = .name.
CSS ids can also be made those are classes that each only style one HTML element by using the id attribute, their type selector = #name.
You can also create selectors based on HTML element attributes, if an element contains an attribute ([attribute]) or if an element contains an attribute that is-equal-to/contains a value ([attribute*=value]) or an element containing a tag/type and attribute (type[attribute]).
To target an HTML element of a particular type with a particular class create a selector with type.className.
Descendants are child elements a parent element can style its child elements with a class attribute and selector .className descendantType or without a class attribute parentType childType.
Pseudo-class selectors are added to the selector type (ex. p:focus) and allow to change styling during an action on the site here are some of them :focus, :visited, :disabled, and :active.

If mutliple css selectors are applicable on an HTML element the most specific one receives priority, id is more specific than class which is more specific than type. 
Good practice when writing a .css is to write the file from lowest priority selectors to highest priority selectors.

CSS VISUAL RULES
As a declaration property font-family can be used to indicate typeface/font family.
To change size of text use font-size.
To change how bold or thin text appears use font-weight.
text-align can be used to position text relative to its parent HTML element.
color indicates the text color, background-color and background-image are self-explanatory.
opacity can be used to indicate the transparancy of the text.
!important can be used at end of declaration to automatically make it the most specific one (priority), but its use is considerd bad practice.

BOX MODEL
Defines set of properties that defines how much space an HTML element takes.
Height and width properties are self-explanatory.
The border property can receive three values one for the border width, style and color.
border-radius property can be used to make the square border less square.
The space between the borders of the box and its content is known as padding, even specifying it for one side of the box is possible.
Margin property refers to the space outside of the box, whereby each side's margin can be specified individually, usually pixels are used as value but auto value can center the element in its containing element automatically.
Margin collapse is a concept whereby horizontal(side-by-side elements) margin between two HTML elements logically add up but vertical(up-under elements) margins do not, horizontal margins become the biggest margin between the two.
Different screen sizes can narrow or widen elements, limiting this is possible with min-width, min-height, max-width, max-height.
Overflow occurs when child element takes more space than parent element (this can happen when screensize is limited), the overflow property can be used by the parent to decide how to handle it, values are hide (hide everything that overflows) scroll (scroll bar to display whole) or show.
The visibility of an HTML element can be set to hidden, so that it takes the place without displaying its contents.

In all (*), margin and padding is set to 0. This is often first selector of an external stylesheet it resets the default values a browser has.

A default box-model is used but it can be modified with * { border-size: border-box }. The border-box model is not affected by border thickness or padding.

Google Chrome devTools can be used to view and adjust box dimensions from the browser.

DISPLAY AND POSITIONING
Use the position property with static, relative, absolute, fixed, sticky.
Static is default value leading to regular left-alignment.
Relative leads to regular left-alignment but allows the use of offset properties and z-index, relative to default position.
Absolute leads to an element ignored by others thus element overlap can happen, it sits relative to closest parent element.
When an element is set to fixed it will stay at least on top of screen when scrolling down or at least bottom screen when scrolling up.
When an element is set to sticky it will keep its perfect position relative to the screen when scrolling, if the postion has been set with offset properties.

Offset properties can also be used to precisely position elements, those are top, bottom, right, left, they can be used to move the position x pixels from the property.
z-index describes the depth of elements, thus which elements come above other ones, with a higher z-index leading to a more forward sitting element.
float property can be set to right or left and simply places the element against the left or right side of the screeen. If elements bump into each other as a consequence of float, clear property (right, left, both values) can be used to avoid them bumping on one side or both sides.

The display property indicates if elements are horizontally positioned.
The inline value is the default one, here the next element comes horizontally next to the prior element, but height and width properties cannot be used.
The block value indicates the next element comes vertically next to the prior element and takes whole screen width.
The inline-block value allows to have the next element horizontally next to the prior element, while being able to specify the height and width properties.

COLOR
color property refers to color of text and backgroud-color to color of background.

Pre-made colors can be used by indicating their name for example, brown, sienna... Here is the list https://developer.mozilla.org/en-US/docs/Web/CSS/color_value 

Custom colors can be created using hexadecimal, use an online hexadecimal generator for the wanted hexadecimal code.
Another way to create custom colors is with the RGB system as value use rgb(R, G, B) with a value for red, green and blue between 0-250.
The HSL or hue-saturation-lightness color scheme is another alternative for custom colors, it consist of the hue value between 0-360 (360degree color circle), the saturation and lightness as percentages, as value use hsl(H, S, L).

Opacity also called alpha can be added onto all custom color representations, with for example rgba(R, G, B, A), hsla(H, S, L, A) (A = 0 - 1) or adding two digits to hexadecimal with 6digits and one digit to hexadecimal with 3digits.

TYPOGRAPHY
The property font-family can be used to set fonts to text.
Here is a list of safe fonts https://www.cssfontstack.com/, safe meaning they will appear the same on all browsers. They can be used as fall-back fonts if favorite font not available, indicated by 'font-family: font1, font2(fallbackfont)'.
Fonts can also be imported and used safely. Services like 'google fonts' can be used for example.
To import the 'link HTML element' can be used inside the header element, with the font's link generated by google fonts.
To import from the css file use @font-face with inside it the font-family name, and 'src: url('localPathToFont') format(format);', by downloading the font on local computer from google fonts, and ideally download and import the TTF, WOFF and WOFF2 formats for multi-browser compatibility.

font-weight controls bold-thin spectrum and can take values: bold, bolder, lighter, normal or 1 - 1000.
font-style can be set to normal or italic.
The text-transform property can be set to uppercase or lowercase.
Letter-spacing, word-spacing, line-height and text-align can also be described, as value pixels can be used or em which is relative to font.

----------
JAVASCRIPT
----------

INTRODUCTION
ES6 is the latest highly compatible version of javascript.
Console displays messages for web developers and is accessible from browser's developer tools.
Console is an object in javascript, it contains the method (function on object) .log(), this allows us to write to the console.

It is always recommmended even if not mandatory to end lines with ;.
Single lines comments are possible with // and multi-line comments with /* */.

Types are different kinds of values hold by variables in computer memory.
Different primitive types: number, string, boolean, null, undefined, object, array, Function, symbol.

Arithmetic can be done between number types;
+ - / % *
+= -= /= %= *=  ++ -- -> operator on self
++ or -- before the variable name executes it before it executes the whole line and after the variable name executes it after executing the whole line.

Strings are encapsulated by '' or "" or ``, if you want to use '' or "" inside string `` can be used to encapsulate it.
Using the + operator on strings concatenates them.
String interpolation brings strings inside other string easily by putting whole string between `` (backticks) and the variables between ${}.
string objects contain the .length attribute(variable of a class) that returns the length of the string.
All methods of string objects can be found here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String.

All built-in objects in javascript https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects, examples of other objects are Math and Date.
Math.random() generates random number between 0-1 to make it between 0-100 simply multiply it with 100.

VARIABLES
A variable hols a value in computer memory.
var is the keyword used to declare a variable, it is followed by a variable's name.
Initializing a variable consists of attributing it a first value with =, as long as a variable is not initialized its value is set to undefined.

var keyword indicates simple variable, available in function scope or as global variable.
let keyword declares variable solely in block scope, block scope can be an if statement scope for example.
const keyword creates constant variables, meaning their value cannot change, available in block scope only.

The typeof keyword returns in string format the type name of following.

CONDITIONS
if statement executes code in following block(code between {}) if its statement is true.
else if statement executes code in following block if prior statements were false and its statement is true.
else statement executes code in following block if all prior statements were false.
Statements with value false, 0, '', null, undefined, NaN are all considered false.
switch statement replaces all the above, its use is only considered good practice for huge else if structures.
if, else if and else statements always need a following {} even if only one following line.

Comparison operators can be used inside conditions.
Comparison operators without type coercion; ===(equal) <==(smaller than or equal) >==(bigger than or equal) !==(not equal) <(smaller than) >(bigger than)
Type coercion is not recommended and means for example "0" == false -> true

Logical operators can be used to add multiple conditions to one statement.
Logical operators: &&(and) ||(or) !(statement)(not)
() parentheses can be used to make multiple conditions independent of the others and group them.

Short-circuit evaluation consist of "X = Y || Z" whereby X equals Y if it is true and equals Z if Y is false.

Ternary operators allow a short-cut for if-else statements and consist of "statement ? action1 : action2" whereby action is executed if statement is true else action2 is executed.

FUNCTIONS
Functions allow grouping code together and associating it with one task, making it reusable and more readable.

Function declaration consist of function keyword followed by functionName and () containing function parameters and {} containing code action.
Another way to declare a function, called function expression, goes as follows 'const functionName = function(parameters) {code};'
Another way to declare a function is called arrow function, goes as follows 'const functionName = (parameters) => {code};' or if only one parameter "const functionName = parameter => codeThatReturnsWithoutUseOfReturnStatement"
To declare a function without assigning it a name, both function expression and arrow function can be used by not making it equal to a variable, this can be useful when declaring a small function as callback function.

Functions are called with 'functionName(functionParameters)'.
Parameters can contain default values, meaning a value is given if not defined when calling, by making 'parameter=defaultValue'. If a parameter is not defined and default value neither it will be equal to undefined..
Functions return a value that you can define, if no return statement is specified 'undefined' is returned.

Functions can be viewed as objects too, they can be assigned to other variables like function pointers, they have the 'name' property the toString() method (to transform its code into a string),...
Functions can also become parameters of another function and be called inside that other function, this is called a callback function.

SCOPE
A scope defines where variables are accessible.
Blocks group code between {} but also defines scopes.

Glabal variables are variables declared outside of any block and are as a result accessible in all scopes. They are considered bad practice, if still used best to start its name with g_.
If a variable is declared inside a function it is tied to the scope of that function block and is called local variable.
let and const declared variables contrary to var, can be limited to an if scope if declared in it, while var would be accessible in whole function scope if declared inside an if scope.

ARRAYS
Allow for storing multiple elements into one variable.
Declared as such "variable = [x, y, z, ...];".

Elements in array can be accessed using an index like so "arrayName[0]", here the 0 index indicates the first element, index 1 the second element and so forth.. Trying to access an out of range element returns 'undefined'.
const arrays cannot be reassigned a new array but the elements inside the initial array can be transformed.

The .length property returns the number of elements in the array.
The .push(element) method allows you to add elements at the end of the array.
The .pop() method allows you to delete the last element at the end of the array.
Other methods available are .join()(array into one string), .slice()(returns part of the string), .shift()(remove first element), .unshift()(add new first element)....
All methods can be found here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

Arrays are passed-by-reference as function parameters, meaning that if functions transform an array passed as argument that array will also have changed outside of the function.
Arrays can contain as element other arrays this is called nested arrays.

LOOPS & ITERATORS
A loop does an action until a condition is met.
The syntax of for loop goes as follows "for (variable-declaration; condition-check-at-each-round; single-line-action-executed-at-each-round) { actions }", usually used to loop over arrays whereby the declared variable is an index that gets incremented during the single-line-action until it gets to the array length.
The syntax for a while loop is simply "while (condition-checked-at-each-round) {actions} ".
The do-while loop does the actions at east one time even if the condition is instantly not met, its syntax goes as follows "do { actions } while (condition)".
The break keyword allows to exit a loop.

Iterators are array methods that enable looping over the array.
The .forEach(callbackFunction) method returns undefined, takes a callbackFunction with one parameter (arrow function is great in this case), this callbackFunction will be executed onto each array element.
The .map(callbackFunction) method returns a new array whereby the callbackFunction made changes for each array element.
The .filter(callbackFunction) method returns a new array, must take a callbackFunction that returns true or false, this function will be called on each array element, if the function return false it filters the element out of the function.
The .findIndex(callbackFunction) method returns the index for the first element the callbackFunction returns true on.
The .indexOf(value) method returns the index of first encountered array element equal to parameter value.
The .reduce(callbackFunction) method returns one value. The callbackFunction takes two parameters(accumulator, currentValue), initially the first value and second value of the array or a default starting value (indicated as second argument of reduce) and the first value of the array, the callbackFunction will return a value, this value will be the accumulator value of next iteration together with the next element, until arriving to the last element whereby .reduce() returns the final accumulator value.
The .some(callbackFunction) returns true if at least one of the array's elements passes through the callbackFunction with true returned. 
The .every(callbackFunction) returns true if all of the array's elements passes through the callbackFunction with true returned. 
Other iteration methods can be found here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods.

To loop over object use for...in statement like this "for (variableName in object) {actions}" whereby the variableNames equal the keys inside the object.

OBJECTS
Objects allow to accomodate and manipulate related data, like a real life object it has attributes/properties(variables) and maybe actions(methods/functions).

The variables contained in an object are defined as key-value pairs separated by commas "key : value", the key can be used like an index "object.key" or "object[key]"(useful when key is a string) to access the variable value inside the object.
To add a new attribute assign a value to a new key "object.newKey = value;". To delete an attribute use the delete keyword like this "delete object.key;".

Methods/functions-inside-an-object are created like this "name(parameters) {actions}" and separated by commas, avoid using arrow functions as those do not work with the 'this' keyword.

Objects are passed-by-reference as function parameters, meaning that if functions transform an object passed as argument that object will also have changed outside of the function.
Objects can contain as property other objects.
const objects cannot be reassigned new attributes but the existing attributes are mutable.

To use the object attributes or methods inside an object method use the 'this' keyword like this "this.attributeName" or "this.methodName()".

Private attributes and methods do not exist in Javascript, though it is possible to use the naming convention whereby the attribute/method name starts with '_' to indicate it is intended to be private.
Attributes that are intended to be private can have set and get methods to set them a value and get their value, javascript has the 'set' and 'get' keyowrds to create those methods. The convention is to have a private attribute like this '_attribute' and set/get method 'set attribute() {}' or 'get attribute() {}', to call those methods object.attribute. Those set and get methods allow making checks before performing the wanted action.

To make an object reusable we create a factory-function, a factory-function returns an object and can contain parameters that will set attributes inside the returned object if the keys inside the object have the same names as the function parameters (this is called property value shorthand).

Destructured assignment extracts the value of one or more object attributes like this "var { attribute1, attribute2 } = object", whereby attribute1 and attribute2 contain the associated values and can be used as variables.

Objects also have built-in methods, such as .keys(), .entries(), .assign() that can be found here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods.

CLASSES
Classes allow the creation of object templates, thus being able to assign a default object to multiple variables, while the creation of one object is only assigned to one variable.

Classes have a constructor function, which usually instantiates its attributes and is called each time it creates a new instance/object of its class.
When instantiating a class to a variable, the new keyword has to be used with class and its constructor arguments.

Similarly as with object for private attributes start them with _ and use get/set functions to access them.

Classes can heritate from other classes meaning, it the child class heritates all the parents class's attributes/methods, this can be done with the extends keyword and calling first in constructor of child class the parent constructor with super(args).

Static methods are like private methods, they are indicated by the keyword static and are only available inside the class never outside the class.

RUNTIME ENVIRONMENT
Is the environment the program will be executed, often nodejs and chrome are used.
For javascript front-end applications, chrome or other browsers can be used.
For javascript back-end applications, nodejs is used.
Full-stack applications use both nodejs and a browser.

To compile in nodejs environment use "node file.js".

MODULES
Modules consist of .js files with javascript code(functions/variables) that can be exported to other files, so those other files can import and use the imported code. This is usual to make code readable through its separation/categorization.
Depending on runtime environment modules are exported/imported differently.
When using modules in .HTML script tag have an additional attribute set to module.

Modules in nodejs:
To create a module, have a file with functions, the functions you want to export have to become attributes of the module.exports object.
To import a module instantiate a variable, that will hold all the exported functions as attributes, with require(pathToModule).
Object destructuring can be used to selectively import from a module, like this "const { selectifFunctionToBeImported1, selectifFunctionToBeImported2, ... } = require(pathToModule)"

Modules in ES6:
To export use the export keyword before the function's name you want to export or like this "export { function1, function2, ... }".
To import use the import keyword like this "import { function1, function2, ... } from pathToModule".
Importing functions with same name from different modules lead to a problem that can be resolved by renaming the function like this "export { function1 as newName  }".
"export default function/variable" is used to export one function/variable, this can be an object containing multiple of them, when importing, it can have a name of choice and thus not necessitate object destructuring.

PROMISES
Making network or database requests can be time consuming, a solution to this is to do other things while waiting. 
Asynchronousity like multiple threads allow doing just that and in javascript this is possible through promise objects.

A promise is an object that represents the potential outcome of an asynchronous operation. 
A promise can hold different states; 
* pending (waiting for the operation to terminate)
* settled (not pending anymore), can be segregated into two states: 
	* fulfilled (the operation has terminated successfully and the promise holds a resolved value)
	* rejected (the operation has failed and the promise holds the reason of failure)

For asynchronous code.
Usually a function is made that returns a promise object.
Promise objects hold one executor function.
An executor function contains two function parameters (resolve and reject, each has one parameter and are not self-made), herein the time consuming operation is made.
As the name implies resolve function is usually called inside the executor function if promise becomes fulfilled and reject if promise becomes rejected.
The promise object contains the .then method, this method contains two function parameters (onFulfilled and onRejected, each contain one parameter and are self-made thus can have random name).
As the name implies onFulfiled is called when resolve is called and onRejected when reject is called inside the executor function, onFulfilled/onRejected reveive the resolve/reject parameter as parameter.
While the promise is pending, following code operations continue asynchronously, once promise is settled onFulfilled/onRejected function gets executed and afterwards code executor goes back where it left off.
Another syntax for similar behavior is to use .then method with only one parameter, namely onFulfilled function, and use a second method .catch that contains the onRejected function.

Chaining multiple promises is called composition. This can be done having onFulfilled/onRejected function return another promise. The .then method calls can be done continuously on the first promise object, thus they should not be nested which makes the code more readable.
Promise.all() takes as argument an array of promises, allowing to associate one then method to all of them, leading to fulfillment if all promises fulfill and rejection if at least one promise rejects.

ASYNC AWAIT
Is syntax for handling asynchronous actions. It does not provide new functionality but more readable code it is syntactic sugar.

async keyword can be used in front of function declaration, this function will return a promise, if in function a simple value is returned this value will be considered the resolved value of the promise.
Inside an async function the await keyword can be used, this is used in front of promise call and makes sure the program halts inside this function while the promise is pending, once the promise is resolved it returns it and the resolved value can be used inside that function.
An async function allows asynchronous code not only through a promise but a whole function that can make multiple promise calls and wait for them inside the function with await keyword, this allows for way more readable code than chaining .then methods.
To catch an error the .catch method can be used on returned promise or try-catch-block can be used.
If we are having multiple independent promises in one async function multiple solutions exist:
	* the await should not be used in front of the promise call, which lead to the assigned variable equaling a pending promise, but later in the program call in front of that variable await when necessary to get the resolved value.
	* do not use await but use .then
	* use await Promise.all()

REQUESTS
Requests consists of communicating with a server, is done through HTTP, the most used requests are GET, POST, HEAD, PUT, DELETE.
AJAX stands for asynchronous javascript and XML, it enables HTTP request asynchronously in javascript.
Else promises, async-await and fetch() function can be used for asynchronous HTTP requests.

The object XMLHttpRequest can be used to make requests. 
It has to be given a response type which is usually JSON "xhr.responseType = 'json'".
It has to be given a function that handles the response "xhr.onreadystatechange = () => { if (xhr.readyState === xhr.DONE) return xhr.response }".
The request has to be opened "xhr.open('GET', url)".
The request has to be send "xhr.send(HTTPMessageBody);".
Properly writing requests depends on the API you are using.

URL query strings provide more information surrounding the request.
To add a query string to a url, use ? and include parameters (key-value-pairs joined by = and separated with & for multiple of them).

Requests with promises and fetch in ES6:
The function fetch takes an url/api-endpoint and body specifying request method, body...
The fetch function sends a request and returns a promise.
The .then method can be used to act on the resolved or rejected promise, usually the resolved promise  converts response object to JSON.
Converting to json with .json(), returns a promise, which can be captured by a second .then, that takes the json-reponse and handles it.

Requests using async-await, try-catch in ES8:
Create an async function that contains a try and catch statement.
Inside the try statement await for a fetch() request returning a promise, to send the request.
After await for response conversion to json with the .json() function. 
After return and handle the json response.

CURRYING
Currying is not unique to javascript.
In mathematics and computer science, currying is the technique of converting a function that takes multiple arguments into a sequence of functions that each takes a single argument.
The point of currying is that if you don't provide all the parameters for a function, it returns a function that tells you what's left in the list. In a way, it is a checking method to make sure that you've got everything you need before you proceed.
A missing parameter function ends up equaling undefined, this could be checked with a single if statement thus I personally do not really understand the utility of currying in javascript.

HOISTING
JavaScript Hoisting refers to the process whereby the interpreter allocates memory for variable and function declarations prior to execution of the code. 
Declarations that are made using var are initialized with a default value of undefined. Declarations made using let and const are not initialized as part of hoisting.

CONCURRENCY AND EVENT LOOP
Thanks to the event loop, JavaScript is a single-threaded, event-driven language that can run non-blocking code asynchronously. 
The Event Loop can be summarized as: when code is executed, it is handled by the heap and call stack, which interact with Node and Web APIs.
Those APIs enable concurrency and pass asynchronous messages back to the stack via an event queue. 
The event queue’s interaction with the call stack is managed by an event loop. All together, those parts maintain the order of code execution when we run asynchronous functions.

----------
TYPESCRIPT
----------
It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript.
By making use of static typing it makes the code more readable and allows compile-time-errors.

Typescript is written in .ts files, with "tsc file.ts" a file can be transcompiled to a .js file, during the transcompilation error checking will be done, the final .js file can be executed for the final result.

The tsconfig.json files allows the customization of the tsc transompiler. 
This can be useful to remove some default rules and choose on what files those rules are applicable. 
Here is its documentation https://www.typescriptlang.org/docs/handbook/compiler-options.html.

TYPES
Typescript recognizes the following types: boolean, number, null, string, undefined. A variable assigned a certain type cannot be assigned a different type later on and cannot access unappropriate methods/attributes..
The "any" type is a special type that can take in any type and change type later on.
Those types are objects and using their constructor can transform a type into another one for example "Number(stringVariable)" this will transform a string into a number.

Type annotation explicitly associates a variable to a specific type like this "let variable: string".
While implicit type annotation is also possible like this "let variable = 'helloWorld'", by making it equal to a string it gets associated with the string type implicitly, if equaling nothing it will be associated with "any".

FUNCTIONS
Functions take parameters, instead of verifying if the given parameters are of correct type with "if (typeof variable == 'number')", in typescript the parameters can impose a type like this "function(param1: string, param2: number)".

In javascript if one parameter is not specified it will equal undefined, typesript would give an error, to neglect that typescript error a ? can be indicated after parameter.
Default parameters are indicated "parameter=value", the parameter receives the default value if it received no value.

One can make return types explicit like this "function(params): string", in this example the funtion must return a parameter.
By using void like this "function(params): void" one can indicate no return of the function.

In javascript singl-line-comments "//comment" or multiple-line-comments "/* comment */" exist, in typescript a third type of comment exist.
A documentation comment is used above a function to describe it like this:
/**
 * function description
 * @param paramName - this is the first parameter explained
 * @param paramName - this is the second parameter explained
 * @returns this is the return explained
 */

COMPLEX TYPES
Array elements can contain different types or contain all the same type. Typescript can assign a certain "array type" meaning an array with elements all of the same type.
This can be done in two ways ": sting[]" or ": Array<string>", in this example arrays containing string types were declared.
For multi-dimensional-arrays this would be their associated type for example "string[][]" or "number[][][]"..

Arrays with values of different types are called tupples in typescript, they have fixed sizes after annoting them a type, but when concatenating them with .concat() an array with variable length is returned..
This is an example "tup: [number, string, number, number, string] = [23, 'he', 21, 45, 'vf']".
An array of tuples, enums or objects also exists like this "tup: [number, string][]".

Rest parameters are indicated like this "function(param1, ...restParam)", it allows to take as many parameters as wanted into the function they will be inside the restParam dynamic array, this array can receive an array  type annotation too.

Spread syntax can be used when all elements from an object or array need to be included in a list of some kind. 
This is also possible when all elements inside a tuple have to become a function parameter for example take the function "function(param1, param2, param3, param4)" and tuple "tup = [param1, param2, param3, param4]" the function can be called like this "function(...tup)" instead of this "function(tup[0], tup[1], tup[2], tup[3])".

Custom-made-types can be used similarly as standard types, they simply have to be defined first.

Enums are used to enumerate all the possible values a variable could have, they can only contain numeric or string values, if someone tries to call a value the enum variable does not contain, an error is thrown.

Type annotation of object types go like this "{ attribute1: type, attribute2: type }".

Type aliases allow to change a type's name to another one for example "type car = [string, number, boolean]".

Function types are practical for parameter functions (also called callback functions), they are indicated like this for example "(param1: number, param2: number) => numer".

Generics allow the creation of types that contain a variable type inside them for example "type Family<T> = { parents: [T, T], mate: T, children: T[] };" with T that can take any other type.

UNION TYPES
Allows a compromise between specifically annotating one type and not specifying any type, it allows to annotate multiple types.
Union types are indicated like this for example "variable: string | number", but can also be used on function parameters or returns...
Union types can also be used in arrays like this for example "(string | number)[]" whereby the array can contain elements of type string or number.

Different types have different methods/attributes, a variable annotated with an union type will only be able to use the methods/attributes that all types of the union contain.

Unions can also eqaul literal types, for example "type Color = 'green' | 'orange' | 'brown';", whereby a variable with the Color type can ony equal 'green', 'orange' or 'brown' and no other values.

TYPE NARROWING
Type narrowing consist of checking the type of a variable with an if (also called type guard) and handle that type uniquely compared to the other types inside that if statement.

The in operator can be used, whereby you can check if a type/variable contains a specific attribute/method like this "if ('function1' in variable)".

ADVANCED OBJECT TYPES
Both 'type' anf 'interface' are keywords able to create object types, type is not only able to create object types while interface is. 
Thus interface does not bring new functionality but using it for objects is convention and makes code more readable.
The interface keyword can be used to add types to a class with the 'implements' keyword like this "class myClass implements myInterface", all the attribute/method types inside the interface will have to exist in the class or a compilation error will occur, it forces the class to at least follow the interface convention, the class can also have its own attributes/methods.

Nested objects can become difficult to read, to solve this typescript allows the creation of multiple types that can be referenced inside each other.
Different types can also inherit from themselves with the 'extends' keyword, adding all the methods/attributes of one type to another.

Sometimes someone knowns properties will exist in a type object but does not know the properties names beforehand, this is especially the case with APIs returning data.
In that case index signatures can be used like this for example "[category: string]: boolean", whereby category can take any variable  name as string and the value it holds must be a boolean, it can take multiple of them if multiple exist of same types.

Interfaces or object types can also contain optional attributes/methods this is indicated with a ? like this for example "attribute1?: string".

-----
REACT
-----
React is a front-end javascript library developed by facebook that allows the creation of UI components which leads to modular code.
React is fast and clean, clean code makes the code more maintainable thus more scalable/flexible.

START REACT APP
Node package manager or npm has to be installed on computer this can be checked with node -v.
Node is a javascript runtime environment outside of the browser.
Download Node here: https://nodejs.org/en/download/ or on mac with brew install.

To start a boilerplate react app, use in command line "npx create-react-app nameAppWithoutCapitals".
This react boilerplate uses a tool called webpack to transform the files in static assets.
A .gitignore is created even though a git repository is not.
package.json determines all the settings for the react app, learn more about the settings here https://www.codecademy.com/courses/react-101/articles/how-to-create-a-react-app.
The node_modules directory contains dependencies of packages used by the current react app.
package-lock.json, contains the exact dependency tree found in node_modules, plus a history of changes to the package.json file.
public directory contains the app entrypoint index.html and a file that configures the web app for android called manifest.json, other files are not necessary and contain assets for the app initial starting page.
src directory contains the javascript code that will be processed by webpack, the registerServiceWorker.js file takes care of caching and updating files for the end-user.

To start the development server "npm start" in app directory.

Before using react import the appropriate libraries to a .js file:
"import React from 'react';"
"import ReactDOM from 'react-dom';"

To debug:
Install React Developer Tools as a chrome extension.
On Chrome devtools (View > Developer > Developer Tools). On the same banner as Elements, Sources, Console, etc., there will be two new React tabs: Components and Profiler.
In components tab interesting information is to be found about the components their props and states...
Learn more here: https://www.codecademy.com/courses/react-101/informationals/ready-react-developer-tools

"npm run build" is used to bundle the app into static files for production.

DOM
Refers to document object model, is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document/front-end-web-page.
It allows javascript to create dynamic HTML pages by manipulating the DOM.

To make DOM updates faster, react uses a virtual DOM.
The virtual DOM is a light-weight DOM that updates way faster after JSX gets rendered.
By comparing changes to the virtual DOM with the actual DOM react only updates in the DOM the elements that have changed in the virtual DOM instead of all the elements.

JSX
React contains JSX (javascript XML) which is a syntax extension of javascript available in react that resembles HTML, it allows writing HTML-like-code in javascript.
JSX is not readable by browsers, it has to be compiled to javascript.
JSX is treated as a javascript expression, thus can be stored in a variable, array, object, be returned... 

JSX elements like in HTML can have attributes, those attributes are indicated by a name, followed by an equal sign and a value.
Multi-line JSX must be between ( ) and all JSX elements must be inside one JSX element this can be the neutral <div></div> element.

To render JSX, the function ReactDOM.render() is used, the first argument contains the actual JSX code and the second argument consist of the function document.getElementById() with one argument being the id attribute inside an element in the actual HTML file whereby you would like to insert the JSX code.
By rendering, through the virtual DOM, react only updates DOM elements that have changed making it faster.

In HTML the attribute class can indicate a CSS style, in JSX the attribute is not named class but className.
In JSX self-closing tags must always end with />.
In JSX regular javascript code can be indicated in between {}.

Event listeners, wait for an interaction from user with an HTML element on the webpage.
Event listeners can be indicated in JSX by giving the appropriate HTML element the appropriate event-related-attribute.
onClick is for example such an attribute other are found here https://reactjs.org/docs/events.html#supported-events.
Its associated value should equal a javascript function with one parameter the event, that takes the element as an object with its attributes as the object attributes.
To create a change from the event function call "document.getElementById(idValue) = JSXcode" with "idValue" being a value associated to an id attribute inside one element, which will insert the new "JSXcode".

If statements cannot be used in JSX between {}, but ternary operators can.
The && operator can also be used to write one line conditionals in react, "true && <p>Hello World<p>" if expression1/true is true expression2/JSX will be rendered.
The || operator allows directly choosing between two values the non-empty/non-false one for example "{'' || 'hello'}" whereby 'hello will be chosen and displayed.

The .map is often used to create HTML lists of arrays contents like this "['exercise1', 'exercise2', 'exercise3'].map(ex => <li>{ex}</li>)".
Lists elements can necessitate the attribute key when a specific order should be followed or if each list element contains a toggle that can be activated or deactivated, either way it never hurts to always include the key attribute.

React.createElement() allows for an JSX alternative that isn't usually used, but when compiling JSX gets transformed into this form.

COMPONENTS
Is a small reusable chunk of code which renders HTML code.
Components can be defined with javascript classes or functions.

All class components have some methods in common, those can be added to the class component with "extends React.Component".
Class component names must always start with a capital letter.
Class components must contain one method called render() that returns JSX code.
To create an instance of a component, in JSX create a self-closing-element that contains the component's name.
Attributes can be added to component classes, with "get attribute() { return 'x' }", in render function this.attribute can be called to get the value.
Event listeners can be used inside components, the element's event-attribute (for example onClick) can equal a method inside the component class with this.method().
Components can return in their JSX other components, this can also be called nested components.

Component classes contain the this.props attribute, this object contains the attributes passed to the component istance. 
Thus if we create for example the following component instance "<Profile name="add" age=45 />" inside the component class this.props.name will contain the value "add" and this.props.age will contain the value 45.
Thus props allow a functionality similar to parameters in functions.
Functions and event-handler-functions are often passed as props to components.
To create an instance of a component self-closing tags are usually used but don't have to, all between the opening and closing tags of the component will be accessible inside the component with this.props.children.
When an attribute is not given to a component class it will output nothing, default values can be given to those attributes like this "component.defaultProps = { attribute: drfaultValue }"

State can be used next to props for dynamic content. To setup state in a component class, setup a constructor with argument props that calls super(props) and finally declare this.state and initialize it with an object.
To get a component's state use this.state.nameOfProperty.
To change a value of state use the function this.setState() with as argument an object that contains the properties that need to change with a new value.
A change of state is often made in a separate method (event-function) of the component class dedicated to it.
Methods different than the constructor or render method inside component classes do not have access to the this keyword unless in constructor you bind it like this "this.eventMethod = this.eventMethod.bind(this)".
this.setState changes a state inside a component but also calls render() so that the change gets rendered, that is why it cannot be called from a render() method else an infinfinite loop would occur.

COMPONENT LIFECYCLE
Components can get created, rendered, added to the DOM, updated and removed.
We make distinction between three lifecycles:
1. Mounting, when the component is added to the DOM for first time.
2. Updating, when a component gets updated due to a props or state change.
3. Unmounting, when a component gets removed from the DOM.
During mounting in the following order the component constructor, render and finally componentDidMount methods are called.
componentDidMount can be used to call asynchronous tasks affecting the component also called side-effects.
During the unmounting phase the componentWillUnmount method is called, herein component asynchronous-tasks running in componentDidMount can be cleared.
When updating, a change occurs in props or state, followed by calls to the following component methods in order, render, componentDidUpdate.
ComponentDidUpdate contains the parameter prevProps which contains the props of previous render.

HOOKS
Component functions also exist instead of component classes, the function return should equal the render method return and props should be the function argument.
Component functions can access the same functionalities as component classes through the use of hooks.
Hooks are functions that manage the internal state of function components and their post-rendering side-effects.
The use of component functions + hooks should be simpler than the use of component classes but do not add new functionalities.
Different built-in hooks already exist such as useState, useEffect and others https://reactjs.org/docs/hooks-reference.html.

useState is the most often used hook, it enables the manipulation of states in function components.
It is initialized like this "const [myState, setMyState] = useState(initialStateValue)" whereby myState holds the state value and setMyState is a function that changes the state value and renders, initialStateValue is an optional parameter that gives an initial value to myState, if it is not defined myState initial value will equal undefined.
It can be used through events like this for example "<button onClick={()=>setMyState(newValue)}></button>". 
The event function can contain the optional 'event' parameter that contains the target property which holds the user input if any with event.target.value.
Instead of holding one objects with all the states of a component, we can call useState for every state and thus separate them.
It is best to use the setter function with a callback function that takes prior state as parameter for example "setMyState((prev)=>[newValue, ...prev])" whereby a newValue is added to a string.

useEffect is a hook that enables side-effects (asynchronous tasks affecting the component).
useEffect takes as argument a callback funtion, that is called after the component has rendered.
Some effects such as event listeners require cleanup to avoid memory leaks, to resolve this problem the argument-function of useEffects can return a cleanup function, this function will be called after unmounting and can be used to clean prior asynchronous tasks.
useEffect can take a second argument called the dependency array, which indicates after which renders the callback function has to be called. 
Passing no second argument leads to the callback function being called after each render, passing an empty array as second argument leads to the callback funtion being called only after the first render.
Variables set in the array that change between renders lead to the callback function being called again.
When using multiple hooks they often each are associated with one state, ideally at top of function, each state should be declared directly followed by its associated event hook.

STATEFUL COMPONENTS CALLING STATELESS COMPONENTS (CONVENTIONS)
Conventions in writing components serve in making the code more readable and thus more manageable.

A react component should use props to store information that can only be changed by another component.
A react component should use states to store information that can be changed inside the component itself.

A component can call other components, lets make distinction between parent and child components based on this. 
How would a child component update his parent component?
A parent component can define a method whereby a change in state happens (event-handler), it can pass this method as callback-function-props of child components, enabling the child components to make a state change of parent component by calling this callback-function.

Each component should only have one job.
Child components can also update their sibling components.
When parent components send event-handlers as props to one child component, this child component calls the event-handler, the event-handler calls sibling components with other props.

A pattern that is often found in react is the following;
A stateful component renders (also called container component), calls stateless child component one with its state as props that displays the parent's state (also called representational component), and calls stateless component child two with an event-function as props who displays a way to change the state.

ADVANCED REACT
An inline style consists of a component having the style attribute equal to an oject that defines a style and is defined inside the component instantiation.
Creating a separate style object variable is preferred when the style object is large.
In react for example this "{ marginTop: '100px' }" is considered the same as "{ marginTop: 100 }".
To re-use particular styles those can be declared in a separate file and be exported for use.

propTypes can be useful to receive a warning when they are not properly used and through its documentation by comments making the code cleaner.
When a component expects a certain prop, propTypes can be used, first import the associated library "import PropTypes from 'prop-types'".
To define propTypes "componentName.propTypes = { expectedProp: PropTypes.type.isRequired }" whereby multiple props could be expected and type can mean string or number...

In react when creating forms, state can be used to be aware of every change that occurs inside an input-element before the form gets submitted.

An uncontrolled component is a component that maintains its own internal state. A controlled component is a component that does not maintain any internal state. Since a controlled component has no state, it must be controlled by someone else.
To create an uncontrolled component, we begin by creating a ref using the React.createRef() method. This method returns an object with a .current property that refers to the DOM node it is bound to. This ref object is bound to a form element using the ref attribute and whenever the value of that form element needs to be retrieved, simply refer back to the ref object’s .current property.
There is one situation in which uncontrolled components must always be used: <input> form elements with the type="file" attribute. The value for this type of <input> form element can only be set by a user, and not programmatically, and therefore the only way to retrieve this value is through a ref.
Uncontrolled components are also useful when the value of the form is only necessary after submitting.

============
FREE COURSES
============

----------
JAVASCRIPT
----------
LINES & COMMENTS
; -> at end of line indicates the end but is not mandatory
// -> single line
/* */ -> multiple lines

VARIABLES
Variables can take any type as Javascript is loosely typed.
Different primitive types: number, string, boolean, null, undefined, any, object, array, Function.

var keyword is used in front of variable name at declaration to indicate simple variable, available in function scope or as global variable.
let keyword declares variable solely in block scope.
const keyword creates constant variables, meaning their value cannot change, available in block scope.

All types have access to different methods.
Strings can be concatenated with +.
Strings are immutable you can not change a single char inside it, only the whole string at once can be changed.
Push and pop methods can make arrays dynamic.
Date objects contain a number that represents miliseconds since 1 January 1970 UTC.
Primitive values are passed by copy/value and objects by referene.
typeof keyword is used to receive the current type of a variable.

Objects can also be created which are considered as one variable but contains multiple variables, they work like python dictionnaries..
Object.freeze(objectname) can be used to make the variables inside the object constant.
Classes contain variables and methods (functions that use those variables, to access those variables this keyowrd is used), a constructor also exist that is called at construction and can take parameter values. 
With extend keyword classes, heritage from another class is possible, to call the parent class contructor use super().

Spread operator consist of ...variable as keyword, it allows to extract the inside of string/array/object. 
If string to array [..variable, ...variable2] it will transform each letter of the string into strings inside an array. 
If array to array [..variable, ...variable2] it extraxts each element in the array into elements in the new array.
If object to object {..object1, ...object2} it extracts each variable in the object into new object.
One can also change a value that has just been spread from an object like this {..object1, objectVariable:newValue}. 
With ! you can call the opposite value of a variable like this {..object1, objectVariable:!objectVariableValue}

ARITHMETIC
+ - / % *
+= -= /= %= *= -> operator on self

FUNCTIONS
Functions are indicated with function keyword, it can take parameters, perform actions with them and return a value, if it does not return a value, it returns undefined.
A lot of built-in functions and methods already exist.

Map function on arrays, performs function on each element inside the array, transforming it.
Filter takes function that returns a boolean and decides to remove elements from the array or not.
Reduce adds on all the elements in an array returning one.

Functions can take other functions as parameters which is also called callbacks.
Default parameters take in a default value with = operator.
Rest operator consist of ...arg as function parameters and means undefined/unlimited number of parameters for the function.

Anonyomous functions do not have a name but are given as value to a variable, the variable thus becomes the function and becomes like a function pointer, this is confusing but part of javascript.
Arrow and ternary functions allow for shorter syntax of functions and are useful for non-reusable-functions used as parameters.

A generator function is indicated with the function* keyword.
Generator functions yield values back, meaning it returns multiple times instead of one time. 
A variable equaling a generator function, becomes a generator object, whereby the multiple variables inside the generator object can be accessed with next method until it equals undefined.

LOOP, CONDITIONS, COMPARISON/LOGICAL OPERATORS
for can be used to loop over an array and can be used as usual with an index.
while loop are also possible.
do while loops allow you to use a while loop whereby the loop gets entered at least one time.
break keyword breaks out of the loop and continue restarts the loop.
if, else if, else conditions exist.
Comparison operators without type coercion; === <== >== !== < >
Type coercion is not recommended and means for example "0" == false -> true
Logical operators; && || !(statement)

EXPORT IMPORT 
export as keyword can be used in front of functions/variables that you want to use in another file.
import keyword must than be used into this other file to import the "exported" functions/variables from the first file.
You can import all or only certain functions/variables from that file. 
You can also import as a certain name, meaning the imported functions can only be accesed through this name, avoiding function/variables with duplicate names.
export default means you only export one element from the module.

PROMISES & SYNC AWAIT & FETCH & ERRORS
Javascript does not contain multiple-threads, but it can send an external request and while waiting for a response execute other code until the response arrives and the single thread comes back to it, this is called an event loop and makes us gain time.

Promises are useful for external actions that take time, such as making a request to an API, the promise may hold a value at some point in time or not, it promises a value will come.
A promise is an object, that takes one parameter, this parameter is a function, 
this function takes two parameters (resolve and reject), this function performs an action that can succeed or fail, 
if it succeeds the promise gets resolved else it gets rejected, this is indicated in code by using the parameter functions (resolve and reject) that can take an arbitrary number of parameters.
The promise object has a then method that takes a function that gets executed if the promise got resolved, this function thus takes the same number of parameters as the resolve function did.
The promise method also has a catch method that takes a function that gets executed if the promise got rejected, this function thus takes the same number of parameters as the resolve function did.
Promise.all function takes as argument an array of promises and calls all of them simultaneously, they will all have the same following then() and catch().

Async keyword used in front of functions, indicates that the content of the function will contain the await keyword and needs to be handled asynchronously.
Await keyword allows to wait for the promise to be returned, while it waits for the promise it continues to execute code outside of the asynchronous function, and once the promise has returned it comes back to the await keyword to take the final value of the promise and continue the asynchronous function. 
Without the await keyord the promise without its final value is instantly returned.
If the promise gets rejected the error won't be catched, the solution is to use the try-catch statement inside the asynchronous function to catch the error in case of a rejected promise.

The Fetch API provides an interface for fetching resources. The fetch method can send http requests to APIs for example.
The first and only mandatory parameter of the fetch function is the URL to the resource you want to fetch, the second argument is by default an HTTP GET request. 
The second argument is an object representing an HTTP request, whereby HTTP method, headers, body, ... can be adapted.
When sending a body, set in headers: Content-Type: application/json, in body set an object that you transform into json with JSON.stringify function.
Fetch will return a promise, if the promise got resolved a response object containing the HTTP response is returned. 
To check if an HTTP error got returned the response.ok can be verified.
To view the json body of the response we call response.json() which also returns as a promise if resolved the parsed JSON.

Try-catch statement can be used to catch errors. Whereby if a code gets generated inside the try scope, code inside the catch scope gets executed.

----------
TYPESCRIPT
----------

ENVIRONMENT
-----------
npm is a package manager for the JavaScript programming language nodejs framework, also called node package manager.
npm can be used to download typescript, which will give access to tsc for compiling .ts.
npm install/uninstall can be used for downloading libraries.
Brew install typescript, leads to both npm and tsc installed.
tsc will transform .ts to .js. As browsers and Node.js can only compile js.
tsconfig.json can be used to configure tsc.

Most used front-end stack is typescript+react and back-end stack typescript+nodejs+express.js.
With react, nodejs and express.js being frameworks of javascript.

VScode recommended extensions;
ESLint, for javascript code check.
Path Intellisense, for recommended file paths, useful for front-end development when referring to other files.

COMPILATION
-----------
Browsers cannot directly compile .ts thus it has to be transformed into .js.
Use tsc to compile .ts to .js.
HTML files contain a script tag that can refer to a particular .js.
Those HTML files have to be compiled in the browser by entering the absolute path towards the file in the search bar, go to on chrome more tools -> developer tools to view the console.

tsc -w will constantly recompile files each time you make a change
tsc --init will let you compile all files from root directory next time you use tsc. 
A .json file will be created wherein compilation adjustments can be done.
In the .json files to compile can be excluded.
Target feature are used to indicate the javascript version to compile to, es5 is older more compatible version and es6 is newer version.
Lib feature is used to indate used libraries.

ADDITIONS
---------
The following additions lead to more readable/ordered/shorter code and compile-time-error-detection, especially useful for large projets.
Types, typescript is strongly typed while javascript is loosely typed.
New features.
Next-gen Javascript features, compiled down for older browsers.

TYPE:
Strong typing can be done implicitly or explicitly. 
Implicitly leads to the compiler assuming the type based on the variable given value.
Explicit type declaration needs after variable declaration a : followed by the choosen type.

Function arguments can also be strong typed. Function returns can also be strong typed and set to void (which returns undefined) by adding the type at end of function declaration.
Never type can be used as function return type for functions that never end, either because they end the program or because they infinite loop, it makes the code more readable but technically void can be used too.

Different types: number, string, boolean, null, undefined, any, object, array, Function.

Objects contain multiple variables like a C structure would, and can be strong typed with : {x: type, y:type, ...}, interfaces allow the creation of a type out of it, so objects can be viewed as a single instance.
Arrays can be strong typed by introducing directly following the declared type the [] symbol.
Tuples in javascript are like fixed-size-arrays not necessarily of lenght 2, they can be strong typed, whereby each value inside the tuple can independently be strong typed, indicated by [type, type, type].
Variables can hold functions by acting as function pointers in C and be of type Function.
Type "any" leads to the freedom of a variable to become any type and even change type over the course of the program, comes down to simple javascript.
Different types can take in different values and have access to different methods like classes.

Multiple types can explicitly be declared by using |, those are called union types.
Aliases can be made with keyword type ... = , often they are used with unions, to make unions have one name.
Literal types, are types with pre-defined potential values, unions can be used to have a choice between multiple values.

Casting is called type assertion in typescript and is used to for example tell that a variable with any type is in fact a number for example.

NEW FEATURES:
Shape of object can be defined with an interface, wherein variables and their type are defined. An interface is like a structure in C it is an object declaration that can be re-used as a type.
Classes also exist and function like python classes, with access modifiers(private, public, protected) in front of declaration (no access modifier meaning public) and this, this.variable keyword, inheritance is possible with the extends keyword, it can inherit from other classes but also from interfaces, static keyword can be used on member variales...
Custom types need to be allocated memory with the new keyword and call to constructor at declaration for classes.

Question mark in front of parameter variables, indicates that those parameters are optional, if not used it will become equal to undefined.
Rest parameters allow for unlimited and undefined amount of parameters.
Default parameters allow giving to parameters a default value.
Lambda expression or arrow functions are one-line-functions indicated with an arrow in typescript, ternaries also exist.
Exclamation marks in typescript at end of line, means used function/variable is not equal to null or undefined because it will be declared later.

Export keyword allows the creation of modules, modules are files that can be imported on to other files, with the exported declarations being accessible to the file that imported.
Namespces are used to group code together inside it, and avoids problem of overwriting due to everything being in a global scope in javascript.

Generics are like c++ templates whereby function parameters or classes take a to-be-declared-type, by using it in combination with the extend keyword, you can limit the number of types that can be choosen from.

-----
REACT
-----

SETUP
-----
npx executes npm(javascript nodejs package manager) binaries.
Use it to setup the default react application with "npx create-react-app .".

Once the app is setup, different commands can be used;
npm start -> starts the development environment
npm run build -> builds the application, creates production version of application that can be deployed on server and accessed from the internet.

Once the app is setup differt default files appeared;
In public/index.html we can find the index file that contains one div tag named root wherein the whole react-generated-html will come. In src/index.js we can view that App.js gets rendered into the div tag root.
In src/App.js a default react application is written inside the function app, this function/component will be the core of the app, like a main is to the c langauage.
To prepare for writing own code, you can clean the default app by for example;
All files in src/ besides index.js and App.js can be removed, App.test.tsx, reportWebVitals.ts, react-app-env.d.ts, setupTests.ts could have some utility and can be kept.
Make the app function return null, remove the App.css and logo.svg imports in src/App.js.
In src/index.js all serviceWorker code, index.css, serverWorker imports can be removed.
In public/index.html the whole <head></head> element can be removed or changed.
In public directory favicon.ico, logo192.png, logo512.png, files can all be removed.

For "nmp run build" the webpack library is necessary to transform JSX/components into javascript and bundle the whole app into one file; bundle.js (that the browser can run).
After bundling the application a build directory appears, that is ready for server deployment. 
Distinction can be made between development environment (everything besides the build folder) and production application (build folder). The production application or build folder can deploy the application on a server on its own.
For server deployment use the following two commands "npm install -g serve" followed by "serve -s build". 

The google chrome extension "React developer tools" allows for more information on state of application. 

FEATURES
--------
JSX
Is a syntax similar to HTML with some differences like;
Javascript code can be implemented by indicating it between { }, if statement can be done with ternary operator herein.
A name between tags <name /> indicates a component and is thus used to reuse components.
Those components can take arguments like that <componentName argumentName=argumentValue/>.

Javascript array method map can be used to loop over all elements/components of an array, to return them all.
In both JSX and HTML ${} can be used to take expressions, for example do an if with a ternary operator.

css can be added inside tags allowing for styling with style= an objects and that can contain variables such as color, backgroundcolor, cursor... Such a css object can be created once and re-used.

To create a button simply use <button></button>, in tag onClick={function} allows you to call a function once someone clicks the button, this is an example of an event.

To use icons, download them like this "npm install react-icons".
Now you can import components from react-icons library, those components/icons can be added in the JSX like you would add any other component.

COMPONENT
Are react functions that return a JSX code, that thus enables reusable components.
Components can contain other components like functions can call other function and they all in the end come back to the app-component/main, their name must begin with a capital letter.

Function arguments are called props, the function will contain one prop called props that takes all the potentially passed arguments and those arguments can be accessed inside the function with props.passedArgumentName.
By declaring outside the component the variable componentName.defaultProps we can indicate the default values of the props in a dictionnary/object format.

Components are usually functions but can also be classes that inherit from React.Component and have render method.

To return multiple elements they can be wrapped between empty tags <> </> creating one fragment.
Often one file exists per component and all components are inside src/components
Inside components functions can be written that can access the variables inside the component.

STATE
Is a dynamic form of storage that lives inside of our components, in the end it allows for direct updates of pages (without need to reload).
React uses a separate DOM representation called the virtualDOM, it compares it to the real DOM with the reconciliation algorithm, to determine if the page has to be updated. 

For this use the state hook useState(value) that returns an array with two values, the first one being the value and second a setter function, the setter function can be used after a particular action and is able to change the value, which will directly be updated on the page.

EFFECTS
Functions get called once a component is created(mounts), updated or removed(unmounts) from the page.

This is done by the hook useEffects(function, triggers[]), the function gets called once a component mounts or one of the values inside the trigger[] array change, finally this function can return a function that gets called once our component unmounts.

MATERIAL UI
-----------
Material UI is a framework for react that contains pre-made components.

SETUP
First install the library with "npm install @material-ui/core" after having started a react application.
In the package.json file dependencies section the material-ui/core library will become visisble.

USE
https://material-ui.com/components/box/ -> documentation on all component and their parameters possibilities.

To access a button component for example "import Button from '@material-ui/core/Button'", afterwards Button can be ased as a component. 
You can give it the variant, color, size parameter for styling for example.
style parameter can be used for even more customization.
Other parameters for functionality are for example href, onClick, disabled..

For access to icons first "npm install @material-ui/icons".
To access them for example use "import DeleteIcon from @material-ui/icons/Delete", now DeleteIcon can be used like any other component.

To create own styles "import { makeStyles } from '@material-ui/styles'".
Use the makseStyles function that returns a function and takes in an object with the different style parameters.
Indicate inside a compenent's className parameter the style to style the component.
To access colors "import { orange } from '@material-ui/styles'".

To create own themes "import { ThemeProvider, createMuiTheme } from '@material-ui/styles'".
Use createMuiTheme to create a theme by giving it an object with theme specifications.
Wrap componenets around <ThemeProvider theme="created-theme">components</ThemeProvider>

For typography  "import Typography from '@material-ui/core/Typography'".
The Typography component can be used like this <Typography parameters>TEXT</Typography>, different parameter possibilities are for example: variant, size...

Container component can be used to make content not take the whole screen place but a subsection of it.
Grid component can be used for custom place/space wherein other components can come, thus lay-out all the components where we want to.
Grids and containers can be used for responsive design, meaning proper display on screens of different sizes.

To create an app-bar:
"import AppBar from '@material-ui/core/AppBar'"
"import Toolbar from '@material-ui/core/Toolbar'"
"import IconButton from '@material-ui/core/IconButton'"
"import MenuIcon from '@material-ui/icons/MenuIcons'"
The MenuIcon must come inside an IconButton, which has to come inside a ToolBar, which has to come inside an AppBar.

REACT WITH TYPESCRIPT
---------------------
Create boilerplate app with "create-react-app nameApp --typescript"

Function component types equal "React.FC" and they return type JSX.element.
To indicate the props it takes for example "React.FC<{message: string, call: boolean}>", alternatively you can define the props object as an interface and pass the interface between <>.

useState can be used like this "[var, setVar] = useState<number | null>(null)", whereby the var variable gets initialize with null and can take a number later on.

------
NODEJS
------

SETUP
-----
Install nodejs from the web or with brew on mac. To verify it exists type node --version in terminal.

The node command will compile and execute javascript in the terminal instead of in the browser, by using console.log() you write into the terminal.
node only executes one file, but this file can import from other files.

npm(nodejs-package-manager) command enables to install packages/modules/dependencies(those names are all referring to the same). Those packages can be installed with -g globally or locally (solely on current project). 
Those packages can also be uninstalled.
"npm init" creates a package.json file which stores important info about the package/project.
npx(nodejs-package-execute), executes packages can start apps for example "npx create-react-app".

VScode can be used to view implicit types.

USE
---
Default global variables; __dirname, __filename, require(imports), module(info module), process (info env).

To export code go to the module and make the variable 'module.exports' equal to what you want to export, if multiple exports set them in an object or make multiple 'module.exports.NameExport'.
To import that code make a variable equal require('modulePath'), by calling require the code on the module/file will be executed.

A lot of built-in modules with lots of different functions already exist. 
Nodejs.org/en/docs/ for more info on all posibilities.

OS module, import it with "const os = require('os')". Gives all the information surrounding the operating system and its user.
path module, helps work with paths.

The http module enables us to create a server, with createServer and listen functions. 
The createServer function takes a function that will loop indefinitively waiting for requests and responding, this function takes two parameters the request and response objects to access/enable requests/responses.
The response object can fill header and status code of reponse with .writeHeader, fill body of reponse with .write and end the communication with .end.
From the request object access .method, .url...

Javascript is synchronous and single threaded.
While making an external request and waiting for a response our sole thread loses its time. 
Event loops are asynchronous and take a function/callback that makes an external request, while waiting for the response it starts executing the following code outside the function, once a response arrives it comes back to finish execution of that function. Use async/await/promises to setup event loops.

Events occur from users for example clikcing on a button, then an event/function will be called.
The 'events' module element 'EventEmitter' has to be imported, it will allow use to create an EventEmitter object.
This object has the 'on' function that takes a keyword and function, it also has an emit function that takes a keyowrd and optionally parameter values for the function it will end up calling.
If the 'emit' function calls a keyowrd, the function given as argument to the 'on' function with same keyword will be called.
http module has own event functions.

fs module, short for file system, this module enables to handle files, like reading and writing. This can be done in an asynchronous way to gain time if using large files.
FileSync is used to access whole file at once and does not work well on large files.
Streams are used to read large files and allow more customization. ReadStream, WriteStream, DuplexStream exist.

-------
EXPRESS
-------

SETUP
-----
Has to be used on a nodejs environment as it is a nodejs framework.
For installation use node-package-manager "npm install express".

import it with "const express = require('express');".

USE
---
The express() function creates an app object.
The app object has the following methods: .get, .post, .put, .delete, .all, .use, .listen.
Listen takes port as first parameter and a callback function called once function is created as second parameter.
Get takes a path/url as first argument and as second argument a callback function, called each time a user makes a get request to the path/url, this callback function takes request and response object as parameters. 
Post, put, delete can be used in a similar way as get function but your callback function has to be appropriate to the method.
All refers to all the different methods and in combination with the path '*' (all urls), can be used to make custom responses toward request mistakes.
Use calls middleware.

For express, APIs are HTTP interfaces to transfer data, from the back-end to the front-end for example.
Data is send with JSON (JavaScript Object Notation). 
JSON uses human-readable text to store and transmit data objects consisting of attribute–value pairs and arrays.
With the above mentionned response and request objects the json method can be used to transform arrays of objects into json.
To setup an API use .get method of express with as first parameter the api path/url, in the callback function return the JSON content, the JSON content will be accessible for the front-end by fetching the specified path/url.

Static assets are files that the server does not need to change.???
An url ending with a '?' is followed by parameters with values that the server can use, this is called a query string and can be accessed with the request object's query method.

Why is middleware useful???
Middleware refers to code between server request and response.
The .get method normally has first parameter path and second parameter callback function, it can also have three parameters with as second parameter the middleware function and last parameter the callback function.
This middleware function takes request, response and next object, the next parameter is used to indicate the end of the middleware function and go to the next middleware function or to the final callback function.
Express's use method takes a middleware function and invokes it for any path/url/route, besides if you add a second argument path, than the middleware function will be invoked for all the urls/paths coming from this path.
For use and get to take multiple middleware functions those have to be set in an array.

express's route method allow for the creation of a router object. ???

----------
POSTGRESQL
----------

UNDERSTAND
----------
Is a database-management-system, it uses SQL as its main query language.
A database is used to store, update and retrieve data.
SQL is a programming language to communicate with databases that is widely used.

Data is stored in tables that consist of rows and columns.

SETUP
-----
Has to be downloaded as an app from the web.
For access to the terminal command psql set in .zshrc "export PATH=$PATH:/pathFoundInPostgresqlApp"
Or use brew install.

When launching psql, you can start launching psql commands in the terminal with /? you can view the usage guide and with /l you can list the whole database.
Inside .sql files you can write SQL scripts. Execute them with /i.

USE
---
To create a new database use "CREATE DATABASE name;".
To connect to the database use "psql -h ipAddress -p port nameDatabase" or "\c nameDatabase".
To delete a database use "DROP DATABASE name;".
To delete specific rows, use "DELETE FROM tableName WHERE clumnName=value;", to delete all rows "DELETE FROM tableName;".
To create a table use "CREATE TABLE tableName (
									columnName dataType flags/constraints, 
									columnName2 dataType flags/constraints, 
									columnName3 dataType flags/constraints, 
									);"
The "NON NULL" contraint obligates the column to be filled when filling the row.
To insert data "INSERT INTO nameDatabse (columnName1, columnName2) VALUES (valueColumn1, valueColumn2);".
To make updates "UPDATE tableName SET columnName1 = value1, columnName2 = value2  WHERE id=idNumber".

To get specific columns from a table use "SELECT columnNamesSeparatedByComma FROM tableName;" with '*' to select all columns.
To sort based on specific column "SELECT * FROM tableName ORDER BY columnName;", it will order in terms of the alphabet, numerical system or dates, to reverse the base order add at end command DESC.
To filter the data use "SELECT * FROM tableName WHERE columnName = value;" to set multiple conditions you can add to the command "ADD newCondition", () and OR can be used too. Comparison operators; =, <, >, <=, >=, <>(not equal).
To select only x number of first rows "SELECT * FROM tableName LIMIT x", to only select x->y number of rows "SELECT * FROM tableName OFFSET x LIMIT y - x;".
To get all rows between two values "SELECT * FROM tableName WHERE columnName BETWEEN value1 and value2;".
To get all values starting/ending with particular value "SELECT * FROM databaseName WHERE tableName LIKE 'startValue%endValue';".
To know how much rows with a certain value of a certain column exist "SELECT columnName, count(*) FROM tableName GROUP BY columnName ORDER BY columnName;". 
The count function is called an aggregate function and different ones exist, such as MAX(columnName), MIN(columnName), AVG(columnName), SUM(columnName), )using multiple ones is also possible such as ROUND(AVG(columnName), numberDecimals).
To filter values with certain amount of rows "SELECT columnName, count(*) FROM tableName GROUP BY columnName HAVING COUNT(*) comparison ORDER BY columnName;"
To give name to new columnName use "AS newColumnName".
"COALESCE(defaultValue)" allows to fill empty or undefined values with default values.
Arithmetic operators: + - * / %(modulo) ^(power) !(factorial)
Use DATE() for date + time or DATE()::DATE for only date or DATE()::TIME for only time. With 'INTERVAL "amountOfTime"' you can add or substract the time. To get even more precise values you can "SELECT EXTRACT(YEAR/DAY/... FROM NOW())".
To view all different values in a column "SELECT DISTINCT columnName FROM tableName;".

Primary keys are identifiers, an index for the rows of the table, it is possible to have multiple of them, they are indicated by using the flag PRIMARY KEY at table creation.
Tables can be linked together, this is called relational tables.
A foreign key allows to nest tables inside each other, a person table can have a car for example and this car can be identified by another table, they are connected through a foreign key.
A foreign key is a column that references a primary key in another table. To create a foreign key add at end of column creation command "REFERENCES linkedTableName(columnName)".
Inner joins allows us to join two tables that are connected through a foreign key with "SELECT * FROM table1 JOIN table2 ON table1.foreignKey = table2.primaryKey;".
Not all columns contain foreign keys, left joins allow us to also take them in account in the final output with "LEFT JOIN" instead of "JOIN".

Constraints can also be added, a constraint is for example, all the values inside the email column have to be unique, this would be indicated with "ALTER TABLE tableName ADD CONSTRAINT nameConstraint UNIQUE (columnName);" this constraint can be removed with "ALTER TABLE tableName DROP CONSTRAINT nameConstraint;". With the use of CHECK (condition) instead of UNIQUE, you can choose own condition.
If the constraint condition is met a conflict occurs which will block the action from taking place, to make an exception add at end of insert command "ON CONFLICT constraintName DO UPDATE SET columnName = EXCLUDED.columnName;".

Columns can also contain as value a sequence. This is a type that yields ever increasing values, the value can be reset and increases each time it is selected with SELECT. It gets indicated when creating a table with the BIGSERIAL type, it can be used for the primary-key/id column.
Extensions are functions that can be viewed with "SELECT FROM pg_available_extensions;", those can add various functionalities like universally unique identifiers.
UUIDs can be installed with "CREATE EXTENSION IF NOT EXISTS 'uuid-ossp';", using "SELECT uuid_generate_v4();" you can generate a random UUID, using UUIDs as primary keys can protect against attackers that want to mine the database, it also allows for merging databses without conflicts.
To use UUIDS as primary key, use the UUID type for the primary key and uuid_generate_v4() function to insert the appropriate values.

Generate a .csv file, "\copy (SELECT command to take wanted code from tables) TO .csvPath DELIMITER "," CSV HEADER;"
