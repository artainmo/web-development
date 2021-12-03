# NestJS

Nest.js is a Node.js scalable framework built on top of express.js and TypeScript that comes with a strong opinion on how API's should be built.<br>
Since it is very opinionated it provides a structure, a CLI, and lots of tools that let you create professional APIs fast.

Nest provides an out-of-the-box application architecture which allows developers and teams to create highly testable, scalable, loosely coupled, and easily maintainable applications. <br>
It supports REST APIs and contains modules to handle databases, security, streaming...<br>

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

## Pipes and middleware
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

## Launch NestJS application

`npm run start:dev` can be used to launch the application in watch mode, watch meaning each time a change is made in the code the app relaunches accordingly.
