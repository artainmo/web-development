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


