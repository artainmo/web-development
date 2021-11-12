# REACT

## Table of contents
- [Codecademy course](#REACT-CODECADEMY-COURSE)
  - [Start react app](#START-REACT-APP)
  - [DOM](#DOM)
  - [JSX](#JSX)
  - [Components](#COMPONENTS)
  - [Component lifecycle](#COMPONENT-LIFECYCLE)
  - [Hooks](#HOOKS)
  - [Stateful components calling stateless components](#STATEFUL-COMPONENTS-CALLING-STATELESS-COMPONENTS)
  - [Advanced react](#ADVANCED-REACT)
- [React free tutorials](#React-free-tutorials)
  - [Setup](#SETUP)
  - [JSX Feature](#JSX-FEATURE)
  - [Component](#COMPONENT)
  - [State](#STATE)
  - [Effects](#EFFECTS)
  - [Material UI](#MATERIAL-UI)
  - [React with typescript](#REACT-WITH-TYPESCRIPT)

## REACT CODECADEMY COURSE
React is a front-end javascript library developed by facebook that allows the creation of UI components which leads to modular code.<br>
React is fast and clean, clean code makes the code more maintainable thus more scalable/flexible.

### START REACT APP
Node package manager or npm has to be installed on computer this can be checked with node -v.<br>
Node is a javascript runtime environment outside of the browser.<br>
Download Node here: https://nodejs.org/en/download/ or on mac with brew install.

To start a boilerplate react app, use in command line `npx create-react-app nameAppWithoutCapitals`.<br>
This react boilerplate uses a tool called webpack to transform the files in static assets.<br>
A .gitignore is created even though a git repository is not.<br>
package.json determines all the settings for the react app, learn more about the settings here https://www.codecademy.com/courses/react-101/articles/how-to-create-a-react-app.<br>
The node_modules directory contains dependencies of packages used by the current react app.<br>
package-lock.json, contains the exact dependency tree found in node_modules, plus a history of changes to the package.json file.<br>
public directory contains the app entrypoint index.html and a file that configures the web app for android called manifest.json, other files are not necessary and contain assets for the app initial starting page.<br>
src directory contains the javascript code that will be processed by webpack, the registerServiceWorker.js file takes care of caching and updating files for the end-user.

To start the development server `npm start` in app directory.

Before using react import the appropriate libraries to a .js file:<br>
`import React from 'react';`<br>
`import ReactDOM from 'react-dom';`

To debug:<br>
Install React Developer Tools as a chrome extension.<br>
On Chrome developer tools (View > Developer > Developer Tools)(or on mac Command+Option+i). On the same banner as Elements, Sources, Console, etc., there will be two new React tabs: Components and Profiler.<br>
In components tab interesting information is to be found about the components their props and states...<br>
But in the console and elements tab interesting information is also to be found.<br>
If it does not work look here https://github.com/facebook/react/tree/main/packages/react-devtools#the-react-tab-doesnt-show-up.<br>
Learn more here: https://www.codecademy.com/courses/react-101/informationals/ready-react-developer-tools.

`npm run build` is used to bundle the app into static files for production.

### DOM
Refers to document object model, is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document/front-end-web-page.<br>
It allows javascript to create dynamic HTML pages by manipulating the DOM.

To make DOM updates faster, react uses a virtual DOM.<br>
The virtual DOM is a light-weight DOM that updates way faster after JSX gets rendered.<br>
By comparing changes to the virtual DOM with the actual DOM react only updates in the DOM the elements that have changed in the virtual DOM instead of all the elements.

### JSX
React contains JSX (javascript XML) which is a syntax extension of javascript available in react that resembles HTML, it allows writing HTML-like-code in javascript.<br>
JSX is not readable by browsers, it has to be compiled to javascript.<br>
JSX is treated as a javascript expression, thus can be stored in a variable, array, object, be returned... 

JSX elements like in HTML can have attributes, those attributes are indicated by a name, followed by an equal sign and a value.<br>
Multi-line JSX must be between ( ) and all JSX elements must be inside one JSX element this can be the neutral `<div></div>` element.

To render JSX, the function ReactDOM.render() is used, the first argument contains the actual JSX code and the second argument consist of the function document.getElementById() with one argument being the id attribute inside an element in the actual HTML file whereby you would like to insert the JSX code.<br>
By rendering, through the virtual DOM, react only updates DOM elements that have changed making it faster.

In HTML the attribute class can indicate a CSS style, in JSX the attribute is not named class but className.<br>
In JSX self-closing tags must always end with />.<br>
In JSX regular javascript code can be indicated in between {}.

Event listeners, wait for an interaction from user with an HTML element on the webpage.<br>
Event listeners can be indicated in JSX by giving the appropriate HTML element the appropriate event-related-attribute.<br>
onClick is for example such an attribute other are found here https://reactjs.org/docs/events.html#supported-events.<br>
Its associated value should equal a javascript function with one parameter the event, that takes the element as an object with its attributes as the object attributes.<br>
To create a change from the event function call `document.getElementById(idValue) = JSXcode` with "idValue" being a value associated to an id attribute inside one element, which will insert the new "JSXcode".

If statements cannot be used in JSX between {}, but ternary operators can.<br>
The && operator can also be used to write one line conditionals in react, `true && <p>Hello World<p>` if expression1/true is true expression2/JSX will be rendered.<br>
The || operator allows directly choosing between two values the non-empty/non-false one for example `{'' || 'hello'}` whereby 'hello will be chosen and displayed.

The .map is often used to create HTML lists of arrays contents like this `['exercise1', 'exercise2', 'exercise3'].map(ex => <li>{ex}</li>)`.<br>
Lists elements can necessitate the attribute key when a specific order should be followed or if each list element contains a toggle that can be activated or deactivated, either way it never hurts to always include the key attribute.

React.createElement() allows for an JSX alternative that isn't usually used, but when compiling JSX gets transformed into this form.

### COMPONENTS
Is a small reusable chunk of code which renders HTML code.<br>
Components can be defined with javascript classes or functions.

All class components have some methods in common, those can be added to the class component with `extends React.Component`.<br>
Class component names must always start with a capital letter.<br>
Class components must contain one method called render() that returns JSX code.<br>
To create an instance of a component, in JSX create a self-closing-element that contains the component's name.<br>
Attributes can be added to component classes, with `get attribute() { return 'x' }`, in render function this.attribute can be called to get the value.<br>
Event listeners can be used inside components, the element's event-attribute (for example onClick) can equal a method inside the component class with this.method().<br>
Components can return in their JSX other components, this can also be called nested components.

Component classes contain the this.props attribute, this object contains the attributes passed to the component istance.<br>
Thus if we create for example the following component instance `<Profile name="add" age=45 />` inside the component class this.props.name will contain the value "add" and this.props.age will contain the value 45.<br>
Thus props allow a functionality similar to parameters in functions.<br>
Functions and event-handler-functions are often passed as props to components.<br>
To create an instance of a component self-closing tags are usually used but don't have to, all between the opening and closing tags of the component will be accessible inside the component with this.props.children.<br>
When an attribute is not given to a component class it will output nothing, default values can be given to those attributes like this `component.defaultProps = { attribute: defaultValue }`

State can be used next to props for dynamic content. To setup state in a component class, setup a constructor with argument props that calls super(props) and finally declare this.state and initialize it with an object.<br>
To get a component's state use this.state.nameOfProperty.<br>
To change a value of state use the function this.setState() with as argument an object that contains the properties that need to change with a new value.<br>
A change of state is often made in a separate method (event-function) of the component class dedicated to it.<br>
Methods different than the constructor or render method inside component classes do not have access to the this keyword unless in constructor you bind it like this `this.eventMethod = this.eventMethod.bind(this)`.<br>
this.setState changes a state inside a component but also calls render() so that the change gets rendered, that is why it cannot be called from a render() method else an infinfinite loop would occur.

### COMPONENT LIFECYCLE
Components can get created, rendered, added to the DOM, updated and removed.<br>
We make distinction between three lifecycles:<br>
1. Mounting, when the component is added to the DOM for first time.<br> 
2. Updating, when a component gets updated due to a props or state change.<br>
3. Unmounting, when a component gets removed from the DOM.

During mounting in the following order the component constructor, render and finally componentDidMount methods are called.<br>
componentDidMount can be used to call asynchronous tasks affecting the component also called side-effects.<br>
During the unmounting phase the componentWillUnmount method is called, herein component asynchronous-tasks running in componentDidMount can be cleared.<br>
When updating, a change occurs in props or state, followed by calls to the following component methods in order, render, componentDidUpdate.<br>
ComponentDidUpdate contains the parameter prevProps which contains the props of previous render.

### HOOKS
Component functions also exist instead of component classes, the function return should equal the render method return and props should be the function argument.<br>
Component functions can access the same functionalities as component classes through the use of hooks.<br>
Hooks are functions that manage the internal state of function components and their post-rendering side-effects.<br>
The use of component functions + hooks should be simpler than the use of component classes but do not add new functionalities.<br>
Different built-in hooks already exist such as useState, useEffect and others https://reactjs.org/docs/hooks-reference.html.

useState is the most often used hook, it enables the manipulation of states in function components.<br>
It is initialized like this `const [myState, setMyState] = useState(initialStateValue)` whereby myState holds the state value and setMyState is a function that changes the state value and renders, initialStateValue is an optional parameter that gives an initial value to myState, if it is not defined myState initial value will equal undefined.<br>
It can be used through events like this for example `<button onClick={()=>setMyState(newValue)}></button>`.<br>
The event function can contain the optional 'event' parameter that contains the target property which holds the user input if any with event.target.value.<br>
Instead of holding one object with all the states of a component, we can call useState for every state and thus separate them.<br>
It is best to use the setter function with a callback function that takes prior state as parameter for example `setMyState((prev)=>[newValue, ...prev])` whereby a newValue is added to a string.

useEffect is a hook that enables side-effects (asynchronous tasks affecting the component).<br>
useEffect takes as argument a callback funtion, that is called after the component has rendered.<br>
Some effects such as event listeners require cleanup to avoid memory leaks, to resolve this problem the argument-function of useEffects can return a cleanup function, this function will be called after unmounting and can be used to clean prior asynchronous tasks.<br>
useEffect can take a second argument called the dependency array, which indicates after which renders the callback function has to be called. <br>
Passing no second argument leads to the callback function being called after each render, passing an empty array as second argument leads to the callback funtion being called only after the first render.<br>
Variables set in the array that change between renders lead to the callback function being called again.<br>
When using multiple hooks they often each are associated with one state, ideally at top of function, each state should be declared directly followed by its associated event hook.

### STATEFUL COMPONENTS CALLING STATELESS COMPONENTS
Conventions in writing components serve in making the code more readable and thus more manageable. <br>

A react component should use props to store information that can only be changed by another component. <br>
A react component should use states to store information that can be changed inside the component itself.

A component can call other components, lets make distinction between parent and child components based on this. <br>
How would a child component update his parent component? <br>
A parent component can define a method whereby a change in state happens (event-handler), it can pass this method as callback-function-props of child components, enabling the child components to make a state change of parent component by calling this callback-function.

Each component should only have one job.<br>
Child components can also update their sibling components.<br>
When parent components send event-handlers as props to one child component, this child component calls the event-handler, the event-handler calls sibling components with other props.

A pattern that is often found in react is the following;<br>
A stateful component renders (also called container component), calls stateless child component one with its state as props that displays the parent's state (also called representational component), and calls stateless component child two with an event-function as props who displays a way to change the state.

### ADVANCED REACT
An inline style consists of a component having the style attribute equal to an oject that defines a style and is defined inside the component instantiation.<br>
Creating a separate style object variable is preferred when the style object is large.<br>
In react for example this `{ marginTop: '100px' }` is considered the same as `{ marginTop: 100 }`.<br>
To re-use particular styles those can be declared in a separate file and be exported for use.

propTypes can be useful to receive a warning when they are not properly used and through its documentation by comments making the code cleaner.<br>
When a component expects a certain prop, propTypes can be used, first import the associated library `import PropTypes from 'prop-types'`.<br>
To define propTypes `componentName.propTypes = { expectedProp: PropTypes.type.isRequired }` whereby multiple props could be expected and type can mean string or number...

In react when creating forms, state can be used to be aware of every change that occurs inside an input-element before the form gets submitted.

An uncontrolled component is a component that maintains its own internal state. A controlled component is a component that does not maintain any internal state. Since a controlled component has no state, it must be controlled by someone else.<br>
To create an uncontrolled component, we begin by creating a ref using the React.createRef() method. This method returns an object with a .current property that refers to the DOM node it is bound to. This ref object is bound to a form element using the ref attribute and whenever the value of that form element needs to be retrieved, simply refer back to the ref object’s .current property.<br>
There is one situation in which uncontrolled components must always be used: <input> form elements with the type="file" attribute. The value for this type of <input> form element can only be set by a user, and not programmatically, and therefore the only way to retrieve this value is through a ref.<br>
Uncontrolled components are also useful when the value of the form is only necessary after submitting.

## React free tutorials

### SETUP

npx executes npm(javascript nodejs package manager) binaries.<br>
Use it to setup the default react application with `npx create-react-app .`.

Once the app is setup, different commands can be used;<br>
npm start -> starts the development environment<br>
npm run build -> builds the application, creates production version of application that can be deployed on server and accessed from the internet.

Once the app is setup differt default files appeared;<br>
In public/index.html we can find the index file that contains one div tag named root wherein the whole react-generated-html will come. In src/index.js we can view that App.js gets rendered into the div tag root.<br>
In src/App.js a default react application is written inside the function app, this function/component will be the core of the app, like a main is to the c langauage.<br>
To prepare for writing own code, you can clean the default app by for example;<br>
All files in src/ besides index.js and App.js can be removed, App.test.tsx, reportWebVitals.ts, react-app-env.d.ts, setupTests.ts could have some utility and can be kept.<br>
Make the app function return null, remove the App.css and logo.svg imports in src/App.js.<br>
In src/index.js all serviceWorker code, index.css, serverWorker imports can be removed.<br>
In public/index.html the whole <head></head> element can be removed or changed.<br>
In public directory favicon.ico, logo192.png, logo512.png, files can all be removed.

For `nmp run build` the webpack library is necessary to transform JSX/components into javascript and bundle the whole app into one file; bundle.js (that the browser can run).<br>
After bundling the application a build directory appears, that is ready for server deployment.<br>
Distinction can be made between development environment (everything besides the build folder) and production application (build folder). The production application or build folder can deploy the application on a server on its own.<br>
For server deployment use the following two commands `npm install -g serve` followed by `serve -s build`. 

The google chrome extension "React developer tools" allows for more information on state of application. 

### JSX-FEATURE
Is a syntax similar to HTML with some differences like;<br>
Javascript code can be implemented by indicating it between { }, if statement can be done with ternary operator herein.<br>
A name between tags <name /> indicates a component and is thus used to reuse components.<br>
Those components can take arguments like that <componentName argumentName=argumentValue/>.<br>

Javascript array method map can be used to loop over all elements/components of an array, to return them all.<br>
In both JSX and HTML {} can be used to take expressions, for example do an if with a ternary operator.<br>

css can be added inside tags allowing for styling with style= an objects and that can contain variables such as color, backgroundcolor, cursor... Such a css object can be created once and re-used.

To create a button simply use `<button></button>`, in tag onClick={function} allows you to call a function once someone clicks the button, this is an example of an event.

To use icons, download them like this `npm install react-icons`.<br>
Now you can import components from react-icons library, those components/icons can be added in the JSX like you would add any other component.

### COMPONENT
Are react functions that return a JSX code, that thus enables reusable components.<br>
Components can contain other components like functions can call other function and they all in the end come back to the app-component/main, their name must begin with a capital letter.

Function arguments are called props, the function will contain one prop called props that takes all the potentially passed arguments and those arguments can be accessed inside the function with props.passedArgumentName.<br>
By declaring outside the component the variable componentName.defaultProps we can indicate the default values of the props in a dictionnary/object format.

Components are usually functions but can also be classes that inherit from React.Component and have render method.

To return multiple elements they can be wrapped between empty tags <> </> creating one fragment.<br>
Often one file exists per component and all components are inside src/components.<br>
Inside components functions can be written that can access the variables inside the component.

### STATE
Is a dynamic form of storage that lives inside of our components, in the end it allows for direct updates of pages (without need to reload).<br>
React uses a separate DOM representation called the virtualDOM, it compares it to the real DOM with the reconciliation algorithm, to determine if the page has to be updated. 

For this use the state hook useState(value) that returns an array with two values, the first one being the value and second a setter function, the setter function can be used after a particular action and is able to change the value, which will directly be updated on the page.

### EFFECTS
Functions get called once a component is created(mounts), updated or removed(unmounts) from the page.

This is done by the hook useEffects(function, triggers[]), the function gets called once a component mounts or one of the values inside the trigger[] array change, finally this function can return a function that gets called once our component unmounts.

### MATERIAL UI
Material UI is a framework for react that contains pre-made components.

#### SETUP
First install the library with `npm install @material-ui/core` after having started a react application.<br>
In the package.json file dependencies section the material-ui/core library will become visisble.

#### USE
https://material-ui.com/components/box/ -> documentation on all component and their parameters possibilities.

To access a button component for example `import Button from '@material-ui/core/Button'`, afterwards Button can be used as a component. <br>
You can give it the variant, color, size parameter for styling for example.<br>
style parameter can be used for even more customization.<br>
Other parameters for functionality are for example href, onClick, disabled..

For access to icons first `npm install @material-ui/icons`.<br>
To access them for example use `import DeleteIcon from @material-ui/icons/Delete`, now DeleteIcon can be used like any other component.

To create own styles `import { makeStyles } from '@material-ui/styles'`.<br>
Use the makseStyles function that returns a function and takes in an object with the different style parameters.<br>
Indicate inside a compenent's className parameter the style to style the component.<br>
To access colors `import { orange } from '@material-ui/styles'`.

To create own themes `import { ThemeProvider, createMuiTheme } from '@material-ui/styles'`.<br>
Use createMuiTheme to create a theme by giving it an object with theme specifications.<br>
Wrap components around `<ThemeProvider theme="created-theme">components</ThemeProvider>`

For typography  `import Typography from '@material-ui/core/Typography'`.<br>
The Typography component can be used like this `<Typography parameters>TEXT</Typography>`, different parameter possibilities are for example: variant, size...

Container component can be used to make content not take the whole screen place but a subsection of it.<br>
Grid component can be used for custom place/space wherein other components can come, thus lay-out all the components where we want to.<br>
Grids and containers can be used for responsive design, meaning proper display on screens of different sizes.

To create an app-bar:<br>
`import AppBar from '@material-ui/core/AppBar'`<br>
`import Toolbar from '@material-ui/core/Toolbar'`<br>
`import IconButton from '@material-ui/core/IconButton'`<br>
`import MenuIcon from '@material-ui/icons/MenuIcons'`<br>
The MenuIcon must come inside an IconButton, which has to come inside a ToolBar, which has to come inside an AppBar.

### REACT WITH TYPESCRIPT
Create boilerplate app with `create-react-app nameApp --typescript`

Function component types equal React.FC and they return type JSX.Element.<br>
To indicate the props it takes for example `React.FC<{message: string, call: boolean}>`, alternatively you can define the props object as an interface and pass the interface between <>.<br>
Usually in react + typescript components are creates with arrow functions as follows, `const arrowFunctionName:React.FC<{message: string, call: boolean}> = (props) => {};`, props could also be replaced with a destructor operator '{ message, call }'. <br>
When exporting arrow functions they have to be exported on another line not directly from the function declaration. <br>
Another way to declare is like this `function name(propsInterfaceWithExplicitTypeDeclarations): JSX.Element {}`

useState can be used like this `[var, setVar] = useState<number | null>(null)`, whereby the var variable gets initialize with null and can take a number later on.
