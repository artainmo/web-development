# TYPESCRIPT

## Table of contents
- [Codecademy course](#Codecademy-course)
  - [Types](#Types)
  - [Functions](#Functions)
  - [Complex types](#Complex-types)
  - [Union types](#Union-types)
  - [Type narrowing](#Type-narrowing)
  - [Advanced object types](#Advanced-object-types)
- [Free tutorials](#Free-tutorials)
  - [Environment](#Environment)
  - [Compilation](#Compilation)
  - [Additions](#Additions)
    - [Type](#Type)
    - [New features](#New-features)  
- [Resources](#Resources)


## Codecademy course

It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript.<br>
By making use of static typing it makes the code more readable and allows compile-time-errors.

Typescript is written in .ts files, with "tsc file.ts" a file can be transcompiled to a .js file, during the transcompilation error checking will be done, the final .js file can be executed for the final result.

The tsconfig.json files allows the customization of the tsc transompiler.<br>
This can be useful to remove some default rules and choose on what files those rules are applicable.<br>
Here is its documentation https://www.typescriptlang.org/docs/handbook/compiler-options.html.

### Types
Typescript recognizes the following types: boolean, number, null, string, undefined. A variable assigned a certain type cannot be assigned a different type later on and cannot access unappropriate methods/attributes.<br>
The "any" type is a special type that can take in any type and change type later on.<br>
Those types are objects and using their constructor can transform a type into another one for example "Number(stringVariable)" this will transform a string into a number.

Type annotation explicitly associates a variable to a specific type like this "let variable: string".<br>
While implicit type annotation is also possible like this "let variable = 'helloWorld'", by making it equal to a string it gets associated with the string type implicitly, if equaling nothing it will be associated with "any".

### Functions
Functions take parameters, instead of verifying if the given parameters are of correct type with "if (typeof variable == 'number')", in typescript the parameters can impose a type like this "function(param1: string, param2: number)".

In javascript if one parameter is not specified it will equal undefined, typesript would give an error, to neglect that typescript error a ? can be indicated after parameter.<br>
Default parameters are indicated "parameter=value", the parameter receives the default value if it received no value.

One can make return types explicit like this "function(params): string", in this example the funtion must return a string.<br>
By using void like this "function(params): void" one can indicate no return of the function.

In javascript singl-line-comments "//comment" or multiple-line-comments "/* comment */" exist, in typescript a third type of comment exist.<br>
A documentation comment is used above a function to describe it like this:<br>
/**<br>
 * function description<br>
 * @param paramName - this is the first parameter explained<br>
 * @param paramName - this is the second parameter explained<br>
 * @returns this is the return explained<br>
 */

### Complex types
Array elements can contain different types or contain all the same type. Typescript can assign a certain "array type" meaning an array with elements all of the same type.<br>
This can be done in two ways `: string[]` or `: Array<string>`, in those example arrays containing string types were declared.<br>
For multi-dimensional-arrays this would be their associated type for example `string[][]` or `number[][][]`..

Arrays with values of different types are called tupples in typescript, they have fixed sizes after annoting them a type, but when concatenating them with .concat() an array with variable length is returned..<br>
This is an example "tup: [number, string, number, number, string] = [23, 'he', 21, 45, 'vf']".<br>
An array of tuples, enums or objects also exists like this "tup: [number, string][]".

Rest parameters are indicated like this "function(param1, ...restParam)", it allows to take as many parameters as wanted into the function they will be inside the restParam dynamic array, this array can receive an array  type annotation too.

Spread syntax can be used when all elements from an object or array need to be included in a list of some kind.<br>
This is also possible when all elements inside a tuple have to become a function parameter for example take the function "function(param1, param2, param3, param4)" and tuple "tup = [param1, param2, param3, param4]" the function can be called like this "function(...tup)" instead of this "function(tup[0], tup[1], tup[2], tup[3])".

Custom-made-types can be used similarly as standard types, they simply have to be defined first.

Enums are used to enumerate all the possible values a variable could have, they can only contain numeric or string values, if someone tries to call a value the enum variable does not contain, an error is thrown.

Type annotation of object types go like this "{ attribute1: type, attribute2: type }".

Type aliases allow to change a type's name to another one for example "type car = [string, number, boolean]".

Function types are practical for parameter functions (also called callback functions), they are indicated like this for example "(param1: number, param2: number) => number".

Generics allow the creation of types that contain a variable type inside them for example `type Family<T> = { parents: [T, T], mate: T, children: T[] };` with T that can take any other type.

### Union types
Allows a compromise between specifically annotating one type and not specifying any type, it allows to annotate multiple types.<br>
Union types are indicated like this for example "variable: string | number", but can also be used on function parameters or returns...<br>
Union types can also be used in arrays like this for example "(string | number)[]" whereby the array can contain elements of type string or number.

Different types have different methods/attributes, a variable annotated with an union type will only be able to use the methods/attributes that all types of the union contain.

Unions can also eqaul literal types, for example "type Color = 'green' | 'orange' | 'brown';", whereby a variable with the Color type can ony equal 'green', 'orange' or 'brown' and no other values.

### Type narrowing
Type narrowing consist of checking the type of a variable with an if (also called type guard) and handle that type uniquely compared to the other types inside that if statement.

The in operator can be used, whereby you can check if a type/variable contains a specific attribute/method like this "if ('function1' in variable)".

### Advanced object types
Both 'type' and 'interface' are keywords able to create object types, type is not only able to create object types while interface is.<br>
Thus interface does not bring new functionality but using it for objects is convention and makes code more readable.<br>
The interface keyword can be used to add types to a class with the 'implements' keyword like this "class myClass implements myInterface", all the attribute/method types inside the interface will have to exist in the class or a compilation error will occur, it forces the class to at least follow the interface convention, the class can also have its own attributes/methods.

Nested objects can become difficult to read, to solve this typescript allows the creation of multiple types that can be referenced inside each other.<br>
Different types can also inherit from themselves with the 'extends' keyword, adding all the methods/attributes of one type to another.

Sometimes someone knowns properties will exist in a type object but does not know the properties names beforehand, this is especially the case with APIs returning data.<br>
In that case index signatures can be used like this for example "[category: string]: boolean", whereby category can take any variable name as string and the value it holds must be a boolean, it can take multiple of them if multiple exist of same types.

Interfaces or object types can also contain optional attributes/methods this is indicated with a ? like this for example "attribute1?: string".

## Free tutorials

### Environment
npm is a package manager for the JavaScript programming language nodejs framework, also called node package manager.<br>
npm can be used to download typescript, which will give access to tsc for compiling .ts.<br>
npm install/uninstall can be used for downloading libraries.<br>
Brew install typescript, leads to both npm and tsc installed.<br>
tsc will transform .ts to .js. As browsers and Node.js can only compile js.<br>
tsconfig.json can be used to configure tsc.

Most used front-end stack is typescript+react and back-end stack typescript+nodejs+express.js.<br>

VScode recommended extensions;<br>
ESLint, for javascript code check.<br>
Path Intellisense, for recommended file paths, useful for front-end development when referring to other files.

### Compilation
Browsers cannot directly compile .ts thus it has to be transformed into .js.<br>
Use tsc to compile .ts to .js.<br>
HTML files contain a script tag that can refer to a particular .js.<br>
Those HTML files have to be compiled in the browser by entering the absolute path towards the file in the search bar, go to on chrome more tools -> developer tools to view the console.

tsc -w will constantly recompile files each time you make a change<br>
tsc --init will let you compile all files from root directory next time you use tsc.<br>
A .json file will be created wherein compilation adjustments can be done.<br>
In the .json files to compile can be excluded.<br>
Target feature are used to indicate the javascript version to compile to, es5 is older more compatible version and es6 is newer version.<br>
Lib feature is used to indicate used libraries.

### Additions
The following additions lead to more readable/ordered/shorter code and compile-time-error-detection, especially useful for large projets.<br>
Types, typescript is strongly typed while javascript is loosely typed.<br>
New features.
Next-gen Javascript features, compiled down for older browsers.

#### Type
Strong typing can be done implicitly or explicitly.<br>
Implicitly leads to the compiler assuming the type based on the variable given value.<br>
Explicit type declaration needs after variable declaration a : followed by the choosen type.

Function arguments can also be strong typed. Function returns can also be strong typed and set to void (which returns undefined) by adding the type at end of function declaration.<br>
Never type can be used as function return type for functions that never end, either because they end the program or because they infinite loop, it makes the code more readable but technically void can be used too.

Different types: number, string, boolean, null, undefined, any, object, array, Function.

Objects contain multiple variables like a C structure would, and can be strong typed with : {x: type, y:type, ...}, interfaces allow the creation of a type out of it, so objects can be viewed as a single instance.<br>
Arrays can be strong typed by introducing directly following the declared type the [] symbol.<br>
Tuples in javascript are like fixed-size-arrays not necessarily of lenght 2, they can be strong typed, whereby each value inside the tuple can independently be strong typed, indicated by [type, type, type].<br>
Variables can hold functions by acting as function pointers in C and be of type Function.<br>
Type "any" leads to the freedom of a variable to become any type and even change type over the course of the program, comes down to simple javascript.<br>
Different types can take in different values and have access to different methods like classes.

Multiple types can explicitly be declared by using |, those are called union types.<br>
Aliases can be made with keyword type ... = , often they are used with unions, to make unions have one name.<br>
Literal types, are types with pre-defined potential values, unions can be used to have a choice between multiple values.

Casting is called type assertion in typescript and is used to for example tell that a variable with any type is in fact a number for example.

#### New features
Shape of object can be defined with an interface, wherein variables and their type are defined. An interface is like a structure in C it is an object declaration that can be re-used as a type.<br>
Classes also exist with this, this.variable keyword, inheritance is possible with the extends keyword, it can inherit from other classes but also from interfaces.<br>
Custom types need to be allocated memory with the new keyword and call to constructor at declaration for classes.

Question mark in front of parameter variables, indicates that those parameters are optional, if not used it will become equal to undefined.<br>
Rest parameters allow for unlimited and undefined amount of parameters.<br>
Default parameters allow giving to parameters a default value.<br>
Lambda expression or arrow functions are one-line-functions indicated with an arrow in typescript, ternaries also exist.<br>
Exclamation marks in typescript at end of line, means used function/variable is not equal to null or undefined because it will be declared later.

Export keyword allows the creation of modules, modules are files that can be imported on to other files, with the exported declarations being accessible to the file that imported.<br>
Namespces are used to group code together inside it, and avoids problem of overwriting due to everything being in a global scope in javascript.

Generics are like c++ templates whereby function parameters or classes take a to-be-declared-type, by using it in combination with the extend keyword, you can limit the number of types that can be choosen from.

## Resources
[Codecademy - Learn Typescript](https://www.codecademy.com/learn/learn-typescript) - 10h<br>
[Typescript - The Basics](https://www.youtube.com/watch?v=ahCwqrYpIuM) - 12m<br>
[TypeScript Course for Beginners 2021](https://www.youtube.com/watch?v=BwuLxPH8IDs) - 3h16m<br>
[TypeScript for React](https://www.youtube.com/watch?v=NjN00cM18Z4) - 51m<br>
[Typescript full course for beginners](https://www.youtube.com/watch?v=gp5H0Vw39yw) - 1h34m<br>
[Typescript written complete tutorial](https://www.tutorialspoint.com/typescript/index.htm)<br>
