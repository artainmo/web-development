# Kubernetes

## Table of contents
- [edX course - Introduction to Kubernetes](#edX-course---Introduction-to-Kubernetes)
  - [From Monolith to Microservices](#From-Monolith-to-Microservices)
- [Resources](#Resources)

## edX course - Introduction to Kubernetes
### From Monolith to Microservices
A **monolith** application runs as a single process and thus runs on one hardware and scaling individual features of the monolith is almost impossible. To scale the application another instance of the monolith has to be deployed on another server, typically behind a load balancing appliance. During upgrades, patches or migrations of the monolith application downtime is inevitable.

When using **microservices**, complex applications are composed of small independent processes which communicate with each other through APIs over a network. Microservices can be deployed individually on separate servers provisioned with fewer resources.<br>
Although the distributed nature of microservices adds complexity to the architecture, one of the greatest benefits of microservices is scalability. With the overall application becoming modular, each microservice can be scaled individually.<br>
Another benefit is no downtime during upgrades, patches, migrations. This is because one microservice at a time is updated, instead of having to re-compile, re-build and re-start an entire monolithic application. As a result, businesses are able to make updates a lot faster, having separate teams focusing on separate features, thus being more productive and cost-effective.

Refactoring is intended to improve the design, structure, and/or implementation of the software, while preserving its functionality. Refactoring is necessary when transforming a monolith application into a microservices application.

### Container Orchestration
**Containers** are best suited to deliver microservices by providing fast, portable, isolated virtual environments for applications to run without interference from other running applications.<br>
**Microservices** are lightweight applications written in various modern programming languages, with specific dependencies, libraries and environmental requirements.<br>
Containers encapsulate microservices and their dependencies but do not run them directly. Containers run container images. A container image bundles the application along with its runtime, libraries, and dependencies, and it represents the source of a container deployed to offer an isolated executable environment for the application.

**Container orchestrators** are tools which group systems/micro-services/containers together to form clusters where containers' deployment and management is automated at scale. Management consists of handling; on-demand-scalability, optimal resource usage, updates without downtime, fault-tolerance, accessibility from outside the container, communication with other containers from same cluster.

Different container orchestration tools exist, such as; kubernetes, Amazon Elastic Container Service (only on AWS), Docker Swarm, Azure Container Instances, Nomad...<br>
In this course, we will explore Kubernetes, one of the most in-demand container orchestration tools available today.<br>
Kubernetes as a Service (KaaS) makes it possible to operate Kubernetes, the world's most popular container orchestrator, as a managed service. KaaS services are commonly provided in the public cloud, such as Amazon Elastic Kubernetes Service (Amazon EKS) for AWS, Azure Kubernetes Service (AKS), DigitalOcean Kubernetes, Google Kubernetes Engine (GKE), IBM Cloud Kubernetes Service, Oracle Container Engine for Kubernetes, or VMware Tanzu Kubernetes Grid...

### Kubernetes introduction
Kubernetes is an open-source system for automating deployment, scaling, and management of containerized applications.<br>
Kubernetes is also referred to as k8s (pronounced Kate's), as there are 8 characters between k and s.<br>
Kubernetes was started by Google and, with its v1.0 release in July 2015, Google donated it to the Cloud Native Computing Foundation (CNCF), one of the largest sub-foundations of the Linux Foundation.

Kubernetes offers a very rich set of features for container orchestration, such as:
* Automatic bin packing. Kubernetes automatically plans containers based on resource needs and constraints.
* Extensibility. A Kubernetes cluster can be extended with new custom features without modifying the upstream source code. Kubernetes extensibility allows it to support and to be supported by many 3rd party open source tools which enhance Kubernetes' capabilities. It's architecture is modular and pluggable.
* Self-healing. It terminates and then restarts containers that become unresponsive to health checks.
* Horizontal scaling. With Kubernetes applications are scaled manually or automatically based on CPU or custom metrics utilization.
* Service discovery and load balancing. Containers receive IP addresses from Kubernetes, while it assigns a single Domain Name System (DNS) name to a set of containers to aid in load-balancing (In computing, load balancing is the process of distributing a set of tasks over a set of resources, with the aim of making their overall processing more efficient.) requests across the containers of the set.
* Portability. It can be deployed in many environments such as local or remote Virtual Machines, bare metal, or in public/private/hybrid/multi-cloud setups. 

### Kubernetes Architecture
Kubernetes consists of nodes, we can make distinction between 'control plane nodes' and 'worker nodes'.

The **control plane node** provides a running environment for the control plane agents responsible for managing the state of a Kubernetes cluster, and it is the brain behind all operations inside the cluster.<br>
In order to communicate with the Kubernetes cluster, users send requests to the control plane via a Command Line Interface (CLI) tool, a Web User-Interface (Web UI) Dashboard, or an Application Programming Interface (API).

A **worker node** provides a running environment for client applications. Through containerized microservices, these applications are encapsulated in Pods, controlled by the cluster control plane agents running on the control plane node.<br>
A **Pod** is the smallest scheduling work unit in Kubernetes. It is a logical collection of one or more containers scheduled together, and the collection can be started, stopped, or rescheduled as a single unit of work.<br>
The network traffic between client users and the containerized applications deployed in Pods is handled directly by the worker nodes, and is not routed through the control plane node.<br>
Kubernetes requires a container runtime, such as docker, on the node where a Pod and its containers are to be scheduled.

A successfully deployed containerized application running in Pods inside a Kubernetes cluster may require accessibility from the outside world. Kubernetes enables external accessibility through Services, complex encapsulations of network routing rule definitions stored in iptables on cluster nodes and implemented by kube-proxy agents. By exposing services to the external world with the aid of kube-proxy, applications become accessible from outside the cluster over a virtual IP address and a dedicated port number.

### Installing kubernetes
Kubernetes can be installed using different cluster configurations, such as:
* **All-in-One Single-Node Installation**. In this setup, all the control plane and worker components are installed and running on a single-node. While it is useful for learning, development, and testing, it is not recommended for production purposes.
* **Single-Control Plane and Multi-Worker Installation**. In this setup, we have a single-control plane node. Multiple worker nodes can be managed by the control plane node.
* **Multi-Control Plane and Multi-Worker Installation**. In this setup, we have multiple control plane nodes configured for High-Availability (HA). Multiple worker nodes can be managed by the HA control plane. High-availability means if one node fails another node is ready to take over its job, thus avoiding unavailability.
* As an additional note, **etcd** is a strongly consistent, distributed key-value store that provides a reliable way to store data that needs to be accessed by a distributed system or cluster of machines. An etcd instance can run inside a control plane or outside of it, it can also be configured for HA. An external etcd topology, where the data store is provisioned on a dedicated separate host, reduces the chances of an etcd failure as does HA.<br>
For production environments HA is recommended both on control-plane-nodes and on external etcd instances, such a configuration would be called **Multi-Control Plane with Multi-Node etcd, and Multi-Worker Installation**.

There are a variety of installation tools allowing us to deploy Kubernetes clusters on our local workstations, for learning and development purposes, such as: minikube, docker desktop (only in the case of containers made with docker), microK8s (for local and development but also cloud and production), K3S (lightweight Kubernetes cluster both for local and cloud).

For automatically setting up a kubernetes cluster tools can be used such as; kubeadm (the officially supported tool), kubespray, kops and previously covered KaaS products.<br>
However to manually set up a kubernetes cluster, here is a good resource ([Kubernetes The Hard Way
](https://github.com/kelseyhightower/kubernetes-the-hard-way)).

#### Minikube - Installing local kubernetes clusters
Minikube is one of the easiest, most flexible and popular methods to run a Kubernetes cluster, isolated by Virtual Machines (VM) or Containers, run directly on our local workstations. It initializes for us a fully functional, non-production, Kubernetes cluster extremely convenient for learning purposes.

Minikube is able to make changes in host environment, this is why we prefer to isolate it from the host environment, by launching it inside an external driver such as a virtual machine or by using a type-2-hypervisor or container runtime. <br>
For a learning environment the recommendations are that a Kubernetes node has 2 CPU cores (or virtual CPUs) at a minimum, at least 2 GB of RAM memory (with 4 - 6 GB of RAM recommended for optimal usage), and 20+ GB of disk storage space.<br>
Following the nodes' provisioning phase, Minikube invokes kubeadm, to bootstrap the Kubernetes cluster components inside the previously provisioned nodes.

Installion of minikube, and the external driver you choose to use, depend upon your operating system.

In a terminal we can start Minikube with the `minikube start` command, that bootstraps a single-node cluster with the latest stable Kubernetes version release. It will select a default external driver based on what is available on host environment. It creates an object that describes our cluster, named profile, which can be used to relaunch the same cluster. To start a customized cluster the command can take additional flags.<br>
The `minikube profile` command allows us to view the status of all our clusters.<br>
With the `minikube status` command, we display the status of the Minikube cluster.<br>
With the `minikube stop` command, we can stop Minikube.<br>
List all the nodes with `minikube node list` and use `-p` flag (p from profile) to specify the cluster.<br>
With the `minikube ip` command, we get the ip address of the control-plane-node, to specify another node use the `--node` flag.<br>
Use `minikube delete` to remove a cluster, specify the cluster with `-p`.

A Minikube installation has its own kubectl CLI installed and ready to use. However, it is somewhat inconvenient to use as the kubectl command becomes a subcommand of the minikube command. Users would be required to type longer commands, such as `minikube kubectl <subcommands>`, instead of just `kubectl <subcommands>`. While a simple solution would be to set up an alias, the recommendation is to run the kubectl CLI tool as a standalone installation.<br>
Once kubectl is installed, we can display information about the Minikube Kubernetes cluster with the `kubectl cluster-info` command.

By default minikube disables the 'Kubernetes dashboard'. It can be enabled by using the following commands:
<pre>
minikube addons enable metrics-server
minikube addons enable dashboard
</pre>
Subsequently the command `minikube dashboard` can be used to open in browser the kubernetes dashboard.

### Accessing kubernetes
A kubernetes cluster is accessible through; command-line-interface (CLI) scripts/tools, web-based-user-interfaces, APIs from CLI or programmatically.<br>
**kubectl** is the Kubernetes CLI client to manage clusters. It can be used in scripts to automate.<br>
The **Kubernetes Dashboard** provides a Web-based User Interface (Web UI) to interact with a Kubernetes cluster. It is not as flexible as kubectl CLI but simpler to use.<br>
We can access the **API** server running on the control plane node either directly by calling the respective API endpoints, using the CLI tools, or the Dashboard UI.

Use the `kubectl proxy` command to authenticate with the API server in the control-plane-node, this makes the API service available on a given ip address usually with port '8001'. Now we can make HTTP requests to the API, from the CLI with 'curl' for example. A simple get request returns us all the possible endpoints.<br>
Alternatively we can authenticate to the API by providing a 'Bearer Token' when issuing a curl, or by providing a set of 'keys' and 'certificates'.

## Resources
[edX - Introduction to Kubernetes](https://learning.edx.org/course/course-v1:LinuxFoundationX+LFS158x+1T2022/home)
