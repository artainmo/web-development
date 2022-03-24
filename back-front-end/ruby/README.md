# RUBY

## Table of contents
- [Codecademy course: learn Ruby](#CODECADEMY-COURSE-LEARN-RUBY)
  - [Introduction](#Introduction)
  - [Control flow](#Control-flow)
  - [Loops and iterators](#Loops-and-iterators)
  - [Arrays and hashes](#Arrays-and-hashes)
  - [Methods, blocks and sorting](#Methods-and-blocks-and-sorting)
  - [Hashes and symbols](#Hashes-and-symbols)
  - [Refactoring](#Refactoring)
  - [Blocks, Procs and Lambdas](#Blocks-and-Procs-and-Lambdas)
  - [Object oriented programming](#Object-oriented-programming)

## CODECADEMY COURSE LEARN RUBY
### Introduction
Ruby is a flexible programming language often used in webdevelopment with the Ruby on Rails framework.<br>
Ruby is a high-level, object-oriented, language considered easy to use.<br>
Ruby is interpreted, meaning a compiler is not necessary. The interpreter runs the code in the console.

Ruby variables are loosely typed and can contain as data types; numbers, booleans or strings.

Arithmetic operations; +, -, *, /, **(exponentiation, fractions allow roots), %(modulo, remainder of given division).

puts and print can be used like this to print to the console `puts "hello world"`, the difference being that puts comes with a terminating /n.<br>
For string interpolation set the variable name in between #{}.
gets can be used to get input from a user, its method .chomp removes the trailing /n.<br>

Ruby consists of objects and those contain a variety of methods.<br>
For example strings contain the length method, which returns the number of characters in a string: `puts "Hello World".length` in console gives 11.<br>
Other methods on strings are reverse, upcase, downcase, capitalize(first letter uppercase only)...<br>
variable1.method! is the same as variable1 = variable1.method, through the use of '!'. 

Single-line-comments are indicated with # and multi-line-comments like this:<br>
<pre>=begin
dwdqwdwqd
dwdwq
=end</pre>

### Control flow
If statements take an expression, if that expression is true the code following 'if' gets executed.<br>
The statements 'elsif' and 'else' can also be used and speak for themselves, contrary to most other languages the 'end' keyword is used to indicate the end of the control flow.<br>

<pre>
if !true
  print "It is true"
elsif false
  print "It is false"
else
  print "It was neither?"
end
</pre>
To verify if a condition is false, 'unless' can be used instead of 'if' with ! operator.

Relational operators in Ruby are ==, !=, >, <, >=, <=.<br>
Logical operatorsin Ruby are &&, ||.<br>
Parantheses can be used to divide conditional expressions.

### Loops and iterators
The while loop keeps executing code between 'while' and 'end' keyword until its condition becomes false.<br>
The until loop keeps executing until its condition becomes true.<br>
Infinite loops are bugs that occur from loops that never end.
<pre>
while i < 10
  puts i
  i += 1
end
</pre>
Use for loop to display 1 to 15
<pre>
for num in 1..15
  puts num
end
</pre>

In Ruby, curly braces ({}) are generally interchangeable with the keywords do (to open the block) and end (to close it).<br>
; must not be used at end of line, but can be used to indicate multiple lines of code into one.<br>
loop keyword can be used to create a loop and must be stopped with the break keyword.
<pre>
loop { i += 1; print "#{i}"; break if i > 5; }
</pre>
The next keyword can be used to skip over certain steps in the loop.

Objects that hold multiple values such as arrays can be looped over using the .each method.
<pre>
object.each { |item| puts item }
</pre>

`10.times { print "Chunky bacon!" }` times method can be used to loop a predefined number of times.

### Arrays and hashes
Arrays can contain different objects and are declared like this: `arr = [1, 2, "dwdw", true, [10, 9]]`.<br>
To access the second value in the array `arr[1]` with first element being at index 0.<br>
.push method can be used to add new values to the array.

Hashes are sort of like JavaScript objects or Python dictionaries. They are a collection of key-value pairs.
<pre>
person = {
  "age" => 25,
  "name" => "Jonathan"
}

puts person["age"]
</pre>
To declare an empty hash one can do it with `{}` or `Hash.new` and to add a new key-value pair `hashName[keyName] = value`.<br>
To iterate over a hash `hash.each { |key, value| puts value }`.

### Methods and blocks and sorting
Methods in ruby are like functions in other languages, reusable blocks of code.
<pre>
def add(num1, num2=3) #num2 if not given will have default value 3, this is called a default parameter
  return num1 + num2
end
</pre>
Splat arguments are arguments preceded by a *, which tells the program that the method can receive one or more arguments.

If a method does not have an explicit return statement the result of the last line is returned.

Blocks are nameless methods, similar to anonymous functions in javascript and lambdas in python, they are not reusable, found in method parameters such as each method and inside `{}` or 'do end'.

To sort arrays (in ascending order) the .sort method can be used.<br>
The combined comparison operator (<=>) returns 0 if both values are equal, 1 if first value is greater than second and -1 if second value is greater.<br>
To sort in descending order we will have to define the sorting function like this `books.sort! { |firstBook, secondBook| secondBook <=> firstBook }`.

### Hashes and symbols
.each method can be used to iterate over hashes.<br>
When trying to access a key that does not exist on a hash, instead of receiving an error, the value `nil` will be returned.<br>
You can replace nil by a default value by declaring the hash like this: `my_hash = Hash.new(default_value)`.

Symbols are names/labels that are not strings, they are their own type, they are usually used in hashes as keys it makes hash key lookups faster.<br>
Symbols consist of a colon followed by a name `:mySymbol`.<br>
The .to_sym/.intern methods are used to transform a string to a symbol and .to_s the inverse.

Today hashes and symbols are written differently but it still is useful to be aware of the past terminlogy to be able to read old code.
This is how hashes and symbols are today:
<pre>
movies = {
  movie1: "Good", #The colon is put at end to indicate a symbol and arrow is not necessary anymore
  movie2: "Bad"
}
</pre>

.select method can filter out hashes keys by only selecting and returning ones that pass a certain condition.<br>
`good_movies = movie_ratings.select { |key,value| value > 3 }`

Instead of using .each, hashes allow to also use .each_key or .each_value and the ability to remove a key-value-pair is possible with the delete method.

### Refactoring
Refactoring consists of restructuring code in a readable and as a consequence maintainable way.<br>
Ruby prioritizes readability over program optimization, meaning it is easy to write but not the fastest, in terms of code execution, or memory sparing language.

'If' statement can be written in one line like this: `puts "It's true! if true"`.<br>
'if/else' statement can be replaced in one line with a ternary `puts 3 < 4 ? "Yes" : "No"`.
'if/elsif/else' statement can be replaced with case statement.
<pre>
case greeting
  when "English" then puts "Hello!"
  when "French" then puts "Bonjour!"
  when "German" then puts "Guten Tag!"
  when "Finnish" then puts "Haloo!"
  else puts "I don't know that language!'"
end
</pre>

To assign a value to a variable only in the case the variable equals nil the ||= operator is used `favorite_book ||= "Cat's Cradle"`.

The methods upto and downto can be used on both letters and numbers `"L".upto("P") {|item| puts item}`.

.push method can be used interchangeably with the << operator to shove a new value at the end of an array.<br>
The concatenation operator << can also be used interchangeably with + operaotr to join two strings together.

### Blocks and Procs and Lambdas
A Ruby block is just a bit of code that can be executed. Block syntax uses either do..end or curly braces ({}).

.collect or .map is a method that applies a block to each item in an array.

Yielding allows a block to return mutliple times here is an example:
<pre>
def yield_name(name)
  puts "In the method! Let's yield."
  yield("Kim")
  puts "In between the yields!"
  yield(name)
  puts "Block complete! Back in the method."
end

yield_name("Eric") { |n| puts "My name is #{n}." }

------------------------
In the method! Let's yield.
My name is Kim.
In between the yields!
My name is Eric.
Block complete! Back in the method
</pre>

A proc is a block saved inside a variable/object that has methods, works like a function pointer, defined like this:
<pre>
cube = Proc.new { |x| x ** 3 }

[1, 2, 3].collect!(&cube) # & is used to convert proc into the block it holds 

cube.call(3) # The call method is used to call the block inside the proc
</pre>
Methods are often represented by symbols, symbols can be converted to procs and its block like this for example: `strings_array = numbers_array.map(&:to_s)`, with to_s being a method on integers that transform to string.

Lambdas are quite similar to procs and declared like this : `lambda {|param| puts param }` and the block it contains is accessed with &lambdaName or .call method.<br>
A lambda throws an error if it does not receive the correct mumber of arguments while procs will give the value nil to missing arguments.<br>
When a proc returns the whole block it is in will return, with a lambda the last line of the block will be returned independent from the lambda's return.<br>
All in all I think lambdas provide behavior that is more to be expected.

### Object oriented programming
A class is an object that contains attributes (variables, key-value pairs) and methods (blocks/functions).
They are defined like this:
<pre>
class Person
  def initialize(name) #initialize is like a constructor function, called with .new method.
    @name = name;
  end
end

matz = Person.new("Yukihiro");
</pre>

Class attributes can be defined with different starting symbols, the $ symbol makes it global and thus directly accessible from outside the class.<br>
The @ symbol makes it private and tied to the class instance while the @@ symbol makes it also private but tied to all class instances thus it enables for example to count the total number of instances of a specific class.

Inheritance allows reusability of classes inside other classes, following the DRY rule. All methods and attributes of one class can become accessible in another class through inheritamce which is indicated like this for example `class MyApp < Application`.<br>
If the parent and child class have a similar method name, the child method will override the parent one, the child method can call the parent method with the super keyword.

Methods inside classes can be indicated as public or private, private meaning the method can only be used inside the class, this is indicated with the public or private keywords making all methods underneath of its type.

Get and set methods allow to get or set the value of an attribute in a class, one faster way to write such a function is with attr_reader and attr_writer,
here is an example:
<pre>
class Person
  attr_reader :name #This allows us to get the value of attribute @name
  attr_writer :job #This allows us to set the value of attribute @job
  attr_accessor :age #This allows us to both get and set the attribute @age
  def initialize(name, job, age)
    @name = name
    @job = job
    @age = age
  end
end
</pre>

Modules are similar to classes besides that no instances of them can be made, they are only used to store constant values and methods, they are similar to namespaces or libraries in other languages.<br>
Modules are declared like this: `module ModuleName end` and its content is called using the scope resolution operator `ModuleName::MethodName`.<br>
Built-in modules such as Math already exist and do not have to be imported, other modules have to be imported using `require ModuleName` and others can be created by yourself.<br>
Modules can also be imported using the `include` keyword instead of require and this removes the need for the scope resolution operator and thus allows direct access to the module's methods and constants, usually this is not recommended as it can lead to namespace pollution.<br>
A mixin is a class that includes a module (include ModuleName), enabling use of the module's methods and constants inside the class.<br>
A class that extends a module (extend ModuleName), makes the class inherit the module's methods and constants.

## SINATRA FREE TUTORIALS
### Introduction
http://sinatra-org-book.herokuapp.com/
http://sinatrarb.com/

