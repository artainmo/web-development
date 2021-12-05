# NestJS

## Table of contents
- [Free tutorials](#Free-tutorials)
  - [Init and launch NestJS application](#Init-and-launch-NestJS-application)
  - [Controllers](#Controllers)
  - [Providers](#Providers)
  - [Modules](#Modules)
  - [Pipes](#Pipes)
  - [Middleware](#Middleware)

# Free tutorials 
Nest.js is a Node.js scalable framework built on top of express.js and TypeScript that comes with a strong opinion on how API's should be built.<br>
Since it is very opinionated it provides a structure, a CLI, and lots of tools that let you create professional APIs fast.

Nest provides an out-of-the-box application architecture which allows developers and teams to create highly testable, scalable, loosely coupled, and easily maintainable applications. <br>
It supports REST APIs and contains modules to handle databases, security, streaming...<br>

More information on nestjs: docs.nestjs.com.

View a complete example in NestJS-exercise/src.

## Init and launch NestJS application

`npm install @nestjs/cli` is used to install the nest command line interface.<br>
`nest -v` can be used to view nest version installed.<br>
`nest new projectName` is used to create a nestjs backend boilerplate.<br>
main.ts bootstraps the application and defines its port, app.module.ts is the root of the application, app.controller.spec.ts is a test file, other files are not mandatory for the app to run.

## Controllers
A controller handles http requests, it accepts them and sends back a response.<br>
One application can have multiple controllers, similarly to how an express backend can have different routes.<br>
One file usually refers to one route and is named after it like this: routeName.controller.ts.<br>
`next g controller nameController --no-spec` this CLI command creates a boilerplate controller for specified name, the no-spec flag prevents creation of testing files.<br>
Specify a controller for a /students route for example like this:
<pre>
import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';

@Controller('students')
class StudentController {
  @Get()
  getStudents(){
    return "all students";
  }
  
  @Get('/:studentId')
  getStudentById(@Param('studentId') studentId: string) {
    return `student by ${studentId}`;
  }
  
  @Post()
  createStudent(@Body() Body) {
    return `create student with ${JSON.stringify(Body)}`;
  }
  
  @Put('/:studentId')
  updateStudent(@Param('studentId') studentId: string, @Body() Body) {
    return `updated student with ${studentId} and ${JSON.stringify(Body)}`;
  }
}
</pre>
The route syntax is similar as in Express<br>
The param decorator is able to extract certain params from the HTTP query-params and the body decorator from the HTTP body.<br>

The above example is missing the correct function returns of course and type specification of the body and function returns... Because those are custom types or classes, usually declared in a routeName.dto.ts file.<br>
DTO stands for data transfer object, and practically refers to custum types declared as classes, they define for API users how requests (for example the body) should look like, but also how the response will look like.

## Providers
Typically a controller should only handle the HTTP requests and should delegate response contruction tasks (DB query, Calling another API etc. ) to the providers.<br>
Dependency injection is a design pattern whereby one object supplies dependencies to another object, imagine object A holds core functions X, Y that necessitate property B, C and functions D, E, instead of declaring B, C, D, E inside A, those can be declared inside another object F, object F will thus hold the dependencies of object A, for A to function F should be injected into A.<br>
Providers are classes that are used to inject dependencies in controllers or other providers.<br>
Different providers exist, but they usually are able to do the same, distinction is made between them more for structural reasons, they are simply indicated by adding the provider name at end of class name, usually the provider type service is used and would be indicated as `class classNameService`.

`nest -g service serviceName --no-spec`can be used to generate a service boilerplate. 

A provider is indicated with the Injectable decorator usually in an providerName.service.ts file:
<pre>
import { Injectable } from '@nestjs/common';

@Injectable()
export class studentService {
  async findAll() {...}
}
</pre>
A provider is injected into a controller like this inside the contructor:
<pre>
import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { studentService } from 'student.service';
import { Student } from 'student.interface';

@Controller('students')
class StudentController {
  constructor(private studentService: studentService) {}
  
  @Get()
  async getStudents(): Promise&ltStudent[]&gt;{
    return studentService.findAll();
  }
}
</pre>

## Modules
Modules can be used as a way to organize our components, it is recommended to create one module per component.

Each module consists of an (often empty besides when using middleware) class with a Module decorator, this decorator can take as parameter an object with a controllers and providers array, those array would contain the controllers and providers one wants to be active in the application.
<pre>
import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
    controllers: [StudentController],
    providers: [StudentService],
})
export class StudentsModule {}
</pre>

app.module.ts is the root of the application, the module it contains can simply import the other modules declared for each component within its import array.
<pre>
import { Module } from '@nestjs/common';
import { StudentsModule } from '../student/student.module';
import { TeacherModule } from '../teacher/teacher.module';

@Module({
  imports: [StudentsModule, TeacherModule]
})
export class AppModule {}
</pre>

Ideally each component should be able to function on their own but if one component is necesary in another one they can be exported-imported.<br>
By using the export array in the module that has to be exported filling it with demanded provider/controller and using the import array in the module that has to import filling it with the module that has to be exported.

## Pipes
A pipe can be used to validate or transform data and comes in the form of a class, different pipes/classes exist.<br>
Validation consists of evaluating data, if valid passing through else throwing an exception, for example validating if a value is a valid uuid.<br>
Transforming consists of changing type, for example string to integer.

In this example the id param usually comes as a string but using ParseIntPipe it can get transformed to an int, at the same time if the string cannot be transformed to an int because it does not represent a number an error would be thrown:
<pre>
@Get(':id')
async findOne(@Param('id', ParseIntPipe) id: number) {
  return this.catsService.findOne(id);
}
</pre>

In this example the data is checked about being a valid uuid or not:
<pre>
@Get(':uuid')
async findOne(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
  return this.catsService.findOne(uuid);
}
</pre>

## Middleware

Middleware is a function which is called before the route handler.<br>
Middleware can transform or validate incoming data, they are somewhat like custom pipes.<br>
Middleware consists of classes or functions, is used for cleaner code, by avoiding code replication.<br>

Middleware classes/functions are found in customName.middleware.ts files and have an Inject decorator and next() function to call the next applicable middleware function/class or controller.<br>
<pre>
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    next();
  }
}
</pre>

Middleware will be injected inside modules.<br>
There is no place for middleware in the @Module() decorator. Instead, we set them up using the configure() method of the module class. 
<pre>
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('cats');
  }
}
</pre>
In the above example the loggerMiddleware is applied for the /cats routes.<br>
The MiddlewareConsumer is a helper class. It provides several built-in methods to manage middleware.<br>

For being more specific in terms of routes:
* request method can be specified: `.forRoutes({ path: 'cats', method: RequestMethod.GET })`
* routes can be excluded in .excude()
* multiple middleware can be specified: `consumer.apply(cors(), helmet(), logger)`
* Middleware for the whole application is also possible with .use() 

## Database integration with TypeORM

### TypeORM
Object–relational mapping (ORM) in computer science is a programming technique for converting data between incompatible type systems using object-oriented programming languages. This creates, in effect, a "virtual object database" that can be used from within the programming language.

TypeORM is one of the most popular ORMs that works with nodeJS and is written in typescript.<br>
It allows to connect to different types of databases, connect and perform CRUD on the database.<br>

To create tables, TypeORM uses models (another name for a class used to create a table) and the entity decorator.<br>
<pre>
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}
</pre>
PrimaryColumn decorator is used to indicate the key column, alternatively PrimaryGeneratedColumn decorator can be used to let the id increment automatically.<br>
Column decorator is used to indicate a single column.<br>
Each class attribute must be given a type.

