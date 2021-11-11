# POSTGRESQL

## Free tutorials

### UNDERSTAND
Is a database-management-system, it uses SQL as its main query language.<br>
A database is used to store, update and retrieve data.<br>
SQL is a programming language to communicate with databases that is widely used.

Data is stored in tables that consist of rows and columns.

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

To get specific columns from a table use "SELECT columnNamesSeparatedByComma FROM tableName;" with '*' to select all columns.<br>
To sort based on specific column "SELECT * FROM tableName ORDER BY columnName;", it will order in terms of the alphabet, numerical system or dates, to reverse the base order add at end command DESC.<br>
To filter the data use "SELECT * FROM tableName WHERE columnName = value;" to set multiple conditions you can add to the command "ADD newCondition", () and OR can be used too. Comparison operators; =, <, >, <=, >=, <>(not equal).<br>
To select only x number of first rows "SELECT * FROM tableName LIMIT x", to only select x->y number of rows "SELECT * FROM tableName OFFSET x LIMIT y - x;".<br>
To get all rows between two values "SELECT * FROM tableName WHERE columnName BETWEEN value1 and value2;".<br>
To get all values starting/ending with particular value "SELECT * FROM databaseName WHERE tableName LIKE 'startValue%endValue';".<br>
To know how much rows with a certain value of a certain column exist "SELECT columnName, count(*) FROM tableName GROUP BY columnName ORDER BY columnName;". <br>
The count function is called an aggregate function and different ones exist, such as MAX(columnName), MIN(columnName), AVG(columnName), SUM(columnName), )using multiple ones is also possible such as ROUND(AVG(columnName), numberDecimals).<br>
To filter values with certain amount of rows "SELECT columnName, count(*) FROM tableName GROUP BY columnName HAVING COUNT(*) comparison ORDER BY columnName;"<br>
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
