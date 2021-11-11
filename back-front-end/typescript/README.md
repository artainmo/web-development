# TYPESCRIPT

## Table of contents

## Codecademy course

It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript.<br>
By making use of static typing it makes the code more readable and allows compile-time-errors.

Typescript is written in .ts files, with "tsc file.ts" a file can be transcompiled to a .js file, during the transcompilation error checking will be done, the final .js file can be executed for the final result.

The tsconfig.json files allows the customization of the tsc transompiler.<br>
This can be useful to remove some default rules and choose on what files those rules are applicable.<br>
Here is its documentation https://www.typescriptlang.org/docs/handbook/compiler-options.html.

### TYPES
Typescript recognizes the following types: boolean, number, null, string, undefined. A variable assigned a certain type cannot be assigned a different type later on and cannot access unappropriate methods/attributes.<br>
The "any" type is a special type that can take in any type and change type later on.<br>
Those types are objects and using their constructor can transform a type into another one for example "Number(stringVariable)" this will transform a string into a number.

Type annotation explicitly associates a variable to a specific type like this "let variable: string".<br>
While implicit type annotation is also possible like this "let variable = 'helloWorld'", by making it equal to a string it gets associated with the string type implicitly, if equaling nothing it will be associated with "any".

### FUNCTIONS
Functions take parameters, instead of verifying if the given parameters are of correct type with "if (typeof variable == 'number')", in typescript the parameters can impose a type like this "function(param1: string, param2: number)".

In javascript if one parameter is not specified it will equal undefined, typesript would give an error, to neglect that typescript error a ? can be indicated after parameter.<br>
Default parameters are indicated "parameter=value", the parameter receives the default value if it received no value.

One can make return types explicit like this "function(params): string", in this example the funtion must return a parameter.<br>
By using void like this "function(params): void" one can indicate no return of the function.

In javascript singl-line-comments "//comment" or multiple-line-comments "/* comment */" exist, in typescript a third type of comment exist.<br>
A documentation comment is used above a function to describe it like this:<br>
/**<br>
 * function description<br>
 * @param paramName - this is the first parameter explained<br>
 * @param paramName - this is the second parameter explained<br>
 * @returns this is the return explained<br>
 */

### COMPLEX TYPES
Array elements can contain different types or contain all the same type. Typescript can assign a certain "array type" meaning an array with elements all of the same type.<br>
This can be done in two ways ": sting[]" or ": Array<string>", in this example arrays containing string types were declared.<br>
For multi-dimensional-arrays this would be their associated type for example "string[][]" or "number[][][]"..

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

Function types are practical for parameter functions (also called callback functions), they are indicated like this for example "(param1: number, param2: number) => numer".

Generics allow the creation of types that contain a variable type inside them for example "type Family<T> = { parents: [T, T], mate: T, children: T[] };" with T that can take any other type.

### UNION TYPES
Allows a compromise between specifically annotating one type and not specifying any type, it allows to annotate multiple types.<br>
Union types are indicated like this for example "variable: string | number", but can also be used on function parameters or returns...<br>
Union types can also be used in arrays like this for example "(string | number)[]" whereby the array can contain elements of type string or number.

Different types have different methods/attributes, a variable annotated with an union type will only be able to use the methods/attributes that all types of the union contain.

Unions can also eqaul literal types, for example "type Color = 'green' | 'orange' | 'brown';", whereby a variable with the Color type can ony equal 'green', 'orange' or 'brown' and no other values.

### TYPE NARROWING
Type narrowing consist of checking the type of a variable with an if (also called type guard) and handle that type uniquely compared to the other types inside that if statement.

The in operator can be used, whereby you can check if a type/variable contains a specific attribute/method like this "if ('function1' in variable)".

### ADVANCED OBJECT TYPES
Both 'type' anf 'interface' are keywords able to create object types, type is not only able to create object types while interface is.<br>
Thus interface does not bring new functionality but using it for objects is convention and makes code more readable.<br>
The interface keyword can be used to add types to a class with the 'implements' keyword like this "class myClass implements myInterface", all the attribute/method types inside the interface will have to exist in the class or a compilation error will occur, it forces the class to at least follow the interface convention, the class can also have its own attributes/methods.

Nested objects can become difficult to read, to solve this typescript allows the creation of multiple types that can be referenced inside each other.<br>
Different types can also inherit from themselves with the 'extends' keyword, adding all the methods/attributes of one type to another.

Sometimes someone knowns properties will exist in a type object but does not know the properties names beforehand, this is especially the case with APIs returning data.<br>
In that case index signatures can be used like this for example "[category: string]: boolean", whereby category can take any variable  name as string and the value it holds must be a boolean, it can take multiple of them if multiple exist of same types.

Interfaces or object types can also contain optional attributes/methods this is indicated with a ? like this for example "attribute1?: string".
