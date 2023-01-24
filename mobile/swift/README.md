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

If we want to be clear about the kind of value stored in variable we can use **type annotation**. Here are some basic data types; Int (integer number), Double (floating-point number), String (sequence of characters), Character, Bool (true/false values). Here is an example of a variable declaration with type annotation `var artist: String`.<br>
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
Another noteworthy ability of the switch statement is its use of multiple values in a single case. These are known as **compound cases**. Here is an example `case "USA", "Mexico", "Canada"`.<br>
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

**Logical operators** such as `&&`, `||`, `!` can be used to define a condition.<br>
The logical, **&&**, operator evaluates two operands and returns a Boolean result. It returns true only when both operands are true and returns false when at least one operand is false.<br>
The logical, **||**, operator evaluates two operands and returns a Boolean result. It returns false only when both operands are false and returns true when at least one operand is true.<br>
The logical, **!**, operator is a prefix operator that negates, or reverses, the Boolean value of its operand. It returns false when the operand is true, and returns true, when the operand is false.

Instead of relying on the compiler to set operator precedence, we can do so ourselves by wrapping a logical expression in parentheses, `()`. The use of parentheses also makes our code easier to read and interpret.

### Loops
We use **for-in loops** to iterate over a sequence of values, such as Strings (which is a sequence of characters) or ranges (sequence of numbers). To create a range, we use the closed range operator (`...`) with a lower bound number and an upper bound number. For example, a range of `1...3`.<br>
Here is an example of a for-in-loop:
```
for num in 7...9 {
  print(num)
}
// This will print: 7\n8\n9
```
for-in loops also give us the flexibility to choose how we want to iterate over a sequence with the stride() function `stride(from: a, to: b, by: c)`. For example `for num in stride(from: 0, to: 6, by: 2) {`.<br>
If we don't want to use the value in range we can indicate it like this `for _ in 1...15 {`.

The **continue** keyword can be used to skip one loop iteration.<br>
The **break** keyword can be used to exit the loop before it completes.<br>

Another loop we can use is the **while** loop. This loop allows us to continue iterating for as long as a condition remains true. It looks like this `while <condition> {`.<br>
They are used when we don’t know how many times we’re looping.

### Arrays & Sets
In Swift, an array stores values of the same type in an ordered list.<br>
We can initialize an empty array like this `var name = [Int]()`.<br>
It is also possible to initialize an array with values `var location: [Double] = [40.7245, -73.9979]`.<br>
We can use indexes to access specific values in array. Here for example we will access the first one `location[0]`.<br>
Arrays have the 'count' method which returns the number of elements it contains and can be used like this `location.count`.<br>
Two arrays can be concatenated like this `array = array1 + array2'. A value can be appended to an array like this `array.append(value)`.<br>
It is possible to insert a value in a specific location inside an array like this `moon.insert("🌕", at: 0)
` and remove `moon.remove(at: 4)`.<br>
We can iterate over an array like this `for item in employees {`.

A set is an unordered collection of unique elements.<br>
Sets are a great collection type to use when the data we need to store must be unique. For example, we could use a set in real life to store information about employee ID numbers at a company or to store bank account numbers.<br>
We can initialize an empty set like this 'var setName = Set\<String\>()'.<br>
It is also possible to initialize a set with values `var setName: Set = [Value1, Value2, Value3]`.<br>
We can use '.count' to find out how many elements are contained within a set and if we want to find out if our set is empty, we can use the '.isEmpty' property.<br>
We can insert elements inside a set like this `plantShelf.insert("Graptopetalum")`, because values inside a set are not ordered we don't insert at a specific location.<br>
If we need to remove an element from a set, we can use '.remove()' like this `setName.remove(Value)`. If we wanted to remove every single element from a set, we could use the '.removeAll()' method.<br>
If we want to check whether or not an element exists within a set, we can use the '.contains()' method like this `setName.contains(Value)`.<br>
We can iterate over a set like this `for Value in setName {`.<br>
The '.intersection()' method returns a set of values that are similar in two sets. We use it like this `var newSet = SetA.intersection(SetB)`.<br>
Another set operation we can use is '.union()'. This operation creates a set by combining the values of two sets together. We use it like this `var NewSet = SetA.union(SetB)`. We can even 'method chain' like this `var fairyTales = book1.union(book2).union(book3)`.<br>
The '.symmetricDifference()' operation can be used to find elements that exist in one of the given sets, but not both.<br>
Another set operation we can use is '.subtracting()'. This method creates a new set of elements by removing the overlapping data of one set from another set.
  
It is also possible for a set to contain other sets, same for arrays.
  
### Dictionaries
A dictionary is an unordered collection of paired data. The paired data, also called element, is commonly referred to as a key-value pair in which a key is a unique identifier for their associated value.<br>
We can initialize an empty dictionary like this `var dictionaryName = [KeyType: ValueType]()`.<br>
The syntax to create a populated dictionary looks like this:
```
var dictionaryName: [KeyType: ValueType] = [
  Key1: Value1,
  Key2: Value2,
  Key3: Value3
]
```
With 'type inference' the compiler deduces the types. Thus the type does not always have to be manually indicated (and this has implications for all variables), however it is cleaner to do so.<br>
If we wanted to add a new key-value to a dictionary, we could use the following subscript syntax: `dictionaryName[NewKey] = NewValue` and if we want to change an existing value `dictionaryName[Key] = NewValue`.<br>
If we were to set the value of a key to `nil`, the key-value pair would be removed from the dictionary. Also we can use `dictionaryName.removeValue(forKey: Key)` and '.removeAll()'.<br>
In a dictionary we can also use `dictionaryName.isEmpty` and `dictionaryName.count`.<br>
We can access a dictionnary value `nameDictionnary[nameKey]`. It will return a value of type **optional** because we are not sure if the value exists. To extract a value from an 'optional' we can use `nameDictionnary[nameKey]!` with `!` indicating we are sure a value exists or we can check with an if:
```
if let apple = fruitNames["apple"] { //An if-let statement is a Swift conditional that is used to unwrap optional values which can then be assigned to variables
  print(apple) //The apple variable can only be called inside the if-let statement because it is a temporary variable when stemming from if-let
} else {
  print("This key does not exist.")
}
```
We can access only the dictionary keys or values by using '.keys' or '.values'.<br>
We can loop over a dictionary like this `for (key, value) in dictionary {` or `for value in dictionary.values {` or `for key in dictionary.keys {`.<br>

Tuples group together values that are enclosed in parentheses and separated by commas. Unlike any of the previous data types mentioned, tuples can include different types of data.
```
var easyAsPie = ("easy as", 3.14)
var firstValue = easyAsPie.0   // "easy as"
var secondValue = easyAsPie.1  // 3.14

var easyAsPie = (saying: "easy as", amount: 3.14)
var firstElementValue = easyAsPie.saying  // "easy as"
var secondElementValue = easyAsPie.amount // 3.14
```
In dictionaries, tuples are used to iterate over key-value pairs such as `for (character, actor) in lionKing1994 {`.

### Functions
Swift functions are chunks of reusable code that achieve a certain outcome.
