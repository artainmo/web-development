# NODEJS

## Free tutorials

### SETUP
Install nodejs from the web or with brew on mac. To verify it exists type node --version in terminal.

The node command will compile and execute javascript in the terminal instead of in the browser, by using console.log() you write into the terminal.<br>
node only executes one file, but this file can import from other files.

npm(nodejs-package-manager) command enables to install packages/modules/dependencies(those names are all referring to the same). Those packages can be installed with -g globally or locally (solely on current project). <br>
Those packages can also be uninstalled.<br>
"npm init" creates a package.json file which stores important info about the package/project.<br>
npx(nodejs-package-execute), executes packages can start apps for example "npx create-react-app".<br>

VScode can be used to view implicit types.

### USE
Default global variables; __dirname, __filename, require(imports), module(info module), process (info env).

To export code go to the module and make the variable 'module.exports' equal to what you want to export, if multiple exports set them in an object or make multiple 'module.exports.NameExport'.<br>
To import that code make a variable equal require('modulePath'), by calling require the code on the module/file will be executed.

A lot of built-in modules with lots of different functions already exist. <br>
Nodejs.org/en/docs/ for more info on all posibilities.

OS module, import it with "const os = require('os')". Gives all the information surrounding the operating system and its user.<br>
path module, helps work with paths.

The http module enables us to create a server, with createServer and listen functions. <br>
The createServer function takes a function that will loop indefinitively waiting for requests and responding, this function takes two parameters the request and response objects to access/enable requests/responses.<br>
The response object can fill header and status code of reponse with .writeHeader, fill body of reponse with .write and end the communication with .end.<br>
From the request object access .method, .url...

Javascript is synchronous and single threaded.<br>
While making an external request and waiting for a response our sole thread loses its time. <br>
Event loops are asynchronous and take a function/callback that makes an external request, while waiting for the response it starts executing the following code outside the function, once a response arrives it comes back to finish execution of that function. Use async/await/promises to setup event loops.

Events occur from users for example clikcing on a button, then an event/function will be called.<br>
The 'events' module element 'EventEmitter' has to be imported, it will allow use to create an EventEmitter object.<br>
This object has the 'on' function that takes a keyword and function, it also has an emit function that takes a keyowrd and optionally parameter values for the function it will end up calling.<br>
If the 'emit' function calls a keyowrd, the function given as argument to the 'on' function with same keyword will be called.<br>
http module has own event functions.

fs module, short for file system, this module enables to handle files, like reading and writing. This can be done in an asynchronous way to gain time if using large files.<br>
FileSync is used to access whole file at once and does not work well on large files.<br>
Streams are used to read large files and allow more customization. ReadStream, WriteStream, DuplexStream exist.
