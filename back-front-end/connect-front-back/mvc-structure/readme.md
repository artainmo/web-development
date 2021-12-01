'npm run start' in root and /view to launch.

Local PostgreSQL server is setup on mac with postgres.app and Postbird.

.env file is created, but not visible inside github repo, with following variables:
* DB_USER= username
* DB_PASSWORD= password
* DB_HOST=localhost
* DB_POST=5432
* DB_DATABASE=tableName
* PORT=8000

models/database.js is a file that connects our application to the PostgreSQL database.

models/expense.sql helps us define the data structure of each collection in our database as well as the name of our database.

In the controllers/index.js file functions are declared that allow for querying or manipulating the PostgreSQL database and leverages a CRUD API

Inside of routes/expense.js, we will create routes that access the controller’s functions.

The view directory consists of the front-end and calls functions from /utils to interact with the controller and thus the database.
