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
  - [Modules](#Modules)
- [Ruby free tutorials](#RUBY-FREE-TUTORIALS)
  - [Exceptions](#Exceptions)
  - [Read files](#Read-files)
  - [RubyGems](#RubyGems)
- [Sinatra free tutorials](#SINATRA-FREE-TUTORIALS)
  - [Introduction](#Introduction-Sinatra)
  - [Routing](#Routing)
    - [Return values](#Return-values)
    - [Accessing the request object](#Accessing-the-request-object)
    - [Filters](#Filters)
    - [Helpers](#Helpers)
    - [Halting](#Halting) 
    - [Passing](#Passing)
    - [Streaming and websockets](#Streaming-and-websockets)
    - [Redirect](#Redirect)
    - [Error Handling](#Error-Handling)
  - [Configuration](#Configuration)

## CODECADEMY COURSE LEARN RUBY
### Introduction
Ruby is a flexible programming language often used in webdevelopment with the Ruby on Rails framework.<br>
Ruby is a high-level, object-oriented, language considered easy to use.<br>
Ruby is interpreted, meaning a compiler is not necessary.<br>
The interpreter runs the code in the console, is called `ruby` and interprets files terminating in `.rb` like this `ruby fileExample.rb`.<br>
The .rb file is executed line by line like a script and can include other files or pre-existing libraries with the `require` keyword.

Ruby variables are loosely typed and can contain as data types; numbers, booleans or strings.

Arithmetic operations; +, -, *, /, **(exponentiation, fractions allow roots), %(modulo, remainder of given division).

puts and print can be used like this to print to the console `puts "hello world"`, the difference being that puts comes with a terminating /n.<br>
For string interpolation set the variable name in between #{}.<br>
`gets` can be used to get input from a user, its method .chomp removes the trailing /n.<br>

Ruby consists of objects and those contain a variety of methods.<br>
For example strings contain the length method, which returns the number of characters in a string: `puts "Hello World".length` in console gives 11.<br>
Other methods on strings are reverse, upcase, downcase, capitalize(first letter uppercase only), [0..4] or [0..-2](take part of string)...<br>
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

'If' statement can be written in one line like this: `puts "It's true!" if true`.<br>
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
The @ symbol (instance variable) makes it private and tied to the class instance while the @@ symbol (class variable) makes it also private but tied to all class instances thus it enables for example to count the total number of instances of a specific class.

Inheritance allows reusability of classes inside other classes, following the DRY rule. All methods and attributes of one class can become accessible in another class through inheritance which is indicated like this for example `class MyApp < Application`.<br>
If the parent and child class have a similar method name, the child method will override the parent one, the child method can call the parent method with the super keyword.

Methods inside classes are by default public but can be indicated as public or private, private meaning the method can only be used inside the class, this is indicated with the public or private keywords making all methods underneath of its type.

Get and set methods allow to get or set the value of an attribute in a class, one faster way to write such a function is with attr_reader and attr_writer,
here is an example:
<pre>
class Person
  attr_reader :name #This allows us to get the value of attribute @name
  attr_writer :job #This allows us to set the value of attribute @job
  attr_accessor :age, :education #This allows us to both get and set the attribute @age
  def initialize(name, job, age)
    @name = name
    @job = job
    @age = age
    @education = '19'
  end
end
</pre>

### Modules 
Modules are similar to classes besides that no instances of them can be made, they are only used to store constant values and methods, they are similar to namespaces or libraries in other languages.<br>
Modules are declared like this: `module ModuleName end` and its content is called using the scope resolution operator `ModuleName::MethodName`.<br>
Built-in modules such as Math already exist and do not have to be imported, other modules have to be imported using `require ModuleName` and others can be created by yourself.<br>
Modules can also be imported using the `include` keyword instead of require and this removes the need for the scope resolution operator and thus allows direct access to the module's methods and constants, usually this is not recommended as it can lead to namespace pollution.<br>
A mixin is a class that includes a module (include ModuleName), enabling use of the module's methods and constants inside the class.<br>
A class that extends a module (extend ModuleName), makes the class inherit the module's methods and constants.

## RUBY FREE TUTORIALS
### Exceptions
<pre>
begin
  # code that might raise an exception
rescue ExceptionClass => ErrorObject
  # code that deals with some exception defined by ExceptionClass, ErrorObject can be used to view error description with its .message attribute.
rescue SomeOtherException
  # code that deals with another specific exception
rescure
  # Exception is not specified and thus it takes all exceptions
else
  # code that runs only if no exception was raised
ensure
  # ensure that this code always runs, no matter what
  # does not change the final value of the block
end
</pre>

Raise an exception like this `raise StandardError.new "This is the error message"` or simply `raise "This is the error message"`.

### Read files
To take file content into string variable:
<pre>
fileObject = File.new("yourPath.txt")
fileString = fileObject.read
fileObject.close
</pre>
Or in one line `fileString = File.read("yourPath.txt") {|file| file.read}`

To process a file one line at a time `File.foreach("yourPath.txt") { |line| puts line }`.

### RubyGems
RubyGems is a Ruby packaging system designed to facilitate the creation, sharing and installation of libraries. Ruby comes with RubyGems by default since version 1.9.<br>
A gem is a packaged library or application that can be installed with RubyGems.<br>
`gem list` allows to view locally installed gems, `gem install gemName` to install a specific gem and `gem help` to view more information on how to use the gem command.

A Gemfile describes the gem dependencies required to execute associated Ruby code. It must be placed in the root of the directory containing the associated code.
<pre>
source "https://rubygems.org" do #Indicate the rubyGem source of the following gem dependencies
  gem "nokogiri" #Use the gem method to indicate the gem dependencies
  gem "RedCloth", ">= 4.1.0", "< 4.2.0" #Optionally specify possible versions of the gem 
end
</pre>
To install all the dependencies from the gemfile launch in terminal `bundle install`.
    
## SINATRA FREE TUTORIALS
### Introduction Sinatra
Sinatra is a Ruby framework used to quickly create APIs or the backend of a web-application.

It can be installed like this: `gem install sinatra`.

An 'hello world' application in hello_world.rb file:
<pre>
require 'sinatra'

get '/' do
  "Hello world, it's #{Time.now} at the server!"
end
</pre>
Run the application with `ruby hello_world.rb` and look at http://localhost:4567.

### Routing
Sinatra allows us to create routes, which consists of defining HTTP requests and their answers, here is an example of multiple routes:
<pre>
get '/dogs' do
  # get a listing of all the dogs
end

get '/dog/:id' do
  # just get one dog, access the id parameter via the 'params' hash like this params['id']
end

post '/dog' do
  # create a new dog listing
end

put '/dog/:id' do |id|
  # HTTP PUT request method to update an existing dog, the block parameter id will take the route parameter
end

delete '/dog/:id' do
  # HTTP DELETE request method to remove a dog!
end

get '/say/*/to/*' do # Those wildcards are called splat parameters
  # The route pattern could match /say/hello/to/world with params['splat'] equaling ["hello", "world"]
end

get '/posts/:format?' do
  # Here format is an optional route parameter, meaning the route pattern could match /posts/ and /posts/1
end

get '/posts' do
  # Also matches "GET /posts?title=foo&author=bar" meaning it also optionally accepts query parameters.
  # Query parameters are always optional they do not define the route path.
  # Query parameters are usually used to further describe and filter what is demanded.
  title = params['title']
  author = params['author']
  # The request body is found here request.body and comes in json
  # Caution it can only be read one time or it has to be rewind like this request.body.rewind
  body = JSON.parse request.body.read # This allows to transform the json object into the appropriate ruby object
end
</pre>
Routes are matched in the order they are defined. The first route that matches the request is invoked.

#### Return values
A route method may return:
* A string which will represent the response body.
* An integer which will represent the status code.
* An array with integer as status code and string as body.
* An array with integer as status code, a hash containing headers and string as body. 
* The contents of a file with `send_file filePath` instead of a return statement.

#### Accessing the request object
The request object can be manipulated from filter, routes or error handlers and is simply named request and contains values such as `request.body`, `request.query_string`, `request.url`, `request.path`...

#### Filters
Filters allow manipulation of the request chain, executing code before or after the appropriate route gets processed.

The before and after keywords are used to indicate the appropriate filter methods.
<pre>
before '/protected/*' do # Here a route pattern is set so that this method only executes before this route pattern and not all of them
  authenticate!
end

after do
  puts response.status
end
</pre>

#### Helpers
Helper methods are simple methods (aka functions) that do not act as routes but can be called inside route methods.<br>
Those are defined in helper blocks `helpers do end` or are modules indicated as helpers `helpers FooModule, BarModule`.

#### Halting
Halting is used to stop a request immediately like this `halt`.<br>
Possibility exists to indicate a status code `halt 401`, a body `halt 'this will be the body'` or headers and all of those combined `halt 402, {'Content-Type' => 'text/plain}, 'this is the body'`.

#### Passing
The keyword 'pass' can be used to go to the next matching route pattern.

#### Streaming and websockets
The stream keyword can be used to create a method that will return multiple times. This is useful for streaming APIs but also websockets. 

#### Redirect
A redirect can be done with the redirect helper method `redirect http://www.google.com/` or to send the user back where he came from `redirect back`.<br>
Here is an example on how to redirect to another route pattern while indicating status code and body `redirect to('/bar'), 303, 'Wrong place'`.

#### Error Handling
The `not_found do end` handler, which is a method called not_found, is evoked when response status code is 404 or route pattern is not found.

The `error do end` handler is invoked each time an exception is raised in routes or filters. In development this will only run if `set :show_exceptions, :after_handler`.<br>
Custom errors can be called and made like the following.
<pre>
get '/' do
  raise MyCustomError, 'something bad'
end

error MyCustomError do
  return 'So what happened was...' + env['sinatra.error'].message
end
</pre>
Error handler can also respond to a specific or multiple status code.
<pre>
get '/secret' do
  return 403
end

error 403 do
  return 'Access forbidden'
end

error 400..510 do
  return 'I take all the error codes'
end
</pre>

### Configuration
`set`, `enable`, `disable` are methods used to manipulate settings, which are application-level variables controlling features of the application.<br>
`set :foo, 'bar'` takes a setting (:foo) and its assigned value ('bar').<br>
`enable` and `disable` are sugar syntax that activate (set to true) or deactivate (set to false) a certain setting respectively.

`:root` is the setting representing the directory used as base for the application, whereon `:public_folder` and `:views` settings are constructed on. Its default value is the directory of the main application file, this value can be changed like this `set :root, ./myNewPathExample` and accessed like this `settings.root`.

`:static` is the boolean setting that determines if files should be served from the public directory (:public_folder setting), if true Sinatra will check if a static file exists and serve it before checking for matching route patterns. This is activated by default if the public directory exists.

`:public_folder` is a global variable that contains the path towards the folder with static files (frontend files).<br>
Its default value is `./public`, this value can be changed like this `set :public_folder, ./myNewPathExample` and accessed like this `settings.public_folder`.

`:port` determines the port the application will run on.