The above created table would be manipulated like this:
<pre>
const repository = connection.getRepository(User); //connect to the wanted table/repository, the connection object has to be created with the CreateConnection() function

//Create 
const user = new User(); //Instance of the above created user class, its columns can be filled
user.firstName = "Timber";
user.lastName = "Saw";
user.age = 25;
await repository.save(user); //The .save method will add a new column to the table and returns the object it took as parameter

//Read
const allUsers = await repository.find();
let [allUsers, usersCount] = await repository.findAndCount();
let allUsersNamedTimber = await photoRepository.find({ name: "Timber" });
const firstUser = await repository.findOne(1); // find by id
const timber = await repository.findOne({ firstName: "Timber", lastName: "Saw" });

//Update
const timberToUpdate = await repository.findOne({ firstName: "Timber", lastName: "Saw" });
timberToUpdate.age = 11;
repository.save(timberToUpdate);

//Delete 
const timber = await repository.findOne({ firstName: "Timber", lastName: "Saw" });
await repository.remove(timber); //The .remove method is able to remove a specific table 
</pre>
The above shows basic queries with .find. QueryBuilder on the other hand allows the creation and execution of SQL queries of almost any complexity.<br>
QueryBuilder uses similar logic as the SQL CLI.

Connect to the database:
<pre>
import "reflect-metadata"; //Has to be imported somewhere in the global place of your app
import { createConnection } from "typeorm";
import { Photo } from "./entity/Photo";

