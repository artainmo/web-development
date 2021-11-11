# JAVASCRIPT

## Table of contents
- [Codecademy course](#CODECADEMY-COURSE)
  - [Introduction](#INTRODUCTION)
  - [Variables](#VARIABLES)
  - [Conditions](#CONDITIONS)
  - [Functions](#FUNCTIONS)
  - [Scope](#SCOPE)
  - [Arrays](#ARRAYS)
  - [Loops and Iterators](#LOOPS-and-ITERATORS)
  - [Objects](#OBJECTS)
  - [Classes](#CLASSES)
  - [Runtime environment](#RUNTIME-ENVIRONMENT)
  - [Modules](#MODULES)
  - [Promises](#PROMISES)
  - [Async Await](#ASYNC-AWAIT)
  - [Requests](#REQUESTS)
  - [Other](#OTHER)
- [Javascript free tutorials](#JAVASCRIPT-FREE-TUTORIALS)
  - [Lines and comments](#LINES-and-COMMENTS)
  - [Variables](#Variable)
  - [Arithmetic](#Arithmetic)
  - [Functions](#Function)
  - [Loop and Conditions and Comparison/Logical operator](#LOOP-and-CONDITIONS-and-COMPARISON-LOGICAL-OPERATORS)
  - [Export Import](#EXPORT-IMPORT)
  - [Promises and Synch Await and Fetch and Errors](#PROMISES-and-SYNC-AWAIT-and-FETCH-and-ERRORS)

## CODECADEMY COURSE
### INTRODUCTION
ES6 is the latest highly compatible version of javascript.<br>
Console displays messages for web developers and is accessible from browser's developer tools.<br>
Console is an object in javascript, it contains the method (function on object) .log(), this allows us to write to the console.

It is always recommmended even if not mandatory to end lines with ;.<br>
Single lines comments are possible with // and multi-line comments with /* */.

Types are different kinds of values hold by variables in computer memory.<br>
Different primitive types: number, string, boolean, null, undefined, object, array, Function, symbol.

Arithmetic can be done between number types;<br>
+, -, /, %, *<br>
+=, -=, /=, %=, *=,  ++ -- -> operator on self<br>
++ or --before the variable name executes it before it executes the whole line and after the variable name executes it after executing the whole line.

Strings are encapsulated by '' or "" or backtics , if you want to use '' or "" inside string backtics can be used to encapsulate it.<br>
Using the + operator on strings concatenates them.<br>
String interpolation brings strings inside other string easily by putting whole string between `` (backticks) and the variables between ${}.<br>
string objects contain the .length attribute(variable of a class) that returns the length of the string.<br>
All methods of string objects can be found here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String.

All built-in objects in javascript https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects, examples of other objects are Math and Date.<br>
Math.random() generates random number between 0-1 to make it between 0-100 simply multiply it with 100.

### VARIABLES
A variable holds a value in computer memory.<br>
var is the keyword used to declare a variable, it is followed by a variable's name.<br>
Initializing a variable consists of attributing it a first value with =, as long as a variable is not initialized its value is set to undefined.<br>

var keyword indicates simple variable, available in function scope or as global variable.<br>
let keyword declares variable solely in block scope, block scope can be an if statement scope for example.<br>
const keyword creates constant variables, meaning their value cannot change, available in block scope only.

The typeof keyword returns in string format the type name of following.

### CONDITIONS
if statement executes code in following block(code between {}) if its statement is true.<br>
else if statement executes code in following block if prior statements were false and its statement is true.<br>
else statement executes code in following block if all prior statements were false.<br>
Statements with value false, 0, '', null, undefined, NaN are all considered false.<br>
switch statement replaces all the above, its use is only considered good practice for huge else if structures.<br>
if, else if and else statements always need a following {} even if only one following line.

Comparison operators can be used inside conditions.<br>
Comparison operators without type coercion; ===(equal) <==(smaller than or equal) >==(bigger than or equal) !==(not equal) <(smaller than) >(bigger than)<br>
Type coercion is not recommended and means for example "0" == false -> true<br>

Logical operators can be used to add multiple conditions to one statement.<br>
Logical operators: &&(and) ||(or) !(statement)(not)<br>
() parentheses can be used to make multiple conditions independent of the others and group them.

Short-circuit evaluation consist of "X = Y || Z" whereby X equals Y if it is true and equals Z if Y is false.

Ternary operators allow a short-cut for if-else statements and consist of "statement ? action1 : action2" whereby action is executed if statement is true else action2 is executed.

### FUNCTIONS
Functions allow grouping code together and associating it with one task, making it reusable and more readable.

Function declaration consist of function keyword followed by functionName and () containing function parameters and {} containing code action.<br>
Another way to declare a function, called function expression, goes as follows 'const functionName = function(parameters) {code};'<br>
Another way to declare a function is called arrow function, goes as follows 'const functionName = (parameters) => {code};' or if only one parameter "const functionName = parameter => codeThatReturnsWithoutUseOfReturnStatement"<br>
To declare a function without assigning it a name, both function expression and arrow function can be used by not making it equal to a variable, this can be useful when declaring a small function as callback function.

Functions are called with 'functionName(functionParameters)'.<br>
Parameters can contain default values, meaning a value is given if not defined when calling, by making 'parameter=defaultValue'. If a parameter is not defined and default value neither it will be equal to undefined.<br>
Functions return a value that you can define, if no return statement is specified 'undefined' is returned.

Functions can be viewed as objects too, they can be assigned to other variables like function pointers, they have the 'name' property the toString() method (to transform its code into a string),...<br>
Functions can also become parameters of another function and be called inside that other function, this is called a callback function.

### SCOPE
A scope defines where variables are accessible.<br>
Blocks group code between {} but also defines scopes.

Glabal variables are variables declared outside of any block and are as a result accessible in all scopes. They are considered bad practice, if still used best to start its name with g_.<br>
If a variable is declared inside a function it is tied to the scope of that function block and is called local variable.<br>
let and const declared variables contrary to var, can be limited to an if scope if declared in it, while var would be accessible in whole function scope if declared inside an if scope.

### ARRAYS
Allow for storing multiple elements into one variable.<br>
Declared as such "variable = [x, y, z, ...];".

Elements in array can be accessed using an index like so "arrayName[0]", here the 0 index indicates the first element, index 1 the second element and so forth.. Trying to access an out of range element returns 'undefined'.<br>
const arrays cannot be reassigned a new array but the elements inside the initial array can be transformed.

The .length property returns the number of elements in the array.<br>
The .push(element) method allows you to add elements at the end of the array.<br>
The .pop() method allows you to delete the last element at the end of the array.<br>
Other methods available are .join()(array into one string), .slice()(returns part of the string), .shift()(remove first element), .unshift()(add new first element)....<br>
All methods can be found here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

Arrays are passed-by-reference as function parameters, meaning that if functions transform an array passed as argument that array will also have changed outside of the function.<br>
Arrays can contain as element other arrays this is called nested arrays.

### LOOPS and ITERATORS
A loop does an action until a condition is met.<br>
The syntax of for loop goes as follows "for (variable-declaration; condition-check-at-each-round; single-line-action-executed-at-each-round) { actions }", usually used to loop over arrays whereby the declared variable is an index that gets incremented during the single-line-action until it gets to the array length.<br>
The syntax for a while loop is simply "while (condition-checked-at-each-round) {actions} ".<br>
The do-while loop does the actions at east one time even if the condition is instantly not met, its syntax goes as follows "do { actions } while (condition)".
The break keyword allows to exit a loop.

Iterators are array methods that enable looping over the array.<br>
The .forEach(callbackFunction) method returns undefined, takes a callbackFunction with one parameter (arrow function is great in this case), this callbackFunction will be executed onto each array element.<br>
The .map(callbackFunction) method returns a new array whereby the callbackFunction made changes for each array element.<br>
The .filter(callbackFunction) method returns a new array, must take a callbackFunction that returns true or false, this function will be called on each array element, if the function return false it filters the element out of the function.<br>
The .findIndex(callbackFunction) method returns the index for the first element the callbackFunction returns true on.<br>
The .indexOf(value) method returns the index of first encountered array element equal to parameter value.<br>
The .reduce(callbackFunction) method returns one value. The callbackFunction takes two parameters(accumulator, currentValue), initially the first value and second value of the array or a default starting value (indicated as second argument of reduce) and the first value of the array, the callbackFunction will return a value, this value will be the accumulator value of next iteration together with the next element, until arriving to the last element whereby .reduce() returns the final accumulator value.<br>
The .some(callbackFunction) returns true if at least one of the array's elements passes through the callbackFunction with true returned.<br>
The .every(callbackFunction) returns true if all of the array's elements passes through the callbackFunction with true returned.<br>
Other iteration methods can be found here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods.

To loop over object use for...in statement like this "for (variableName in object) {actions}" whereby the variableNames equal the keys inside the object.

### OBJECTS
Objects allow to accomodate and manipulate related data, like a real life object it has attributes/properties(variables) and maybe actions(methods/functions).

The variables contained in an object are defined as key-value pairs separated by commas "key : value", the key can be used like an index "object.key" or "object[key]"(useful when key is a string) to access the variable value inside the object.<br>
To add a new attribute assign a value to a new key "object.newKey = value;". To delete an attribute use the delete keyword like this "delete object.key;".

Methods/functions-inside-an-object are created like this "name(parameters) {actions}" and separated by commas, avoid using arrow functions as those do not work with the 'this' keyword.

Objects are passed-by-reference as function parameters, meaning that if functions transform an object passed as argument that object will also have changed outside of the function.<br>
Objects can contain as property other objects.<br>
const objects cannot be reassigned new attributes but the existing attributes are mutable.

To use the object attributes or methods inside an object method use the 'this' keyword like this "this.attributeName" or "this.methodName()".

Private attributes and methods do not exist in Javascript, though it is possible to use the naming convention whereby the attribute/method name starts with '_' to indicate it is intended to be private.<br>
Attributes that are intended to be private can have set and get methods to set them a value and get their value, javascript has the 'set' and 'get' keyowrds to create those methods. The convention is to have a private attribute like this '_attribute' and set/get method 'set attribute() {}' or 'get attribute() {}', to call those methods object.attribute. Those set and get methods allow making checks before performing the wanted action.<br>

To make an object reusable we create a factory-function, a factory-function returns an object and can contain parameters that will set attributes inside the returned object if the keys inside the object have the same names as the function parameters (this is called property value shorthand).

Destructured assignment extracts the value of one or more object attributes like this "var { attribute1, attribute2 } = object", whereby attribute1 and attribute2 contain the associated values and can be used as variables.

Objects also have built-in methods, such as .keys(), .entries(), .assign() that can be found here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods.

### CLASSES
Classes allow the creation of object templates, thus being able to assign a default object to multiple variables, while the creation of one object is only assigned to one variable.

Classes have a constructor function, which usually instantiates its attributes and is called each time it creates a new instance/object of its class.<br>
When instantiating a class to a variable, the new keyword has to be used with class and its constructor arguments.

Similarly as with object for private attributes start them with _ and use get/set functions to access them.

Classes can heritate from other classes meaning, it the child class heritates all the parents class's attributes/methods, this can be done with the extends keyword and calling first in constructor of child class the parent constructor with super(args).

Static methods are like private methods, they are indicated by the keyword static and are only available inside the class never outside the class.

### RUNTIME ENVIRONMENT
For the environment the program will be executed in, often nodejs and chrome are used.<br>
For javascript front-end applications, chrome or other browsers can be used.<br>
For javascript back-end applications, nodejs is used.<br>
Full-stack applications use both nodejs and a browser.

To compile in nodejs environment use "node file.js".

### MODULES
Modules consist of .js files with javascript code(functions/variables) that can be exported to other files, so those other files can import and use the imported code. This is usual to make code readable through its separation/categorization.<br>
Depending on runtime environment modules are exported/imported differently.<br>
When using modules in .HTML script tag have an additional attribute set to module.

Modules in nodejs:
To create a module, have a file with functions, the functions you want to export have to become attributes of the module.exports object.<br>
To import a module instantiate a variable, that will hold all the exported functions as attributes, with require(pathToModule).<br>
Object destructuring can be used to selectively import from a module, like this "const { selectifFunctionToBeImported1, selectifFunctionToBeImported2, ... } = require(pathToModule)"

Modules in ES6:
To export use the export keyword before the function's name you want to export or like this "export { function1, function2, ... }".<br>
To import use the import keyword like this "import { function1, function2, ... } from pathToModule".<br>
Importing functions with same name from different modules lead to a problem that can be resolved by renaming the function like this "export { function1 as newName  }".<br>
"export default function/variable" is used to export one function/variable, this can be an object containing multiple of them, when importing, it can have a name of choice and thus not necessitate object destructuring.

### PROMISES
Making network or database requests can be time consuming, a solution to this is to do other things while waiting. <br>
Asynchronousity like multiple threads allow doing just that and in javascript this is possible through promise objects.

A promise is an object that represents the potential outcome of an asynchronous operation. <br>
A promise can hold different states;
* pending (waiting for the operation to terminate)
* settled (not pending anymore), can be segregated into two states:
	* fulfilled (the operation has terminated successfully and the promise holds a resolved value)
	* rejected (the operation has failed and the promise holds the reason of failure)

For asynchronous code.<br>
Usually a function is made that returns a promise object.<br>
Promise objects hold one executor function.<br>
An executor function contains two function parameters (resolve and reject, each has one parameter and are not self-made), herein the time consuming operation is made.<br>
As the name implies resolve function is usually called inside the executor function if promise becomes fulfilled and reject if promise becomes rejected.<br>
The promise object contains the .then method, this method contains two function parameters (onFulfilled and onRejected, each contain one parameter and are self-made thus can have random name).<br>
As the name implies onFulfiled is called when resolve is called and onRejected when reject is called inside the executor function, onFulfilled/onRejected reveive the resolve/reject parameter as parameter.<br>
While the promise is pending, following code operations continue asynchronously, once promise is settled onFulfilled/onRejected function gets executed and afterwards code executor goes back where it left off.<br>
Another syntax for similar behavior is to use .then method with only one parameter, namely onFulfilled function, and use a second method .catch that contains the onRejected function.

Chaining multiple promises is called composition. This can be done having onFulfilled/onRejected function return another promise. The .then method calls can be done continuously on the first promise object, thus they should not be nested which makes the code more readable.<br>
Promise.all() takes as argument an array of promises, allowing to associate one then method to all of them, leading to fulfillment if all promises fulfill and rejection if at least one promise rejects.

### ASYNC AWAIT
Is syntax for handling asynchronous actions. It does not provide new functionality but more readable code it is syntactic sugar.

async keyword can be used in front of function declaration, this function will return a promise, if in function a simple value is returned this value will be considered the resolved value of the promise.<br>
Inside an async function the await keyword can be used, this is used in front of promise call and makes sure the program halts inside this function while the promise is pending, once the promise is resolved it returns it and the resolved value can be used inside that function.<br>
An async function allows asynchronous code not only through a promise but a whole function that can make multiple promise calls and wait for them inside the function with await keyword, this allows for way more readable code than chaining .then methods.<br>
To catch an error the .catch method can be used on returned promise or try-catch-block can be used.<br>
If we are having multiple independent promises in one async function multiple solutions exist:
* the await should not be used in front of the promise call, which lead to the assigned variable equaling a pending promise, but later in the program call in front of that variable await when necessary to get the resolved value.
* do not use await but use .then
* use await Promise.all()

### REQUESTS
Requests consists of communicating with a server, is done through HTTP, the most used requests are GET, POST, HEAD, PUT, DELETE.<br>
AJAX stands for asynchronous javascript and XML, it enables HTTP request asynchronously in javascript.<br>
Else promises, async-await and fetch() function can be used for asynchronous HTTP requests.

The object XMLHttpRequest can be used to make requests. <br>
It has to be given a response type which is usually JSON "xhr.responseType = 'json'".<br>
It has to be given a function that handles the response "xhr.onreadystatechange = () => { if (xhr.readyState === xhr.DONE) return xhr.response }".<br>
The request has to be opened "xhr.open('GET', url)".<br>
The request has to be send "xhr.send(HTTPMessageBody);".<br>
Properly writing requests depends on the API you are using.

URL query strings provide more information surrounding the request.<br>
To add a query string to a url, use ? and include parameters (key-value-pairs joined by = and separated with & for multiple of them).

Requests with promises and fetch in ES6:<br>
The function fetch takes an url/api-endpoint and body specifying request method, body...<br>
The fetch function sends a request and returns a promise.<br>
The .then method can be used to act on the resolved or rejected promise, usually the resolved promise  converts response object to JSON.<br>
Converting to json with .json(), returns a promise, which can be captured by a second .then, that takes the json-reponse and handles it.

Requests using async-await, try-catch in ES8:<br>
Create an async function that contains a try and catch statement.<br>
Inside the try statement await for a fetch() request returning a promise, to send the request.<br>
After await for response conversion to json with the .json() function.<br>
After return and handle the json response.

### OTHER
CURRYING<br>
Currying is not unique to javascript.<br>
In mathematics and computer science, currying is the technique of converting a function that takes multiple arguments into a sequence of functions that each takes a single argument.<br>
The point of currying is that if you don't provide all the parameters for a function, it returns a function that tells you what's left in the list. In a way, it is a checking method to make sure that you've got everything you need before you proceed.<br>
A missing parameter function ends up equaling undefined, this could be checked with a single if statement thus I personally do not really understand the utility of currying in javascript.

HOISTING<br>
JavaScript Hoisting refers to the process whereby the interpreter allocates memory for variable and function declarations prior to execution of the code. 
Declarations that are made using var are initialized with a default value of undefined. Declarations made using let and const are not initialized as part of hoisting.

CONCURRENCY AND EVENT LOOP<br>
Thanks to the event loop, JavaScript is a single-threaded, event-driven language that can run non-blocking code asynchronously. <br>
The Event Loop can be summarized as: when code is executed, it is handled by the heap and call stack, which interact with Node and Web APIs.<br>
Those APIs enable concurrency and pass asynchronous messages back to the stack via an event queue. <br>
The event queue’s interaction with the call stack is managed by an event loop. All together, those parts maintain the order of code execution when we run asynchronous functions.


## JAVASCRIPT FREE TUTORIALS
### LINES and COMMENTS
; -> at end of line indicates the end but is not mandatory<br>
// -> single line<br>
/* */ -> multiple lines

### VARIABLE
Variables can take any type as Javascript is loosely typed.<br>
Different primitive types: number, string, boolean, null, undefined, any, object, array, Function.

var keyword is used in front of variable name at declaration to indicate simple variable, available in function scope or as global variable.<br>
let keyword declares variable solely in block scope.<br>
const keyword creates constant variables, meaning their value cannot change, available in block scope.

All types have access to different methods.<br>
Strings can be concatenated with +.<br>
Strings are immutable you can not change a single char inside it, only the whole string at once can be changed.<br>
Push and pop methods can make arrays dynamic.<br>
Date objects contain a number that represents miliseconds since 1 January 1970 UTC.<br>
Primitive values are passed by copy/value and objects by referene.<br>
typeof keyword is used to receive the current type of a variable.

Objects can also be created which are considered as one variable but contains multiple variables, they work like python dictionnaries..<br>
Object.freeze(objectname) can be used to make the variables inside the object constant.<br>
Classes contain variables and methods (functions that use those variables, to access those variables this keyowrd is used), a constructor also exist that is called at construction and can take parameter values.<br>
With extend keyword classes, heritage from another class is possible, to call the parent class contructor use super().

Spread operator consist of ...variable as keyword, it allows to extract the inside of string/array/object.<br>
If string to array [..variable, ...variable2] it will transform each letter of the string into strings inside an array.<br>
If array to array [..variable, ...variable2] it extraxts each element in the array into elements in the new array.<br>
If object to object {..object1, ...object2} it extracts each variable in the object into new object.<br>
One can also change a value that has just been spread from an object like this {..object1, objectVariable:newValue}.<br>
With ! you can call the opposite value of a variable like this {..object1, objectVariable:!objectVariableValue}

### ARITHMETIC
+, -, /, %, *<br>
+=, -=, /=, %=, *= -> operator on self

### FUNCTION
Functions are indicated with function keyword, it can take parameters, perform actions with them and return a value, if it does not return a value, it returns undefined.<br>
A lot of built-in functions and methods already exist.

Map function on arrays, performs function on each element inside the array, transforming it.<br>
Filter takes function that returns a boolean and decides to remove elements from the array or not.<br>
Reduce adds on all the elements in an array returning one.

Functions can take other functions as parameters which is also called callbacks.<br>
Default parameters take in a default value with = operator.<br>
Rest operator consist of ...arg as function parameters and means undefined/unlimited number of parameters for the function.

Anonyomous functions do not have a name but are given as value to a variable, the variable thus becomes the function and becomes like a function pointer, this is confusing but part of javascript.<br>
Arrow and ternary functions allow for shorter syntax of functions and are useful for non-reusable-functions used as parameters.

A generator function is indicated with the function* keyword.<br>
Generator functions yield values back, meaning it returns multiple times instead of one time. <br>
A variable equaling a generator function, becomes a generator object, whereby the multiple variables inside the generator object can be accessed with next method until it equals undefined.

### LOOP and CONDITIONS and COMPARISON LOGICAL OPERATORS
for can be used to loop over an array and can be used as usual with an index.<br>
while loop are also possible.<br>
do while loops allow you to use a while loop whereby the loop gets entered at least one time.<br>
break keyword breaks out of the loop and continue restarts the loop.<br>
if, else if, else conditions exist.<br>
Comparison operators without type coercion; === <== >== !== < ><br>
Type coercion is not recommended and means for example "0" == false -> true<br>
Logical operators; && || !(statement)

### EXPORT IMPORT 
export as keyword can be used in front of functions/variables that you want to use in another file.<br>
import keyword must than be used into this other file to import the "exported" functions/variables from the first file.<br>
You can import all or only certain functions/variables from that file. <br>
You can also import as a certain name, meaning the imported functions can only be accesed through this name, avoiding function/variables with duplicate names.
export default means you only export one element from the module.

### PROMISES and SYNC AWAIT and FETCH and ERRORS
Javascript does not contain multiple-threads, but it can send an external request and while waiting for a response execute other code until the response arrives and the single thread comes back to it, this is called an event loop and makes us gain time.

Promises are useful for external actions that take time, such as making a request to an API, the promise may hold a value at some point in time or not, it promises a value will come.<br>
A promise is an object, that takes one parameter, this parameter is a function, <br>
this function takes two parameters (resolve and reject), this function performs an action that can succeed or fail, <br>
if it succeeds the promise gets resolved else it gets rejected, this is indicated in code by using the parameter functions (resolve and reject) that can take an arbitrary number of parameters.<br>
The promise object has a then method that takes a function that gets executed if the promise got resolved, this function thus takes the same number of parameters as the resolve function did.<br>
The promise method also has a catch method that takes a function that gets executed if the promise got rejected, this function thus takes the same number of parameters as the resolve function did.<br>
Promise.all function takes as argument an array of promises and calls all of them simultaneously, they will all have the same following then() and catch().

Async keyword used in front of functions, indicates that the content of the function will contain the await keyword and needs to be handled asynchronously.<br>
Await keyword allows to wait for the promise to be returned, while it waits for the promise it continues to execute code outside of the asynchronous function, and once the promise has returned it comes back to the await keyword to take the final value of the promise and continue the asynchronous function. <br>
Without the await keyord the promise without its final value is instantly returned.<br>
If the promise gets rejected the error won't be catched, the solution is to use the try-catch statement inside the asynchronous function to catch the error in case of a rejected promise.

The Fetch API provides an interface for fetching resources. The fetch method can send http requests to APIs for example.<br>
The first and only mandatory parameter of the fetch function is the URL to the resource you want to fetch, the second argument is by default an HTTP GET request. <br>
The second argument is an object representing an HTTP request, whereby HTTP method, headers, body, ... can be adapted.<br>
When sending a body, set in headers: Content-Type: application/json, in body set an object that you transform into json with JSON.stringify function.<br>
Fetch will return a promise, if the promise got resolved a response object containing the HTTP response is returned. <br>
To check if an HTTP error got returned the response.ok can be verified.<br>
To view the json body of the response we call response.json() which also returns as a promise if resolved the parsed JSON.

Try-catch statement can be used to catch errors. Whereby if a code gets generated inside the try scope, code inside the catch scope gets executed.
