# NestJS

Nest.js is a Node.js scalable framework built on top of express.js and TypeScript that comes with a strong opinion on how API's should be built.<br>
Since it is very opinionated it provides a structure, a CLI, and lots of tools that let you create professional APIs fast.

Nest provides an out-of-the-box application architecture which allows developers and teams to create highly testable, scalable, loosely coupled, and easily maintainable applications. 

It supports REST APIs and contains modules to handle databases, security, streaming...<br>
`nest new` allows for base code generation for a nestjs backend, src/controller.ts is responsible for handling incoming HTTP requests.<br>
Decorators are often used, are indicated by @ and simply is code wrapped up around another code.

More information on nestjs: docs.nestjs.com

## Create NestJS application

`npm install @nestjs/cli` is used to install the nest command line interface.<br>
`nest -v` can be used to view nest version installed.<br>
`nest new projectName` is used to create a nestjs backend boilerplate.<br>
main.ts bootstraps the application and defines its port, app.module.ts is the root of the application, app.controller.spec.ts is a test file, other files are not mandatory for the app to run.



