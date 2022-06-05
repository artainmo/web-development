# POSTGRESQL

## Table of contents
- [Codecademy course](#Codecademy-course)
  - [Basics](#Basics)
  - [Queries](#Queries)
  	- [Aggregate functions](#Aggregate-functions)
  	- [Multiple tables](#Multiple-tables)
  - [Design a database](#Design-a-database)
  	- [Database keys](#Database-keys)
  	- [Database relationships](#Database-relationships)
  	- [Constraints](#Constraints)
  - [Database optimization](#Database-optimization)
  	- [Indexes](#Indexes)
  	- [Normalization](#Normalization) 
- [Free tutorials](#Free-tutorials)
  - [Understand](#understand) 
  - [Setup and psql](#Setup-and-psql)
  - [Basic use](#Basic-use)
  - [Even more](#Even-more)

## Codecademy course

Glossary of commonly used SQL commands: https://www.codecademy.com/articles/sql-commands

### Basics
PostgreSQL is a relational database management system, meaning it stores data in tables and makes use of the SQL language.<br>
PostgreSQL stores information on a dedicated database server instead of on a local file system.<br>
SQL (Structured Query Language) is a programming language used to communicate with data stored in a relational database management system.<br>
Other relational databases are mySQL, SQLite, SQL server, Oracle DB....<br> 
Because all use SQL or slight variations of it, learning to use one relational database also opens doors to other relational databases.<br>
Distinction can be made between relational databases with file extensions, PostgreSQL uses .sql as file extension, but also with data types and access to built-in-tables.

A relational database can consist of one or more tables, tables consist of rows and columns that contain datas.<br>
Datas can be of different types;
* INTEGER(whole number)
* TEXT(text string)
* DATE(date formatted as YYYY-MM-DD)
* REAL(decimal).<br>

Commands are used to manage the database, they can be written on multiple lines and must end with a semi-colon.<br>
Commands can be written in terminal with psql or from programming language with appropriate library (learn more in 'Setup and psql' section), commands can also be written as scripts in a .sql file which can be executed from the terminal or a programming language with appropriate library.<br>
`-- ` starts a single line comment.

`CREATE TABLE table_name (column_1 data_type, column_2 data_type, column_3 data_type);` is used to create a new table in a database.<br>
`INSERT INTO tableName (columnName1, columnName2, columnName3) VALUES (value1, value2, value3)` is used to insert rows inside a table.<br>
`SELECT columnName FROM tableName` is used to get all the data from a certain column in a table, or * would indicate all columns.<br>
`ALTER TABLE tableName ADD COLUMN columnName dataType;` is used to add a column to a table.<br>
`ALTER TABLE tableName DROP COLUMN columnName dataType;` is used to remove a column from a table.<br>
`UPDATE tableName SET columnName1 = value1 WHERE columnName2 = value2` is used to make updates in a table, whereby for column2 often the id column is used if it exists.<br>
`DELETE FROM tableName WHERE columnName IS NULL` is used to delete the rows that have no value in a certain column.

When creating new columns the data type of the column has to be declared, constraints can also be added, the database will reject data that does not conform with the rows constraints.<br>
PRIMARY KEY, can only be used once and makes sure all row values are different.<br>
UNIQUE, makes sure all row values are unique but can be used multiple times.<br>
DEFAULT value1, gives a default value when no value is given.<br>
NOT NULL, makes sure all rows have a value.

In order to run and use Postgres on your own computer, you will need to set up both a Postgres server and a client.<br>
How to do this depends on os system.<br>
Once it is locally installed, it will run on a port (usually 5432), it can be manipulated through the command line interface with psql or through a UI that has to be installed.<br>
Learn more in 'Setup and psql' section.

### Queries

`SELECT columnName FROM tableName` is used to get all the data from a certain column in a table, or * would indicate all columns.<br>
`SELECT columnName1, columnName1, columnName3 FROM tableName` is used to get data from multiple columns.<br>
`SELECT columnName AS 'newColumnName' FROM tableName` is used to change the column name in returned data only.<br>
`SELECT DISTINCT columnName FROM tableName` is used to return all unique values in a certain column.<br>
`SELECT * FROM tableName WHERE columnName > 5` is used to return data that passes a certain condition coming after WHERE (> < >= <= != = all those conditional operators can be used).<br>
`SELECT FROM tableName WHERE columnName LIKE 'example_example';` LIKE is used to find certain patterns in a column's datas, in this example all values that start and end with example while having one letter in between will be returned.<br>
`SELECT FROM tableName WHERE columnName LIKE '%man';` in this example LIKE is used to find patterns that end with man, for patterns that start with man 'man%' and for patterns that contain man '%man%'.<br>
`SELECT columnName FROM tableName WHERE columnName IS NULL;` is used to return a column that contains empty datas in the same or another column with IS NULL, the inverse would be to use IS NOT NULL.<br>
`SELECT columnName FROM tableName WHERE columnName BETWEEN 19 AND 42;` BETWEEN is used to return rows in a certain column with values between two values, for text datatype the values have to start with letters between two letters in the alphabet.<br>
`SELECT columnName FROM tableName WHERE condition1 AND condition2;` AND can be used to specify multiple conditions the returned data has to to comply with.<br>
`OR` similarly to the AND operator the OR operator can be used to chain conditions, but with OR only one of the conditions has to be true on the returned data.<br>
`SELECT columnName FROM tableName ORDER BY columnName DESC;` ORDER BY can be used to order rows based on datas in a column, DESC indicates that you want to order in descending order instead of ascending order.<br>
`LIMIT 10` can be used to only return the first 10 demanded data.<br>
<pre>SELECT columnName1,
  CASE
   WHEN columnName = value THEN newValue
   WHEN columnName = value2 THEN newValue2
   ELSE value3
  END AS 'nameNewColumn'
 FROM tableName;</pre>
 This would create a new column that generates its values based on values from other columns, only in the returned table.
 
#### Aggregate functions

Aggregates are calculations done on multiple rows of a table.

`SELECT COUNT(*) FROM tableName WHERE condition;` here the number of rows that comply with the condition will be returned.<br>
`SELECT SUM(columnName) FROM tableName;` here the sum of all values in a column will be returned.<br>
`SELECT MAX(columnName) FROM tableName;` here the highest value in a column will be returned using MAX(), MIN() can be used for lowest value.<br>
`SELECT AVG(columnName) FROM tableName` here the average value of a column is returned.<br>
`SELECT name, ROUND(AVG(columnName), 2) FROM tableName` here round is used to round a REAL datatype with 2 decimal values, we also show that multiple columns can still be selected and that aggregate functions can be nested.<br>
`SELECT columnName, aggregateFunctionExression FROM tableName GROUP BY columnName` this will apply the aggregate function not on whole column but on each group (determined by distinct values) inside a column.<br>
`SELECT columnName1, columnName2, aggregateFunctionExression FROM tableName GROUP BY 1, 2` this will apply the aggregate function not on whole column but on each group (determined by distinct values) inside the column 1 and 2 those are the columnName1 and columnName2, this is a shorter syntax.<br>
`SELECT columnName, aggregateFunctionExression FROM tableName GROUP BY columnName HAVING COUNT(columnName) > 10` similar to WHERE, HAVING defines a following condition, the difference is that HAVING is used to filter groups not rows, in the prior example the condition states only groups with more than 10 rows will be returned.

#### Multiple tables

Using multiple tables is useful to divide data logically.<br>
Different tables can be linked together this is called joining.<br>
Each table can have a primary key, by using the primary keys of for example table2 and table3 into table1, those tables will be joined, leading to rows in one table to be associated with rows in another table.<br>
Primary keys of one table in another table are called foreign keys.

When tables are joined we can query data from both tables together easily, returning one table, like this:
<pre>SELECT * FROM tableName1
JOIN tableName2
ON tableName1.columnName = tableName2.columnName;</pre>
or
<pre>SELECT * FROM tableName1, tableName2
WHERE tableName1.columnName = tableName2.columnName;</pre>
Whereby tableName1.columnName is table1's primary key and tableName2.columnName is table2's foreign key referencing towards the table1 primary key, they thus must be similar for the join to happen, as the left table will be kept and right table removed when joining.<br>
If they are not similar LEFT JOIN can be used, whereby the values that are different will be set to NULL while the others will keep the left table values.

CROSS JOINS allow to simply join together two tables who do not have a relationship like this:<br>
`SELECT * FROM tableName1 CROSS JOIN tableName2;` or `SELECT tableName1.columnName, tableName2.columnName FROM tableName1 CROSS JOIN tableName2;`

If two tables are similar in terms of columns their rows could be stacked up with UNION:<br>
`SELECT * FROM tableName1 UNION SELECT * FROM tableName2;`

Sometimes we want to join a temporary tableX that first has to be created from one tableY with another tableZ, this is possible like this:<br>
<pre>WITH tableX AS (
SELECT columnName FROM tableY
WHERE conditions...
)
SELECT * FROM tableX
JOIN tableZ
ON tableX.columnName = tableZ.columnName;</pre>

### Design a database
A database shema is documentation surrounding a database.<br>
It can be done by hand or with a software program such as DbDiagram.io and should contain the following:<br>
* table names
* column names per table
* column types per table
* constraints per table, if any
* relationships between tables, if any

Tables are created like this `CREATE TABLE table_name (column_1 data_type, column_2 data_type, column_3 data_type);`<br>
`INSERT INTO tableName (columnName1, columnName2, columnName3) VALUES (value1, value2, value3), (value1, value2, value3)` is used to insert rows inside a table.

Common datatypes:
* integer: whole number
* decimal: floating-point number
* money: fixed floating-point number with 2 decimal places
* boolean: TRUE or FALSE
* char(n): fixed-length string denoted by n, removes trailing blanks
* varchar(n): variable-length string with maximum length denoted by n
* text:	unlimited-length string<br>

Information that can be classified into different categories are best separated in different tables.
Tables can still be related to each other.

#### Database keys
Keys enable to place constraints on the data in a column, different types of keys exist.

For example, a primary key will ensure that each row in a table is unique and can thus be used as a unique identifier to access the data.<br>
It is declared like this when creating a table and defining the columns: `columnName dataType PRIMARY KEY`.

Constraints and keys on columns can be visualized through the information schema which is a database containing meta information about objects in the database including tables, columns and constraints.<br>
It can be called like this, whereby 'tableName' should be the table you want to visualize:<br>
<pre>SELECT
  constraint_name, table_name, column_name
FROM
  information_schema.key_column_usage
WHERE
  table_name = 'tableName';</pre>
In output pkey refers to a primary key constraint, while fkey refers to a foreign key constraint.

Sometimes no columns consisting of unique values exist in a table but a combination of multiple columns must be unique.<br>
A composite primary key is a primary key consisting of multiple columns, leading to unique combinations, enabling an index.<br>
They are declared like this during the creation of a table: `PRIMARY KEY (columnName1, columnName2)`.

A foreign key is a key that references a primary key column in another table and enables relationship between tables.<br>
REFERENCES is used to indicate foreign keys at table creation like this: `columnName dataType REFERENCES tableName2(columnName)`.

#### Database relationships
A one-to-one relationship between tables consist of each parent-table-row having only one associated child-table-row.<br>
An example is a human having only one nose.<br>
The parent-table primary key becomes a foreign key in the child-table, because only one association is possible per row, all foreign keys have to be unique.<br>
UNIQUE is used when declaring the foreign key: `columnName dataType REFERENCES tableName2(columnName) UNIQUE;`.

A one-to-many relationship between tables consist of each parent-table-row having one or more associated child-table-rows.<br>
An example is a book having multiple chapters.<br>
The parent-table primary key becomes a foreign key in the child-table, because multiple rows in the child-table can be associated with the same parent-table-row, the foreign key values must not be unique and thus UNIQUE is not used.

A many-to-many relationship between tables consist of each table1-row having one or more associated table2-rows and each table2-row having one or more associated table1-rows.<br>
An example is a class that can have multiple students and students that can have multiple classes.<br>
In this scenario a third table is created (called cross reference table), it takes the primary keys of table1 and table2 as foreign keys and uses a composite primary key consisting of those foreign keys.

#### Constraints
Constraints are rules applicable to certain columns against invalid data, raising errors when necessary.<br>
Datatypes are for example constraints as they only allow data of a certain type.<br>
Primary keys too as they only allow unique data and no null values.

NULL values can be inserted like this:<br>
`INSERT INTO tableName (columnName1, columnName3) VALUES (value1, value3);`, whereby column 2 is not indicated and will equal NULL.<br>
With constraint NOT NULL indicated when creating a table after dataType declaration of a column, can indicate if a column can take NULL values or not.

A constraint can also be added later on like this: `ALTER TABLE tableName ALTER COLUMN columnName SET NOT NULL;`.<br>
Or removed like this:  `ALTER TABLE tableName ALTER COLUMN columnName DROP NOT NULL;`.<br>
If for example we try to set a NON NULL constraint on a column that already contains NULLs we first have to remove those NULLs.<br>
Backfilling refers to updating a database values, to remove nulls we can update the database like this: <br>
`UPDATE tableName SET columnName = defaultValue WHERE columnName IS NULL;`

Multiple constraints can be specified the one after the other.

The CHECK constraint is able to take a condition that results in true or false like this for example:<br>
`ALTER TABLE tableName ADD CHECK (columnName < 100 AND columnName > 0);`. or `ALTER TABLE tableName ADD CHECK (columnName1 + columnName2 = columnName3);`.

The UNIQUE constraint makes sure a column or combination of columns is unique, this can be indicated when creating a table by adding UNIQUE after datatype declaration or for a unique combination of columns like this: `UNIQUE (column1, column2)`.<br>
Post table declaration like this: `ALTER TABLE tableName ADD UNIQUE (columnName)`.

Foreign keys prevent adding data that does not exist in relational table first or deleting data that still exists in relational table.<br>
To be able to delete a data from one table and automatically delete associated data from relational table a constraint can be added like this on the foreign key:<br>
`columnName dataType REFERENCES tableName2(columnName) ON DELETE CASCADE`.

### Database optimization

Optimizing a database allows for speed which is important when making requests to a database.<br>
The proper use of indexes and the use of normalization can optimize a database.

#### Indexes

An index allows organization of the data in a table to help with performance when searching and filtering records.<br>
One or multiple indexes can exist in one table, indexes can of course improve performance but they can also have a cost, thus they should not always be used.<br>

Indexes of a table, cannot be found between the usual column names, but can be viewed with this command: `SELECT * FROM pg_Indexes WHERE tablename = 'tableName';`.

When testing the efficacy of indexes a SELECT query can be precipated with EXPLAIN ANALYZE so that execution time is returned.

Imagine a table with 1000 rows has a column of score with values between 0-100 and we ask to find the rows with score of 100.<br>
Without an appropriate index each row should be read to hope to find a row with value 100, thus 1000 rows could be read to finally find the one.<br>
The appropriate index would be an index based on the score column, this index will pre-order the rows based on the score column.<br>
Now we can start searching in the middle of the rows, thus at the median value possibly score 50, because 100 is above we will go to the median between 50 and 100 possible 75, because 100 is above we will go to the median between 75 and 100 possible 88, and we continue like that until we find 100.<br>
An index will thus pre-order the data based on a column and while without an index a search would last max theNumberOfRowsInTable with an index it would last max root of theNumberOfRowsInTable.

An index on a column in a table can be created like this: `CREATE INDEX indexName ON tableName (columnName);`.

A multicolumn index, is an index on multiple columns instead of one. This can be useful when certain columns are associated together and searches are made on both of them simultaneously like this `WHERE columnName1 = x AND columnName2 = y`.<br>
A multicolumn index is created like this `CREATE INDEX indexName ON tableName (columnName1, columnName2);` and the order of column1 and column2 matters.<br>
First the values of columnName1 would be searched and only after the values of columnName2.<br>
Imagine this search condition `WHERE lastName = 'Smith' AND firstName = 'Marc' OR firstName = 'Jen' OR firstName = 'Ben'`, because lastName is only based on one condition it would make sense to first index the lastName and only after the matching firstName thus when creating a multicolumn index the order would be (lastName, firstName).

Indexes speed up searching and filtering, however, they slow down insert, update, and delete statements, because each time values are changed in a table, the indexes related to those tables have to re-ordered.<br>
If doing a large amount of inserts/updates it might be worth considering removing indexes before doing the changes then putting the indexes back in once you are done.<br>
Indexes also use extra memory storage, an index data structure can take as much space as the table itself.<br>
Size of a table can be viewed with: `SELECT pg_size_pretty (pg_total_relation_size('tableName'));`.

To decide to add an index or not the benefits have to be weighted against the risks, how much will the database be searched vs changed?<br>
Using an index is also way more useful when the search should return few rows than if it should return lots of rows.

When the cost of an index is greater than its benefit it should be removed, this is possible with this command:<br>
`DROP INDEX IF EXISTS indexName` whereby IF EXISTS can be added to avoid errors in the case the index does not exist.

Sometimes in one large table distinction can be made between different categorical data and we often want to query solely one of those categories, for example in a customers table we can make distinction between child, teenage and adult customers.<br>
We can create a partial index on the teenagers if we want to query all the teenagers faster like this:<br>
`CREATE INDEX indexName ON tableName (columnName) WHERE condition;`, whereby the condition would be for example `age BETWEEN 13 AND 19`.

If queries are always done with a specific column in descending order, you can indicate this when creating an index so that it will already be sorted as wanted, fastening the query.<br>
`CREATE INDEX indexName ON tableName (columnName DESC);`.

PostgreSQL automatically creates a unique index on any primary key or column with unique constraint in your tables.
	
Indexes can be clustered or non-clustered. Only one index can be clustered in a table, usually the primary key of a table is set to be the clustered index.<br>
Cluster indexes allow faster search time in a table by reorganizing the table rows in some way, like a dictionnary would.<br>
PostgreSQL contrary to other SQL systems does not recluster automatically after, insert, update or delete, thus those commands can run faster but to maintain the cluster index one has to manually call cluster again.<br>
An already existing index gets declared to be the cluster index like this `CLUSTER tableName USING indexName;`.<br>
To recluster the cluster of a particular table simply use `CLUSTER tableName;` or to recluster the cluster of all tables `CLUSTER;`.

A cluster index will reorganize the whole table, meaning all the columns based on the associated index.<br>
A non-cluster index will create a separate table that simply holds the associated index column and a pointer to the complete row in actual table.<br>
Thus a non-cluster index is slower in that it has to call a pointer before accessing the whole row data while a cluster index does not.<br>
But if only the index column itself is queried, a non-cluster index is not slower as it does not have to get the additional data through calling the pointer.<br>
This is where multicolumn indexes become useful, if only the columns inside the multicolumn index are queried, calling the pointer is not necessary again.<br>
But if only searching one column, a simple index will be faster than a multicolumn index.

Indexes can be based on expressions too, not solely column references.<br>
When setting the UNIQUE constraint on a column 'Ride' will be considered different than 'ride' for example.<br>
`CREATE UNIQUE INDEX indexName ON tableName(LOWER(columnName))` adding a unique index that makes use of the lower function will ensure 'ride' to be considered equal to 'Ride'.<br>
Because the results of the expression are stored in the index, it saves the search function from having to perform it on every row on future searches.<br>
Thus indexes based on expressions can fasten search times but also can also slow down update, inserts and delete.

#### Normalization

Normalization consists of restructuring a database, different levels of normalization exist namely first, second and third normal form.<br>

When columns of a database table do not depend on the primary key, the same data may be duplicated in multiple places.<br>
Duplicated data is a poblem when having to update it and also takes more memory than necessary.<br>
For example a student table with advisor columns, different students may have the same advisor, the advisor columns should appear in a separate relational table to avoid duplicates.<br>
Another problem with everything in same table would be that maybe we want to add an advisor but without students yet, this will create an error if the student columns cannot be NULL.

To restructure tables a new table can be created from columns of an already existing one, followed by removing the copied columns from already existing table.<br>
<pre>CREATE TABLE newTableName AS
SELECT distinct columnName1 columnName2 
FROM tableName;

ALTER TABLE tableName
DROP COLUMN columnName1,
DROP COLUMN columnName2;</pre>
distinct is used to indicate that only distinct/unique values should be copied to new table, not using it would copy all values.<br>
After the two tables have to become relational through foreign keys and/or cross-reference-tables.<br>
Finally in new tables applicable constraints can be set.

But normalization (thus separating data in multiple tables) can come at the cost of some queries necessitating joins, making them more complex.

## Free tutorials

### Understand
Is a database-management-system, it uses SQL as its main query language.<br>
A database is used to store, update and retrieve data, throughout user sessions (it avoids user data is lost after its session closes).<br>
SQL is a programming language to communicate with databases that is widely used.

Data is stored in tables that consist of rows and columns.

Such databases are called relational databases, non-relational databases also exist and they consist of huge JSON-like objects, those are simpler and faster.

### Setup and psql
Is best downloaded as an app from the web, on macos for example: https://postgresapp.com/.<br>
On https://postgresapp.com/ you can download the app but also learn how to install it, create a postgresql server with databases, how to connect from the terminal to those databases to execute psql commands and how to connect from programming languages to those databases.

psql is a terminal-based frontend to PostgreSQL. It enables interactive communication with PostgreSQL databases from the terminal.<br>
SQL commands can be written and will only be send to the server when a command-terminating-semicolon is reached, a line return does not end the command and thus your command can be written on multiple lines for clarity. If the command got executed without errors the results will be shown.<br>
When launching psql, next to SQL commands you can start launching psql meta-commands in the terminal, all psql meta-commands start with \.<br> 
With `\?` you can view the usage guide.<br>
With `\c databaseName` you can connect to another database and with `\conninfo` view current database.<br>
With `\l` you can list all databases, by giving it as parameter a database name you can selectively show that database. <br>
With `\d` you can list all tables and through the parameter one specific table can be shown.<br>
With `\! shellCommand` you can execute regular shell commands and with `\cd` change directory.<br>
With `\h partialSqlCommand` syntax help is given on correct SQL command.<br>
With `\i fileName` you can execute a .sql file and thus the commands it contains.<br>
With `\q` you can quit psql.
The query buffer consists of written SQL commands without command-terminating-semicolon. `\gdesc` verifies syntax errors in query buffer without executing while `\g` executes the query buffer, `\p` shows the current query buffer or last executed and `\r` resets/clears the query buffer.  

### Basic use
To create a new database use `CREATE DATABASE name;`.<br>
To connect to the database use `psql -h ipAddress -p port nameDatabase` or `\c nameDatabase` or view 'setup and psql' section.<br>
To delete a database use `DROP DATABASE name;`.<br>
To create a table use <pre>CREATE TABLE tableName (
									columnName dataType flags/constraints,
									columnName2 dataType flags/constraints,
									columnName3 dataType flags/constraints,
									);</pre>
To delete a table `DROP TABLE name;`.<br>
To delete specific rows, use `DELETE FROM tableName WHERE clumnName=value;`, to delete all rows `DELETE FROM tableName;`.<br>
The `NON NULL` contraint obligates the column to be filled when filling the row.<br>
To insert data `INSERT INTO tableName (columnName1, columnName2) VALUES (valueColumn1, valueColumn2);`.<br>
To make updates `UPDATE tableName SET columnName1 = value1, columnName2 = value2  WHERE id=idNumber`.

To get specific columns from a table use `SELECT columnNamesSeparatedByComma FROM tableName;` with `*` to select all columns.<br>
To sort based on specific column `SELECT * FROM tableName ORDER BY columnName;`, it will order in terms of the alphabet, numerical system or dates, to reverse the base order add at end command DESC.<br>
To filter the data use `SELECT * FROM tableName WHERE columnName = value;` to set multiple conditions you can add to the command `ADD newCondition`, () and OR can be used too. Comparison operators; =, <, >, <=, >=, <>(not equal).<br>
To select only x number of first rows `SELECT * FROM tableName LIMIT x`, to only select x->y number of rows `SELECT * FROM tableName OFFSET x LIMIT y - x;`.<br>
To get all rows between two values `SELECT * FROM tableName WHERE columnName BETWEEN value1 and value2;`.<br>
To get all values starting/ending with particular value `SELECT * FROM databaseName WHERE tableName LIKE 'startValue%endValue';`.<br>
To know how much rows with a certain value of a certain column exist `SELECT columnName, count(*) FROM tableName GROUP BY columnName ORDER BY columnName;`. <br>
The count function is called an aggregate function and different ones exist, such as `MAX(columnName)`, `MIN(columnName)`, `AVG(columnName)`, `SUM(columnName)` using multiple ones is also possible such as `ROUND(AVG(columnName), numberDecimals)`.<br>
To filter values with certain amount of rows `SELECT columnName, count(*) FROM tableName GROUP BY columnName HAVING COUNT(*) comparison ORDER BY columnName;`<br>
To give name to new columnName use `AS newColumnName`.<br>
`COALESCE(defaultValue)` allows to fill empty or undefined values with default values.<br>
Arithmetic operators: + - * / %(modulo) ^(power) !(factorial)<br>
To view all different values in a column `SELECT DISTINCT columnName FROM tableName;`.

Primary keys are identifiers, an index for the rows of the table, it is possible to have multiple of them, they are indicated by using the flag `PRIMARY KEY` at table creation.<br>
Tables can be linked together, this is called relational tables.<br>
A foreign key allows to nest tables inside each other, a person table can have a car for example and this car can be identified by another table, they are connected through a foreign key.<br>
A foreign key is a column that references a primary key in another table. To create a foreign key add at end of column creation command `REFERENCES linkedTableName(columnName)`.<br>
Inner joins allows us to join two tables that are connected through a foreign key with `SELECT * FROM table1 JOIN table2 ON table1.foreignKey = table2.primaryKey;`.<br>

Constraints can also be added, a constraint is for example, all the values inside the email column have to be unique, this would be indicated with `ALTER TABLE tableName ADD CONSTRAINT nameConstraint UNIQUE (columnName);` this constraint can be removed with `ALTER TABLE tableName DROP CONSTRAINT nameConstraint;`. With the use of CHECK (condition) instead of UNIQUE, you can choose own condition.<br>
If the constraint condition is met a conflict occurs which will block the action from taking place, to make an exception add at end of insert command `ON CONFLICT constraintName DO UPDATE SET columnName = EXCLUDED.columnName;`.<br>

Extensions are SQL functions that can be viewed with `SELECT FROM pg_available_extensions;`, those can add various functionalities like universally unique identifiers or sequences.<br>

Columns can also contain as value a sequence. This is a type that yields ever increasing values, the value can be reset and increases each time it is selected with SELECT. It gets indicated when creating a table with the BIGSERIAL type, it can be used for the primary-key/id column.<br>

Generate a .csv file, `\copy (SELECT command to take wanted code from tables) TO .csvPath DELIMITER "," CSV HEADER;`

### UUID
Often times as primary keys instead of the standard incrementing integer a uuid is used, which stands for universal unique identifier.<br>
Using UUIDs as primary keys can protect against attackers that want to mine the database, it also allows for merging databses without conflicts.<br>
To set a primary key as a uuid give it the UUID type. To generate uuids the SQL uuid_generate_v4() function can be used or from different programming languages different functions are used to generate uuids.

### Even more
Realize a lot more is possible with postgres than explained here, do not hesitate to research what you need it may already exist.<br>
More datatypes exist such as `timestamp` for dates and time and `point` for two-dimensional x and y values.<br>
More functions exist such as `AGE(birthday)`.<br>

Additional modules can be added like this `CREATE EXTENSION module_name;` with arguments such as `IF NOT EXISTS` to not throw an error if module already existed, `CASCADE` to dwonload depending modules that do not exist yet.<br>
Those modules contain specific functions that can be useful.<br>
Here is a list of the modules and its functions: https://www.postgresql.org/docs/9.1/contrib.html.

You can also create your own SQL functions, here is an example:
<pre>
CREATE FUNCTION get_film_count(len_from int, len_to int) #function name, parameters and associated type are declared
returns int #The return type is declared
language plpgsql #The language the function will be written is declared, other languages than plpgsql are possible too
as
$$ #Here the function starts
declare
   film_count integer; #Here you can declare variable that will be used
begin
   select count(*) 
   into film_count #'into' assigns a value to a variable
   from film
   where length between len_from and len_to;   
   return film_count;
end;
$$; #Here the function ends
</pre>


