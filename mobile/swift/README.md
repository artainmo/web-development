# Swift

## Table of contents
- [codecademy course - Learn Swift](#codecademy-course---Learn-Swift)
  - [Introduction](#Introduction)
  - [Variables](#Variables)
  - [Conditionals](#Conditionals)
  - [Loops](#Loops)
  - [Arrays and Sets](#Arrays-and-Sets) 
  - [Dictionaries](#Dictionaries)
  - [Functions](#Functions)
  - [Structures](#Structures)
  - [Classes](#Classes)
- [Free tutorials](#Free-tutorials)
  - [Xcode](#Xcode)
  - [Swift frontend](#Swift-frontend)
    - [UIKit and SwiftUI](#UIKit-and-SwiftUI)
    - [Auto-layout](#Auto-layout)
    - [Storyboard vs programmatic UI](#Storyboard-vs-programmatic-UI)
    - [Storyboard](#Storyboard)
    - [Programmatic UI](#Programmatic-UI)
    - [Use Material Design for swift frontend](#Use-Material-Design-for-swift-frontend)
- [Resources](#Resources)

## codecademy course - Learn Swift
### Introduction
Swift is a powerful and intuitive general-purpose programming language developed by Apple. It was created with the intent to write applications for iOS, watchOS, macOS, tvOS, Linux.

In swift we print text like this `print("Hello, world!")` and can print special characters `print("🚙💨")`.<br>
Single-line-comments look like this `// MyComment` and multi-line `/* MyComment */`.

Files for programming in swift have the '.swift' extension.

Xcode is an IDE specially developed by Apple for software on iOS, watchOS, macOS, iPadOS, tvOS.<br>
However sometimes it is easier to develop swift programs simply in the terminal.<br>
The advantages of Xcode are the propositions of templates when starting a project and the simulation of specific IOS devices when wanting to develop an app on them.

You can verify your swift like this `swift --version`, compile `swiftc <filename>.swift` and execute `./<executable>`.

### Variables
Here is an example of how to declare a variable `var score = 0`, that we can later print for example `print(score)`.<br>
Usually in swift we format variable names in camelCase.

Variables can equal digits and can be used with **arithmetic operators** to calculate such as; + (addition), - (substraction), * (multiplication), / (division), % (modulo, divides and gives remainder).<br>
Instead of writing `age = age + 1` we can use 'compound assignment operators' and write `age += 1` and this is valid for all arithmetic operators.

If we want to be clear about the kind of value stored in variable we can use **type annotation**. Here are some basic data types; Int (integer number), Double (floating-point number), String (sequence of characters), Character, Bool (true/false values). Here is an example of a variable declaration with type annotation `var artist: String`.<br>
This is useful by throwing warnings or errors if the given value is not of specified type.

**String interpolation** means inserting a variable's value into a string, in swift we do it like this; `"This is the string and here comes the interpolation \(myVariable)"`.

**Constants** are variable containing an immutable value, they are used as a safety measure and declared with keyword let, `let variable`.

**Optionals** are variable that may contain a nil value. They are declared with a '?' at end of type. For example a string that could equal nil would be an optional and declared like this `var variable3: String?`.

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

### Arrays and Sets
In Swift, an array stores values of the same type in an ordered list.<br>
We can initialize an empty array like this `var name = [Int]()`.<br>
It is also possible to initialize an array with values `var location: [Double] = [40.7245, -73.9979]`.<br>
We can use indexes to access specific values in array. Here for example we will access the first one `location[0]`.<br>
Arrays have the 'count' method which returns the number of elements it contains and can be used like this `location.count`.<br>
Two arrays can be concatenated like this `array = array1 + array2`. A value can be appended to an array like this `array.append(value)`.<br>
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

Here is how a function looks like in swift:
<pre>
func functionName() -> returnType {
 // function's task goes here
} 

functionName() //Here we call the function
</pre>
If the function does not return, than 'returnType' equals 'Void' or is ommited.<br>

If we intend for a function to return a value, we must specify that value’s return type in the function definition like this `return 5`. If we want to return multiple values we can return a tuple, array, dictionary...<br>
It is also possible to return the function's last line of code without using the 'return' keyword, this is called implicit return.

Parameters are defined inside a function as follows `func someFunction(paramName1: paramType1, paramName2: paramType2) -> returnType {` and passed inside function calls like this `findGardenArea(paramName1: paramValue1, paramName2: paramValue2)`.<br>
It is also possible when using parameters to make distinction between the argumentLabel and parameterName, see here.
```
func functionName(argumentLabel parameterName: type) {
    print(parameterName) // Notice that we use the parameter name in the body of the function
}

functionName(argumentLabel: value) //But we use the argumentLabel when calling the function
```
In practice, you will find that it often makes sense to refer to a parameter by a different name in the body of the function than when calling the function.<br>
When an `_` is specified ahead of a parameter name in the definition, only the argument value needs to be specified in the function call:
```
func funcName(_ paramName: paramType) -> returnType {
 // function body 
}

funcName(argument)  // function call does not need to specify the argumentLabel 
```
**Default parameters** have a real value assigned to a parameter in the function’s definition. A parameter that has a default value does not require an argument passed into it when the function is called because when it is not, the default value will be used. Here is how it can look like `func totalWithTip(total: Double, tip: Double = 0.2) -> Double {`, whereby 'tip' will equal 0.2 if it is not passed as argument when calling.<br>
A **variadic parameter** is a parameter that accepts zero or more values of a certain type. A variadic parameter is useful for cases in which we may need to pass in more than one value for a single parameter. A variadic parameter is denoted by a name, type, and three consecutive dots ... in the function declaration. It looks like this `func functionName(paramName: paramType...) -> returnType {`. The values passed for a variadic parameter are interpreted as an array of a specific type within the function’s body. It is called like this `avgExchangeRate(numbers: 0.81380, 0.77268, 0.77453, 0.75466, 0.75729, 0.78241)`, whereby 'numbers' is the variadic parameter.<br>
An **in-out parameter** allows a function to reassign the value of a variable passed in as an argument. Since a function with an inout parameter is expected to change the value of its argument, only variables can be passed in when the function is called, not constants or literals since they can not be altered. It is declared like this `func funcName(parameterName: inout parameterType) -> returnType {`. When a function that utilizes an inout parameter is called, an ampersand, &, must be used directly before the variable name that will act as its argument. This symbol instructs the program that the variable can be modified. It looks like this `batteryInterface(percentage: 12, batteryColor: &currentColor)`.

### Structures
Structures allow us to create customized data types, transform a complex object into code.

Here’s an example of a struct that models a 'Dog' with 'age' and 'isGood' as properties:
```
struct Dog {
  var age: Int
  var isGood: Bool
}
```

We can give **default property values** to the structure's properties. This means they equal the default value if we don't assign them any.
```
struct Dog {
  var age = 0
  var isGood = true
}
```

To use the struct we have to create an instance of it.
```
var eloise = Dog() //Struct instance

print(eloise.age) //Access struct properties
print(eloise.isGood)

eloise.age = 7 //Reassign struct properties
eloise.isGood = false
````

The 'init()' method is special since it doesn’t require the func keyword and gets called upon instance creation. Like other methods it uses the 'self' keyword to reference its struct instance.<br>
In addition to the init() method, we can also provide our structs with custom methods that instances can call. These instance methods are created like a normal function but within the scope of the structure itself.
```
struct Dog {
  var age : Int
  var isGood : Bool
 
  init (age: Int, isGood: Bool) {
    self.age = age
    self.isGood = isGood
  }
  
  func bark() {
    print("woof")
  }
}

var bucket = Dog(age: 4, isGood: true) //When instanciating we call 'init()'
bucket.bark() //We can call a method like this
```

If we want to change properties' values from within a method, the method should be declared with the keyword 'mutating', for example `mutating func birthday() -> Int {`.

Structures form custom data types. It is possible to have a struct inside another struct as a property value.

Structures are 'value types' and not 'reference types', this means when copying one struct onto another, they will exist on different memory spaces, they won't point on the same place in memory space, meaning a change to one of those structs won't reflect on the other struct.

'Extensions' allow to add functionality to an existing type. Usually this is done to custom types, thus structures, but it can be done to all data types.<br>
```
extension String {
  func removeWhitespace() -> String {
    return components(separatedBy: .whitespaces).joined()
  }
}

let alphabet = "A B C D"
print(alphabet.removeWhitespace())
//output: ABCD
```

### Classes
Like structures, classes form custom data types describing complex objects. However classes are 'reference types' instead of 'value types' and they enable what we call 'inheritance'.

A class looks like this.
```
class Student {
  var name: String
  var year: Int
  var gpa: Double
  var honors: Bool = false //Default property value
  
  init(name: String, year: Int, gpa: Double, honors: Bool) { //Init function called at instanciation
    self.name = name //The self keyword is used to access the instance's properties from within the class
    self.year = year
    self.gpa = gpa
    self.honors = honors
  }
}

var bart = Student(name: "Bart Simpson", year: 4, gpa: 0.0, honors: false) //Creating a class instance
ferris.name = "Ferris Bueller" //Assigning a value to one of the properties
```

When we define a class, it can **inherit**, meaning it can take on another class’s properties and methods. This is an additional capability that structures don’t offer.<br>
When one class inherits from another, the new inheriting class is known as a **subclass** and the class it inherits from is known as its **superclass**.<br>
Here is how we declare an inheritance between two classes `class Subclass: Superclass {`.<br>
A subclass can provide its own custom implementation of a property or method that is inherited from a superclass. This is known as **overriding**. In such cases we use the 'override' keyword like this `override func withdraw(amount: Double) {`.

Classes are **reference types**. Unlike 'value types', 'reference types' are not copied when they are assigned to a variable or constant, or when they are passed to a function. Rather than a copy, a reference to the same existing instance is used.

## Free tutorials
### Xcode
Xcode is the IDE for writing swift applications for apple products.<br>
It is unique in its ability to generate a template for a swift project, in its ability to do frontend development via drag and drop and in its ability to simulate the created apps on any apple product. It also corrects a lot of errors in the project from within the IDE.<br>
Xcode can only be downloaded on a mac.<br>
Xcode can be used to open a project or playground. Project refers to a swift app and playground to test swift code.

To debug code it can be useful to stop code exectution at one point in the program. In Xcode we can do just that by indicating 'breakpoints' in the code.

With Xcode the frontend can be defined programmatically or via drag and drop (also called 'Storyboard'). 

### Swift frontend
#### UIKit and SwiftUI
UIKit is the initial and default frontend framework used to create UI interfaces in Swift. Recently a new frontend framework came to market called SwiftUI.

UIKit is foundational to 'Storyboards'. When creating a project with Xcode we have to choose between storyboards, thus UIKit, or SwiftUI. However UIKit can also be used for programmatic UI, choosing UIKit does not imperically mean using storyboards.

#### Auto-layout
Is a contraint-based system that helps us adapt the frontend automatically to all the different screen sizes the app will run on.

#### Storyboard vs programmatic UI
The advantage of storyboards are the visual layouts they provide, using drag and drop, hiding the code behind it. Because you do not code with storyboards its advantage is ease of use, however it is more difficult to have a precise representation of the app like this. Thus we could conclude storyboards to compromise precision for ease of use.<br>
Another disadvantage of storyboards is that associated merge conflicts are complicated to resolve and bugs in general.<br>
Another disadvantage of storyboards is that drag and drop becomes complicated to use for complex frontend apps. Also making changes is more complex with storyboards.<br>
Thus to conclude storyboards seem to be advantageous for simple frontends and less advantageous for complex frontends.

Programmatic UI is more flexible. It makes it easier to debug, make changes, reuse code. Better suited for complex frontends.

##### Storyboard
Xcode allows the generation of frontend code via drag and drop using 'Storyboards' which is based on UIKit. Each storyboard has to be connected a file. The drag and drop done in '.storyboard' file will generate code in associated '.swift' file.

Xcode auto-generates the **Main.storyboard** file which represents the app's homepage. Also it auto-generates the **LaunchScreen.storyboard** file which defines the app's launchscreen, which is the page that displays while the app is loading.<br>
By going on the previously described 'Main.storyboard' or 'LaunchScreen.storyboard' we can create those app pages/screens with drag and drop.<br>
On 'Main.storyboard' multiple 'pages/screens' can be made via the UI element named 'View Controller'. The homepage the app will launch on is the one page you indicated next to the 'storyboard entry point' arrow. From this page links can be made to the other pages, such as with a menu bar, so that the other pages are accessible too.

After generating swift project with xcode, inside a file named **Assets.xcassets** we can add logos, colors or other default visuals for consistent use in app. Those will become accessible from everywhere in the application.

When on a '.storyboard' file, to add an **UI element** we have to click on the top right '+' sign. Each UI element can then be customized via the right column that can be toggled, there you can also define this custom UI element as a class for re-usability.<br>
The 'View Controller' element defines a page/screen, all the other UI elements have to be used inside this foundational UI element.<br>
The 'view' element defines a container.<br>
Other commonly used elements are UITableView (list of rows), UICollectionView (grid), [UITabBar](https://www.youtube.com/watch?v=cAUgXCCnFNs) (mobile menu).

At the bottom right of the page we can access the **auto-layout** settings, enabling compatibility between different screeen sizes. A constraint consists of setting a UI element a minimal distance to the right, left, top, bottom of the screen/container limits. Those constraints will be based on the UI element an UI element is in, if it is inside a 'View Controller' the contraints will be in relation to that, but if you set it inside a container ('view' element) then the contraints will be in relation to that container.<br>
Another way to set contraints is to click, hold and drag a line from one element to another element, allowing you to set constraints between those two elements.

We can **simulate the app** created by clicking on top left play button.

A **UINavigation controller** is what holds a stack of screens. With it you can add a screen on top of another or remove it to come back to the prior screen. Learn more [here](https://www.youtube.com/watch?v=LbAd2FIlnos).

Usually we begin by creating the foundation of frontend app which is the **navigation**.<br>
For this we use the 'UINavigationController', by selecting screen, going on top of mac screen to 'Editor' -> 'Embed In' -> 'Navigation Controller'. This will create a **navigation-controller** who is connected to that selected screen, on top of that screen you can indicate in the spawned navigation bar its page title. A navigation-controller is a container that will hold all the screens conencted to it, allowing someone using the app to switch between those screeens.<br>
To create a **link between two screens**, first we need to make sure the first screen is connected to a 'navigation-controller, afterwards one can [hold 'control' while linking top of one screen to the other and create a 'show' segway, subsequently name the segway in right column.](https://youtu.be/CwA1VWP0Ldw?t=15487). Now we can create a button link from screen one to screen two, with screen two automatically having a 'back' button to go back to screen one. For this we have to [go into associated code and create an 'action'](https://youtu.be/CwA1VWP0Ldw?t=15578), which will in code look like a function with '@IBAction' decorator, with 'IB' standing for 'interface builder' and action meaning once someone clicks on button an action will be executed. To delete an action not only the associated code but also 'storyboard' indication has to be removed.

To create a **table view**, which consists of a list of rows, add the UI element named 'Table View'. Afterwards like always you can setup the constraints. Now we need to [set the 'data-source' and 'delegate' both in storyboard and code](https://youtu.be/CwA1VWP0Ldw?t=16144). 'Data-source' refers to the datas that will be contained in table's rows and 'delegate' refers to a function that executes once an action occurs, in the case of tables the delegate function is called each time a 'cell' (also called table row) displays. It is possible to make a click on a row link to another screen via a [delegate method called 'didSelectRowAt'](https://youtu.be/CwA1VWP0Ldw?t=16491). In the end I had better luck creating a table view with [this tutorial](https://www.youtube.com/watch?v=C36sb5sc6lE). I connected the 'View Controller' the table was in to the wrong class. Each 'View Controller' has to be connected to a class that can be defined in any '.swift' file of working directory as swift has a global scope.<br>
To populate the table rows with specific data, this data needs to be in an array, see [here](https://youtu.be/CwA1VWP0Ldw?t=16597) how to let the table rows take this array. And see [here](https://youtu.be/CwA1VWP0Ldw?t=17536) how to let each row link to another page and take an object.

[Watch](https://youtu.be/CwA1VWP0Ldw?t=18533) an additional storyboard project tutorial.<br>
An **action** is a function preceded with '@IBAction' which defines a block of code to be executed after certain events such as button clicks.<br>
An **outlet** is a variable preceded with '@IBOutlet' which takes as value the UI element you want to make changes on.

Great [tutorial](https://www.youtube.com/watch?v=U-Y9HJzNhQ0) on how to create a todo list app.<br>
Each storyboard 'View Controller' represents a screen. It should be connected to a swift class by indicating its class in right column after clicking on it in storyboard. Inside that class 'actions' and 'outlets' can be created to access and interact with the storyboard UI elements. On storyboard when right clicking on 'view controller' we can view all the created 'actions' and 'outlets' we can then connect them to the applicable storyboard UI element.

##### Programmatic UI
Learn more about programmatic UI in swift via [this video](https://youtu.be/CwA1VWP0Ldw?t=22083) by continuing initial course.

##### Use Material Design for swift frontend
Material Design is a frontend library developed by google and available for a ton of different programming languages. Here lies the [documentation](https://m2.material.io/develop/ios) for ios and thus swift.<br>
Material Design contains different [components](https://m2.material.io/components) that can be used in frontend, such as buttons, cards, app bars...

Instead of adding the whole 'Material Design' library which uses a lot of memory space, it is advised to selectively import desired components. You can view how to import a specific one within the [component documentation](https://m2.material.io/components).<br>
Swift uses the **CocoaPods dependency manager**. Usually CocoaPods is downloaded using default Ruby available on macOS `sudo gem install cocoapods`, for more info find the docs [here](https://cocoapods.org/). Usually one should put the dependencies in a file at project root named 'Podfile' and run `pod install` in this directory.

Swift's IDE is Xcode, it is recommended especially for frontend development because it can simulate IOS products such as specific iphones in the case of mobile development. Xcode will also generate a code template to start your project on.

## Resources
[Codecademy - Learn Swift](https://www.codecademy.com/learn/learn-swift)<br>
[Swift Tutorial: Google Material Design Components & User Interface (Swift 2020) - Xcode 11, iOS](https://www.youtube.com/watch?v=odM92k_0_FE)<br>
[Swift Programming Tutorial | FULL COURSE | Absolute Beginner](https://www.youtube.com/watch?v=CwA1VWP0Ldw)<br>
[Swift for Beginners: Create To Do List App (2023)](https://www.youtube.com/watch?v=U-Y9HJzNhQ0)
