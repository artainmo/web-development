# RUBY ON RAILS

## Table of contents

## CODECADEMY COURSE - LEARN RUBY
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

#### Control flow
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

#### Loops and iterators
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

#### Arrays and hashes
Arrays can contain different objects and are declared like this: `arr = [1, 2, "dwdw", true, [10, 9]]`.<br>
To access the second value in the array `arr[1]` with first element being at index 0.<br>

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





