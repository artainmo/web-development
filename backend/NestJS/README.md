# NestJS

Nest.js is a Node.js scalable framework built on top of express.js and TypeScript that comes with a strong opinion on how API's should be built.<br>
Since it is very opinionated it provides a structure, a CLI, and lots of tools that let you create professional APIs fast.

Nest provides an out-of-the-box application architecture which allows developers and teams to create highly testable, scalable, loosely coupled, and easily maintainable applications. 

It supports REST APIs and contains modules to handle databases, security, streaming...<br>
`nest new` allows for base code generation for a nestjs backend, src/controller.ts is responsible for handling incoming HTTP requests.<br>
Decorators are often used, are indicated by @ and simply is code wrapped up around another code.

More information on nestjs: docs.nestjs.com.

View a complete example in NestJS-exercise/src.

## Init NestJS application

`npm install @nestjs/cli` is used to install the nest command line interface.<br>
`nest -v` can be used to view nest version installed.<br>
`nest new projectName` is used to create a nestjs backend boilerplate.<br>
main.ts bootstraps the application and defines its port, app.module.ts is the root of the application, app.controller.spec.ts is a test file, other files are not mandatory for the app to run.

## Controllers
In a controller handles http requests, it accepts them and sends back a response.<br>
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
This example is missing the correct function returns of course and type specification of the body and function returns... Because those are cutom types or classes, usually declared in a routeName.dto.ts file.<br>
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

## Launch NestJS application
app.module.ts contains an array of controllers, this can be filled with the controllers you want to be active inside the app.<br>
The same aplies to the provider array that can be filled with providers one wants to be active.

`npm run start:dev` can be used to launch the application in watch mode, watch meaning each time a change is made in the code the app relaunches accordingly.
