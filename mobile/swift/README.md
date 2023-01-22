# Swift

## Table of contents
- [codecademy course - Learn Swift](#codecademy-course---Learn-Swift)

## codecademy course - Learn Swift
### Introduction
Swift is a powerful and intuitive general-purpose programming language developed by Apple. It was created with the intent to write applications for iOS, watchOS, macOS, tvOS, Linux.

In swift we print text like this `print("Hello, world!")` and can print special characters `print("🚙💨")`.<br>
Single-line-comments look like this `// MyComment` and multi-line `/* MyComment */`.

Files for programming in swift have the '.swift' extension.

Xcode is an IDE specially developed by Apple for software on iOS, watchOS, macOS, iPadOS, tvOS.<br>
However sometimes it is easier to develop swift programs simply in the terminal. You can verify your swift like this `swift --version`, compile `swiftc <filename>.swift` and execute `./<executable>`.

### Variables
Here is an example of how to declare a variable `var score = 0`, that we can later print for example `print(score)`.<br>
Usually in swift we format variable names in camelCase.

Variables can equal digits and can be used with **arithmetic operators** to calculate such as; + (addition), - (substraction), * (multiplication), / (division), % (modulo, divides and gives remainder).<br>
Instead of writing `age = age + 1` we can use 'compound assignment operators' and write `age += 1` and this is valid for all arithmetic operators.

If we want to be clear about the kind of value stored in variable we can use **type annotation**. Here are some basic data types; Int (integer number), Double (floating-point number), String (sequence of characters), Bool (true/false values). Here is an example of a variable declaration with type annotation `var artist: String`.<br>
This is useful by throwing warnings or errors if the given value is not of specified type.

**String interpolation** means inserting a variable's value into a string, in swift we do it like this; `"This is the string and here comes the interpolation \(myVariable)"`.

**Constants** are variable containing an immutable value, they are used as a safety measure and declared with keyword let, `let variable`.

### Conditionals
An **if** statement is used to execute some code when a condition is true, **else if** when prior conditions were false but current one is true, **else** statement is used to execute code if prior conditions were false.
```
if <condition> {
  <this code between brackets will run if condition is true>
} else if <condition2> {
  <this code between brackets will run if prior conditions were false but condition2 is true>
} else {
 <this code between brackets will run if prior conditions were false>
}
```

**Comparison operators** determine the relationship between two operands and return a Boolean value as a result. Thus they are used to form conditions. Examples are; == (Equal to), != (Not Equal to), > (Greater than), < (Less than), >= (Greater than or equal to), <= (Less than or equal to).

The **ternary conditional operator**, denoted by a ?, offers a shorter, more concise alternative to a standard if/else statement. It looks like this `<condition> ? <execute if condition is true> : <execute if condition is false>`.

Another type of conditional statement that exists in Swift is the **switch statement**. The switch statement is a popular programming tool used to check the value of a given expression against multiple cases. The switch statement is a lot more powerful in Swift than it is in other programming languages. Here is an example.
```
switch city {
  case "Rapa Nui": //If city equals "Rapa Nui" the associated code gets executed.
    print("Moai 🗿")
  case "New York":  
    print("Statue of Liberty 🗽")
  case "Rome":
    print("Colosseum 🏛")
  default: //if a matching value isn’t found, the default statement gets executed.
    print("A famous landmark is the Eiffel Tower!")
}
```
One super power that the switch statement possesses, is its ability to match values to an expression that exist within intervals. An **interval** denotes a range used for checking whether a given value lies within that range. In Swift, a range is indicated by three consecutive dots, ..., also known as the **closed range operator**. The closed range operator signifies an inclusive range where the first and last values are included in the sequence. Here is an example.
```
switch year {
  case 1701...1800:
    print("18th century") 
  case 1801...1900:
    print("19th century")
  case 1901...2000: 
    print("20th century")
  case 2001...2100: 
    print("21st century")
  default: 
    print("You're a time traveler!")
}
```
Another noteworthy ability of the switch statement is its use of multiple values in a single case. These are known as **compound cases**. Here is an example `case "USA", "Mexico", "Canada"`.
The **where** clause allows for additional pattern matching for a given expression. See the example.
```
switch randomNumber {
  case let x where x % 2 == 0:
    print("\(randomNumber) is even")
  case let x where x % 2 == 1:
    print("\(randomNumber) is odd")
  default:
    print("Invalid")
}
```
In this example we declare the variable x which will be a temporary variable holding the randomNumber value and be used in the condition following the 'where' clause.



