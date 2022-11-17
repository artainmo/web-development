# DevOps

## Table of contents
- [Codecademy course - Introduction to DevOps](#Codecademy-course---Introduction-to-DevOps)
  - [Introduction](#Introduction)
    - [Deployment](#Deployment)
    - [DevOps](#DevOps-1)
  - [Infrastructure](#Infrastructure)
    - [Scalability](#Scalability)
    - [Virtualization](#Virtualization)
    - [Containerization](#Containerization)
    - [Orchestration](#Orchestration)
    - [In-house-infrastructure](#In-house-infrastructure)
    - [Cloud-infrastructure](#Cloud-infrastructure)
  - [Monitoring](#Monitoring)
  - [Resiliency](#Resiliency)
  - [CI/CD pipelines](#CICD-pipelines) 
- [Free tutorials](#Free-tutorials)
  - [GitLab](#GitLab)
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
Monitoring is the practice of collecting metrics to gain insights on our systems.

**Metrics** express a value relevant to the system.<br>
Some important metrics for monitoring system health and performance:
* Latency, is the time between the start of an event, such as serving a request, to its completion.
* Traffic, is the amount of system usage over time. An abnormal amount of traffic can require scaling to maintain performance.
* Errors. An error is an invalid state our system has reached. Examples include exceeding a memory limit or reading a corrupted data file.
* Saturation describes the load on our system’s resources. Our system reaching its limits can result in poor performance.

Monitoring metrics can give a broad view of system health and diagnose issues.

A **Service Level Objective** (SLO) is a range of valid measurements for a metric. An SLO might define that the page response time should be less than 100 milliseconds.

A **Service Level Indicator** (SLI) is the current measurements of a metric related to an SLO. Let’s say that one of our SLOs is that response time should be less than 100 milliseconds. Our system measures that current load times are approximately 75 milliseconds. Our SLI for that SLO would be within a valid range.

A **Service Level Agreement** (SLA) is a contract with consumers. Not every business will have an SLA, as they carry a degree of legal responsibility. SLA binds the business to the level of expected service promised to a business’s customers. An SLA might define that a busines's services be available 99.99% of the time.

In many situations, monitoring is achieved using a combination of **tools**. Big picture trends, like performance, can be monitored by a tool like Prometheus. Meanwhile, a finer piece of detail, such as the time taken for a database query, may be monitored using Monyog.

Monitoring tools can provide **alerts**, notifying a problem.<br>
Alerts can come in the form of customer tickets, emails, slack alerts, SMS.<br>
From excessive alerts we may develop alert fatigue, where we start ignoring alerts or turning them off. To prevent this, only alert when immediate attention is necessary.<br>
Alerts provide context to help teams solve an issue before it becomes a crisis.

**Observability** is the degree to which a system’s information can be used to locate and fix a problem. In a system with high observability, a team can more easily trace, diagnose, and fix the problem. With poor observability, the data does little to help.<br>
To improve observability create meaningful alerts, optimize application logging.

### Resiliency
**Resiliency**, a system’s ability to continue to perform despite experiencing problems.

The common types of system problems fit into the following categories:
* Internal problems, these problems come from within the components of the system that we control. Internal problems include in-house hardware issues and software bugs.
* External problems: these problems arise from dependencies we have on other parties outside of our control. External problems might include issues with an API, or a cloud service our application relies on.
* Malicious actors, these problems stem from other people (or sometimes bots) that seek to disrupt or exploit our services for a variety of reasons.

Updates to our system’s hardware, dependencies, or code all have the potential to make our system fail or behave unexpectedly. These issues are best mitigated through a comprehensive suite of automated tests performed prior to completing any change.<br>
Over time, hardware components, like hard drives and power supplies, reach the end of their lifespan and fail. To combat this, organizations can duplicate their hardware components. This redundancy can allow for a seamless switchover to a backup component when a failure occurs.

When using external services, we open up our system to issues that are often outside of our control. On the other hand, external services enable the development of far more powerful applications than we could create on our own.<br>
There are a variety of methods we can use in order to help resolve issues with external dependencies:
* We can be on the lookout for news of scheduled outages, vulnerabilities, or cancellations.
* We can define fallback strategies for our external dependencies. If we detect that a dependency is not working, we might switch to a different dependency, or hide the functionality that depends on the failing service.

To protect from malicious actors, see the [cybersecurity course](https://github.com/artainmo/WebDevelopment/tree/main/other/cybersecurity).

Some important metrics that indicate a system’s resiliency include:
* Uptime, or what percentage of the time is our system available.
* Recovery speed, when an outage occurs, how long does it take for the system to become available again.

The recovery time objective (RTO) is the amount of time an application can be unavailable before it causes significant harm to the business.<br>
The recovery point objective (RPO) is the acceptable amount of data loss after a system outage. Different applications have varying levels of data importance. A popular bank losing minutes of transaction data might be a nightmare. Losing hours of progress in an online multiplayer system would be unfortunate, but not a disaster.<br>
Benchmarks such as these can help us establish target levels of uptime and recovery time for our business.

Penetration testing involves simulating cyber-attacks to try to exploit security vulnerabilities. Penetration testing gives us a chance to see how our system might respond to a malicious user. Using penetration testing allows us to identify holes in our security that we need to fix.<br>
Load testing seeks to replicate situations in which the system is under heavy use. Load testing might simulate millions of customers trying to access our site all at once. Load testing can help us identify areas in which the system will break under real-world conditions.<br>
Chaos engineering consists of experimenting on a system to test its resiliency, such as randomly disconnecting cables in the server room, basically intentionally causing internal server errors.<br>
Disaster recovery exercises are simulations of catastrophic events, such as whole server rooms of servers or external dependencies disconnecting all at once. Companies will go through the strategy for dealing with these scenarios and see how their responses might pan out in real-time.<br>
Each of these practices can help us identify and then remove weak spots within our system.

### CI/CD pipelines
The automation of the deployment process creates the **Continuous Integration / Continuous Delivery (CI/CD) Pipeline**. This pipeline also encompasses 'Continuous Testing' and 'Continuous Deployment'.<br>
Manually performing each part of the deployment pipeline can cause problems in a large project, this is why we would want to automate it. Automation can improve speed, reduce errors and cost.

**Continuous testing** involves automatically triggering tests to be executed once an application is built in a new environment. Developers are automatically notified when a test failed. This occurs throughout the whole CI/CD pipeline.

**Continuous integration** consists of merging, subsequently building in integration environment and automatically testing with unit-tests and integration tests.<br>
Feature-branch-development consists of developing a new feature for a long time before merging, while trunk-based-development consists of merging small changes frequently.<br>
Rapidly merging smaller changes means that there is less of a risk for merge conflicts. If any are found, they can be addressed quickly and require fewer changes due to the small size.<br>
Each newly merged change automatically triggers building the application in an integration environment. Through continuous testing, tests are executed immediately as changes are introduced. As a result, bugs are caught early on in the process.

**Continuous delivery** is the automated process of preparing new versions of an application to be deployed into the production environment, by configuring environments through containerization and IaC, deploying to testing and staging environments, passing the acceptance and end-to-end tests.<br>
Sometimes, an application that runs well in the development or testing environment will crash if deployed to production. DevOps practices, such as containerization and Infrastructure as Code (IaC) can be incorporated into continuous delivery to resolve these issues.<br>
Through continuous delivery, developers can be confident that the application has been thoroughly tested and is ready to be deployed at any time.

Traditionally, an approval process is controlled by the deployment team. The team would ensure that the production server is ready, all tests from continuous delivery have passed, and the feature meets the business requirements. Afterwards, the application would be manually deployed onto the production environment.<br>
This process typically requires entire features to be completed before deploying to production, resulting in slower release cycles. For many businesses, this is desirable. For others businesses, releasing new updates on a faster and more regular schedule may be preferred.<br>
**Continuous deployment** is the automatic process of deploying a project to the production server after it has been tested in testing and staging environments.<br>
It may look like this:
1. If previous tests were successful an automated system deploys the application onto the production environment.
2. Final tests, monitoring tools and user feedback identify bugs, developers become alerted and can react by patching.
3. Those patches can go through the whole CI/CD pipeline again.

Rapid merges take priority over releasing completed features when using continuous integration, delivery, and deployment. To prevent users from accessing potentially incomplete features, teams can hide them for all (or some) users and then make them available once the feature is complete.

Here are tools used to form CI/CD pipelines; Gihub Actions, Jenkins, CircleCI, GitLab.

## Free tutorials
### GitLab
GitLab is a single application that covers the whole DevOps lifecycle while allowing collaboration and ease of use. At its core it is a place to store repositories with git version control, however contrary to github it holds a lot of additional features.

Here are some of the features it holds:
* Manage containers and clusters such as [docker images](https://github.com/artainmo/WebDevelopment/tree/main/other/docker#Basics) or [kubernetes charts](https://github.com/artainmo/WebDevelopment/blob/main/other/kubernetes/README.md#helm).
* Tools to facilitate the creation of [CI/CD pipelines](#CICD-pipelines).
* It can [monitor](#monitoring) your code with Prometheus.
* Like github it also has features such as pull requests, view prior commits...
* Organize code with for example labels.
* Project management tools.
* GitLab also allows the use of third party addons (integrations), making it extensible and providing even more features.<br>

#### GitLab CI/CD Pipeline
##### Introduction
**GitLab CI/CD** includes a subset of GitLab's features that allow DevOps practices such as [continuous integration, continuous delivery, continuous deployment](#CICD-pipelines).<br>
Thus through a **GitLab pipeline** we can automatically build, test and deploy our software.<br>
A GitLab pipeline is defined inside a file named '.gitlab-ci.yml' that lives at the root directory of a gitlab project.<br>
A GitLab pipeline consists of Jobs (describes the tasks that need to be done) and Stages (defines the order in which jobs will be completed). Thus a gitlab pipeline consists of a set of instructions for a program to execute. The program that executes those instructions is called **GitLab Runner**, which can run on local host, VM or docker container.

#### Create Pipeline
On GitLab project repository, see left page and go to 'CI/CD -> Editor', than create a new pipeline.<br>
Now a pipeline template has been generated you can edit. Let's look at it and understand it.
<pre>
#At top file 'stages' section is defined which defines the order of instructions (aka jobs).
stages:
  - build
  - test
  - deploy

#Subsequently in file all those jobs will be defined.

 build-job:                                     #This is the name we give to a job.
  stage: build                                  #Here we define the stage the job is associated with.
  script:                                       #Here we can define the shell commands that the job executes.
    - echo "Compiling the code..."
    - echo "Compile complete."

unit-test-job:
  stage: test                                   #This job runs in the test stage. It only starts when the job in the build stage completes successfully.
  script:
    - echo "Running unit tests..."
    - echo "Code coverage is 90%"

lint-test-job:
  stage: test                                   #Multiple jobs can be associated with a particular stage. It can run at the same time as unit-test-job (in parallel).
  script:
    - echo "Linting code..."
    - echo "No lint issues found."

deploy-job:      
  stage: deploy                                 #This job runs in the deploy stage. It only runs when both jobs in the test stage complete successfully.
  environment: production                       #Environments describe where code is deployed. Define environments by going on project repository, see left side of page and go to 'Deployments -> Environments'.
  script:
    - echo "Deploying application..."
    - echo "Application successfully deployed."
</pre>



## Resources
[codecademy - Introduction to DevOps](https://www.codecademy.com/learn/introduction-to-dev-ops)<br>
[GitLab - What is GitLab?](https://www.youtube.com/watch?v=MqL6BMOySIQ)<br>
[LevelUpTuts - What Is GitLab?](https://www.youtube.com/watch?v=gbJUasioKiI)<br>

[GitLab CI CD Pipeline Tutorial | Introduction | 2022](https://www.youtube.com/watch?v=mnYbOrj-hLY)<br>
