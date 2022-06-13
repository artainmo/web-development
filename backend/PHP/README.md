# PHP

## Table of contents
- [Codecademy course](#Codecademy-course)
  - [Introduction](#Introduction)
  - [PHP variables](#PHP-variables)
  - [PHP functions](#PHP-functions)
  - [PHP arrays](#PHP-arrays)
  - [Conditionals](#Conditionals)
  - [Loops](#Loops)
  - [HTML-forms-with-PHP](#HTML-forms-with-PHP)
  - [PHP form validation](#PHP-form-validation)
    - [Introduction to form validation](#Introduction-to-form-validation)
    - [Regular expressions](#Regular-expressions)
    - [Form validation with PHP](#Form-validation-with-PHP)
  - [Classes and objects](#Classes-and-objects)

## Codecademy course

### Introduction

PHP (recursive acronym for PHP: Hypertext Preprocessor) is a widely-used open source general-purpose scripting language that is especially suited for server-side web-development and can be embedded into HTML.<br>
PHP was created in 1994 and is one of the foundational technologies of web-development. For new websites newer technologies are usually used, but PHP maintains ground by still being present in foundational widely-used content management systems such as Wordpress.

PHP allows dynamic content by being easily added to HTML in between `<?php ?>`.<br>
But PHP can also be written in PHP scripts that log in the terminal, within files with extension `.php`, those scripts need to start with `<?php` and do not necessitate a closing tag.<br>
PHP code is executed with `php filePath`.

In PHP the `echo` keyword is used to output text, it can output HTML text with HTML tags.<br>
An instruction in PHP is called a statement and needs to be ended by a `;`.<br>
Comments can be indicated on one line with `#`, `//` or on multiple lines or part of line with `/* */`.

### PHP variables

Variables are declared with a $ in front, like this `$name_variable`.<br>
Variables are assigned a value with the `=` operator, they can be used as much as wanted in the code, and during execution the variable gets replaced with the value it holds.<br>
In PHP usually the snake case is used to declare multiple word variables meaning a _ is used in between each word instead of separating words with a capital first word letter.

Strings are defined between `" "`.<br> 
" can be indicated in a string like this \" and a new-line like this \n.<br>
Strings can be concatenated with the . operator like this `"string 1" . "string 2"`, the .= operator can be used to concatenate to oneself like this `firstname .= lastname`.<br>
Other variables can be put inside strings like this `Hello world I am ${name}`.

The `=` operator between two variables lets the left variable become a copy of the right variable, while the `=&` operator lets the left variable point on the right variable in memory space, meaning they will both always have the same value, a change to one of the two variables will also appear in the other.

Number types are integer (whole) and float (decimal) in PHP, a division between two integers that results in a decimal will appropriately return a float  in PHP contrary to most other languages.<br>
Mathematical operators are -, +, *, /, ** (exponentiation), % (modulo, returns the remainder of a division). Operations can be chained and put between parentheses to order operations, knowing that parentheses come first, followed by exponentiation, multiplication/division and addition/substraction.<br>
PHP allows shorter syntax for operations on self with `variable -= 2`, +=, *=, /=... Or addition or substraction of one with `variable--` or ++.

### PHP functions

#### Custom functions
A function is a set of instructions we package as a unit, often with a name, so that we can reuse it.

A function is defined and called like the following.
<pre>
function sayHello($name, $greeting="Hello ") {
  return "${greeting} ${name}";
}
echo sayHello("Arthur"); //Terminal output: Hello Arthur
</pre>
Default parameters are parameters that take a default value if one is not given.<br>
A function without explicit return statement returns the value NULL.<br>

Each function has its own local scope. This means that variables defined within the function’s code block can only be accessed within the code block itself and variables defined outside the code block cannot be accesed within the code block besides if they are global variables.<br>
Global variable come with the trade-off of name-pollution, in general it is recommended to start global variable names with g_, they are defined with the global keyword before declaring the variable name, contrary to other languages they are called within a function so that a search is made in the global instead of local variables.<br>

A parameter usually receives a copy of the given value, meaning changing this value in the function will not change the given parameter outside the functon, a parameter can also be passed by reference by being prepended with &, this would lead to changes in function also creating changes to the passed parameter outside the function, this can be of utlity when a function should have multiple actions but can only return once.

#### Built-in functions
The `gettype()` function returns the data-type of a variable while the `var_dump()` function gives even more information about the variable.

String manipulation functions exist such as str_rev(string) to reverse a string, strtolower(string) to make a string all lowercase, str_repeat(string, number) to repeat a string a number of times and substr_count(string, string) returns the number of times a substring appears inside a string.

Number manipulation functions exist such as abs(number) which returns the absolute value of a number meaning negative numbers become positive, the function round(number) which round a decimal to the closest whole number and rand(number, number) which returns a random number.

More built-in function can be found in the PHP documentation: https://www.php.net/manual/en/langref.php.

### PHP arrays
An ordered array is a data-structure representing a list of ordered data, those data can be of different types, an array can even contain another array which is called nested arrays.<br>
The location of an element inside the array is known as index, which starts with the number 0.<br>

The function `array(value1, value2, value3...)` creates and returns an array, while an array can also be created like this `[value1, value2, value3...]` and the function `count(array)` returns the number of elements in an array.<br>

An array can be printed with echo by transforming it into a string with `implode(", ", $array)` or we can display it using the function `print_r($array)`.

Individual values inside an array can be accessed like this `array[1]` to access the second value as index 0 would refer to the first value.<br>
The functions `array_pop($array, value1, value2...)` and `array_pop($array)` can be used to add values to end of array or remove the last value of array respectively.<br>
The function `$array1 = array_shift($array2)` returns the first value of and removes it from $array2 while the function `array_unshift($array, value1, value2...)` adds values to front of array and returns the new array's length.

While ordered arrays contain a numbered index, associative arrays contain keys instead of indexes, with keys being a chosen label to access a value, and the key-value-pairs being called maps.<br>
Associative arrays are like objects with solely attributes in other languages.

Like ordered arrays, associative arrays can be declared with `array(label1 => value1, label2 => value2...)` or `[label1 => value1, label2 => value2...]`.<br>
Like with ordered arrays, associative arrays can be printed with echo and emplode() or with print_r(), but only print_r will display the keys next to the values as echo emplode() only displays the values.<br>
Values inside associative arrays can be accessed with square braces and the key `$array[key]`.<br>
To remove a map (key-value-pair) use the function `unset(array[key])` and to add one simply `$array[newKey] = newValue`.<br>

Ordered arrays can be considered associative arrays whereby ordered numerical keys are given automatically.

Two arrays can be joined together forming one array with all the maps of summed arrays using the + operator. 

Like simple variables, arrays can also be passed as references instead of copies to function parameters, meaning changes to the function parameters will also create changes in the array send into the function as a reference. Because references instead of creating a copy in memory space point to the same memory space.

### Conditionals
Like other languages PHP uses as conditionals if, elseif and else.
<pre>
if (statement) { 
  code to be executed if statement is true 
} elseif (statement) {
  code to be executed if statement is true 
} else { 
  code to be executed if all prior statements were false 
}
</pre>

Alternatively a switch statement can replace repetitive elseif statements.
<pre>
switch ($variable) {
  case value1:
    action;
    break;
  case value2:
    action;
    break;
  case value3: //If the variable equals value3 or value4 it will execute the same following action
  case value4:
    action;
    break;
  default:
    action;
}
</pre>

Alternatively ternary operators can replace short if-else statements into one line of code.<br>
`statement ? expression to return if statement is true : expression to return if statement is false`

Comparison operators are used inside conditional statements and evaluate to true or false.<br>
Similar to other languages PHP uses the following comparison operators: >, >=, <, <=, ===, !===.<br>
Like in javascript distinction can be made with the equal operator (== / !=) and the identical operator (=== / !==), the identical operator is more strict and predictable thus is usually preferred.

Logical operators are used inside conditional starements, similar to other languages PHP uses:
- `||` / `or` (or, returns true if left or right condition evaluates to true)
- `&&` / `and` (and, returns true if both left and right conditions evaluate to true)
- `!` (not, only takes a right operand and reverses its boolean value)
- `xor` (xor, evaluates to true if right or left operands equal to true but not both simultaneously)

Values that are considered as false are:
- Empty strings or arrays
- null, 0, "0" or undefined

### Loops
Loops allow the repetition of a code block until a certain condition is met.<br>
This repetition is referred as iterating and one code repetition is called one iteration.

If the condition that stops the loop is never met an infinite loop occurs which blocks further program execution.<br>

A while loop consists of `while (condition) { block of code }` and executes its block of code until its condition becomes false.<br>
A do while loop consists of `do { block of code } while (condition);` and executes the first iteration without verifying the condition, afterwards it functions like a regular while loop.<br>
A for loop is used to execute a block of code a specific number of times and looks like this `for (iteration variable declaration; condition that stops the loop if false; incrementing/decrement the iteration variable) { bock of code }`.<br>
The foreach loop is used to loop over each element in an array and looks like `foreach ($array as $element) { block of code executed for each $element }`, if the array is associative instead of ordered it would look like `foreach ($array as $key => $value) {block of code executed for each key and associated value}`.<br>

Inside loop-code-blocks the keyword `break` is used to stop a loop from running instantly while the `continue` keyword will skip the execution of current iteration remaining code by directly going to start next iteration.  

In HTML php tags, for loops can use a more readable syntax which consists of replacing the opening brace { with a colon `:` and the closing brace } with `endfor;`, in the same logic while loops closing brace } can be replaced with `endwhile;` and foreach loop's ending brace with `endforeach;`.<br>
When using foreach, the elements from the array in the HTML code can be accessed by using php tags around the element references, one can use the php shorthand echo opening tag `<?=$key?> <?=$value?>` to easily display the array elements in HTML code.

### HTML forms with PHP
PHP was designed as a back-end web-development language, specifically it was designed to work well with HTML by enabling dynamic generation of HTML code.

We can embed PHP scripts within HTML documents with the opening tag `<?php` and the closing tag `?>`.<br>
When using echo within HTML we are not printing to the terminal but rather generating HTML code.<br>
`<html>`<br>
` <head>`<br>
`  <title>My First PHP Site</title>`<br>
` </head>`<br>
` <body>`<br>
` <?php `<br>
`   $lucky_number = 5 * 2 - 1;`<br>
`   echo "<h1>Your lucky number is ${lucky_number}</h1>";`<br>
`  ?> `<br>
` </body>`<br>
`</html>`<br>
HTML code that contains PHP tags is not written in .html but in .php instead.<br>
One php tag does not form a local scope, functions and variables from other above tags are accessible by all underneath tags.<br>

Usually echo is used to generate HTML with php, instead the opening php tag can be changed from `<?php` to `<?=` so that echo is not necessary anymore.<br>
`<p>This HTML will get delivered as is</p>`<br>
`<?="<p>PHP interprets this and turns it into HTML</p>";?>`

PHP contains superglobals which are global variables such as `$_REQUEST`, `$_GET` or `$_POST` who hold history of made requests, get-requests and post-requests respectively, they can be accessed from anywhere in PHP tags.<br>
HTML form tags can be of a certain method indicated by the method attribute and contain input tags with a name attribute. The result of someone submitting a form can be found in superglobals, the result of someone submitting a GET form with input name 'country' for example is found in `$_GET["country"]`.<br>
`<html>`<br>
`<body>`<br>
`<form method="get">`<br>
`<input name="country" type="text">`<br>
`<br>`<br>
`<input name="language" type="text">`<br>
`<br>`<br>
`<input type="submit" value="Submit">`<br>
`</form>`<br>
`<br>`<br>
`<p>Your language is: <?=$_GET["language"];?></p>`<br>
`<p>Your country is: <?=$_GET["country"];?></p>`<br>
`<a href="index.php">Reset</a>`<br>
`</body>`<br>
`</html>`<br>

A HTML form tag can take an action attribute, it allows redirection after submitting the form, this can equal a new URL or relative file path.<br>
In this new file after the redirection the superglobals are still available with the collected data from the past form.

### PHP form validation
#### Introduction to form validation
The process of checking that the information submitted through a form adheres to expectations is called form validation.<br>
Examples are verifying if an email is indeed an email as expected or if a password is secure enough.<br>
Form validation is important for security reasons and for the website to function correctly.

The first technique we can use to validate form data is to prevent problematic inputs from being submitted in the first place. This is called client-side validation, meaning verifying data directly from the frontend. Its advantage is speed and reduced resource needs but it is unable to handle all types of validations.<br>
This is partly already present in HTML which allows to make for example some forms required, to set minimum and maximum values or string length.<br>
Javascript in plain form or using specific libraries can also be used to make more complex validations in the frontend.

Because front-end validations are not always complete and easy to bypass it is always necessary to validate in the back-end, as a rule the backend should never trust the data it receives.<br>
Server-side-validation has the advantages of enabling validation code often on machines with more computing power, it allows to write code hidden from the client and validate data in relation to datas easily accessible in the backend but not frontend.<br>
Asynchronous requests to the server can perform back-end validations before a form has been submitted, but usually a final back-end validation is done after the client submitted the form.

#### Regular expressions
Regular expressions are sequences of characters that define patterns to look for in text. They are an important tool used in validating input.

Literals is when our regular expression contains the exact text it wants to match, for example `banana` will only match `banana` or `bananas`.<br>

Alternation consists of `regularExpression1|regularExpression2` and will match text that matches the regular expression 1 or 2, the | acts as an or statement.<br>

Character sets, denoted by a pair of brackets, let us match one character from a series of characters, allowing for matches with incorrect or different spellings. For example `con[sc]en[sc]us` will match `consensus` but also `concencus`. <br>
The ^ sign can be used to not match certain character sets, for example `[^ems]at` will not match eat, mat or sat but will match cat, hat or rat...<br>

Wildcards will match any single character (letter, number, symbol or whitespace) in a piece of text. They are useful when we do not care about the specific value of a character, but only that a character exists. They are indicated with `.`, for example `I ate . bananas` will match `I ate 3 bananas` but not `I ate 34 bananas`.<br>
If we want to match an actual point we should prepend it with an escape character like this `\.`.

Ranges allow us to specify a range of characters in which we can make a match without having to type out each individual character. The regex `[abc]`, which would match any character a, b, or c, is equivalent to regex range `[a-c]`.

Shorthand character classes represent common ranges. For example `\w` named 'word character' represents the range `[A-Za-z0-9_]`, `\d` named 'digit character' represents the range `[0-9]` and `\s` named 'whitespace character' represents the range `[\t\r\n\f\v]`.<br>
Negated shorthand character classes on the other hand matches characters that are not in the character range by using the ^ sign, `\W` equals `[^A-Za-z0-9_]`, `\D` `[^0-9]` and `\S` `[^ \t\r\n\f\v]`.

Fixed quantifiers, denoted with curly braces {}, allowing indicating the exact quantity of a character we wish to match. <br>
For example `\w{3}` will match exactly 3 word characters and `\w{4,7}` will match minimum 4 word characters and maximum 7 word characters.<br>

Optional quantifiers, indicated by the question mark ?, allow to indicate a character in a regex as optional, meaning it can appear 0 or 1 time. For example, the regex humou?r matches the characters humo, then either 0 occurrences or 1 occurrence of the letter u, and finally the letter r.<br>
To match an actual question mark we can prepend it with an escape character `\?`.

Grouping, denoted with the open parenthesis ( and the closing parenthesis ), allows grouping parts of a regular expression together, and allows to limit alternation to part of the regex. For example `I love (baboons|gorillas)` will match either `I love baboons` or `I love gorillas`.<br>
Another example with quantifiers, the regex `The monkey ate a (rotten )?banana` will completely match both `The monkey ate a rotten banana` and `The monkey ate a banana`.

The Kleene star, denoted with the asterisk `*`, is also a quantifier, and matches the preceding character zero or more times. This means that the character doesn’t need to appear, can appear once, or can appear many times.<br>
For example the regex `meo*w` will match `mew`, `meow`, `meoooow`.<br>
Another useful quantifier is the Kleene plus, denoted by the plus +, which matches the preceding character 1 or more times.

The anchors hat ^ and dollar sign $ are used to match text at the start and the end of a string, respectively.<br>
The regex `^Monkeys: my mortal enemy$` will match the text `Monkeys: my mortal enemy` but not match `Spider Monkeys: my mortal enemy in the wild`, the ^ ensures that the matched text begins with Monkeys, and the $ ensures the matched text ends with enemy.

#### Form validation with PHP
Sanitizing incoming data consists of transforming it into a safe and standardized format.<br>

Different built-in functions exist in PHP to help with sanitization, such as `trim()` which removes whitespace characters at begin and end string or `htmlspecialchars()` which transforms HTML elements into entities (represents HTML elements but won't display them) which is useful to prevent attacks through HTML injections.<br>

The most powerful function for sanitizing data is `filter_var()` which takes a string and an ID representing the filtering type. For example the filtering type `FILTER_SANITIZE_EMAIL` will either sanitize an email or return false if an error occured.<br>
`filter_var()` also contains validation filters, if the string seems valid it will be returned else false is returned. An example of validation filter is `FILTER_VALIDATE_URL`.<br>
`filter_var()` also contains an optional third argument that allows the addition of conditions to validate and takes the form of an associative nested array. For example with the filter `FILTER_VALIDATE_INT` the third argument can take the following keys "min_range" "max_range".

The function `preg_match()` allows to create custom validations, it takes as first argument a regular expression string and as second argument a string to verify if it matches the regular expression pattern. It returns 1 if it matches, 0 if it does not and false if an error occured.<br>
Before using `preg-match()` it is a good idea to verify the length of the array to verify because the function is slow and excessively long inputs could slow down the server.

When storing in a database we want all the datas to be formatted in the same way, the function `preg_replace()` can find certain patterns and if necessary change them to the correct format.<br>
The function `preg_replace()` takes a regular expression, some replacement text, and a subject string. First, It searches through the subject string for instances that match the regular expression, then, it outputs a copy of the subject string that has the matched instances replaced by the replacement string.

As validation becomes more complex and associated code longer, modularity can be used by separating the validation logic from display logic.

### Classes and objects
A class is a custom type that contains related properties(variables inside class) and methods(functions inside class). Once the class is defined, we can create specific instances of it, these instances of the class are called objects.<br>
A dog object could for example have the properties color, age, breed and methods bark, eat, cuddle.

A class is defined like this in PHP:
<pre>
class Beverage {
  #Here properties are defined
  #The keyword public makes the properties accessible not only from inside but also from outside the class
  public $color, $opacity, $temperature; 

  function __construct($temperature, $color) { #Constructor is called at object instantiation and is usually used to set its properties
    $this->temperature = $temperature;
    $this->color = $color;
  }
  
  function getInfo() 
    return "This beverage is $this->temperature and $this->color.";
    #'$this' refers to the object itself and is used to access properties of the class
  }
}

$tea = new Beverage("cold", "black"); #Here we instantiate the object tea from the class Beverage with the new keyword calling the constructor
$tea->temperature = "hot"; #The property can be accessed through object->propertyNameWithout$
echo $tea->temperature;
echo $tea->getInfo();
</pre>

Inheritance consists of letting one class (we can call child class) inherit all the properties and methods of another class (we can call parent class). This prevents rewriting same code as sometimes we want to create for example a 'dog' and 'cat' class who would have partly similar content that could be inherited from a 'pet' class.<br>
A class inherits like this `class childClassName extends parentClassName {}`.<br>
Sometimes, we want to change how methods behave for subclasses from the original parent definition. This is called overriding a method. To do this, define a new method within the subclass with the same name as the parent method. Still the original overriden parent class can be called from the child class like this `parent::nameOverridenFunction()`.

Class properties can be made public or private with the `public` or `private` keywords, public means the property can be called from outside the class while private only allows the property to be accessible from inside the class. Another visibility keyword is `protected` which allows properties to be accessible from within the class obviously but also from child classes.<br>
The concept of only accessing private properties through methods is commonly referred to as using getters and setters and done like this for example.
<pre>
class Pet {
  private $name;
  
  function setName($name) {
    if (gettype($name) === "string") { #setter and getter functions allow for example to do verifications before executing the function's goal
      $this->name = $name;
      return true;
    } else {
      return false;
    }
  }
  
  function getName() {
    return $this->name;
  }
}
</pre>

Static class members always hold the same value and thus do not need to be instantiated instead they can directly be given a value within the class definition while being preprended with the keyword static. <br>
A static member is not accessed with `instantiatedObject->memberWithout$` but with the scope resolution `class::memberWith$` instead.<br>
Because static members in a class can directly be accessible with scope resolution, without instantiating the class, they act like namespaces.
