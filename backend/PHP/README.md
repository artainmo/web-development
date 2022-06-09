# PHP

## Table of contents
- [Codecademy course](#Codecademy-course)

## Codecademy course

### Introduction

PHP (recursive acronym for PHP: Hypertext Preprocessor) is a widely-used open source general-purpose scripting language that is especially suited for server-side web-development and can be embedded into HTML.<br>
PHP was created in 1994 and is one of the foundational technologies of web-development. For new websites newer technologies are usually used, but PHP maintains ground by still being present in foundational widely-used content management systems such as Wordpress.

PHP allows dynamic content by being easily added to HTML in between `<?php ?>`.<br>
But PHP can also be written in PHP scripts that log in the terminal, within files with extension `.php`, those scripts need to start with `<?php` and do not necessitate a closing tag.

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



