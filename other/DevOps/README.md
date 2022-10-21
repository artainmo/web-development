# DevOps

## Table of contents
- [Codecademy course - Introduction to DevOps](#Codecademy-course---Introduction-to-DevOps)

- [Resources](#Resources)

## Codecademy course - Introduction to DevOps
### Introduction
#### Deployment
**Deployment** is the process of making software available to users.<br>
Before the internet, this meant storing software on CD-ROMs, shipping them to users for them to manually download it. Today someone can simply access/download software from the internet.

In the modern age of web applications, software is stored and executed on servers. Servers are computers that run software that can be accessed by another device (also known as the client), often via the internet.
Servers require quite a bit of maintenance in order to be used by developers. They need to be purchased, have operating systems and various software installed on them.<br>
**Infrastructure** is the full set of resources that support the development, testing, and deployment of applications. The **operations** team manages all of an application’s infrastructure.<br>
* Infrastructure consists of:
  * Hardware components such as servers, routers, switches and cables.
  * Software components such as operating systems, version control systems, and applications.
* Responsibilities of the operations team:
  * Installing and replacing (a.k.a “provisioning”) physical components such as servers, switches, and hard drives.
  * Performing software/firmware upgrades such as security patches.
  * Configuring infrastructure such as firewalls, user access, ports.
  * Monitoring network health and alerting personnel when issues arise.

**Version control systems** (such as Github) are tools designed to manage different versions of a file or project. They track every change that is made to a file while saving all previous versions of the file.<br>
When a new version of the software has issues, it can be compared to previous “stable” versions to identify the error.<br>
Common operations of version control, such as branching and merging enable development teams to collaborate more effectively.

**Testing** is an essential component of the deployment process. Different types of tests exist that are used in the various stages of deployment.<br>
Four types of tests that are often used are:
* Unit test, evaluates the smallest possible unit of testable code, such as a single function.
* Integration test, evaluates how the units of a particular program work with one another.
* Acceptance test, evaluates whether the user experience aligns with the business requirements of the software.
* End-to-end test, evaluates the application’s behavior using production-like infrastructure that includes networking, databases, and calls to external APIs.
Those tests can be automated through software.

An **environment** is the subset of infrastructure resources used to execute a program.
* local environment, is where software is first written and tested, usually on developer's own computer.
* integration environment, where software changes are merged using a version-control-system.
* testing environment, where tests are executed to ensure the functionality and usability of each new feature.
* staging environment, where the software can be performance tested in a production-like environment, but before real users are involved.
* production environment, where the software is accessible by real users.

#### DevOps
A traditional software company often has a separate Development and Operations team.
* The Development team writes an application’s code/features.
* The Operation team creates and maintains the infrastructure that the application runs on.

The development team sends their code to the operations team who deploys it on the infrastructure. Because the development/local environment is not the same as the environments used by the operations team, bugs can occur, to fix those bugs one team needs to hand-off the problem to the other, all of those complications lead to a non-optimized organization through loss of time.<br>
**DevOps**, is a way of organizing or a culture, that aims at ending the division between development and operations for a faster work-flow. It is an abbreviation of and refers to development and operations.

A DevOps team can consist of developers, IT specialists, acceptance testers, and security experts, whereby information is shared and decisions are made as a team.

DevOps seeks to have each team member consider all aspects of the development process. This practice is known as systems-level thinking.

Rather than having mistakes be punished, DevOps culture stresses the importance of failure as a learning opportunity. Which fosters innovation by encouraging experimentation.

A feedback loop is created when a team identifies and tracks a key piece of data, or metric. Teams can then use that information to drive process improvements.

By fostering DevOps culture and following DevOps practices, teams can build and release software with greater speed, quality, and reliability.

### Infrastructure


## Resources
[codecademy - Introduction to DevOps](https://www.codecademy.com/learn/introduction-to-dev-ops)<br>


