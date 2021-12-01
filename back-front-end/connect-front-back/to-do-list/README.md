Our project is broken up into three main folders: model, controller, and view.

The view directory contains all of the code for the front-end of our app, and got code generated with create-react-app.

A local postgresql database can be created on mac with postres.app and postbird, add the query found in model/todo.sql.

In model/todo.js CRUD REST API functions are created to interact with database.

In controller/index.js CRUD functions are created to handle request/responses and it uses the functions inside model/todo.js to communicate with database.

In routes/todo.js routes are created with express.Router() to handle GET, POST, DELETE... The functions from controller/index.js are used...

In view/src/utils/index.js async-await functions are created to get, remove or create todos, the api from routes/todo.js is called with fetch...

In view/src/App.js the frontend calls the functions from view.src/utils/index.js to call the database to make changes when necessary...

The app can be launched with npm run start in root and view directories...