createConnection({
    type: "mysql", //Other database typed such as postgresql indicated with postgres
    host: "localhost",
    port: 3306,
    username: "root",
    password: "admin",
    database: "test",
    entities: [
        Photo
    ],
    synchronize: true,
    logging: false
}).then(async connection => {
    // here you can start to work with your entities if the connection was successful
    //The function is async so that we can use await when calling the database
    //The connection parameter is the connection object used in the example above
}).catch(error => console.log(error));
</pre>

#### One-to-one relationship
A one-to-one relationship is a relationship whereby one clumn of class A can only be associated with one column of class B and vice-versa.<br>
An example is a photo can only be associated with one photoMetaData and vice-versa.<br>
Inside the entitiy class it is indicated with, instead of @Column, @OneToOne(type => nameOfAssociatedTable), followed by @JoinColumn(), whereby OneToOne defines the relationship and JoinColumn creates the foreign key in the entity class, the type is set to associatedTableClass.

When inserting a column with a one-to-one relationship tableA.foreignKeyName = tableBColumn.

By creating one foreign key in one of the two tables as explained above we only have a unidirectional one-to-one relationship, TypeORM also allows to make this a bidirectional relationship, meaning class A has access to class B, but class B can also have access to class A.<br>
The initial @OneToOne has to add a second parameter: @OneToOne(type => nameOfAssociatedTable, nameOfAssociatedTable => nameOfAssociatedTable.nameOfInitialTable), whereby  nameOfAssociatedTable => nameOfAssociatedTable.tableName refers to the name of the inverse side of the relation.<br>
And inside the associated table @OneToOne(type => nameOfIntialTable, nameOfInitialTable => nameOfInitialTable.nameOfAssociatedTable).<br>
JoinColumn is defined only once as only one foreign key is defined in one of the two tables.

We can set up cascade options in our relations, in the cases when we want our related object to be saved whenever the other object is saved.<br>
To indicate the cascade option the OneToOne() decorator has to take a third argument `{ cascade: true }`

#### one-to-many/many-to-one relationship
A one-to-many relationship consists of class A being able to hold multiple class B and class B would be a many-to-one relationship towards A, the one cannot exist without the other.<br>
For example one book that can hold multiple chapters is a one-to-many relationship and multiple chapters that can only exist in one book is a many-to-one relationship.<br>

It is created with the @OneToMany(type => nameOfAssociatedTable, nameOfAssociatedTable => nameOfAssociatedTable.nameOfInitialTable) decorator and with the type of column being an array of the associatedClass, indicated in the OnToMany class.<br>
The ManyToOne class will contain the @ManyToOne(type => nameOfIntialTable, nameOfInitialTable => nameOfInitialTable.nameOfAssociatedTable) decoratorand and with the type of column being the initialClass.
Because the many-to-one will contain the foreign key, it will also contain the @JoinColumn decorator.

#### many-to-many relationship
A many-to-many relationsip consists of class A containing multiple class B and vice-versa.<br>
An example of this would be students having multiple classes and classes having multiple students.

Usually a cross-reference table has to be created for many-to-many relationships, TypeORM does this automatically when indicating a many-to-many in the two relational classes.<br>
Both classes should have the @ManyToMany(type => nameOfAssociatedTable, nameOfAssociatedTable => nameOfAssociatedTable.nameOfInitialTable) decorator and have the type of the column by an array of the associatedTable.

To add a new row in a many-to-many relationship:
classA.foreignkey = [classB1, classB2, classB3]

### TypeORM with NestJS
NestJS usually uses TypeORM for connecting with a database, through the @nestjs/typeorm package.<br>
TypeORM integrates well with NestJS because both are written in typescript.
