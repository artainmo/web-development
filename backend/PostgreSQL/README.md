# POSTGRESQL

## Table of contents

## Codecademy course

Glossary of commonly used SQL commands: https://www.codecademy.com/articles/sql-commands

### Basics
PostgreSQL is a relational database management system, meaning it stores data in tables and makes use of the SQL language.<br>
SQL (Structured Query Language) is a programming language used to communicate with data stored in a relational database management system.<br>
Other relational databases are mySQL, SQLite, SQL server, Oracle DB....<br> 
Because all use SQL or slight variations of it, learing to use one relational database also opens doors to other relational databases.<br>
Distinction can be made between relational databases with file extensions, PostgreSQL uses .sql as file extension, but also with data types and access to built-in-tables.

A relational database can consist of one or more tables, tables consist of rows and columns that contain datas.<br>
Datas can be of different types;
* INTEGER(whole number)
* TEXT(text string)
* DATE(date formatted as YYYY-MM-DD)
* REAL(decimal).<br>

Commands are used to manage the database, they can be written on multiple lines and must end with a semi-colon.<br>
-- starts a single line comment.

`CREATE TABLE table_name (column_1 data_type, column_2 data_type, column_3 data_type);` is used to create a new table in a database.<br>
`INSERT INTO tableName (columnName1, columnName2, columnName3) VALUES (value1, value2, value3)` is used to insert rows inside a table.<br>
`SELECT columnName FROM tableName` is used to get all the data from a certain column in a table, or * would indicate all columns.<br>
`ALTER TABLE tableName ADD COLUMN rowName dataType;` is used to add a column to a table.<br>
`UPDATE tableName SET columnName1 = value1 WHERE columnName2 = value2` is used to make updates in a table, whereby for column2 often the id column is used if it exists.<br>
`DELETE FROM tableName WHERE columnName IS NULL` is used to delete the rows that have no value in a certain column.

When creating new columns the data type of the column has to be declared, constraints can also be added, the database will reject data that does not conform with the rows constraints.<br>
PRIMARY KEY, can only be used once and makes sure all row values are different.<br>
UNIQUE, makes sure all row values are unique but can be used multiple times.<br>
DEFAULT value1, gives a default value when no value is given.<br>
NOT NULL, makes sure all rows have a value.

In order to run and use Postgres on your own computer, you will need to set up both a Postgres server and a client.<br>
How to do this depends on os system.<br>
Once it is locally installed, it will run on a port (usually 5432), it can be manipulated through the command line interface with psql or through a UI that has to be installed.

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
 
### Aggregate functions

Aggregates are calculations done on multiple rows of a table.

`SELECT COUNT(*) FROM tableName WHERE condition;` here the number of rows that comply with the condition will be returned.<br>
`SELECT SUM(columnName) FROM tableName;` here the sum of all values in a column will be returned.<br>
`SELECT MAX(columnName) FROM tableName;` here the highest value in a column will be returned using MAX(), MIN() can be used for lowest value.<br>
`SELECT AVG(columnName) FROM tableName` here the average value of a column is returned.<br>
`SELECT name, ROUND(AVG(columnName), 2) FROM tableName` here round is used to round a REAL datatype with 2 decimal values, we also show that multiple columns can still be selected and that aggregate functions can be nested.<br>
`SELECT columnName, aggregateFunctionExression FROM tableName GROUP BY columnName` this will apply the aggregate function not on whole column but on each group (determined by distinct values) inside a column.<br>
`SELECT columnName1, columnName2, aggregateFunctionExression FROM tableName GROUP BY 1, 2` this will apply the aggregate function not on whole column but on each group (determined by distinct values) inside the column 1 and 2 those are the columnName1 and columnName2, this is a shorter syntax.<br>
`SELECT columnName, aggregateFunctionExression FROM tableName GROUP BY columnName HAVING COUNT(columnName) > 10` similar to WHERE, HAVING defines a following condition, the difference is that HAVING is used to filter groups not rows, in the prior example the condition states only groups with more than 10 rows will be returned.

### Multiple tables

Using multiple tables is useful to divide data logically.<br>
Different tables can be linked together this is called joining.<br>
Each table can have a primary key, by using the primary keys of for example table2 and table3 into table1, those tables will be joined, leading to rows in one table to be associated with rows in another table.<br>
Primary keys of one table in another table are called foreign keys.

When tables are joined we can query data from both tables together easily, returning one table, like this:
<pre>SELECT * FROM tableName1
JOIN tableName2
ON tableName1.columnName = tableName2.columnName;</pre>

If some values in the same columns in different tables that could be joined are different, instead of using JOIN, LEFT JOIN can be used.<br>
Left join will make the joinColumn(similar column between tables) keep the values of the first table and not the second table if differences exist when joining the tables.<br>
Adding this condition at end makes sure the overwrite only occurs on empty values `WHERE tableName2.columnName IS NULL;`

CROSS JOINS allow to simply join together two tables who do not have an associated column like this:<br>
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



## Free tutorials

### UNDERSTAND
Is a database-management-system, it uses SQL as its main query language.<br>
A database is used to store, update and retrieve data, throughout user sessions (it avoids user data is lost after its session closes).<br>
SQL is a programming language to communicate with databases that is widely used.

Data is stored in tables that consist of rows and columns.

Such databases are called relational databases, non-relational databases also exist and they consist of huge JSON-like objects, those are simpler and faster.

### SETUP
Has to be downloaded as an app from the web.<br>
For access to the terminal command psql set in .zshrc "export PATH=$PATH:/pathFoundInPostgresqlApp"<br>
Or use brew install.

