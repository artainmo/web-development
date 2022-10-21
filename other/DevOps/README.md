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
Infrastructure is the set of hardware and software components used to develop, test, and deploy applications.

#### Scalability 
**Scalability** is a system’s ability to add resources to keep up with growing demand. When more more users begin using an application, infrastructure with great scalability will handle it without interrupting services. An infrastructure with poor scalability will likely cause slowdowns or disruptions.<br>
Scalability can be achieved either through vertical scaling or horizontal scaling.
* Vertical scaling means adding computing resources, such as increasing network speeds, storage, or RAM.
* Horizontal scaling means adding more servers (or “nodes”) that each run the application. A tool called a “load balancer” then distributes the work across the many servers.

Horizontal scaling has the benefit of not requiring any downtime for existing servers. This benefit is the main reason why this is the scaling option chosen by most DevOps teams.

Scaling comes with a cost, thus someone should scale for optimal performance without wasting money.

Whereas scalability only deals with increases in resources, **elasticity** is the ability to automatically add or subtract resources to accommodate fluctuating demand. Elasticity is especially important when using pay-per-use infrastructure services since resources can be returned, and money can be saved, when demand shrinks.

DevOps uses several techniques to achieve both elasticity and scalability. Automation, cloud-based infrastructure, and microservices are some of these practices.

#### Virtualization
**Virtualization** technology allows many virtual machines (VMs) to run on one physical computer. Each virtual machine is a distinct environment with its own operating system, dependencies, and users.<br>

Virtalization can be used when someone wants to horizontally scale by adding servers, but still has a lot of room inside current server. Instead of buying new servers, the initial server can be devided into multiple virtual machines.<br>
Without virtualization each server can only run one process, resulting in a lot of unused server resources. With virtualization, a single server can run multiple processes and achieve a higher usage percentage.<br>
This results into more efficient resource utilization.

#### Containerization
**Containerization** is a form of light virtualization in which users create virtual environments called containers. Like virtual machines (VMs), containers include instances of applications as well as their dependencies. This makes them a convenient solution to help applications behave consistently when moving through the deployment pipeline.<br>
Unlike VMs, containers do not include their own operating system. Instead, they share the operating system of the host machine. The lack of their own operating system makes containers smaller and faster to spin up than VMs.

Additionally, since containers do not need their own operating system, they use less physical resources than virtual machines. This allows many more containers to be run than VMs, leading to even more efficient scaling.

The technology for containerization has been around for decades. However, it did not become widespread until 2013 with the release of Docker. Docker provided a simple interface for developers to create and run containers. Today, there are a handful of containerization tools that are used in addition to Docker.

#### Orchestration
**Orchestration** is the automated configuration, management, and coordination of infrastructure.

Tools like Docker give the ability to create and control individual containers. Orchestration software, such as Kubernetes, controls many containers working together in harmony.<br>
Once the desired infrastructure configuration for a system has been defined, Kubernetes makes sure that new containers are deployed based on that configuration. To do this, Kubernetes automatically performs tasks such as:
* Deploying containers across many servers.
* Restarting failed containers.
* Rolling out updates without any downtime.
* Horizontal scaling of containerized applications.

Both Kubernetes and Docker-Compose are frameworks for container orchestration. But the main difference is, Kubernetes is able to run containers over a number of computers, virtual or real on the other hand Docker-Compose runs containers on a single host machine.

Infrastructure as Code (IaC) is the act of defining infrastructure properties in configuration files.<br>
Infrastructure configuration used to be performed manually. Individual team members would install operating systems, upgrade dependencies, and configure networks. This process was both time-consuming and error-prone. <br>
IaC solves this problem by relying on configuration files as the source of truth for infrastructure state. Since configuration files are machine readable, it enables easier automation.<br>
IaC/orchestration tools also rely on the idea of immutable infrastructure. Immutable infrastructure means that servers are not changed once they are created. Instead, when infrastructure configurations change, new servers are created and old ones are destroyed.

#### In-house-infrastructure
With **in-house-infrastructure**, the company acquires, configures, and maintains physical infrastructure components themselves. These components include servers, power supplies, and cooling.<br>
Historically, businesses owned and managed infrastructure on company premises.

Despite the many challenges that in-house-infrastructure management faces, it offers unparalleled customization over its resources plus it decreases reliance on third-party-vendors.<br>
While more modern solutions exist, many companies still use in-house-infrastructure.

#### Cloud-infrastructure
The last couple of decades brought about an important shift in infrastructure management. This shift was cloud-based infrastructure.<br>
Cloud-based infrastructure refers to infrastructure and computing resources that are available to users over the internet. Usually, a third-party company owns, houses, and manages the physical infrastructure, allowing application developers to focus on defining their desired configurations.<br>
This shift was largely brought about by virtualization technology. While cloud providers create physical pools of resources, virtualization allows many instances of an application to run on these resources.

Cloud-based infrastructure has several benefits:
* It allows specific companies to specialize in physical infrastructure management while others focus on business logic.
* It allows a company to scale quickly since cloud providers have physical resources readily available.

### Monitoring



## Resources
[codecademy - Introduction to DevOps](https://www.codecademy.com/learn/introduction-to-dev-ops)<br>