When launching psql, you can start launching psql commands in the terminal with /? you can view the usage guide and with /l you can list the whole database.<br>
Inside .sql files you can write SQL scripts. Execute them with /i.

### USE
To create a new database use "CREATE DATABASE name;".<br>
To connect to the database use "psql -h ipAddress -p port nameDatabase" or "\c nameDatabase".<br>
To delete a database use "DROP DATABASE name;".<br>
To delete specific rows, use "DELETE FROM tableName WHERE clumnName=value;", to delete all rows "DELETE FROM tableName;".<br>
To create a table use "CREATE TABLE tableName (<br>
									columnName dataType flags/constraints, <br>
									columnName2 dataType flags/constraints, <br>
									columnName3 dataType flags/constraints, <br>
									);"<br>
The "NON NULL" contraint obligates the column to be filled when filling the row.<br>
To insert data "INSERT INTO nameDatabse (columnName1, columnName2) VALUES (valueColumn1, valueColumn2);".<br>
To make updates "UPDATE tableName SET columnName1 = value1, columnName2 = value2  WHERE id=idNumber".

To get specific columns from a table use "SELECT columnNamesSeparatedByComma FROM tableName;" with `*` to select all columns.<br>
To sort based on specific column "SELECT * FROM tableName ORDER BY columnName;", it will order in terms of the alphabet, numerical system or dates, to reverse the base order add at end command DESC.<br>
To filter the data use "SELECT * FROM tableName WHERE columnName = value;" to set multiple conditions you can add to the command "ADD newCondition", () and OR can be used too. Comparison operators; =, <, >, <=, >=, <>(not equal).<br>
To select only x number of first rows "SELECT * FROM tableName LIMIT x", to only select x->y number of rows "SELECT * FROM tableName OFFSET x LIMIT y - x;".<br>
To get all rows between two values "SELECT * FROM tableName WHERE columnName BETWEEN value1 and value2;".<br>
To get all values starting/ending with particular value "SELECT * FROM databaseName WHERE tableName LIKE 'startValue%endValue';".<br>
To know how much rows with a certain value of a certain column exist `SELECT columnName, count(*) FROM tableName GROUP BY columnName ORDER BY columnName;`. <br>
The count function is called an aggregate function and different ones exist, such as MAX(columnName), MIN(columnName), AVG(columnName), SUM(columnName), )using multiple ones is also possible such as ROUND(AVG(columnName), numberDecimals).<br>
To filter values with certain amount of rows `SELECT columnName, count(*) FROM tableName GROUP BY columnName HAVING COUNT(*) comparison ORDER BY columnName;`<br>
To give name to new columnName use "AS newColumnName".<br>
"COALESCE(defaultValue)" allows to fill empty or undefined values with default values.<br>
Arithmetic operators: + - * / %(modulo) ^(power) !(factorial)<br>
Use DATE() for date + time or DATE()::DATE for only date or DATE()::TIME for only time. With 'INTERVAL "amountOfTime"' you can add or substract the time. To get even more precise values you can "SELECT EXTRACT(YEAR/DAY/... FROM NOW())".<br>
To view all different values in a column "SELECT DISTINCT columnName FROM tableName;".

Primary keys are identifiers, an index for the rows of the table, it is possible to have multiple of them, they are indicated by using the flag PRIMARY KEY at table creation.<br>
Tables can be linked together, this is called relational tables.<br>
A foreign key allows to nest tables inside each other, a person table can have a car for example and this car can be identified by another table, they are connected through a foreign key.<br>
A foreign key is a column that references a primary key in another table. To create a foreign key add at end of column creation command "REFERENCES linkedTableName(columnName)".<br>
Inner joins allows us to join two tables that are connected through a foreign key with "SELECT * FROM table1 JOIN table2 ON table1.foreignKey = table2.primaryKey;".<br>
Not all columns contain foreign keys, left joins allow us to also take them in account in the final output with "LEFT JOIN" instead of "JOIN".

Constraints can also be added, a constraint is for example, all the values inside the email column have to be unique, this would be indicated with "ALTER TABLE tableName ADD CONSTRAINT nameConstraint UNIQUE (columnName);" this constraint can be removed with "ALTER TABLE tableName DROP CONSTRAINT nameConstraint;". With the use of CHECK (condition) instead of UNIQUE, you can choose own condition.<br>
If the constraint condition is met a conflict occurs which will block the action from taking place, to make an exception add at end of insert command "ON CONFLICT constraintName DO UPDATE SET columnName = EXCLUDED.columnName;".<br>

Columns can also contain as value a sequence. This is a type that yields ever increasing values, the value can be reset and increases each time it is selected with SELECT. It gets indicated when creating a table with the BIGSERIAL type, it can be used for the primary-key/id column.<br>
Extensions are functions that can be viewed with "SELECT FROM pg_available_extensions;", those can add various functionalities like universally unique identifiers.<br>
UUIDs can be installed with "CREATE EXTENSION IF NOT EXISTS 'uuid-ossp';", using "SELECT uuid_generate_v4();" you can generate a random UUID, using UUIDs as primary keys can protect against attackers that want to mine the database, it also allows for merging databses without conflicts.<br>
To use UUIDS as primary key, use the UUID type for the primary key and uuid_generate_v4() function to insert the appropriate values.

Generate a .csv file, "\copy (SELECT command to take wanted code from tables) TO .csvPath DELIMITER "," CSV HEADER;"
